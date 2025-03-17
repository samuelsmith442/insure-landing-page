import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative">
      {/* Mobile image at the top - only visible on mobile */}
      <div className="md:hidden w-full">
        <Image 
          src="/images/image-intro-mobile.jpg" 
          alt="Family walking together" 
          width={375} 
          height={451}
          className="w-full"
          priority
        />
      </div>

      <section className="relative bg-dark-violet overflow-visible">
        {/* Background patterns */}
        <div className="absolute right-0 top-0 hidden md:block z-20">
          <Image 
            src="/images/bg-pattern-intro-right-desktop.svg" 
            alt="" 
            width={436} 
            height={593}
            aria-hidden="true"
          />
        </div>
        
        {/* Mobile left pattern - positioned to match design */}
        <div className="absolute left-0 top-0 md:hidden z-10">
          <Image 
            src="/images/bg-pattern-intro-left-mobile.svg" 
            alt="" 
            width={168} 
            height={165}
            aria-hidden="true"
          />
        </div>
        
        {/* Mobile right pattern - positioned to match design */}
        <div className="absolute right-0 bottom-[-50%] md:hidden z-10">
          <Image 
            src="/images/bg-pattern-intro-right-mobile.svg" 
            alt="" 
            width={124} 
            height={330}
            aria-hidden="true"
          />
        </div>

        <div className="container mx-auto px-0 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="text-center md:text-left md:w-1/2 px-6 md:px-0 pt-20 pb-24 md:py-28">
              {/* Horizontal line for desktop - moved directly above the heading */}
              <div className="hidden md:block w-40 h-[1px] bg-white mb-8"></div>
              
              <h1 className="font-serif text-[42px] leading-[1.1] md:text-5xl lg:text-6xl text-white mb-5">
                Humanizing<br className="md:hidden"/> your insurance.
              </h1>
              <p className="text-white text-base md:text-lg mb-8 max-w-md mx-auto md:mx-0 opacity-90">
                Get your life insurance coverage easier and faster. We blend our expertise 
                and technology to help you find the plan that&apos;s right for you. Ensure you 
                and your loved ones are protected.
              </p>
              <Link href="#" className="btn btn-light inline-block relative z-20 uppercase tracking-widest">
                View plans
              </Link>
            </div>
            
            {/* Desktop image container */}
            <div className="hidden md:block md:w-1/2 relative overflow-visible">
              {/* Image wrapper with controlled width */}
              <div className="absolute right-0 md:right-[5%] lg:right-[10%] bottom-0 translate-y-[75%] z-10">
                <div className="relative" style={{ width: '540px', maxWidth: '100%' }}>
                  <Image 
                    src="/images/image-intro-desktop.jpg" 
                    alt="Family walking together" 
                    width={540} 
                    height={650}
                    style={{
                      maxWidth: '100%',
                      height: 'auto'
                    }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Left pattern positioned outside the section for proper overflow */}
      <div className="absolute left-0 top-[70%] hidden md:block" style={{ zIndex: 10 }}>
        <Image 
          src="/images/bg-pattern-intro-left-desktop.svg" 
          alt="" 
          width={156} 
          height={403}
          aria-hidden="true"
          className="max-w-none"
        />
      </div>
    </div>
  );
};

export default Hero;
