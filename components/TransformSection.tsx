'use client';

import { Shield, Users, Zap, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Shield,
    title: 'Identity Access Management',
    description: 'Secure your organization with zero-trust security that protects assets while maintaining operational efficiency.',
    benefits: [
      'Zero-Trust Architecture with continuous verification',
      'Automated access governance and compliance',
      'Privileged account security and auditing',
      'Seamless user experience across platforms'
    ]
  },
  {
    icon: Users,
    title: 'Governance, Risk & Compliance',
    description: 'Transform your security from reactive to proactive with automated risk management and continuous monitoring.',
    benefits: [
      'Real-time compliance monitoring and reporting',
      'AI-powered threat detection and response',
      '24/7 security operations and incident handling',
      'Automated policy enforcement'
    ]
  },
  {
    icon: Zap,
    title: 'Enterprise Architecture',
    description: 'Modernize your infrastructure and eliminate technical debt without disrupting operations.',
    benefits: [
      'Legacy system modernization with zero downtime',
      'Cloud-native architecture implementation',
      'Technical debt elimination strategy',
      'Scalable and resilient system design'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function TransformSection() {
  return (
    <section id="services" className="bg-white text-[#0B1221] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Strengthen Your Security, Together</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't replace your IT team—we amplify it. As a trusted extension of your organization, we bring specialized expertise, proven solutions, and a collaborative approach to enhance your existing strengths. Together, we tackle challenges, optimize operations, and build resilient systems that protect your assets, ensure compliance, and enable your growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-[#FF3D00]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                {<service.icon className="w-8 h-8 text-[#FF3D00]" />}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF3D00] shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
