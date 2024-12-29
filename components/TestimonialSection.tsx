'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const clientLogos = [
  { src: '/CWT_logo.jpg', alt: 'CWT' },
  { src: '/Glaxo-SmithKline-PLC_company_logo.jpg', alt: 'GlaxoSmithKline' },
  { src: '/H_MasterLogo_Colour_POS_RGB_Logo.jpg', alt: 'Haleon' },
  { src: '/vantive-baxter.jpg', alt: 'Vantive' }
]

console.log('All logo paths:', clientLogos.map(logo => logo.src));

const stats = [
  { label: 'Years of Experience', value: '15+' },
  { label: 'Successful Projects', value: '500+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Security Experts', value: '50+' }
];

const testimonials = [
  {
    quote: "We hired Thor Group based on a colleague's recommendation because we needed our IAM implementation completed and live by a tight deadline. They delivered beyond our expectations, finishing ahead of schedule and under budget.",
    name: "Sarah Johnson",
    title: "CIO",
    company: "Global Financial Services Inc."
  },
  {
    quote: "Without a doubt, Thor Group has Big Four expertise with boutique delivery. Their personalized approach and deep industry knowledge helped us navigate complex compliance issues with ease.",
    name: "Michael Chen",
    title: "Head of IT Security",
    company: "TechInnovate Solutions"
  },
  {
    quote: "We brought in Thor Group for a cloud maturity assessment, and their findings blew our socks off. They uncovered multiple privileged accounts we didn't know existed and much more. Highly recommend!",
    name: "Emily Rodriguez",
    title: "Cloud Infrastructure Manager",
    company: "E-commerce Giants Ltd."
  },
  {
    quote: "Thor Group's enterprise architecture team helped us align our IT strategy with our business goals. The ROI we've seen in just six months is remarkable. They're not just consultants; they're true partners in our success.",
    name: "David Nkosi",
    title: "COO",
    company: "African Telecom Leaders"
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Randomize the initial testimonial after mount
    setCurrentIndex(Math.floor(Math.random() * testimonials.length))

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 10000) // Change testimonial every 10 seconds

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 sm:py-24 bg-[#0B1221] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 tracking-tight">
          Trusted by <span className="text-[#FF3D00]">Industry Leaders</span>
        </h2>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FF3D00] mb-2">
                {stat.value}
              </div>
              <div className="text-white text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-lg mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <blockquote className="text-lg sm:text-2xl italic mb-6">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div className="flex flex-col items-center">
                <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-gray-400">{testimonials[currentIndex].title}</p>
                <p className="text-gray-400">{testimonials[currentIndex].company}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Client Logos Section */}
        <div className="mt-16 bg-white py-8 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center max-w-6xl mx-auto px-4">
            {clientLogos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="max-h-[60px] w-auto object-contain hover:opacity-80 transition-opacity duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
