import { motion } from 'framer-motion';
import { Shield, Settings, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Shield,
    title: 'Identity Access Management',
    description: 'Secure and streamline your organization\'s digital access with our comprehensive IAM solutions. We help reduce operational downtime by up to 40% through intelligent access controls and enhanced security measures.',
    metrics: '40% reduction in operational downtime',
    features: [
      'Automated user provisioning',
      'Multi-factor authentication',
      'Access governance',
      'Identity lifecycle management'
    ]
  },
  {
    icon: Settings,
    title: 'Governance & Risk',
    description: 'Transform your IT governance with our proven frameworks that improve compliance efficiency by 30%. Our automated risk assessments and streamlined reporting processes ensure your organization stays ahead of regulatory requirements.',
    metrics: '30% improvement in compliance efficiency',
    features: [
      'Risk assessment automation',
      'Compliance monitoring',
      'Policy management',
      'Audit readiness'
    ]
  },
  {
    icon: Network,
    title: 'Enterprise Architecture',
    description: 'Optimize your IT infrastructure with our enterprise architecture solutions, reducing costs by an average of 20% annually. We align your technology landscape with business objectives for maximum efficiency and innovation.',
    metrics: '20% reduction in annual IT costs',
    features: [
      'Technology optimization',
      'Legacy modernization',
      'Cloud strategy',
      'Integration design'
    ]
  }
];

export default function CoreServicesSection() {
  return (
    <section id="core-services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Core Services
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Delivering measurable results through expert IT solutions
          </p>
        </motion.div>

        <div className="mx-auto grid gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg border bg-white p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <service.icon className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              <p className="text-gray-500 mb-4">{service.description}</p>
              <div className="bg-blue-50 p-3 rounded-lg mb-4">
                <p className="text-blue-700 font-semibold">{service.metrics}</p>
              </div>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
