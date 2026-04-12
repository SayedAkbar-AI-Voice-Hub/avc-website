import logoSrc from '../assets/logo.png'

/**
 * AI Voice Hub — brand logo
 *
 * Props:
 *   wordmark  {boolean}  show "AI Voice Hub" text next to the mark  (default true)
 *   size      {string}   "sm" | "md" | "lg"                          (default "md")
 *   dark      {boolean}  white wordmark for dark backgrounds          (default false)
 */
export default function Logo({ wordmark = true, size = 'md', dark = false }) {
  const sizes = {
    sm: { mark: 24, gap: 6,  text: 13 },
    md: { mark: 32, gap: 9,  text: 15 },
    lg: { mark: 44, gap: 11, text: 20 },
  }
  const s = sizes[size] || sizes.md

  return (
    <span
      style={{ display: 'inline-flex', alignItems: 'center', gap: s.gap, lineHeight: 1 }}
      aria-label="AI Voice Hub"
    >
      <img
        src={logoSrc}
        alt="AI Voice Hub logo"
        width={s.mark}
        height={s.mark}
        style={{ flexShrink: 0, display: 'block', borderRadius: 6 }}
      />

      {wordmark && (
        <span
          style={{
            fontWeight: 700,
            fontSize: s.text,
            letterSpacing: '-0.02em',
            color: dark ? '#ffffff' : '#0F0620',
            whiteSpace: 'nowrap',
            fontFamily: 'inherit',
          }}
        >
          AI Voice Hub
        </span>
      )}
    </span>
  )
}
