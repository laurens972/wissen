-- ============================================================
-- profiles table – stores first/last name + terms acceptance
-- Run this in the Supabase SQL Editor (Dashboard → SQL Editor)
-- ============================================================

-- 1. Create the table
create table if not exists public.profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  first_name    text,
  last_name     text,
  terms_accepted_at timestamptz,
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);

-- 2. Enable Row Level Security
alter table public.profiles enable row level security;

-- 3. RLS policies – users can only read/update their own row
create policy "Users can read own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- 4. Trigger function: auto-create a profile row on new sign-up
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, first_name, last_name)
  values (
    new.id,
    new.raw_user_meta_data ->> 'first_name',
    new.raw_user_meta_data ->> 'last_name'
  );
  return new;
end;
$$;

-- 5. Attach trigger to auth.users
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
