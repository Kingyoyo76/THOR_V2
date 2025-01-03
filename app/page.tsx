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

export default function Home() {
  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main>
        <HeroSection />
        <TransformSection />
        <ExpertiseSection />
        <StaffAugmentationSection />
        <TestimonialSection />
        <FinalCTASection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
