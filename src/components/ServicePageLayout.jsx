import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Phone, PhoneOff, Filter, CalendarX, Moon, TrendingDown, Zap,
  FileX, Wrench, HardHat, Clock, GitBranch, MessageSquare, Hammer,
  RefreshCw, CheckCircle, ArrowLeft, ChevronRight, ShieldCheck,
  Bot, Mic, CalendarClock, BarChart3, Mail, Check, ArrowRight,
  AlertCircle, Truck, Car, GraduationCap, DollarSign
} from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './Navbar'
import Footer from './Footer'
import DemoCallCTA from './DemoCallCTA'
import Pricing from './Pricing'

gsap.registerPlugin(ScrollTrigger)

const iconMap = {
  Phone, PhoneOff, Filter, CalendarX, Moon, TrendingDown, Zap,
  FileX, Wrench, HardHat, Clock, GitBranch, MessageSquare, Hammer,
  RefreshCw, CheckCircle, ShieldCheck, Truck, Car, GraduationCap, DollarSign,
}

function NicheIcon({ name, size = 24, className }) {
  const Icon = iconMap[name] || Phone
  return <Icon size={size} className={className} />
}

const allFeatures = [
  { icon: Mic, label: '24/7 AI Call Answering', color: 'bg-purple-100 text-purple-600' },
  { icon: Bot, label: 'Natural Voice Conversations', color: 'bg-blue-100 text-blue-600' },
  { icon: CalendarClock, label: 'Real-Time Appointment Booking', color: 'bg-emerald-100 text-emerald-600' },
  { icon: MessageSquare, label: 'SMS Follow-Up Sequences', color: 'bg-sky-100 text-sky-600' },
  { icon: Mail, label: 'Email Follow-Up Automation', color: 'bg-pink-100 text-pink-600' },
  { icon: BarChart3, label: 'CRM Integration', color: 'bg-orange-100 text-orange-600' },
  { icon: RefreshCw, label: 'Lead Reactivation', color: 'bg-violet-100 text-violet-600' },
  { icon: ShieldCheck, label: 'Full Call Transcripts', color: 'bg-teal-100 text-teal-600' },
]

const painColors = [
  { bg: 'bg-red-50 border-red-200', icon: 'bg-red-100 text-red-600', badge: 'text-red-500' },
  { bg: 'bg-orange-50 border-orange-200', icon: 'bg-orange-100 text-orange-600', badge: 'text-orange-500' },
  { bg: 'bg-rose-50 border-rose-200', icon: 'bg-rose-100 text-rose-600', badge: 'text-rose-500' },
]

const solutionColors = [
  { bg: 'bg-emerald-50 border-emerald-200', icon: 'bg-emerald-100 text-emerald-600', num: 'from-emerald-500 to-teal-500' },
  { bg: 'bg-blue-50 border-blue-200', icon: 'bg-blue-100 text-blue-600', num: 'from-blue-500 to-cyan-500' },
  { bg: 'bg-purple-50 border-purple-200', icon: 'bg-purple-100 text-purple-600', num: 'from-purple-500 to-violet-500' },
]

