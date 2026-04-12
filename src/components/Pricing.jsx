import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const CAL_LINK = 'https://cal.com/sayed-akbar-ai-voice-hub/book-your-ai-voice-agent-subscription-call'

const tiers = [
  {
    name: 'Essential',
    minutes: '200 Minutes/mo',
    price: '$159',
    period: '/month',
    features: [
      '200 AI minutes included',
      '$0.80 / extra minute',
      '24/7 Availability',
      'Basic Call Routing',
      'Standard Voices',
      'Setup Fee: $200',
    ],
    cta: 'Start Essential',
    featured: false,
  },
  {
    name: 'Performance',
    minutes: '500 Minutes/mo',
    price: '$299',
    period: '/month',
    features: [
      '500 AI minutes included',
      '$0.80 / extra minute',
      'Advanced Call Screening',
      'Contextual Booking',
      'CRM Integration',
      'Priority Support',
      'Setup Fee: $500',
    ],
    cta: 'Deploy Now',
    featured: true,
    badge: 'RECOMMENDED',
  },
  {
    name: 'Enterprise',
    minutes: '1,000 Minutes/mo',
    price: '$499',
    period: '/month',
    features: [
      '1,000 AI minutes included',
      '$0.80 / extra minute',
      'Scalable Infrastructure',
      'Custom Voices',
      'Emergency Protocol Dispatch',
      'Dedicated Manager',
      'Setup Fee: $1,000',
    ],
    cta: 'Contact Sales',
    featured: false,
  },
]

export default function Pricing() {
  const ref = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        immediateRender: false,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="pricing"
      ref={ref}
      className="py-32 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1E0E48 0%, #16093A 50%, #0E1848 100%)' }}
    >
      {/* Background glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(123,97,255,0.18) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 65%)' }} />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white/70 text-sm font-medium mb-6">
            Membership Tiers
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
            Scale without{' '}
            <span className="drama-text gradient-text">constraints.</span>
          </h2>
          <p className="text-white/40 text-sm mono-text">
            One-time setup fee + simple monthly plan · $0.80 per extra minute.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`pricing-card relative rounded-3xl p-8 flex flex-col border transition-all duration-300 ${
                tier.featured ? 'md:-translate-y-4' : ''
              }`}
              style={
                tier.featured
                  ? {
                      background: 'linear-gradient(135deg, #7B61FF 0%, #5B3FFF 100%)',
                      borderColor: 'rgba(123,97,255,0.6)',
                      boxShadow: '0 24px 60px rgba(123,97,255,0.35)',
                    }
                  : {
                      background: 'rgba(255,255,255,0.04)',
                      borderColor: 'rgba(255,255,255,0.08)',
                    }
              }
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-plasma text-xs font-bold px-4 py-1.5 rounded-full tracking-widest shadow-lg">
                  {tier.badge}
                </div>
              )}

              {/* Name + minutes */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                <p className="text-xs mono-text" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {tier.minutes}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                <span className="text-5xl font-bold text-white">{tier.price}</span>
                <span className="text-sm ml-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {tier.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-10 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check size={14} className="shrink-0"
                      style={{ color: tier.featured ? '#a5f3a0' : '#7B61FF' }} />
                    <span style={{ color: 'rgba(255,255,255,0.75)' }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3.5 rounded-full text-sm font-bold transition-all duration-200 hover:opacity-90"
                style={
                  tier.featured
                    ? { background: '#ffffff', color: '#7B61FF' }
                    : { background: 'rgba(123,97,255,0.2)', color: '#ffffff', border: '1px solid rgba(123,97,255,0.4)' }
                }
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
