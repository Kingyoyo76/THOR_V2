'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import MeetingModal from './MeetingModal';
import ContactFormModal from './ContactFormModal';
import ScrollingPoints from './ScrollingPoints';
import { motion } from "framer-motion";

export default function FinalCTASection() {
  const [showMeetings, setShowMeetings] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleScheduleMeeting = () => {
    setShowMeetings(true);
  };

  const handleContactUs = () => {
    setShowContactForm(true);
  };

  const handleCloseMeeting = () => {
    setShowMeetings(false);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <section id="final-cta" className="relative bg-white text-[#0B1221] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Ready to Transform Your IT?
            </h2>
            
            <div className="mb-16">
              <ScrollingPoints className="w-full" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-[#FF3D00] hover:bg-[#FF3D00]/90 text-white rounded-full text-lg sm:text-xl py-6 px-8 sm:px-12 font-bold transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              onClick={handleScheduleMeeting}
            >
              Schedule a Strategy Session
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto border-2 border-[#FF3D00] text-[#FF3D00] hover:bg-[#FF3D00] hover:text-white rounded-full text-lg sm:text-xl py-6 px-8 sm:px-12 font-bold transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              onClick={handleContactUs}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      <MeetingModal isOpen={showMeetings} onClose={handleCloseMeeting} />
      <ContactFormModal isOpen={showContactForm} onClose={handleCloseContactForm} />
    </section>
  );
}
