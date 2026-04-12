import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { PHONE_HREF, PHONE_DISPLAY } from '../data/services'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const btnRef = useRef(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const handleMouseMove = (e) => {
    const btn = btnRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.03)`
  }

  const handleMouseLeave = () => {
    if (btnRef.current) {
      btnRef.current.style.transform = 'translate(0,0) scale(1)'
    }
  }

  const scrollTo = (id) => {
    if (isHome) {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = `/#${id}`
    }
    setMobileOpen(false)
  }

  const navLinks = [
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Features', id: 'features' },
    { label: 'Industries', id: 'industries' },
    { label: 'Pricing', id: 'pricing' },
  ]

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500
          ${scrolled
            ? 'bg-white/95 backdrop-blur-xl border border-purple-border shadow-lg shadow-purple-100/50 px-6 py-3'
            : 'bg-white/70 backdrop-blur-md border border-purple-border/50 px-6 py-3'
          }
          rounded-full w-[calc(100%-2rem)] max-w-5xl`}
      >
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <Logo size="md" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="px-3 py-1.5 text-sm text-gray-500 hover:text-ghost font-medium lift-hover transition-all duration-200 rounded-lg hover:bg-purple-50"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="text-gray-500 hover:text-plasma transition-colors flex items-center gap-1.5"
            >
              <Phone size={13} />
              <span className="mono-text text-xs font-medium">{PHONE_DISPLAY}</span>
            </a>
            <a
              ref={btnRef}
              href="#demo-call"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => { e.preventDefault(); scrollTo('demo-call') }}
              className="magnetic-btn btn-glow btn-primary text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-500 hover:text-ghost transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-6 transition-all duration-300
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className="text-2xl font-semibold text-gray-700 hover:text-plasma transition-colors"
          >
            {link.label}
          </button>
        ))}
        <a
          href={PHONE_HREF}
          className="mt-4 flex items-center gap-2 text-plasma mono-text text-lg font-semibold"
        >
          <Phone size={18} />
          {PHONE_DISPLAY}
        </a>
        <a
          href="#demo-call"
          onClick={(e) => { e.preventDefault(); scrollTo('demo-call') }}
          className="mt-2 btn-primary btn-glow font-semibold px-8 py-3 rounded-full text-lg"
        >
          Book a Demo
        </a>
      </div>
    </>
  )
}
