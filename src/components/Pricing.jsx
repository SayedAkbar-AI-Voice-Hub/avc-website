import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const CAL_LINK = 'https://cal.com/sayed-akbar-ai-voice-hub/book-your-ai-voice-agent-subscription-call'

const tiers = [
  {
    name: 'Essential',
    minutes: '100 Minutes/mo',
    price: '$50',
    period: '/month',
    setup: 'Setup Fee: $300',
    features: [
      '24/7 Availability',
      'Basic Call Routing',
      'Standard Voices',
      'Setup Fee: $300',
    ],
    cta: 'Start Essential',
    featured: false,
  },
  {
    name: 'Performance',
    minutes: '300 Minutes/mo',
    price: '$150',
    period: '/month',
    setup: 'Setup Fee: $300',
    features: [
      'Advanced Call Screening',
      'Contextual Booking',
      'CRM Integration',
      'Priority Support',
      'Setup Fee: $300',
    ],
    cta: 'Deploy Now',
    featured: true,
    badge: 'RECOMMENDED',
  },
  {
    name: 'Enterprise',
    minutes: '600 Minutes/mo',
    price: '$200',
    period: '/month',
    setup: 'Setup Fee: $300',
    features: [
      'Scalable Infrastructure',
      'Custom Voices',
      'Emergency Protocol Dispatch',
      'Dedicated Manager',
      'Setup Fee: $300',
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
      className="py-32 px-6"
      style={{ background: '#F5F0E8' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
            style={{ fontStyle: 'italic', color: '#1a1208', letterSpacing: '-0.02em' }}
          >
            Scale without constraints.
          </h2>
          <p className="text-gray-500 text-sm">
            $300 Initial Configuration + simple monthly consumption.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`pricing-card relative rounded-3xl p-8 flex flex-col ${
                tier.featured ? 'md:-translate-y-4' : ''
              }`}
              style={
                tier.featured
                  ? { background: '#2B3B2A', boxShadow: '0 24px 60px rgba(43,59,42,0.35)' }
                  : { background: '#ffffff', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }
              }
            >
              {/* Badge */}
              {tier.badge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest"
                  style={{ background: '#C4622D' }}
                >
                  {tier.badge}
                </div>
              )}

              {/* Name + minutes */}
              <div className="mb-6">
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ color: tier.featured ? '#ffffff' : '#1a1208' }}
                >
                  {tier.name}
                </h3>
                <p
                  className="text-xs font-mono"
                  style={{ color: tier.featured ? 'rgba(255,255,255,0.5)' : '#9ca3af' }}
                >
                  {tier.minutes}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b"
                style={{ borderColor: tier.featured ? 'rgba(255,255,255,0.12)' : '#f0ebe0' }}>
                <span
                  className="text-5xl font-bold"
                  style={{ color: tier.featured ? '#ffffff' : '#1a1208' }}
                >
                  {tier.price}
                </span>
                <span
                  className="text-sm ml-1"
                  style={{ color: tier.featured ? 'rgba(255,255,255,0.45)' : '#9ca3af' }}
                >
                  {tier.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-10 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check
                      size={14}
                      className="shrink-0"
                      style={{ color: tier.featured ? '#7EC87A' : '#10b981' }}
                    />
                    <span style={{ color: tier.featured ? 'rgba(255,255,255,0.8)' : '#4b5563' }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3.5 rounded-full text-sm font-bold transition-all duration-200"
                style={
                  tier.featured
                    ? { background: '#C4622D', color: '#ffffff' }
                    : { background: '#1a1208', color: '#ffffff' }
                }
                onMouseEnter={e => {
                  e.currentTarget.style.opacity = '0.88'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity = '1'
                }}
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
