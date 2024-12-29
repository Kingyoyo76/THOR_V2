'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is Enterprise Architecture (EA) and why is it crucial for businesses?",
    answer: "Enterprise Architecture is a strategic framework that aligns an organization's business vision with its IT infrastructure. It's crucial because it helps organizations make informed decisions about technology investments, reduce operational costs, improve business agility, and ensure that IT initiatives support business goals. EA provides a roadmap for digital transformation while maintaining operational excellence."
  },
  {
    question: "How does Governance, Risk, and Compliance (GRC) impact business operations?",
    answer: "GRC is vital for maintaining organizational integrity and protecting business value. It ensures that business activities, IT operations, and risk management are aligned with business objectives while complying with regulations. Effective GRC helps prevent costly breaches, maintains stakeholder trust, and provides a structured approach to decision-making and risk mitigation."
  },
  {
    question: "What is Identity Access Management (IAM) and why is it important?",
    answer: "Identity Access Management (IAM) is a framework of policies and technologies ensuring that the right users have appropriate access to technology resources. It's crucial for security, compliance, and operational efficiency in modern enterprises, helping prevent unauthorized access while streamlining user authentication and authorization processes."
  },
  {
    question: "How can Thor Services help with IT Governance?",
    answer: "Thor Services provides comprehensive IT Governance solutions that help organizations align their IT strategy with business objectives. We implement frameworks for decision-making, establish clear accountability, ensure regulatory compliance, and optimize resource utilization while maintaining security and efficiency. Our approach includes policy development, process optimization, and continuous monitoring."
  },
  {
    question: "What are the key components of Enterprise Architecture implementation?",
    answer: "Enterprise Architecture implementation involves several key components: Business Architecture (defining business strategy and processes), Application Architecture (mapping software applications and their interactions), Data Architecture (organizing data assets and flows), and Technology Architecture (specifying hardware and infrastructure). We help organizations develop and integrate these components while ensuring alignment with business objectives."
  },
  {
    question: "How does Thor Services approach risk management in IT projects?",
    answer: "We take a comprehensive approach to risk management that includes: identifying potential risks early in the project lifecycle, assessing their potential impact, developing mitigation strategies, implementing controls, and continuous monitoring. Our risk management framework covers cybersecurity, operational, compliance, and strategic risks while ensuring business continuity."
  },
  {
    question: "What security services does Thor Services offer?",
    answer: "We offer a full suite of security services including security assessments, implementation of security controls, identity management, access governance, and ongoing security monitoring and management. Our services are designed to protect your digital assets while ensuring compliance with industry regulations."
  },
  {
    question: "How does Thor Services handle complex IT transformations?",
    answer: "We approach IT transformations with a methodical process: assessment of current state, development of transformation strategy, careful implementation with minimal disruption, and continuous monitoring and optimization. Our expertise in Enterprise Architecture ensures that transformations align with business goals while maintaining operational stability."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get answers to common questions about our services and solutions
          </p>
        </div>

        <div className="mx-auto max-w-4xl mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="rounded-lg border border-gray-200 bg-white"
              initial={false}
            >
              <button
                className="flex w-full items-center justify-between px-4 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                className="overflow-hidden"
                style={{
                  height: openIndex === index ? 'auto' : 0
                }}
              >
                <div className="p-4 pt-0">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
