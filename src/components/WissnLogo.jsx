export default function WissnLogo({ size = 48, showText = false, className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <img
        src="/wissn-logo-clean.png"
        alt="Wissn Logo"
        style={{ width: size, height: size }}
        className="object-contain block"
        draggable={false}
      />
      {showText && (
        <span className="text-2xl font-bold tracking-tight text-slate-900">
          WISSN<span className="text-wissn-green">.</span>
        </span>
      )}
    </div>
  )
}