export default function ServicePageLayout({ config }) {
  const heroRef = useRef(null)
  const painRef = useRef(null)
  const solutionsRef = useRef(null)
  const flowRef = useRef(null)
  const featuresRef = useRef(null)
  const faqRef = useRef(null)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero — timeline, plays on mount (no scroll needed)
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.sh-badge', { y: 20, opacity: 0, duration: 0.5 })
        .from('.sh-title', { y: 50, opacity: 0, duration: 0.9 }, '-=0.3')
        .from('.sh-sub', { y: 30, opacity: 0, duration: 0.7 }, '-=0.5')
        .from('.sh-cta', { y: 20, opacity: 0, duration: 0.6, stagger: 0.12 }, '-=0.4')

      // Scroll-triggered animations — immediateRender: false keeps elements VISIBLE
      // until the trigger fires, then plays the entrance animation
      gsap.from('.pain-card', {
        scrollTrigger: { trigger: painRef.current, start: 'top 80%' },
        y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        immediateRender: false,
      })
      gsap.from('.solution-card', {
        scrollTrigger: { trigger: solutionsRef.current, start: 'top 80%' },
        y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        immediateRender: false,
      })
      gsap.from('.flow-step', {
        scrollTrigger: { trigger: flowRef.current, start: 'top 80%' },
        x: -30, opacity: 0, duration: 0.55, stagger: 0.1, ease: 'power3.out',
        immediateRender: false,
      })
      gsap.from('.feature-pill', {
        scrollTrigger: { trigger: featuresRef.current, start: 'top 85%' },
        scale: 0.9, opacity: 0, duration: 0.5, stagger: 0.06, ease: 'power3.out',
        immediateRender: false,
      })
      gsap.from('.faq-item', {
        scrollTrigger: { trigger: faqRef.current, start: 'top 85%' },
        y: 20, opacity: 0, duration: 0.55, stagger: 0.1, ease: 'power3.out',
        immediateRender: false,
      })
    })
    return () => ctx.revert()
  }, [config.slug])

  const faqs = [
    {
      q: `Does the AI sound natural when talking to my ${config.name.toLowerCase()} customers?`,
      a: "Yes. The AI uses modern voice synthesis that sounds like a professional receptionist. Callers typically cannot tell they're speaking to an AI until the conversation ends and a transcript arrives in your inbox.",
    },
    {
      q: "What happens if the AI can't answer a question?",
      a: "The AI is trained to capture the caller's contact information and the nature of their inquiry, then notify you immediately. No call ends without something captured — name, number, and need.",
    },
    {
      q: 'How long does setup take?',
      a: 'Most businesses are live within 48–72 hours. We configure the AI with your business name, services, pricing ranges, and calendar availability. You review and approve before going live.',
    },
    {
      q: 'Can I update what the AI says?',
      a: 'Yes. On the Performance and Enterprise plans you can request script changes at any time. Enterprise clients can self-edit scripts through the dashboard.',
    },
    {
      q: 'What if I already have staff answering calls?',
      a: 'The AI handles overflow and after-hours calls. It works alongside your team — capturing every lead that would otherwise go to voicemail.',
    },
  ]

  return (
    <div className="min-h-screen bg-void w-full">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center pt-32 pb-24 px-6 overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #7B61FF 0%, transparent 65%)' }} />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 65%)' }} />
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: 'radial-gradient(circle, #7B61FF 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 w-full">
          {/* Breadcrumb */}
          <div className="sh-badge flex items-center gap-2 mb-5">
            <Link to="/" className="text-gray-400 hover:text-plasma text-sm transition-colors flex items-center gap-1.5">
              <ArrowLeft size={13} /> Home
            </Link>
            <ChevronRight size={13} className="text-gray-300" />
            <span className="text-gray-500 text-sm">{config.name}</span>
          </div>

          {/* Live badge */}
          <div className="sh-badge inline-flex items-center gap-2 bg-purple-100 border border-purple-300 rounded-full px-4 py-1.5 text-purple-700 text-sm font-medium mb-7">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600" />
            </span>
            AI Voice Agent for {config.name}
          </div>

          <h1 className="sh-title text-4xl md:text-6xl lg:text-7xl font-bold text-ghost leading-[1.05] mb-6 max-w-4xl tracking-tight">
            {config.heroHeadline}
          </h1>
          <p className="sh-sub text-lg md:text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
            {config.heroSubtext}
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="tel:+15106347901"
              className="sh-cta magnetic-btn btn-glow btn-primary px-8 py-4 rounded-full flex items-center gap-2 transition-all text-base font-bold">
              <Phone size={18} />
              Try the AI Demo — Free
            </a>
            <a href="#pain-points"
              onClick={(e) => { e.preventDefault(); document.getElementById('pain-points')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="sh-cta px-8 py-4 rounded-full border-2 border-gray-200 text-gray-600 hover:text-ghost hover:border-gray-400 font-semibold transition-all duration-200 lift-hover text-base bg-white">
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* ── Pain Points ───────────────────────────────────────── */}
      <section id="pain-points" ref={painRef} className="py-24 px-6 bg-rose-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-red-100 border border-red-300 rounded-full px-4 py-1.5 text-red-700 text-sm font-medium mb-5">
              <AlertCircle size={13} />
              The Problem
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ghost mb-4">
              We Know What's Costing You Money
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Every missed call is revenue that went directly to a competitor who picked up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.painPoints.map((pain, i) => (
              <div key={i} className={`pain-card bg-white border-2 ${painColors[i % 3].bg} rounded-[2rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 group`}>
                {/* Colored icon */}
                <div className={`w-14 h-14 rounded-2xl ${painColors[i % 3].icon} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <NicheIcon name={pain.icon} size={26} className="" />
                </div>
                {/* Problem indicator */}
                <div className={`inline-flex items-center gap-1 text-xs font-bold ${painColors[i % 3].badge} mb-3 mono-text uppercase tracking-wide`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  Pain Point {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-ghost font-bold text-lg mb-3 leading-snug">{pain.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{pain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solutions ─────────────────────────────────────────── */}
      <section ref={solutionsRef} className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-300 rounded-full px-4 py-1.5 text-emerald-800 text-sm font-medium mb-5">
              <CheckCircle size={13} />
              The Fix
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ghost mb-4">
              Here's Exactly How We Solve It
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              AI Voice Hub handles every call, every lead, every follow-up — automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.solutions.map((sol, i) => (
              <div key={i} className={`solution-card bg-white border-2 ${solutionColors[i % 3].bg} rounded-[2rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 group`}>
                {/* Numbered step with gradient */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solutionColors[i % 3].num} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                  <span className="text-white font-bold text-xl">{i + 1}</span>
                </div>
                <div className={`inline-flex items-center gap-1 text-xs font-bold ${solutionColors[i % 3].icon.split(' ')[1]} mb-3 mono-text uppercase tracking-wide`}>
                  <Check size={11} />
                  Solution {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-ghost font-bold text-lg mb-3 leading-snug">{sol.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{sol.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What You Get ──────────────────────────────────────── */}
      <section ref={featuresRef} className="py-20 px-6 bg-graphite">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 rounded-full px-4 py-1.5 text-blue-800 text-sm font-medium mb-6">
            <Zap size={13} />
            Everything Included
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ghost mb-4">
            Full Stack, Every Plan
          </h2>
          <p className="text-gray-500 text-lg mb-12">
            Not just a basic answering service — the complete AI call handling stack.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {allFeatures.map((f, i) => (
              <div key={i} className="feature-pill flex items-center gap-2.5 bg-white border-2 border-gray-100 rounded-full px-5 py-3 hover:shadow-md hover:border-purple-200 transition-all">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center ${f.color}`}>
                  <f.icon size={14} />
                </div>
                <span className="text-gray-700 text-sm font-semibold">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Call Flow ─────────────────────────────────────────── */}
      <section ref={flowRef} className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-300 rounded-full px-4 py-1.5 text-purple-800 text-sm font-medium mb-5">
              <ArrowRight size={13} />
              The Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ghost mb-4">
              How It Works for {config.name}
            </h2>
            <p className="text-gray-500 text-lg">
              From the moment someone calls to a confirmed appointment — fully automated.
            </p>
          </div>

          {/* Connected steps */}
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-7 top-10 bottom-10 w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 to-emerald-400 hidden md:block" />

            <div className="space-y-4">
              {config.callFlow.map((item, i) => (
                <div key={i} className="flow-step flex items-start gap-5 group">
                  {/* Step number circle */}
                  <div className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-10"
                    style={{ background: `linear-gradient(135deg, #7B61FF, #4F8FFF)` }}>
                    <span className="text-white font-bold mono-text">{String(item.step).padStart(2, '0')}</span>
                  </div>
                  {/* Content card */}
                  <div className="flex-1 bg-white border-2 border-gray-100 rounded-[1.5rem] p-5 hover:border-purple-300 hover:shadow-md transition-all duration-200 group-hover:translate-x-1">
                    <p className="text-gray-700 text-base leading-relaxed font-medium">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section ref={faqRef} className="py-24 px-6 bg-graphite">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-ghost mb-4">
              Common Questions
            </h2>
            <p className="text-gray-500 text-lg">
              Everything {config.name.toLowerCase()} businesses ask before getting started.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item bg-white border-2 border-gray-100 rounded-[1.5rem] p-7 hover:border-purple-200 hover:shadow-md transition-all duration-200">
                <h3 className="text-ghost font-semibold text-base mb-3 flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-plasma text-white text-xs flex items-center justify-center mono-text font-bold mt-0.5">Q</span>
                  {faq.q}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed pl-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Demo CTA ──────────────────────────────────────────── */}
      <DemoCallCTA niche={config.name} />

      {/* ── Pricing ───────────────────────────────────────────── */}
      <Pricing variant="service" />

      <Footer />
    </div>
  )
}
