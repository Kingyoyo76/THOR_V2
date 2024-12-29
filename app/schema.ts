export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Thor Services',
  description: 'Enterprise IT solutions provider specializing in Identity Access Management, IT Governance, and Security Services.',
  url: 'https://thorservices.vercel.app',
  logo: 'https://thorservices.vercel.app/logo.png',
  sameAs: [
    'https://www.linkedin.com/company/thor-services',
    // Add other social media links here
  ],
  address: {
    '@type': 'PostalAddress',
    // Add address details here
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    // Add contact details here
  },
  services: [
    {
      '@type': 'Service',
      name: 'Identity Access Management',
      description: 'Enterprise-grade identity and access management solutions for secure and efficient IT operations.'
    },
    {
      '@type': 'Service',
      name: 'IT Governance Solutions',
      description: 'Comprehensive IT governance frameworks and solutions for enhanced control and compliance.'
    },
    {
      '@type': 'Service',
      name: 'Security Services',
      description: 'Advanced security solutions to protect your organization\'s digital assets and infrastructure.'
    }
  ]
}
