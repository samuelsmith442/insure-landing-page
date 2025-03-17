import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/images/logo.svg" alt="Insure Logo" width={112} height={18} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="uppercase text-dark-grayish-violet text-sm font-bold tracking-wide hover:text-very-dark-violet">
              How we work
            </Link>
            <Link href="#" className="uppercase text-dark-grayish-violet text-sm font-bold tracking-wide hover:text-very-dark-violet">
              Blog
            </Link>
            <Link href="#" className="uppercase text-dark-grayish-violet text-sm font-bold tracking-wide hover:text-very-dark-violet">
              Account
            </Link>
            <Link href="#" className="btn btn-dark">
              View plans
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <Image 
              src={isMenuOpen ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"} 
              alt={isMenuOpen ? "Close Menu" : "Open Menu"}
              width={32} 
              height={32} 
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-very-dark-violet z-40 overflow-hidden">
          <div className="relative h-full w-full flex flex-col items-center justify-start pt-10 pb-20 px-6">
            <div className="absolute bottom-0 right-0 w-full">
              <Image 
                src="/images/bg-pattern-mobile-nav.svg" 
                alt="" 
                width={375} 
                height={218} 
                className="w-full"
                aria-hidden="true"
              />
            </div>
            <nav className="flex flex-col items-center space-y-8 w-full relative z-10">
              <Link href="#" className="uppercase text-white text-xl font-bold tracking-wide">
                How we work
              </Link>
              <Link href="#" className="uppercase text-white text-xl font-bold tracking-wide">
                Blog
              </Link>
              <Link href="#" className="uppercase text-white text-xl font-bold tracking-wide">
                Account
              </Link>
              <Link href="#" className="btn btn-light w-full text-center py-3 mt-4">
                View plans
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
