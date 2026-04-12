import { useState } from 'react'
import { Phone, ArrowRight, ChevronRight } from 'lucide-react'
import { PHONE_HREF, PHONE_DISPLAY, services } from '../data/services'

/* ─── Service-page variant (niche prop provided) ────────────────────────── */
function NicheCTA({ niche, phoneDisplay, phoneHref }) {
  return (
    <section id="demo-call" className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #7B61FF 0%, #5B3FFF 40%, #3B82F6 100%)' }}>
      <Blobs />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <LiveBadge />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Talk to Our AI Trained for {niche} Businesses
        </h2>
        <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto">
          Experience exactly what your {niche.toLowerCase()} customers will hear when they call. Available 24/7.
        </p>
        <CallButton phone={phoneDisplay} href={phoneHref} />
        <p className="text-white/70 text-sm flex items-center justify-center gap-2 mono-text mt-6">
          <ArrowRight size={14} />
          Call now — the AI picks up instantly, 24/7
        </p>
        <MockPhone phone={phoneDisplay} niche={niche} />
      </div>
    </section>
  )
}

/* ─── Home-page variant (no niche — shows industry picker) ─────────────── */
function PickerCTA() {
  const [selected, setSelected] = useState(null)

  const service = services.find(s => s.slug === selected)

  return (
    <section id="demo-call" className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #7B61FF 0%, #5B3FFF 40%, #3B82F6 100%)' }}>
      <Blobs />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <LiveBadge />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Try the AI Live — Pick Your Industry
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Each AI is trained specifically for your industry. Select yours below to get the right demo number.
          </p>
        </div>

        {/* Industry grid */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {services.map(s => (
            <button
              key={s.slug}
              onClick={() => setSelected(s.slug)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200
                ${selected === s.slug
                  ? 'bg-white text-plasma border-white shadow-lg scale-105'
                  : 'bg-white/10 text-white border-white/25 hover:bg-white/20 hover:border-white/50'
                }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Revealed call card */}
        <div className={`transition-all duration-500 ${selected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          {service && (
            <div className="flex flex-col items-center gap-6">
              {/* Industry label */}
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <ChevronRight size={14} />
                <span className="font-semibold text-white">{service.name}</span>
                <span>AI demo line</span>
              </div>

              <CallButton
                phone={service.phoneDisplay || PHONE_DISPLAY}
                href={service.phoneHref || PHONE_HREF}
              />

              <p className="text-white/70 text-sm flex items-center gap-2 mono-text">
                <ArrowRight size={14} />
                The {service.name.toLowerCase()} AI picks up instantly, 24/7
              </p>

              <MockPhone
                phone={service.phoneDisplay || PHONE_DISPLAY}
                niche={service.name}
              />
            </div>
          )}

          {/* Placeholder when nothing selected yet (keeps layout stable) */}
          {!service && (
            <div className="h-64" />
          )}
        </div>

        {/* Prompt when nothing selected */}
        {!selected && (
          <p className="text-center text-white/50 text-sm mono-text mt-2">
            ↑ Select an industry above to reveal your demo number
          </p>
        )}
      </div>
    </section>
  )
}

/* ─── Shared sub-components ─────────────────────────────────────────────── */
function Blobs() {
  return (
    <>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 65%)' }} />
    </>
  )
}

function LiveBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-4 py-1.5 text-white text-sm font-medium mb-8">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
      </span>
      Live Demo Available Now
    </div>
  )
}

function CallButton({ phone, href }) {
  return (
    <a href={href} className="relative inline-flex items-center justify-center group">
      <span className="absolute w-20 h-20 rounded-full border-2 border-white/40 animate-pulse-ring" />
      <span className="absolute w-20 h-20 rounded-full border-2 border-white/25 animate-pulse-ring-delay" />
      <span className="relative z-10 flex items-center gap-3 bg-white hover:bg-gray-50 text-plasma font-bold text-lg px-10 py-5 rounded-full transition-all duration-200 shadow-2xl">
        <Phone size={22} />
        {phone}
      </span>
    </a>
  )
}

function MockPhone({ phone, niche }) {
  return (
    <div className="mt-10 max-w-xs mx-auto">
      <div className="bg-white/10 backdrop-blur border border-white/20 rounded-[2rem] p-6 text-left">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Phone size={18} className="text-white" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">{niche ? `${niche} AI` : 'AI Voice Hub'}</p>
            <p className="text-white/50 text-xs mono-text">{phone}</p>
          </div>
          <div className="ml-auto">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="bg-white/10 rounded-xl rounded-tl-sm p-3 border border-white/15">
            <p className="text-white/80 text-xs leading-relaxed">
              {niche
                ? `"Thank you for calling. I'm the AI assistant for ${niche.toLowerCase()} businesses — how can I help you today?"`
                : '"Thank you for calling. I\'m the AI assistant — how can I help you today?"'}
            </p>
          </div>
          <div className="flex items-center gap-1.5 pl-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0ms]" />
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:150ms]" />
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:300ms]" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Main export ────────────────────────────────────────────────────────── */
export default function DemoCallCTA({ niche }) {
  if (niche) {
    // Find matching service for its specific phone number
    const service = services.find(
      s => s.name.toLowerCase() === niche.toLowerCase()
    )
    return (
      <NicheCTA
        niche={niche}
        phoneDisplay={service?.phoneDisplay || PHONE_DISPLAY}
        phoneHref={service?.phoneHref || PHONE_HREF}
      />
    )
  }

  return <PickerCTA />
}
