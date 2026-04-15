import { useState } from 'react'
import { Phone, ArrowRight, ChevronRight, PhoneForwarded } from 'lucide-react'
import { PHONE_HREF, PHONE_DISPLAY, services } from '../data/services'

/* ─── Service-page variant (niche prop provided) ────────────────────────── */
function NicheCTA({ niche }) {
  return (
    <section id="demo-call" className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #7B61FF 0%, #5B3FFF 40%, #3B82F6 100%)' }}>
      <Blobs />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <LiveBadge />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Talk to Our AI Trained for {niche} Businesses
        </h2>
        <p className="text-white/80 text-lg mb-6 max-w-xl mx-auto">
          Call our main voice agent and ask for the <span className="font-semibold text-white">{niche}</span> demo — it transfers you straight to the sub-agent trained for your industry.
        </p>
        <TransferNote niche={niche} />
        <CallButton phone={PHONE_DISPLAY} href={PHONE_HREF} />
        <p className="text-white/70 text-sm flex items-center justify-center gap-2 mono-text mt-6">
          <ArrowRight size={14} />
          Main agent picks up instantly, 24/7 — then transfers to {niche}
        </p>
        <MockPhone niche={niche} />
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
            Try the AI Live — One Number, Every Industry
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Call our main voice agent. Pick your industry below to see which sub-agent it will transfer you to.
          </p>
        </div>

        {/* Always-visible main number */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <CallButton phone={PHONE_DISPLAY} href={PHONE_HREF} />
          <p className="text-white/70 text-sm flex items-center gap-2 mono-text">
            <ArrowRight size={14} />
            Main agent answers instantly, 24/7 — then routes to the sub-agent you pick
          </p>
        </div>

        {/* Industry grid */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
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

        {/* Revealed transfer card */}
        <div className={`transition-all duration-500 ${selected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          {service && (
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <ChevronRight size={14} />
                <span>You'll be transferred to the</span>
                <span className="font-semibold text-white">{service.name}</span>
                <span>sub-agent</span>
              </div>

              <MockPhone niche={service.name} />
            </div>
          )}

          {!service && <div className="h-64" />}
        </div>

        {!selected && (
          <p className="text-center text-white/50 text-sm mono-text mt-2">
            ↑ Select an industry above to preview its sub-agent
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

function TransferNote({ niche }) {
  return (
    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/25 rounded-full px-4 py-1.5 text-white/90 text-xs font-medium mb-8 mono-text">
      <PhoneForwarded size={14} />
      Main agent → transfers to {niche} sub-agent
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

function MockPhone({ niche }) {
  return (
    <div className="mt-10 max-w-xs mx-auto">
      <div className="bg-white/10 backdrop-blur border border-white/20 rounded-[2rem] p-6 text-left">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Phone size={18} className="text-white" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">AI Voice Hub</p>
            <p className="text-white/50 text-xs mono-text">{PHONE_DISPLAY}</p>
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
              "Thanks for calling the AI Voice Hub. Which industry demo would you like to try today?"
            </p>
          </div>
          {niche && (
            <>
              <div className="bg-white/20 rounded-xl rounded-tr-sm p-3 border border-white/20 ml-6">
                <p className="text-white/90 text-xs leading-relaxed">
                  "{niche}."
                </p>
              </div>
              <div className="bg-white/10 rounded-xl rounded-tl-sm p-3 border border-white/15">
                <p className="text-white/80 text-xs leading-relaxed flex items-start gap-1.5">
                  <PhoneForwarded size={12} className="mt-0.5 flex-shrink-0" />
                  <span>"Transferring you to the {niche.toLowerCase()} sub-agent now…"</span>
                </p>
              </div>
            </>
          )}
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
  if (niche) return <NicheCTA niche={niche} />
  return <PickerCTA />
}
