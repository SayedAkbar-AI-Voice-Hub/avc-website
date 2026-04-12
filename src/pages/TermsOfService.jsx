import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, FileText } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      {
        subtitle: 'Agreement',
        text: 'By accessing or using the AI Voice Hub platform, website, or any related services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, you may not use our Services.',
      },
      {
        subtitle: 'Changes',
        text: 'We reserve the right to update these Terms at any time. Material changes will be communicated via email or a notice on our website. Continued use of the Services after changes are posted constitutes your acceptance.',
      },
    ],
  },
  {
    title: '2. Description of Services',
    content: [
      {
        subtitle: 'AI Voice Agent Platform',
        text: 'AI Voice Hub provides AI-powered voice agents for local businesses. Our agents handle inbound calls, capture leads, answer questions, and book appointments — 24 hours a day, 7 days a week.',
      },
      {
        subtitle: 'Technology Stack',
        text: 'Our platform is built on three core technologies: (1) Retell AI — which powers the voice conversations and produces call transcripts; (2) GoHighLevel (GHL) — which serves as our CRM, managing contact records, pipeline stages, and automated SMS and email follow-up sequences; and (3) n8n — which automates workflows and connects our tools together. By subscribing to our Services, you acknowledge that your data will be processed through these systems.',
      },
      {
        subtitle: 'Service Plans',
        text: 'We offer three subscription tiers — Essential ($50/month, 100 AI minutes), Performance ($150/month, 300 AI minutes), and Enterprise ($200/month, 600 AI minutes) — each subject to a one-time $300 setup fee. Features and included minutes vary by plan as described on our pricing page.',
      },
    ],
  },
  {
    title: '3. Account Registration & Responsibilities',
    content: [
      {
        subtitle: 'Account Creation',
        text: 'To use our Services, you must provide accurate, complete, and current business information. You are responsible for keeping your account credentials secure.',
      },
      {
        subtitle: 'Authorised Use',
        text: 'You agree to use the Services only for lawful business purposes and in full compliance with all applicable laws, including telecommunications laws, the Telephone Consumer Protection Act (TCPA), and any regulations governing automated voice calls and text messages in your jurisdiction.',
      },
      {
        subtitle: 'Account Security',
        text: 'You are responsible for all activity under your account. Notify us immediately at sayedakbar@aivoicehub.site if you suspect unauthorised access.',
      },
    ],
  },
  {
    title: '4. Fees, Billing & Setup',
    content: [
      {
        subtitle: 'Setup Fee',
        text: 'All plans require a one-time $300 setup fee, which covers AI agent configuration, voice customisation, integration with your existing tools, and onboarding. This fee is non-refundable once setup has commenced.',
      },
      {
        subtitle: 'Monthly Subscription',
        text: 'Monthly subscription fees are billed in advance. Unused AI minutes do not roll over to the following month. Overages beyond your plan\'s included minutes are billed at the applicable per-minute rate.',
      },
      {
        subtitle: 'Price Changes',
        text: 'We may adjust pricing with at least 30 days\' written notice. Price changes take effect at the start of your next billing cycle.',
      },
      {
        subtitle: 'Taxes',
        text: 'You are responsible for all applicable taxes. Displayed prices are exclusive of taxes unless stated otherwise.',
      },
    ],
  },
  {
    title: '5. AI Minutes & Usage',
    content: [
      {
        subtitle: 'Minute Calculation',
        text: 'AI minutes are calculated based on the duration of active AI voice conversations processed through Retell AI. Call setup time and hold time may also count toward your usage depending on your configuration.',
      },
      {
        subtitle: 'Overage',
        text: 'If your account exceeds the included minutes in any billing period, additional minutes will be charged at the current overage rate. We will notify you when usage approaches your plan limit.',
      },
    ],
  },
  {
    title: '6. Acceptable Use & Compliance',
    content: [
      {
        subtitle: 'Prohibited Conduct',
        text: 'You may not use our Services to: (a) violate any applicable law or regulation; (b) harass, threaten, or harm any person; (c) transmit spam or unsolicited communications; (d) interfere with or disrupt the platform; (e) attempt unauthorised access to any system; or (f) misrepresent your identity or business.',
      },
      {
        subtitle: 'TCPA & Telemarketing Compliance',
        text: 'You are solely responsible for ensuring that your use of our AI voice agents complies with the Telephone Consumer Protection Act (TCPA), FTC Telemarketing Sales Rule, and all applicable federal, state, and local laws governing automated calls and text messages. This includes obtaining proper consent from your contacts before automated outreach is initiated via GoHighLevel SMS sequences.',
      },
      {
        subtitle: 'AI Disclosure',
        text: 'You agree to comply with all legal requirements regarding disclosure that a caller is interacting with an AI or automated system. Some jurisdictions require explicit disclosure at the start of a call. You are responsible for configuring your AI agent\'s script to meet these requirements.',
      },
      {
        subtitle: 'SMS Compliance',
        text: 'Automated SMS messages sent through GoHighLevel on your behalf must comply with applicable messaging laws, including including TCPA consent requirements. You must honour opt-out requests (STOP replies) immediately. We are not liable for non-compliant SMS campaigns configured by clients.',
      },
    ],
  },
  {
    title: '7. Data Ownership & Processing',
    content: [
      {
        subtitle: 'Your Data',
        text: 'You retain ownership of all business data, contact records, and content you provide to us. You grant AI Voice Hub a limited licence to process your data through Retell AI, GoHighLevel, and n8n solely to deliver the Services.',
      },
      {
        subtitle: 'Call Data',
        text: 'Call recordings and transcripts generated through Retell AI are your property and are made available to you through our platform. We do not use your call data to train AI models without your explicit written consent.',
      },
      {
        subtitle: 'CRM Data',
        text: 'Contact records, lead data, and pipeline information stored in GoHighLevel on your behalf remain your property. Upon termination of your account, you may export your data within 30 days before it is deleted.',
      },
      {
        subtitle: 'Data Processing Agreements',
        text: 'By using our Services, you acknowledge that your data will be processed by Retell AI, GoHighLevel, and n8n as sub-processors. Each of these platforms maintains its own data processing and security standards. Our Privacy Policy provides further detail.',
      },
    ],
  },
  {
    title: '8. Intellectual Property',
    content: [
      {
        subtitle: 'Our Platform',
        text: 'All software, AI configurations, workflows, interfaces, and documentation developed by AI Voice Hub are our intellectual property. We grant you a limited, non-exclusive, non-transferable licence to use the Services for your internal business purposes during your subscription.',
      },
      {
        subtitle: 'Your Content',
        text: 'You retain full ownership of your business name, scripts, branding, and any content you provide for configuration of your AI agent.',
      },
    ],
  },
  {
    title: '9. Disclaimers',
    content: [
      {
        subtitle: 'As-Is Basis',
        text: 'THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.',
      },
      {
        subtitle: 'Third-Party Services',
        text: 'We are not responsible for the availability, performance, or data practices of Retell AI, GoHighLevel, or n8n. Downtime or service changes by these providers may affect the availability of our Services, and we will not be liable for resulting interruptions.',
      },
      {
        subtitle: 'No Guarantee of Results',
        text: 'We do not guarantee specific business outcomes, lead volumes, or revenue results from using our Services. Performance depends on factors including your industry, call volume, and how you configure follow-up sequences in GoHighLevel.',
      },
    ],
  },
  {
    title: '10. Limitation of Liability',
    content: [
      {
        subtitle: 'Liability Cap',
        text: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, AI VOICE HUB\'S TOTAL LIABILITY FOR ANY CLAIM ARISING FROM THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE TOTAL FEES PAID BY YOU IN THE THREE (3) MONTHS PRECEDING THE CLAIM.',
      },
      {
        subtitle: 'Exclusion of Indirect Damages',
        text: 'IN NO EVENT SHALL AI VOICE HUB BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES — INCLUDING LOSS OF PROFITS, LEADS, DATA, OR BUSINESS OPPORTUNITIES — EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.',
      },
    ],
  },
  {
    title: '11. Indemnification',
    content: [
      {
        subtitle: 'Your Obligation',
        text: 'You agree to indemnify and hold harmless AI Voice Hub and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including attorney fees) arising from: (a) your use of the Services; (b) your violation of these Terms; (c) your violation of any applicable law, including TCPA; (d) any non-compliant SMS or automated call campaigns you configure; or (e) your clients\' or contacts\' claims arising from interactions with your AI agent.',
      },
    ],
  },
  {
    title: '12. Termination',
    content: [
      {
        subtitle: 'By You',
        text: 'You may cancel your subscription at any time by contacting us at sayedakbar@aivoicehub.site. Cancellation takes effect at the end of your current billing period. The setup fee is non-refundable.',
      },
      {
        subtitle: 'By Us',
        text: 'We may suspend or terminate your account immediately if you breach these Terms, fail to pay fees, or use the Services in a manner that creates legal, regulatory, or reputational risk. Upon termination, your AI agent will be deactivated and access to your data will be available for 30 days for export.',
      },
    ],
  },
  {
    title: '13. Governing Law & Disputes',
    content: [
      {
        subtitle: 'Governing Law',
        text: 'These Terms are governed by the laws of the State of California, without regard to conflict of law provisions.',
      },
      {
        subtitle: 'Dispute Resolution',
        text: 'Any dispute arising from these Terms shall first be addressed through good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to binding arbitration under the American Arbitration Association Commercial Rules in California.',
      },
      {
        subtitle: 'Class Action Waiver',
        text: 'You waive the right to participate in any class action or representative proceeding. All disputes shall be resolved on an individual basis.',
      },
    ],
  },
  {
    title: '14. Contact Us',
    content: [
      {
        subtitle: 'Questions',
        text: 'For questions about these Terms, billing, or your account, contact us at sayedakbar@aivoicehub.site. We aim to respond within 2 business days.',
      },
    ],
  },
]

