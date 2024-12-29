export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Thor Services',
  description: 'Enterprise IT solutions provider specializing in Identity Access Management, IT Governance, and Security Services.',
  url: 'https://thorservices.vercel.app',
  logo: 'https://thorservices.vercel.app/logos/thor-logo.png',
  sameAs: [
    'https://www.linkedin.com/company/thor-services',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'contact@thorservices.com',
    availableLanguage: ['English']
  },
  offers: {
    '@type': 'Offer',
    itemOffered: [
      {
        '@type': 'Service',
        name: 'Identity Access Management',
        description: 'Enterprise-grade identity and access management solutions that reduce operational downtime by up to 40% through streamlined access controls and enhanced security measures.',
        serviceType: 'IT Security',
        provider: {
          '@type': 'Organization',
          name: 'Thor Services'
        }
      },
      {
        '@type': 'Service',
        name: 'IT Governance Solutions',
        description: 'Comprehensive IT governance frameworks that improve compliance efficiency by 30% through automated risk assessments and streamlined reporting processes.',
        serviceType: 'IT Governance',
        provider: {
          '@type': 'Organization',
          name: 'Thor Services'
        }
      },
      {
        '@type': 'Service',
        name: 'Enterprise Architecture',
        description: 'Strategic enterprise architecture solutions that optimize IT infrastructure, reducing costs by an average of 20% annually while improving operational efficiency.',
        serviceType: 'IT Consulting',
        provider: {
          '@type': 'Organization',
          name: 'Thor Services'
        }
      }
    ]
  }
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Enterprise Architecture (EA) and why is it crucial for businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enterprise Architecture is a strategic framework that aligns an organization\'s business vision with its IT infrastructure. It helps organizations make informed decisions about technology investments, reduce operational costs by up to 20% annually, improve business agility, and ensure that IT initiatives support business goals. EA provides a roadmap for digital transformation while maintaining operational excellence.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does Governance, Risk, and Compliance (GRC) impact business operations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GRC is vital for maintaining organizational integrity and protecting business value. Our GRC solutions improve compliance efficiency by 30% through automated risk assessments and reporting. It ensures that business activities, IT operations, and risk management are aligned with business objectives while complying with regulations, preventing costly breaches and maintaining stakeholder trust.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is Identity Access Management (IAM) and how does it benefit organizations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Identity Access Management (IAM) is a framework of policies and technologies ensuring that the right users have appropriate access to technology resources. Our IAM solutions reduce operational downtime by up to 40% through streamlined access controls and enhanced security measures, while ensuring compliance and operational efficiency in modern enterprises.'
      }
    }
  ]
}
