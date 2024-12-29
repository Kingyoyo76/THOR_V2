'use client'

import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast, Toaster } from 'sonner'
import { Linkedin, Twitter } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleComingSoon = (item: string) => {
    toast(`${item} Coming Soon!`, {
      description: "We're working on something exciting! Check back soon for updates.",
    })
  }

  const handleSectionClick = (sectionId: string) => {
    if (pathname === '/') {
      // If we're already on the home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If we're on another page, navigate home with the hash
      router.push(`/#${sectionId}`);
    }
  }

  return (
    <footer className="bg-[#0B1221] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400 text-sm">
            Thor Services transforms IT complexity into results-driven simplicity, helping organizations take control of their digital future.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <button onClick={() => handleSectionClick('expertise')} className="text-gray-400 hover:text-white text-sm">
                Identity Access Management
              </button>
            </li>
            <li>
              <button onClick={() => handleSectionClick('expertise')} className="text-gray-400 hover:text-white text-sm">
                IT Governance
              </button>
            </li>
            <li>
              <button onClick={() => handleSectionClick('expertise')} className="text-gray-400 hover:text-white text-sm">
                Security Services
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/faq" className="text-gray-400 hover:text-white text-sm">
                FAQ
              </Link>
            </li>
            <li>
              <button onClick={() => handleComingSoon('Privacy Policy')} className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </button>
            </li>
            <li>
              <button onClick={() => handleComingSoon('Terms of Service')} className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <button onClick={() => handleComingSoon('LinkedIn')} className="text-gray-400 hover:text-white">
              <Linkedin className="h-6 w-6" />
            </button>
            <button onClick={() => handleComingSoon('Twitter')} className="text-gray-400 hover:text-white">
              <Twitter className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800">
        <p className="text-center text-gray-400 text-sm">
          {new Date().getFullYear()} Thor Services. All rights reserved.
        </p>
      </div>
      <Toaster 
        theme="dark"
        position="top-center"
        toastOptions={{
          style: { 
            background: '#0B1221',
            border: '1px solid #FF3D00',
            color: 'white',
          }
        }}
      />
    </footer>
  )
}
