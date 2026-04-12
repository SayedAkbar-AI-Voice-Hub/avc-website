import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Pricing() {
  const ref = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cinematic-pricing-card', {
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
    <section id="pricing" ref={ref} className="py-32 px-8 max-w-6xl mx-auto relative">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-plasma/10 border border-plasma/20 rounded-full px-4 py-1.5 text-plasma text-sm font-medium mb-6">
          Membership Tiers
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-ghost mb-4">
          Transparent Pricing.{' '}
          <span className="drama-text text-5xl gradient-text">No Surprises.</span>
        </h2>
        <p className="text-gray-500 mono-text text-sm">Deploy your AI agent exactly how you need it.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Tier 1 */}
        <div className="cinematic-pricing-card bg-white border border-purple-border rounded-[2.5rem] p-8 -mr-0 md:-mr-4 relative z-0 card-shadow">
          <h3 className="text-xl font-bold text-ghost mb-2">Essential</h3>
          <div className="text-3xl font-bold text-ghost mb-1">$300<span className="text-sm font-normal text-gray-400">/mo</span></div>
          <p className="text-xs text-gray-400 mb-6">+ $300 one-time setup fee</p>
          <ul className="space-y-3 mb-8 text-sm text-gray-600">
            {['500 AI minutes included', 'Standard CRM integrations', 'Basic Lead Qualification', '24/7 call answering'].map(item => (
              <li key={item} className="flex items-center gap-2.5">
                <Check size={14} className="text-emerald-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <button className="magnetic-btn w-full py-3 rounded-full border-2 border-gray-200 text-sm font-bold text-gray-600 hover:border-plasma hover:text-plasma transition-colors">
            Select Tier
          </button>
        </div>

        {/* Tier 2 - Middle pops */}
        <div className="cinematic-pricing-card rounded-[3rem] p-10 relative z-10 -translate-y-4 text-white"
          style={{ background: 'linear-gradient(135deg, #7B61FF 0%, #5B3FFF 100%)', boxShadow: '0 20px 60px rgba(123, 97, 255, 0.4)' }}>
          <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-white text-plasma text-xs mono-text px-3 py-1 rounded-full font-bold shadow-md">
            POPULAR
          </div>
          <h3 className="text-2xl font-bold mb-2">Performance</h3>
          <div className="text-5xl font-bold mb-1">$800<span className="text-lg font-normal text-white/70">/mo</span></div>
          <p className="text-xs text-white/60 mb-6">+ $300 one-time setup fee</p>
          <ul className="space-y-3 mb-8 text-sm font-medium">
            {['2000 AI minutes included', 'Advanced conditional logic', 'Priority CRM routing', 'SMS & Email Sequences', 'Lead Reactivation'].map(item => (
              <li key={item} className="flex items-center gap-2.5">
                <Check size={14} className="text-green-300 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <button className="magnetic-btn w-full py-4 rounded-full bg-white text-sm font-bold shadow-xl hover:bg-gray-50 transition-colors" style={{ color: '#7B61FF' }}>
            Select Tier
          </button>
        </div>

        {/* Tier 3 */}
        <div className="cinematic-pricing-card bg-white border border-purple-border rounded-[2.5rem] p-8 -ml-0 md:-ml-4 relative z-0 card-shadow">
          <h3 className="text-xl font-bold text-ghost mb-2">Enterprise</h3>
          <div className="text-3xl font-bold text-ghost mb-1">Custom</div>
          <p className="text-xs text-gray-400 mb-6">Tailored to your scale</p>
          <ul className="space-y-3 mb-8 text-sm text-gray-600">
            {['Dedicated account manager', 'Unlimited AI minutes', 'Custom LLM fine-tuning', 'White-label capabilities'].map(item => (
              <li key={item} className="flex items-center gap-2.5">
                <Check size={14} className="text-emerald-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <button className="magnetic-btn w-full py-3 rounded-full border-2 border-gray-200 text-sm font-bold text-gray-600 hover:border-plasma hover:text-plasma transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
