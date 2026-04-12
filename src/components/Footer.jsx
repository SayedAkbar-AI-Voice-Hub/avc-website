import { Link } from 'react-router-dom'
import { Phone, Mail } from 'lucide-react'
import { PHONE_HREF, PHONE_DISPLAY, services } from '../data/services'
import Logo from './Logo'

export default function Footer() {
  const col1 = services.slice(0, 6)
  const col2 = services.slice(6)

  return (
    <footer style={{ background: 'linear-gradient(135deg, #1A0A3C 0%, #0F0620 50%, #0A1840 100%)' }} className="rounded-t-[3rem] mt-0">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo size="md" dark />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              24/7 AI Voice Agents for local businesses. Never miss a lead, never lose a customer to voicemail again.
            </p>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-plasma-light hover:text-white transition-colors font-mono text-sm font-semibold"
            >
              <Phone size={16} />
              {PHONE_DISPLAY}
            </a>
          </div>

          {/* Services Col 1 */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">
              Industries
            </h4>
            <ul className="space-y-2.5">
              {col1.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-white/45 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col 2 */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase opacity-0 select-none">
              &nbsp;
            </h4>
            <ul className="space-y-2.5">
              {col2.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-white/45 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">
              Get Started
            </h4>
            <p className="text-white/50 text-sm mb-4">
              Experience our AI in action. Call right now — it's live, 24/7.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 btn-primary btn-glow font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-200 mb-6"
            >
              <Phone size={14} />
              Try the Demo
            </a>
            <div className="space-y-2 text-white/30 text-xs">
              <div className="flex items-center gap-1.5">
                <Mail size={11} />
                <span>hello@aivoicehub.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} AI Voice Hub. All rights reserved.
          </p>

          {/* Status Indicator */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="font-mono text-xs text-white/30">SYSTEM OPERATIONAL</span>
          </div>

          <div className="flex items-center gap-4 text-xs text-white/25">
            <Link to="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white/60 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
