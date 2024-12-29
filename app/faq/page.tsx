'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { motion } from 'framer-motion';

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow"
      >
        <div className="pt-24 pb-12">
          <FAQSection />
        </div>
      </motion.main>
      <Footer />
    </div>
  );
}
