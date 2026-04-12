import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ShieldCheck } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const sections = [
  {
    title: '1. Who We Are',
    content: [
      {
        subtitle: 'Company',
        text: 'AI Voice Hub ("we", "us", or "our") provides AI-powered voice agent services to local businesses. Our platform uses Retell AI for voice synthesis and conversation handling, n8n for workflow automation and integrations, and GoHighLevel (GHL) for CRM management, pipeline tracking, and automated SMS/email follow-up sequences.',
      },
      {
        subtitle: 'Contact',
        text: 'For any privacy-related questions, reach us at sayedakbar@aivoicehub.site.',
      },
    ],
  },
  {
    title: '2. Information We Collect',
    content: [
      {
        subtitle: 'Information You Provide Directly',
        text: 'When you contact us, book a call, or sign up for our services, we collect your name, email address, phone number, business name, industry, and any details you share about your business needs.',
      },
      {
        subtitle: 'Call Data (Processed via Retell AI)',
        text: 'Our AI voice agents are powered by Retell AI. When a call is placed to or through our system, Retell AI processes the audio in real time to generate a natural voice conversation. This produces call recordings, transcripts, and call metadata (duration, timestamps, caller number). This data is collected on behalf of our business clients and handled in accordance with Retell AI\'s data processing terms.',
      },
      {
        subtitle: 'CRM & Automation Data (via GoHighLevel)',
        text: 'We use GoHighLevel (GHL) as our CRM platform. Contact information captured during calls — including name, phone number, email, and conversation notes — is stored in GHL and used to manage leads, send automated SMS and email follow-up sequences, and track pipeline status on behalf of our clients.',
      },
      {
        subtitle: 'Workflow & Integration Data (via n8n)',
        text: 'We use n8n to automate workflows and connect our tools. Data passing through n8n workflows may include contact information, call outcomes, and CRM updates. n8n processes this data solely to execute the integrations required to deliver our service.',
      },
      {
        subtitle: 'Website Usage Data',
        text: 'When you visit our website, we automatically collect device information, browser type, IP address, referring URLs, and pages visited through standard web analytics tools.',
      },
    ],
  },
  {
    title: '3. How We Use Your Information',
    content: [
      {
        subtitle: 'Delivering the Service',
        text: 'Call data captured by Retell AI is transcribed and delivered to our clients as lead summaries and transcripts. Contact details are entered into GoHighLevel to trigger automated follow-up SMS and email sequences and to manage each lead through the client\'s sales pipeline.',
      },
      {
        subtitle: 'Workflow Automation',
        text: 'n8n workflows process call outcomes and route data between Retell AI, GoHighLevel, and any third-party tools connected on behalf of our clients (e.g., calendar booking platforms, notification systems).',
      },
      {
        subtitle: 'Communications',
        text: 'We use your contact information to send service-related updates, onboarding materials, and — with your consent — marketing communications about our services. You can opt out of marketing messages at any time.',
      },
      {
        subtitle: 'Improving Our AI',
        text: 'Aggregated and anonymised call data may be used to improve the performance and accuracy of our AI voice agent configurations. Personally identifiable information is not used for AI training without explicit client consent.',
      },
    ],
  },
  {
    title: '4. Third-Party Services We Use',
    content: [
      {
        subtitle: 'Retell AI',
        text: 'Retell AI powers our voice agent conversations. It processes audio in real time, generates voice responses, and produces call transcripts. Retell AI acts as a data processor on our behalf. Their privacy practices are governed by Retell AI\'s Privacy Policy.',
      },
      {
        subtitle: 'GoHighLevel (GHL)',
        text: 'GoHighLevel is our CRM and marketing automation platform. Contact records, pipeline stages, SMS messages, and email sequences are managed within GHL. GHL acts as a data processor on our behalf, and their use of data is governed by GoHighLevel\'s Privacy Policy.',
      },
      {
        subtitle: 'n8n',
        text: 'n8n is our workflow automation platform, used to connect Retell AI, GoHighLevel, and other tools. Data flowing through n8n is processed only as needed to execute these workflows. n8n\'s privacy practices are governed by their Privacy Policy.',
      },
      {
        subtitle: 'Calendar Booking (Cal.com)',
        text: 'We use Cal.com for scheduling discovery calls and onboarding appointments. When you book through our site, Cal.com collects your name, email, and availability preferences under their own Privacy Policy.',
      },
      {
        subtitle: 'Other Processors',
        text: 'We may use additional processors for hosting, analytics, and communications. All third-party processors are bound by data processing agreements and are required to protect your information.',
      },
    ],
  },
  {
    title: '5. SMS & Email Communications',
    content: [
      {
        subtitle: 'Automated SMS via GoHighLevel',
        text: 'As part of our service, automated SMS messages may be sent to leads and contacts on behalf of our business clients using GoHighLevel. These messages are triggered by call outcomes and are sent in the client\'s name. Recipients can opt out of SMS at any time by replying STOP.',
      },
      {
        subtitle: 'Email Sequences',
        text: 'Automated email follow-up sequences are sent via GoHighLevel on behalf of our clients. Each email includes an unsubscribe option. We comply with CAN-SPAM and applicable email marketing regulations.',
      },
      {
        subtitle: 'Consent',
        text: 'By providing a phone number or email address to a business using our service, you may receive automated follow-up communications from that business. Our clients are responsible for obtaining appropriate consent from their own contacts.',
      },
    ],
  },
  {
    title: '6. Data Sharing',
    content: [
      {
        subtitle: 'With Our Clients',
        text: 'Call transcripts, lead summaries, and contact data captured by our system are shared with the business client that deployed the AI voice agent. Our clients control how they use this data within their own operations.',
      },
      {
        subtitle: 'With Service Providers',
        text: 'We share data with Retell AI, GoHighLevel, n8n, and other processors only as necessary to provide the service. These providers are not permitted to use your data for their own purposes.',
      },
      {
        subtitle: 'Legal Requirements',
        text: 'We may disclose information if required by law, court order, or governmental authority. We will notify affected parties where legally permitted to do so.',
      },
      {
        subtitle: 'Business Transfers',
        text: 'In the event of a merger, acquisition, or asset sale, your information may be transferred. We will notify you before your data becomes subject to a different privacy policy.',
      },
    ],
  },
  {
    title: '7. Data Retention',
    content: [
      {
        subtitle: 'Call Recordings & Transcripts',
        text: 'Call recordings and transcripts processed through Retell AI are retained for the period specified in your service agreement. Clients may request deletion of call data at any time by contacting us at sayedakbar@aivoicehub.site.',
      },
      {
        subtitle: 'CRM Records',
        text: 'Contact records stored in GoHighLevel are retained for the duration of the client engagement. Upon termination of services, client data is deleted or returned within 30 days upon written request.',
      },
      {
        subtitle: 'Website Data',
        text: 'Website analytics data is retained for up to 12 months.',
      },
    ],
  },
  {
    title: '8. Your Rights',
    content: [
      {
        subtitle: 'Access & Correction',
        text: 'You may request access to or correction of any personal information we hold about you by contacting sayedakbar@aivoicehub.site.',
      },
      {
        subtitle: 'Deletion',
        text: 'You may request deletion of your personal data. We will fulfil requests unless retention is required by law or a legitimate business obligation.',
      },
      {
        subtitle: 'Opt-Out of Communications',
        text: 'Reply STOP to any SMS to opt out immediately. Use the unsubscribe link in any email. For other requests, contact us directly.',
      },
      {
        subtitle: 'California Residents (CCPA)',
        text: 'California residents have the right to know what personal information is collected, request deletion, and opt out of the sale of personal information. We do not sell personal information.',
      },
    ],
  },
  {
    title: '9. Data Security',
    content: [
      {
        subtitle: 'Security Measures',
        text: 'We implement industry-standard safeguards including TLS encryption in transit, access controls, and secure API integrations between Retell AI, GoHighLevel, and n8n. However, no system is 100% secure and we cannot guarantee absolute protection.',
      },
    ],
  },
  {
    title: '10. Children\'s Privacy',
    content: [
      {
        subtitle: 'Age Restriction',
        text: 'Our services are not directed to individuals under 18. We do not knowingly collect personal information from minors. If we become aware of such collection, we will delete the data promptly.',
      },
    ],
  },
  {
    title: '11. Changes to This Policy',
    content: [
      {
        subtitle: 'Updates',
        text: 'We may update this Privacy Policy from time to time. We will notify you of material changes by posting the revised policy on this page and updating the date below. Continued use of our services after changes constitutes acceptance.',
      },
    ],
  },
  {
    title: '12. Contact Us',
    content: [
      {
        subtitle: 'Questions',
        text: 'For any questions about this Privacy Policy or your data, please contact us at sayedakbar@aivoicehub.site. We aim to respond within 5 business days.',
      },
    ],
  },
]

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-white w-full">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #7B61FF 0%, transparent 65%)' }} />
          <div className="absolute inset-0 opacity-[0.07]"
            style={{ backgroundImage: 'radial-gradient(circle, #7B61FF 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-600 text-sm transition-colors mb-8">
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-300 rounded-full px-4 py-1.5 text-purple-700 text-sm font-medium mb-6">
            <ShieldCheck size={13} />
            Legal
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-ghost leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            We are committed to transparency. This policy explains exactly what data our platform collects — including through Retell AI, GoHighLevel, and n8n — and how it is used and protected.
          </p>
          <p className="text-gray-400 text-sm mt-4 font-mono">Last Updated: April 12, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Intro card */}
          <div className="bg-purple-50 border-2 border-purple-200 rounded-[1.5rem] p-8 mb-10">
            <p className="text-gray-700 text-base leading-relaxed">
              AI Voice Hub operates an AI voice agent platform that handles inbound calls for local businesses. Our stack
              includes <strong>Retell AI</strong> (voice agent conversations), <strong>GoHighLevel</strong> (CRM, SMS & email
              automation), and <strong>n8n</strong> (workflow automation and integrations). This policy covers all data
              collected and processed across these systems.
            </p>
          </div>

          <div className="space-y-6">
            {sections.map((section, i) => (
              <div key={i} className="bg-white border-2 border-gray-100 rounded-[1.5rem] p-8 hover:border-purple-200 hover:shadow-md transition-all duration-200">
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
