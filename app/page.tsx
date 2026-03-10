"use client";

import { useEffect, useRef, useState } from 'react';
import { HomePage, AboutPage, ServicesPage, PortfolioPage, ContactPage } from './components';

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          } else {
            entry.target.classList.remove('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-element');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const currentScrollY = container.scrollTop;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY]);

  return (
    <div className="h-screen w-screen overflow-hidden bg-white text-black">
      <style type="text/tailwindcss">{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .fade-element {
          opacity: 0;
        }
        .fade-element:nth-child(1) {
          animation-delay: 0s;
        }
        .fade-element:nth-child(2) {
          animation-delay: 0.1s;
        }
        .fade-element:nth-child(3) {
          animation-delay: 0.2s;
        }
        .fade-element:nth-child(4) {
          animation-delay: 0.3s;
        }
        .fade-element:nth-child(5) {
          animation-delay: 0.4s;
        }
        .fade-element:nth-child(6) {
          animation-delay: 0.5s;
        }
        ::-webkit-scrollbar {
          width: 0px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: transparent;
        }
        /* Firefox */
        * {
          scrollbar-width: none;
        }
        /* IE and Edge */
        * {
          -ms-overflow-style: none;
        }
      `}</style>

      {/* Fixed Header */}
      <header className={`fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200 transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}>
        
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold"></div>
          <nav className="flex gap-8">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-wider hover:text-gray-500 transition-all hover:scale-110"
              >
                {item.toUpperCase()}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Scrollable Content */}
      <div ref={scrollContainerRef} className="h-full overflow-y-auto scroll-smooth pt-20">
        {/* Home Section */}
        <HomePage />

        {/* About Section */}
        <AboutPage />

        {/* Services Section */}
        <ServicesPage />

        {/* Portfolio Section */}
        <PortfolioPage />

        {/* Contact Section */}
        <ContactPage />

        {/* Footer */}
        <footer className="bg-black text-white py-8">
          <div className="max-w-6xl mx-auto px-16 text-center">
            <p className="text-sm">&copy; 2026 Chua Kai Quan. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}