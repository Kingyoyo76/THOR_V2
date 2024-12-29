import { Button } from '@/components/ui/button'
import { Building2, Shield, FileCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    id: "enterprise",
    title: "Enterprise Architecture",
    challenge: "Managing complex legacy systems while trying to modernize your infrastructure?",
    solution: "We help enterprises transition from rigid legacy systems to flexible, cloud-ready architecture without disrupting operations.",
    capabilities: [
      {
        icon: Building2,
        title: "Infrastructure Modernization",
        description: "Migrate legacy systems to modern cloud platforms with zero downtime"
      },
      {
        icon: Building2,
        title: "Technical Debt Resolution",
        description: "Systematic approach to eliminate technical debt while maintaining business continuity"
      },
      {
        icon: Building2,
        title: "Cloud-Native Architecture",
        description: "Design scalable, resilient systems that leverage cloud capabilities"
      }
    ]
  },
  {
    id: "identity",
    title: "Identity & Access Management",
    challenge: "Struggling with secure access management across cloud and on-premise systems?",
    solution: "We implement zero-trust security frameworks that protect your assets while maintaining operational efficiency.",
    capabilities: [
      {
        icon: Shield,
        title: "Zero-Trust Implementation",
        description: "Secure access control based on continuous verification, not location"
      },
      {
        icon: Shield,
        title: "Identity Governance",
        description: "Automated access reviews and compliance reporting"
      },
      {
        icon: Shield,
        title: "Privileged Access Management",
        description: "Secure and audit privileged account usage across your enterprise"
      }
    ]
  },
  {
    id: "cyber",
    title: "Cyber Risk & Compliance",
    challenge: "Finding it difficult to stay ahead of evolving cyber threats and compliance requirements?",
    solution: "We transform your security posture from reactive to proactive with automated risk management and continuous compliance monitoring.",
    capabilities: [
      {
        icon: FileCheck,
        title: "Continuous Compliance",
        description: "Real-time compliance monitoring across your entire infrastructure"
      },
      {
        icon: FileCheck,
        title: "Automated Risk Management",
        description: "AI-powered threat detection and response"
      },
      {
        icon: FileCheck,
        title: "Security Operations",
        description: "24/7 monitoring and incident response"
      }
    ]
  }
]

export default function ServiceSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.h1 
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Enterprise Solutions
          </motion.h1>
          <motion.p 
            className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Addressing critical challenges in enterprise architecture, security, and compliance
          </motion.p>
        </div>
        <div className="grid gap-20">
          {services.map((service, serviceIndex) => (
            <motion.div
              key={service.id}
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
            >
              <div className="text-left mb-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                  {service.title}
                </h2>
                <p className="text-xl text-[#FF4B11] font-semibold mb-3">
                  {service.challenge}
                </p>
                <p className="text-gray-600 text-lg">
                  {service.solution}
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {service.capabilities.map((capability, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="p-3 bg-[#FF4B11]/10 rounded-full mb-4 self-start">
                      <capability.icon className="w-6 h-6 text-[#FF4B11]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
                    <p className="text-gray-600">{capability.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button className="bg-[#FF4B11] text-white hover:bg-[#FF4B11]/90 transition-colors">
                  Learn More About {service.title}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
