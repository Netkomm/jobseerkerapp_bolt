'use client'
    import Link from 'next/link'
    import { Logo } from './components/Logo'

    export default function Home() {
      return (
        <div className="bg-white">
          {/* Header */}
          <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
              <div className="flex lg:flex-1">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                  <Logo />
                  <h1 className="text-2xl font-bold text-gray-900">JobSeeker.ai</h1>
                </Link>
              </div>
              <div className="flex gap-8">
                <Link href="#features" className="text-sm font-semibold leading-6 text-gray-900">
                  Features
                </Link>
                <Link href="#pricing" className="text-sm font-semibold leading-6 text-gray-900">
                  Pricing
                </Link>
                <Link href="#faq" className="text-sm font-semibold leading-6 text-gray-900">
                  FAQ
                </Link>
              </div>
              <div className="flex lg:flex-1 lg:justify-end">
                <Link
                  href="/auth/login"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </header>

          {/* Hero Section */}
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              className="absolute inset-0 -z-10"
              style={{
                backgroundImage: "url('/images/hero.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.3,
              }}
            />
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Your AI-Powered Job Search Companion
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-900">
                  Streamline your job search with intelligent tools for resume optimization,
                  application tracking, and personalized career recommendations.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    href="/auth/register"
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Start Your Free Trial
                  </Link>
                  <Link href="#features" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div id="features" className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-blue-600">Everything you need</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Powerful Features for Your Job Search
                </p>
              </div>
              <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                  {[
                    {
                      name: 'AI-Powered Resume Optimization',
                      description: 'Get real-time suggestions to improve your resume for specific job postings.',
                      icon: '📄',
                    },
                    {
                      name: 'Application Tracking',
                      description: 'Track all your job applications in one place with detailed status updates.',
                      icon: '📊',
                    },
                    {
                      name: 'Personalized Career Recommendations',
                      description: 'Receive tailored career suggestions based on your skills and personality profile.',
                      icon: '🎯',
                    },
                    {
                      name: 'ATS-Friendly Document Generation',
                      description: 'Create cover letters and resumes optimized for Applicant Tracking Systems.',
                      icon: '🤖',
                    },
                  ].map((feature) => (
                    <div key={feature.name} className="relative pl-16">
                      <div className="text-2xl absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                        {feature.icon}
                      </div>
                      <h3 className="text-base font-semibold leading-7 text-gray-900">{feature.name}</h3>
                      <p className="mt-2 text-sm leading-7 text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div id="pricing" className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Simple, transparent pricing
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Start with our free plan and upgrade as your needs grow.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: 'Free',
                    price: '$0',
                    description: 'Perfect for getting started',
                    features: [
                      '5 AI-generated cover letters/month',
                      'Basic resume optimization',
                      'Application tracking',
                      'Limited career recommendations',
                    ],
                  },
                  {
                    name: 'Pro',
                    price: '$29',
                    description: 'For serious job seekers',
                    features: [
                      'Unlimited cover letters',
                      'Advanced resume optimization',
                      'LinkedIn profile import',
                      'Detailed career recommendations',
                      'Priority support',
                    ],
                  },
                  {
                    name: 'Enterprise',
                    price: 'Custom',
                    description: 'For career coaches and teams',
                    features: [
                      'All Pro features',
                      'Team management',
                      'Custom integrations',
                      'Dedicated account manager',
                      'White-label options',
                    ],
                  },
                ].map((plan) => (
                  <div
                    key={plan.name}
                    className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/10"
                  >
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">{plan.name}</h3>
                    <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
                      {plan.price}
                      {plan.name !== 'Enterprise' && (
                        <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                      )}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-gray-600">{plan.description}</p>
                    <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <svg
                            className="h-6 w-5 flex-none text-blue-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/auth/register"
                      className="mt-8 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      Get started
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div id="faq" className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Frequently asked questions
                </h2>
              </div>
              <div className="mt-16">
                <dl className="space-y-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
                  {[
                    {
                      question: 'How does the AI resume optimization work?',
                      answer:
                        'Our AI analyzes job descriptions and your resume to provide specific suggestions for improvement, including keyword optimization and formatting tips.',
                    },
                    {
                      question: 'Is my data secure?',
                      answer:
                        'Absolutely. We use industry-standard encryption and follow strict data protection protocols to keep your information safe.',
                    },
                    {
                      question: 'Can I cancel my subscription anytime?',
                      answer:
                        'Yes, you can cancel your subscription at any time through your account settings.',
                    },
                    {
                      question: 'Do you offer discounts for students?',
                      answer:
                        'Yes, we offer special pricing for students. Contact our support team with your student ID for more information.',
                    },
                  ].map((faq) => (
                    <div key={faq.question}>
                      <dt className="text-lg font-semibold leading-7 text-gray-900">
                        {faq.question}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
              <div className="flex justify-center space-x-6 md:order-2">
                {[
                  {
                    name: 'Twitter',
                    href: '#',
                    icon: (
                      <svg
                        className="h-6 w-6 text-gray-400 hover:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A4.092 4.092 0 0112 19.527a8.19 8.19 0 01-6.075 1.724 11.616 11.616 0 006.29 1.84" />
                      </svg>
                    ),
                  },
                  {
                    name: 'GitHub',
                    href: '#',
                    icon: (
                      <svg
                        className="h-6 w-6 text-gray-400 hover:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: 'LinkedIn',
                    href: '#',
                    icon: (
                      <svg
                        className="h-6 w-6 text-gray-400 hover:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>
                    {item.icon}
                  </Link>
                ))}
              </div>
              <div className="mt-8 md:order-1 md:mt-0">
                <p className="text-center text-xs leading-5 text-gray-500">
                  &copy; {new Date().getFullYear()} JobSeeker.ai. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      )
    }