export default function TermsOfService() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-white w-full">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 65%)' }} />
          <div className="absolute inset-0 opacity-[0.07]"
            style={{ backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-600 text-sm transition-colors mb-8">
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 rounded-full px-4 py-1.5 text-blue-700 text-sm font-medium mb-6">
            <FileText size={13} />
            Legal
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-ghost leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            These Terms govern your use of AI Voice Hub's platform, including our AI voice agents powered by Retell AI, GoHighLevel CRM automation, and n8n workflow integrations.
          </p>
          <p className="text-gray-400 text-sm mt-4 font-mono">Last Updated: April 12, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Intro card */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-[1.5rem] p-8 mb-10">
            <p className="text-gray-700 text-base leading-relaxed">
              These Terms of Service constitute a legally binding agreement between you and AI Voice Hub. Our platform
              delivers AI voice agent services using <strong>Retell AI</strong> for voice conversations,{' '}
              <strong>GoHighLevel (GHL)</strong> for CRM management and automated SMS/email follow-up, and{' '}
              <strong>n8n</strong> for workflow automation. Please read these Terms carefully before subscribing.
            </p>
          </div>

          <div className="space-y-6">
            {sections.map((section, i) => (
              <div key={i} className="bg-white border-2 border-gray-100 rounded-[1.5rem] p-8 hover:border-blue-200 hover:shadow-md transition-all duration-200">
                <h2 className="text-xl font-bold text-ghost mb-6 pb-4 border-b border-gray-100">
                  {section.title}
                </h2>
                <div className="space-y-5">
                  {section.content.map((item, j) => (
                    <div key={j}>
                      <h3 className="text-base font-semibold text-gray-800 mb-1.5">{item.subtitle}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
