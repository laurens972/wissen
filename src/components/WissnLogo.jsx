export default function WissnLogo({ size = 48, showText = false, withCircle = false, className = '' }) {
  const iconSize = withCircle ? size * 0.85 : size
  const circleSize = size

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      {withCircle ? (
        <div
          className="rounded-full bg-white shadow-lg flex items-center justify-center shrink-0"
          style={{ width: circleSize, height: circleSize }}
        >
          <img
            src="/wissn-logo-clean.png"
            alt="Wissn Logo"
            style={{ width: iconSize, height: iconSize }}
            className="object-contain block"
            draggable={false}
          />
        </div>
      ) : (
        <img
          src="/wissn-logo-clean.png"
          alt="Wissn Logo"
          style={{ width: size, height: size }}
          className="object-contain block"
          draggable={false}
        />
      )}
      {showText && (
        <span className="text-2xl font-bold tracking-tight text-slate-900">
          WISSN<span className="text-wissn-green">.</span>
        </span>
      )}
    </div>
  )
}
