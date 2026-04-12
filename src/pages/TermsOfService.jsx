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
        text: 'By accessing or using the AI Voice Hub platform, website, or any related services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our Services.',
      },
      {
        subtitle: 'Changes',
        text: 'We reserve the right to modify these Terms at any time. We will provide notice of material changes by updating the date at the top of this page or via email. Continued use of the Services after changes constitutes acceptance of the revised Terms.',
      },
    ],
  },
  {
    title: '2. Description of Services',
    content: [
      {
        subtitle: 'AI Voice Agent Platform',
        text: 'AI Voice Hub provides an AI-powered voice agent platform that handles inbound calls, captures leads, books appointments, and automates follow-up communications on behalf of business clients.',
      },
      {
        subtitle: 'Service Plans',
        text: 'We offer multiple service tiers with varying features and usage limits as described on our pricing page. Your rights and obligations may vary depending on the plan you select.',
      },
    ],
  },
  {
    title: '3. Account Registration & Responsibilities',
    content: [
      {
        subtitle: 'Account Creation',
        text: 'To use our Services, you must create an account and provide accurate, complete, and current information. You are responsible for maintaining the security of your account credentials.',
      },
      {
        subtitle: 'Authorized Use',
        text: 'You agree to use the Services only for lawful business purposes and in compliance with all applicable laws and regulations, including telecommunications laws in your jurisdiction.',
      },
      {
        subtitle: 'Account Security',
        text: 'You are responsible for all activity that occurs under your account. Notify us immediately at hello@aivoicehub.com if you suspect unauthorized use of your account.',
      },
    ],
  },
  {
    title: '4. Fees & Payment',
    content: [
      {
        subtitle: 'Billing',
        text: 'Subscription fees are billed in advance on a monthly or annual basis depending on your selected plan. All fees are non-refundable except as expressly provided in these Terms.',
      },
      {
        subtitle: 'Price Changes',
        text: 'We may change our pricing at any time. We will provide at least 30 days notice before a price increase takes effect for existing subscribers.',
      },
      {
        subtitle: 'Taxes',
        text: 'You are responsible for all applicable taxes associated with your use of the Services. Prices displayed do not include taxes unless expressly stated.',
      },
    ],
  },
  {
    title: '5. Acceptable Use',
    content: [
      {
        subtitle: 'Prohibited Conduct',
        text: 'You may not use our Services to: (a) violate any law or regulation; (b) harass, abuse, or harm any person; (c) transmit spam or unsolicited communications; (d) interfere with or disrupt the Services or servers; (e) attempt to gain unauthorized access to any portion of the Services; or (f) use the Services for any fraudulent or deceptive purpose.',
      },
      {
        subtitle: 'Call Compliance',
        text: 'You are solely responsible for ensuring that your use of our AI voice agents complies with the Telephone Consumer Protection Act (TCPA), the FTC\'s Telemarketing Sales Rule, and any other applicable federal, state, or local laws governing telephone communications and automated calling.',
      },
      {
        subtitle: 'Disclosure Requirements',
        text: 'You agree to comply with all applicable legal requirements regarding disclosure of AI or automated communications to call recipients, including any requirements to disclose that a caller is speaking with an automated system.',
      },
    ],
  },
  {
    title: '6. Intellectual Property',
    content: [
      {
        subtitle: 'Our IP',
        text: 'The Services, including all software, AI models, algorithms, interfaces, documentation, and content provided by AI Voice Hub, are owned by us or our licensors and are protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable license to use the Services for your business purposes.',
      },
      {
        subtitle: 'Your Content',
        text: 'You retain ownership of any content, data, or materials you provide to us through the Services ("Your Content"). You grant us a worldwide, royalty-free license to use, process, and store Your Content solely as necessary to provide the Services.',
      },
    ],
  },
  {
    title: '7. Confidentiality',
    content: [
      {
        subtitle: 'Mutual Confidentiality',
        text: 'Each party agrees to keep confidential any non-public information disclosed by the other party in connection with the Services and to use such information only as necessary to fulfill obligations under these Terms.',
      },
    ],
  },
  {
    title: '8. Disclaimers',
    content: [
      {
        subtitle: 'As-Is Basis',
        text: 'THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.',
      },
      {
        subtitle: 'No Guarantee of Results',
        text: 'We do not guarantee any specific business results from using our Services. Lead capture rates, booking rates, and revenue outcomes vary and depend on factors outside our control.',
      },
    ],
  },
  {
    title: '9. Limitation of Liability',
    content: [
      {
        subtitle: 'Cap on Liability',
        text: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, AI VOICE HUB\'S TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE FEES PAID BY YOU IN THE THREE (3) MONTHS PRECEDING THE CLAIM.',
      },
      {
        subtitle: 'Exclusion of Damages',
        text: 'IN NO EVENT SHALL AI VOICE HUB BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.',
      },
    ],
  },
  {
    title: '10. Indemnification',
    content: [
      {
        subtitle: 'Your Obligation',
        text: 'You agree to indemnify, defend, and hold harmless AI Voice Hub and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys\' fees) arising out of or related to: (a) your use of the Services; (b) Your Content; (c) your violation of these Terms; or (d) your violation of any applicable law.',
      },
    ],
  },
  {
    title: '11. Termination',
    content: [
      {
        subtitle: 'By You',
        text: 'You may cancel your subscription at any time through your account settings or by contacting us. Cancellation takes effect at the end of your current billing period.',
      },
      {
        subtitle: 'By Us',
        text: 'We may suspend or terminate your account immediately if you breach these Terms, fail to pay fees, or use the Services in a way that poses legal or reputational risk to us. Upon termination, your right to use the Services ceases immediately.',
      },
    ],
  },
  {
    title: '12. Governing Law & Disputes',
    content: [
      {
        subtitle: 'Governing Law',
        text: 'These Terms are governed by the laws of the State of California, without regard to its conflict of law provisions.',
      },
      {
        subtitle: 'Dispute Resolution',
        text: 'Any dispute arising out of or relating to these Terms or the Services shall be resolved through binding arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules. The arbitration shall take place in California.',
      },
      {
        subtitle: 'Class Action Waiver',
        text: 'You agree that any arbitration or proceeding shall be limited to the dispute between you and us individually. You waive the right to participate in any class action lawsuit or class-wide arbitration.',
      },
    ],
  },
  {
    title: '13. Contact Us',
    content: [
      {
        subtitle: 'Questions',
        text: 'If you have any questions about these Terms of Service, please contact us at hello@aivoicehub.com or call us directly. We are happy to clarify any aspect of these terms.',
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
          <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
            Please read these terms carefully before using AI Voice Hub. They govern your use of our platform and services.
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
              These Terms of Service ("Terms") constitute a legally binding agreement between you and AI Voice Hub
              regarding your use of the AI Voice Hub platform, website, and associated services. These Terms apply to all
              visitors, users, and clients. Please read them carefully.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
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
