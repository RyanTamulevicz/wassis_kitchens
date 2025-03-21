import type React from "react";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero(props: { children: React.ReactNode }) {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='relative min-h-screen flex items-center'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>{props.children}</div>

      <div className='container relative z-10 pt-20'>
        <div className='max-w-3xl text-white'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
            Transform Your Backyard Into An Outdoor Culinary Paradise
          </h1>
          <p className='text-lg md:text-xl mb-8 text-white/90'>
            Custom outdoor kitchen design and installation by Wassi's - bringing
            quality craftsmanship to your home since 1986.
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Button
              asChild
              size='lg'
              className='bg-primary hover:bg-primary/90 text-white'
            >
              <a
                href='#contact'
                onClick={(e) => scrollToSection(e, "#contact")}
              >
                Get a Free Quote
              </a>
            </Button>
            <Button
              asChild
              size='lg'
              variant='outline'
              className='bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20'
            >
              <a
                href='#services'
                onClick={(e) => scrollToSection(e, "#services")}
              >
                Explore Our Services
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce'>
        <a
          href='#about'
          onClick={(e) => scrollToSection(e, "#about")}
          className='flex flex-col items-center'
        >
          <span className='text-sm mb-2'>Scroll Down</span>
          <ChevronDown className='h-6 w-6' />
        </a>
      </div>
    </div>
  );
}
