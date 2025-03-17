import Link from 'next/link';
import Image from 'next/image';

const CTA = () => {
  return (
    <section className="py-16 md:py-20 bg-very-light-gray">
      <div className="container mx-auto px-6">
        <div className="relative bg-dark-violet py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
          {/* Background pattern */}
          <div className="absolute right-0 top-0 hidden md:block">
            <Image 
              src="/images/bg-pattern-how-we-work-desktop.svg" 
              alt="" 
              width={434} 
              height={250}
              aria-hidden="true"
            />
          </div>
          <div className="absolute right-0 top-0 md:hidden">
            <Image 
              src="/images/bg-pattern-how-we-work-mobile.svg" 
              alt="" 
              width={176} 
              height={317}
              aria-hidden="true"
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white text-center md:text-left mb-8 md:mb-0 md:w-2/3 relative z-10">
            Find out more about how we work
          </h2>
          
          <Link href="#" className="btn btn-light relative z-10">
            How we work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
