import Image from 'next/image';

const Features = () => {
  const features = [
    {
      icon: '/images/icon-snappy-process.svg',
      title: 'Snappy Process',
      description: "Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms."
    },
    {
      icon: '/images/icon-affordable-prices.svg',
      title: 'Affordable Prices',
      description: "We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
    },
    {
      icon: '/images/icon-people-first.svg',
      title: 'People First',
      description: "Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it."
    }
  ];

  return (
    <section className="pt-40 pb-32 md:pt-72 md:pb-40 bg-very-light-gray relative">
      <div className="container mx-auto px-6">
        {/* Horizontal line - visible on both mobile and desktop */}
        <div className="w-40 h-[1px] bg-dark-grayish-violet mb-10 mx-auto md:mx-0"></div>
        
        <h2 className="text-4xl md:text-5xl text-very-dark-violet text-center md:text-left mb-16">
          We're different
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-8">
                <Image 
                  src={feature.icon} 
                  alt="" 
                  width={86} 
                  height={86}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-2xl text-very-dark-violet mb-4">
                {feature.title}
              </h3>
              <p className="text-dark-grayish-violet">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
