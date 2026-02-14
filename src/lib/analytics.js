// Google Analytics 4
// Ersetze mit deiner echten GA4 Measurement-ID
const GA4_ID = 'G-XXXXXXXXXX'

let initialized = false

export function initGA4() {
  if (initialized || GA4_ID === 'G-XXXXXXXXXX') return
  initialized = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', GA4_ID, { send_page_view: false })
}

export function trackPageView(path, title) {
  if (!window.gtag) return
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
  })
}
