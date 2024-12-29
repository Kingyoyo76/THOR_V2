import { Metadata } from 'next'

export const siteMetadata = {
  title: 'Thor Services - Transform IT Complexity into Results-Driven Simplicity',
  description: 'Thor Services delivers enterprise-grade Identity Access Management, IT Governance Solutions, and Security Services. Transform your IT complexity into streamlined operations with our expert consulting and implementation services.',
  keywords: [
    'Identity Access Management',
    'IT Governance Solutions',
    'IT Security Services',
    'Enterprise IT Solutions',
    'IT Consulting Services',
    'Cyber Security Solutions',
    'IT Project Management',
    'IT Complexity Management',
    'Digital Transformation Services',
    'IT Security Consulting'
  ],
  openGraph: {
    title: 'Thor Services - Enterprise IT Solutions & Security Services',
    description: 'Transform your IT complexity into results-driven simplicity with Thor Services. Expert Identity Access Management, IT Governance, and Security Solutions.',
    url: 'https://thorservices.vercel.app',
    siteName: 'Thor Services',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thor Services - Enterprise IT Solutions',
    description: 'Expert Identity Access Management & IT Security Solutions',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://thorservices.vercel.app',
  },
}
