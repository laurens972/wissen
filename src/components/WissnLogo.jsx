export default function WissnLogo({ size = 48, showText = false, className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <img
        src="/wissn-logo-icon.png"
        alt="Wissn Logo"
        width={size}
        height={size}
        className="object-contain block"
      />
      {showText && (
        <img
          src="/wissn-logo-text.jpg"
          alt="WISSN."
          height={size * 0.5}
          className="object-contain block"
          style={{ height: size * 0.5 }}
        />
      )}
    </div>
  )
}
