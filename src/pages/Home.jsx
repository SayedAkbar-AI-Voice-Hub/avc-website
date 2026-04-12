import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Phone, BrainCircuit, CalendarCheck,
  MessageSquare, Database, RefreshCw, ArrowRight, ChevronRight,
  Zap, Shield, TrendingUp, CheckCircle, Bot, Check, User
} from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Pricing from '../components/Pricing'
import DemoCallCTA from '../components/DemoCallCTA'
import { services, PHONE_HREF, PHONE_DISPLAY } from '../data/services'

gsap.registerPlugin(ScrollTrigger)

/* ─── Hero Call Card (right panel) ────────────────────────────────────────── */
function HeroCallCard() {
  const [seconds, setSeconds] = useState(47)
  useEffect(() => {
    const t = setInterval(() => setSeconds(s => s + 1), 1000)
    return () => clearInterval(t)
  }, [])
  const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`

  return (
    <div className="relative">
      {/* Floating — top right */}
      <div className="absolute -top-5 right-6 z-20 bg-white border border-gray-100 shadow-xl rounded-2xl px-4 py-2 flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative rounded-full h-2 w-2 bg-green-500" />
        </span>
        <span className="text-xs font-semibold text-gray-700">AI Answering Now</span>
      </div>

      {/* Main card */}
      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-2xl p-6 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.08) 0%, transparent 70%)' }} />

        {/* Call header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative rounded-full h-2.5 w-2.5 bg-red-500" />
            </span>
            <span className="text-xs font-bold text-red-600 mono-text tracking-wider">LIVE CALL</span>
          </div>
          <span className="mono-text text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-lg">{fmt(seconds)}</span>
        </div>

        {/* Caller row with waveform */}
        <div className="flex items-center gap-3 mb-5 p-3 bg-gray-50 rounded-2xl">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shrink-0"
            style={{ background: 'linear-gradient(135deg, #7B61FF, #3B82F6)' }}>
            <User size={16} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-800">Inbound Caller</p>
            <p className="text-xs text-gray-400 mono-text">+1 (415) 555-0192</p>
          </div>
          <div className="flex items-end gap-0.5 shrink-0">
            {[10, 18, 12, 22, 8, 16, 14, 20].map((h, i) => (
              <div key={i} className="w-1 rounded-full animate-bounce"
                style={{ height: `${h}px`, backgroundColor: '#7B61FF', animationDelay: `${i * 80}ms`, animationDuration: '900ms' }} />
            ))}
          </div>
        </div>

        {/* Conversation transcript */}
        <div className="space-y-3 mb-5">
          <div className="flex gap-2 items-start">
            <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
              <Bot size={12} className="text-purple-600" />
            </div>
            <div className="bg-purple-50 border border-purple-100 rounded-2xl rounded-tl-sm p-3 flex-1">
              <p className="text-xs text-gray-700 leading-relaxed">"Thanks for calling! I can book your appointment right now. What's your budget range?"</p>
            </div>
          </div>
          <div className="flex gap-2 items-start justify-end">
            <div className="bg-gray-100 rounded-2xl rounded-tr-sm p-3 max-w-[75%]">
              <p className="text-xs text-gray-700">"Around $800k — looking for 4 bedrooms"</p>
            </div>
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center shrink-0 mt-0.5">
              <User size={12} className="text-gray-500" />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
              <Bot size={12} className="text-purple-600" />
            </div>
            <div className="bg-purple-50 border border-purple-100 rounded-2xl rounded-tl-sm px-4 py-2.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0ms]" />
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:150ms]" />
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:300ms]" />
            </div>
          </div>
        </div>

        {/* Captured lead data */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-4">
          <p className="text-xs font-bold text-emerald-700 mb-3 flex items-center gap-1.5">
            <CheckCircle size={12} /> Lead Data Captured
          </p>
          <div className="grid grid-cols-2 gap-2">
            {[['Budget', '$800k+'], ['Intent', 'Book Showing'], ['Timeline', 'This Week'], ['Bedrooms', '4BR Min']].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between bg-white rounded-lg px-2.5 py-1.5 border border-emerald-100">
                <span className="text-[10px] text-gray-400 font-medium">{k}</span>
                <span className="text-[10px] font-bold text-gray-700">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Auto-triggered actions */}
        <div className="space-y-1.5">
          {[
            { label: 'Appointment booked — Thu 2:00 PM', cls: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
            { label: 'CRM record created in HubSpot', cls: 'bg-blue-50 text-blue-700 border-blue-200' },
            { label: 'SMS confirmation queued', cls: 'bg-purple-50 text-purple-700 border-purple-200' },
          ].map((a, i) => (
            <div key={i} className={`flex items-center gap-2 text-[11px] font-semibold px-3 py-2 rounded-xl border ${a.cls}`}>
              <Check size={10} />{a.label}
            </div>
          ))}
        </div>
      </div>

      {/* Floating — bottom left */}
      <div className="absolute -bottom-5 left-6 z-20 bg-white border border-gray-100 shadow-xl rounded-2xl px-4 py-2.5">
        <p className="text-[10px] text-gray-400 mono-text">Calls handled today</p>
        <p className="text-xl font-black text-gray-900">47 <span className="text-xs font-semibold text-emerald-500">↑ 100% answered</span></p>
      </div>
    </div>
  )
}

/* ─── Hero ─────────────────────────────────────────────────────────────────── */
function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-badge', { y: 20, opacity: 0, duration: 0.6 })
        .from('.hero-element', { y: 40, opacity: 0, duration: 1.2, stagger: 0.08, delay: 0.1 }, '-=0.4')
        .from('.hero-phone-badge', { scale: 0.85, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.hero-stats', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.3')
      gsap.from('.hero-card', { x: 40, opacity: 0, duration: 1.0, ease: 'power3.out', delay: 0.5, immediateRender: false })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={heroRef} className="relative min-h-[100dvh] flex items-center pt-24 pb-20 px-6 overflow-hidden bg-white">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #7B61FF 0%, transparent 65%)' }} />
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 65%)' }} />
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle, #7B61FF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left: copy ── */}
          <div>
            <div className="hero-badge inline-flex items-center gap-2 bg-purple-100 border border-purple-300 rounded-full px-4 py-1.5 text-purple-700 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600" />
              </span>
              24/7 AI Voice Agents for Local Business
            </div>

            <h1 className="hero-element text-5xl md:text-7xl font-bold text-ghost leading-[1.05] mb-6 tracking-tight">
              Never Miss<br />
              <span className="drama-text text-6xl md:text-8xl gradient-text">Another Lead.</span>
            </h1>

            <p className="hero-element text-lg md:text-xl text-gray-500 max-w-xl mb-10 leading-relaxed">
              Your AI receptionist answers every call, qualifies leads, books appointments, and follows up — 24 hours a day, 7 days a week.
            </p>

            <div className="hero-element flex flex-wrap items-center gap-4 mb-10">
              <a href={PHONE_HREF}
                className="magnetic-btn btn-glow btn-primary px-8 py-4 rounded-full text-lg flex items-center gap-2 transition-all font-bold">
                <Phone size={20} />
                Try the AI Demo
              </a>
              <button onClick={() => scrollTo('how-it-works')}
                className="px-8 py-4 rounded-full border-2 border-gray-200 bg-white text-gray-600 hover:text-ghost hover:border-gray-400 font-semibold text-lg transition-all duration-200 flex items-center gap-2 lift-hover">
                See How It Works <ArrowRight size={18} />
              </button>
            </div>

            <div className="hero-phone-badge inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-gray-400">Live demo:</span>
              <a href={PHONE_HREF} className="mono-text font-semibold hover:underline" style={{ color: '#7B61FF' }}>{PHONE_DISPLAY}</a>
              <span className="text-gray-400">— call now</span>
            </div>

            <div className="hero-stats flex flex-wrap gap-8 mt-12 pt-10 border-t border-gray-100">
              {[
                { value: '< 1s', label: 'Avg answer time', color: '#7B61FF' },
                { value: '24/7', label: 'Always available', color: '#3B82F6' },
                { value: '60%', label: 'Fewer no-shows', color: '#10B981' },
                { value: '23%', label: 'Lead reactivation', color: '#EC4899' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl md:text-3xl font-black" style={{ color: s.color }}>{s.value}</p>
                  <p className="text-gray-400 text-sm mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: live call card ── */}
          <div className="hero-card hidden lg:block py-8">
            <HeroCallCard />
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─── Protocol (How It Works) ────────────────────────────────────────────── */
function Protocol() {
  const ref = useRef()

  const steps = [
    {
      title: 'Call Received',
      description: 'A lead calls your business number. Our AI answers instantly — no hold music, no voicemail, no matter the time.',
      color: 'from-purple-500 to-violet-600',
      lightColor: 'bg-purple-50 border-purple-200',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      title: 'AI Qualifies',
      description: 'The AI asks the right questions, captures contact info, understands urgency, and qualifies the lead automatically.',
      color: 'from-blue-500 to-cyan-600',
      lightColor: 'bg-blue-50 border-blue-200',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Booked + Followed Up',
      description: 'Appointment booked in real-time. SMS and email follow-ups sent automatically. You get a full transcript immediately.',
      color: 'from-emerald-500 to-teal-600',
      lightColor: 'bg-emerald-50 border-emerald-200',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.prot-card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          endTrigger: '#protocol-container',
          end: 'bottom bottom',
          pin: true,
          pinSpacing: false,
        })
        gsap.to(card, {
          scrollTrigger: {
            trigger: cards[i + 1],
            start: 'top bottom',
            end: 'top top',
            scrub: true
          },
          scale: 0.92,
          opacity: 0.4,
          filter: 'blur(8px)'
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="how-it-works" ref={ref} className="relative w-full pt-20 pb-32 bg-graphite">
      <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-plasma/10 border border-plasma/20 rounded-full px-4 py-1.5 text-plasma text-sm font-medium mb-6">
          <Zap size={14} />
          How It Works
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-ghost mb-4">
          From Call to <span className="gradient-text drama-text text-5xl">Booked.</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Every step handled automatically. You just show up to the appointment.
        </p>
      </div>

      <div id="protocol-container" className="relative">
        {steps.map((step, i) => (
          <div key={i} className="prot-card h-screen w-full flex items-center justify-center top-0 px-6">
            <div className={`w-full max-w-5xl h-[70vh] bg-white border-2 ${step.lightColor} rounded-[3rem] p-12 flex flex-col md:flex-row items-center gap-12 shadow-2xl relative overflow-hidden`}>

              {/* Visual abstraction */}
              <div className={`flex-1 w-full h-full ${step.lightColor} border rounded-[2rem] relative flex items-center justify-center overflow-hidden`}>
                {i === 0 && (
                  <div className="relative flex items-center justify-center w-40 h-40">
                    <div className="absolute inset-0 rounded-full border-4 border-purple-300 opacity-30 animate-ping" />
                    <div className="absolute inset-4 rounded-full border-2 border-purple-400 opacity-40 animate-pulse" />
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}>
                      <Phone size={32} className="text-white" />
                    </div>
                  </div>
                )}
                {i === 1 && (
                  <div className="w-full h-full flex flex-wrap gap-2 p-10 content-start relative overflow-hidden">
                    {[...Array(30)].map((_, j) => (
                      <div key={j} className="w-5 h-5 rounded bg-blue-100 border border-blue-200"
                        style={{ opacity: Math.random() > 0.5 ? 1 : 0.3 }} />
                    ))}
                    <div className="absolute top-0 left-0 w-full h-1 rounded-full animate-[float_3s_ease-in-out_infinite]"
                      style={{ background: 'linear-gradient(90deg, #3B82F6, #06B6D4)' }} />
                    <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-3 border border-blue-200 shadow-sm">
                      <p className="text-xs text-blue-600 font-medium mono-text">Intent: BOOK_APPOINTMENT</p>
                      <p className="text-xs text-gray-400 mono-text">Confidence: 97%</p>
                    </div>
                  </div>
                )}
                {i === 2 && (
                  <div className="flex flex-col items-center gap-4 w-full px-8">
                    {['Appointment Booked', 'SMS Sent', 'Email Queued', 'Transcript Ready'].map((item, j) => (
                      <div key={j} className="w-full flex items-center gap-3 bg-white rounded-xl p-3 border border-emerald-200 shadow-sm">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                          <CheckCircle size={14} className="text-emerald-600" />
                        </div>
                        <span className="text-sm text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex-[0.8]">
                <div className={`mono-text text-sm mb-4 font-bold`}
                  style={{ background: `linear-gradient(135deg, ${i === 0 ? '#7B61FF, #A855F7' : i === 1 ? '#3B82F6, #06B6D4' : '#10B981, #14B8A6'})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  STEP 0{i + 1}
                </div>
                <h2 className="text-4xl font-bold text-ghost mb-4">{step.title}</h2>
                <p className="text-gray-500 text-lg leading-relaxed">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Features (Micro-UIs) ─────────────────────────────────────────────────── */
function Features() {
  const [shuffler, setShuffler] = useState(['Intonation Check', 'Intent Capture', 'Urgency Scoring'])
  useEffect(() => {
    const interval = setInterval(() => {
      setShuffler(prev => { const next = [...prev]; next.unshift(next.pop()); return next })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const [typed, setTyped] = useState('')
  const typeText = "> Call connected.\n> Extracting CRM payload...\n> Client details verified.\n> Updating HubSpot pipeline...\n> Sequence initialized."
  useEffect(() => {
    let i = 0, current = '';
    const interval = setInterval(() => {
      if (i < typeText.length) { current += typeText.charAt(i); setTyped(current); i++; }
      else { setTimeout(() => { i = 0; current = '' }, 5000) }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const schedulerRef = useRef()
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'power2.inOut' } })
      tl.to('.cursor-svg', { x: 90, y: 35, duration: 1.5, delay: 0.5 })
        .to('.cursor-svg', { scale: 0.8, duration: 0.1 })
        .to('.cursor-svg', { scale: 1, duration: 0.1 })
        .to('.day-wed', { backgroundColor: '#7B61FF', color: '#fff', duration: 0.2 }, '-=0.1')
        .to('.cursor-svg', { x: 190, y: 120, duration: 1 })
        .to('.cursor-svg', { scale: 0.8, duration: 0.1 })
        .to('.cursor-svg', { scale: 1, duration: 0.1 })
        .to('.btn-save', { scale: 0.95, duration: 0.1 }, '-=0.2')
        .to('.btn-save', { scale: 1, duration: 0.1 })
        .to('.cursor-svg', { opacity: 0, duration: 0.3 })
        .set('.cursor-svg', { x: -20, y: -20, scale: 1 })
        .set('.day-wed', { backgroundColor: 'transparent', color: '#374151' })
        .to('.cursor-svg', { opacity: 1, duration: 0.3, delay: 0.5 })
    }, schedulerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-1.5 text-blue-700 text-sm font-medium mb-6">
            <Shield size={14} /> Everything You Need
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ghost mb-4">
            One System That Does <span className="gradient-text drama-text text-5xl">Everything</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white border-2 border-purple-border rounded-[2rem] p-8 shadow-lg flex flex-col justify-between h-[400px] hover:border-plasma/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center mb-4">
                <Phone size={20} className="text-purple-600" />
              </div>
              <h3 className="font-bold text-xl text-ghost mb-2">24/7 AI Call Answering</h3>
              <p className="text-sm text-gray-500">Never send a caller to voicemail again. Our AI answers instantly with <span className="text-plasma mono-text font-semibold">{'< 1 sec'}</span> latency.</p>
            </div>
            <div className="relative h-40 w-full mt-4 flex items-center justify-center">
              {shuffler.map((item, i) => (
                <div key={item} className="absolute w-full py-4 text-center rounded-xl mono-text text-sm border transition-all duration-500 ease-in-out"
                  style={{
                    transform: `translateY(${(i - 1) * 35}px) scale(${1 - Math.abs(i - 1) * 0.1})`,
                    opacity: i === 1 ? 1 : 0.3,
                    backgroundColor: i === 1 ? '#F3F0FF' : '#F9FAFB',
                    borderColor: i === 1 ? '#7B61FF' : '#E5E7EB',
                    color: i === 1 ? '#7B61FF' : '#6B7280',
                    zIndex: 3 - Math.abs(i - 1)
                  }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border-2 border-blue-100 rounded-[2rem] p-8 shadow-lg flex flex-col h-[400px] hover:border-blue-300 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-4">
                <Database size={20} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-xl text-ghost mb-2">CRM Integration</h3>
              <p className="text-sm text-gray-500 mb-4">Every conversation logged synced to HubSpot, Salesforce, or GHL automatically.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-4 flex-1 border border-gray-700 overflow-hidden">
              <pre className="mono-text text-xs text-emerald-400 whitespace-pre-wrap leading-relaxed">
                {typed}<span className="animate-blink inline-block w-2 h-4 bg-emerald-400 ml-1 align-middle"></span>
              </pre>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border-2 border-emerald-100 rounded-[2rem] p-8 shadow-lg flex flex-col h-[400px] hover:border-emerald-300 transition-all" ref={schedulerRef}>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center mb-4">
                <CalendarCheck size={20} className="text-emerald-600" />
              </div>
              <h3 className="font-bold text-xl text-ghost mb-2">SMS & Email Follow-Up</h3>
              <p className="text-sm text-gray-500">Automated sequences and calendar scheduling without human intervention.</p>
            </div>
            <div className="mt-4 flex-1 relative bg-gray-50 rounded-xl border border-gray-200 p-4 overflow-hidden">
              <div className="grid grid-cols-7 gap-1 text-center font-mono text-[10px] text-gray-400 mb-2">
                <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                {[...Array(7)].map((_, i) => <span key={'w1' + i} className="py-1">—</span>)}
                {[...Array(7)].map((_, i) => (
                  <span key={'w2' + i} className={`py-1 rounded-sm text-gray-700 ${i === 3 ? 'day-wed' : ''} border border-transparent`}>{10 + i}</span>
                ))}
              </div>
              <button className="btn-save absolute bottom-4 right-4 bg-plasma border border-plasma text-white text-[10px] font-mono px-3 py-1 rounded-lg">Confirm</button>
              <div className="cursor-svg absolute top-0 left-0 w-8 h-8 pointer-events-none" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4L11.5361 21.054C11.8398 21.7314 12.8252 21.6587 13.0186 20.9329L14.733 14.5029L20.8993 12.4414C21.6028 12.206 21.6429 11.2188 20.9634 10.935L4 4Z" fill="#7B61FF" stroke="white" strokeWidth="1.5" strokeLinejoin="round" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Industries Grid ──────────────────────────────────────────────────────── */
function Industries() {
  const ref = useRef()
  const colors = [
    'hover:border-purple-400 hover:bg-purple-50',
    'hover:border-blue-400 hover:bg-blue-50',
    'hover:border-emerald-400 hover:bg-emerald-50',
    'hover:border-orange-400 hover:bg-orange-50',
    'hover:border-pink-400 hover:bg-pink-50',
    'hover:border-cyan-400 hover:bg-cyan-50',
    'hover:border-violet-400 hover:bg-violet-50',
    'hover:border-rose-400 hover:bg-rose-50',
    'hover:border-teal-400 hover:bg-teal-50',
    'hover:border-indigo-400 hover:bg-indigo-50',
    'hover:border-sky-400 hover:bg-sky-50',
  ]
  const iconColors = [
    'bg-purple-100 text-purple-600',
    'bg-blue-100 text-blue-600',
    'bg-emerald-100 text-emerald-600',
    'bg-orange-100 text-orange-600',
    'bg-pink-100 text-pink-600',
    'bg-cyan-100 text-cyan-600',
    'bg-violet-100 text-violet-600',
    'bg-rose-100 text-rose-600',
    'bg-teal-100 text-teal-600',
    'bg-indigo-100 text-indigo-600',
    'bg-sky-100 text-sky-600',
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.industry-tile', {
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
        scale: 0.92, opacity: 0, duration: 0.6, stagger: 0.07, ease: 'power3.out',
        immediateRender: false,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="industries" ref={ref} className="py-24 px-6 bg-graphite">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-plasma/10 border border-plasma/20 rounded-full px-4 py-1.5 text-plasma text-sm font-medium mb-6">
            <TrendingUp size={14} /> Industries We Serve
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ghost mb-4">
            Built for <span className="gradient-text drama-text text-5xl">Your Industry</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Each AI is trained specifically for your business type. Not a generic bot — a specialist.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, idx) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className={`industry-tile bg-white border-2 border-gray-100 rounded-[1.5rem] p-6 ${colors[idx % colors.length]} lift-hover transition-all duration-300 group`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${iconColors[idx % iconColors.length]}`}>
                  <Phone size={14} />
                </div>
                <ChevronRight size={14} className="text-gray-300 group-hover:text-plasma group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-ghost font-semibold text-sm mb-1">{service.name}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{service.tagline}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Philosophy ───────────────────────────────────────────────────────────── */
function Philosophy() {
  const ref = useRef()
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.manifesto-line', {
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        y: 40, opacity: 0, duration: 0.9, stagger: 0.25, ease: 'power3.out',
        immediateRender: false,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden flex items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #1A0A3C 0%, #0F0620 40%, #0A1840 100%)' }}>
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7B61FF 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="manifesto-line text-white/50 text-xl font-mono mb-6">
          Most businesses rely on staff to answer calls. <br className="hidden md:block" />
          Staff takes breaks. Staff gets overwhelmed. Staff misses calls.
        </p>
        <h2 className="manifesto-line text-4xl md:text-7xl font-bold text-white leading-tight mb-6">
          We believe every call deserves a <br />
          <span className="drama-text text-5xl md:text-8xl gradient-text">perfect answer.</span>
        </h2>
        <p className="manifesto-line text-white/60 text-xl max-w-2xl mx-auto">
          Not eventually. Not during business hours. Not when someone remembers to follow up.<br />
          <span className="text-white font-semibold">Instantly. Every time. Forever.</span>
        </p>
      </div>
    </section>
  )
}

/* ─── Industry Stats ────────────────────────────────────────────────────────── */
function IndustryStats() {
  const ref = useRef()
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        y: 30, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        immediateRender: false,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const stats = [
    { value: '62%', label: 'of callers who reach voicemail don\'t call back', source: 'Industry research', color: 'text-red-500', bg: 'bg-red-50 border-red-100' },
    { value: '78%', label: 'of customers buy from the first business that responds', source: 'Lead response study', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-100' },
    { value: '21x', label: 'more likely to qualify a lead if contacted within 5 minutes', source: 'Harvard Business Review', color: 'text-plasma', bg: 'bg-purple-50 border-purple-100' },
    { value: '44%', label: 'of salespeople give up after one follow-up attempt', source: 'Marketing Donut', color: 'text-orange-500', bg: 'bg-orange-50 border-orange-100' },
    { value: '80%', label: 'of sales require 5+ follow-up contacts to close', source: 'The Marketing Donut', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-100' },
    { value: '24/7', label: 'availability means you capture leads your competitors miss overnight', source: 'AI Voice Hub', color: 'text-pink-600', bg: 'bg-pink-50 border-pink-100' },
  ]

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-1.5 text-orange-700 text-sm font-medium mb-6">
            <TrendingUp size={14} /> The Cost of Missed Calls
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ghost mb-4">
            The Numbers Don't <span className="drama-text gradient-text text-5xl">Lie.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Every unanswered call is a compounding problem. Here's what the research shows.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((s, i) => (
            <div key={i} className={`stat-card border rounded-[2rem] p-8 hover:shadow-lg transition-all duration-300 ${s.bg}`}>
              <p className={`text-5xl font-black mb-3 ${s.color}`}>{s.value}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.label}</p>
              <p className="mono-text text-xs text-gray-400">{s.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Home Page ────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen bg-void w-full">
      <Navbar />
      <Hero />
      <Protocol />
      <Features />
      <Industries />
      <Philosophy />
      <IndustryStats />
      <DemoCallCTA />
      <Pricing variant="home" />
      <Footer />
    </div>
  )
}
