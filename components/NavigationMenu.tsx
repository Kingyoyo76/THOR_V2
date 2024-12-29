"use client";

import { useCallback, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface NavigationMenuProps {
  onItemClick?: () => void;
}

const NavigationMenu = ({ onItemClick }: NavigationMenuProps) => {
  const router = useRouter();
  const pathname = usePathname();

  // Handle scroll to section after navigation
  useEffect(() => {
    // Get the hash from the URL
    const hash = window.location.hash;
    if (hash && pathname === '/') {
      // Remove the # from the hash
      const sectionId = hash.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          const offset = 80; // Adjust this value based on your header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100); // Small delay to ensure the page has loaded
      }
    }
  }, [pathname]);

  const scrollToSection = useCallback((sectionId: string) => {
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
    
    if (onItemClick) {
      onItemClick();
    }
  }, [onItemClick, router, pathname]);

  const menuItems = [
    { id: 'services', label: 'Services' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'final-cta', label: 'Contact' }
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="text-white/90 hover:text-[#FF3D00] transition-colors font-medium py-3 md:py-0
                     text-base md:text-sm tracking-wide uppercase
                     flex items-center space-x-2 w-full md:w-auto"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default NavigationMenu;
