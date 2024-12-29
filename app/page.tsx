'use client'

import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import TransformSection from '@/components/TransformSection'
import ExpertiseSection from '@/components/ExpertiseSection'
import StaffAugmentationSection from '@/components/StaffAugmentationSection'
import TestimonialSection from '@/components/TestimonialSection'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import FinalCTASection from '@/components/FinalCTASection'
import { useEffect } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thor Services - Transform IT Complexity into Results-Driven Simplicity',
  description: 'Thor Services helps organizations take control of IT chaos, simplify operations, enhance security, and drive success through innovative IT solutions.',
}

export default function Home() {
  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <HeroSection />
      <TransformSection />
      <ExpertiseSection />
      <StaffAugmentationSection />
      <TestimonialSection />
      <FinalCTASection />
      <Footer />
      <BackToTop />
    </div>
  )
}
