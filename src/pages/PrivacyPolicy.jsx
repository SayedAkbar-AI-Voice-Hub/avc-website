import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ShieldCheck } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      {
        subtitle: 'Information You Provide',
        text: 'When you contact us, request a demo, or sign up for our services, we collect information such as your name, email address, phone number, and business details.',
      },
      {
        subtitle: 'Automatically Collected Information',
        text: 'When you visit our website, we automatically collect certain information about your device, including your IP address, browser type, referring URLs, and pages viewed. We use cookies and similar tracking technologies to enhance your experience.',
      },
      {
        subtitle: 'Call Data',
        text: 'As part of our AI voice agent service, we collect and process call recordings, transcripts, and related metadata on behalf of our business clients. This data is processed in accordance with our client agreements.',
      },
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      {
        subtitle: 'Service Delivery',
        text: 'We use your information to provide, operate, and improve our AI voice agent platform, process transactions, and communicate with you about your account and our services.',
      },
      {
        subtitle: 'Marketing & Communications',
        text: 'With your consent, we may send you promotional communications about new features, special offers, or other information we think you may find interesting. You can opt out at any time.',
      },
      {
        subtitle: 'Analytics & Improvements',
        text: 'We analyze usage patterns and service performance data to improve our AI models, fix bugs, and develop new features. This analysis is performed on aggregated or anonymized data where possible.',
      },
    ],
  },
  {
    title: '3. How We Share Your Information',
    content: [
      {
        subtitle: 'Service Providers',
        text: 'We share information with third-party vendors and service providers who perform services on our behalf, such as cloud hosting, payment processing, and analytics. These parties are bound by confidentiality obligations.',
      },
      {
        subtitle: 'Business Transfers',
        text: 'In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you via email or prominent notice on our website before your information becomes subject to a different privacy policy.',
      },
      {
        subtitle: 'Legal Requirements',
        text: 'We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).',
      },
    ],
  },
  {
    title: '4. Data Security',
    content: [
      {
        subtitle: 'Security Measures',
        text: 'We implement industry-standard security measures including encryption in transit (TLS), encryption at rest, access controls, and regular security audits to protect your information from unauthorized access, disclosure, alteration, or destruction.',
      },
      {
        subtitle: 'No Absolute Guarantee',
        text: 'While we take reasonable steps to protect your data, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.',
      },
    ],
  },
  {
    title: '5. Data Retention',
    content: [
      {
        subtitle: 'Retention Period',
        text: 'We retain your personal information for as long as necessary to provide our services, comply with our legal obligations, resolve disputes, and enforce our agreements. Call recordings and transcripts are retained according to your service plan and can be deleted upon request.',
      },
    ],
  },
  {
    title: '6. Your Rights & Choices',
    content: [
      {
        subtitle: 'Access & Correction',
        text: 'You have the right to access, correct, or update your personal information at any time by contacting us or through your account settings.',
      },
      {
        subtitle: 'Deletion',
        text: 'You may request deletion of your personal information. We will comply unless retention is required for legitimate business or legal purposes.',
      },
      {
        subtitle: 'Opt-Out',
        text: 'You can opt out of marketing emails at any time using the unsubscribe link in any email we send. Note that you may still receive transactional or service-related messages.',
      },
    ],
  },
  {
    title: '7. Cookies & Tracking',
    content: [
      {
        subtitle: 'Cookie Use',
        text: 'We use cookies, web beacons, and similar technologies to remember your preferences, understand how you use our site, and personalize your experience. You can control cookie settings through your browser.',
      },
      {
        subtitle: 'Third-Party Analytics',
        text: 'We use third-party analytics services (such as Google Analytics) that may set their own cookies. These services help us understand website traffic and usage patterns.',
      },
    ],
  },
  {
    title: '8. Children\'s Privacy',
    content: [
      {
        subtitle: 'Age Restriction',
        text: 'Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we learn we have collected such information, we will delete it promptly.',
      },
    ],
  },
  {
    title: '9. Changes to This Policy',
    content: [
      {
        subtitle: 'Updates',
        text: 'We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.',
      },
    ],
  },
  {
    title: '10. Contact Us',
    content: [
      {
        subtitle: 'Questions',
        text: 'If you have questions or concerns about this Privacy Policy or our data practices, please contact us at hello@aivoicehub.com or by calling us directly.',
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
          <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
            We respect your privacy. This policy explains what data we collect, how we use it, and the choices you have.
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
              AI Voice Hub ("we", "us", or "our") operates the AI Voice Hub platform and website. This Privacy Policy
              describes how we collect, use, and share information in connection with your use of our services. By using
              our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
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
