import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Our company',
      links: [
        { name: 'How we work', href: '#' },
        { name: 'Why Insure?', href: '#' },
        { name: 'View plans', href: '#' },
        { name: 'Reviews', href: '#' }
      ]
    },
    {
      title: 'Help me',
      links: [
        { name: 'FAQ', href: '#' },
        { name: 'Terms of use', href: '#' },
        { name: 'Privacy policy', href: '#' },
        { name: 'Cookies', href: '#' }
      ]
    },
    {
      title: 'Contact',
      links: [
        { name: 'Sales', href: '#' },
        { name: 'Support', href: '#' },
        { name: 'Live chat', href: '#' }
      ]
    },
    {
      title: 'Others',
      links: [
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Licenses', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: '/images/icon-facebook.svg', href: '#' },
    { name: 'Twitter', icon: '/images/icon-twitter.svg', href: '#' },
    { name: 'Pinterest', icon: '/images/icon-pinterest.svg', href: '#' },
    { name: 'Instagram', icon: '/images/icon-instagram.svg', href: '#' }
  ];

  return (
    <footer className="bg-[#f2f2f2] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute left-0 top-0 hidden md:block">
        <Image 
          src="/images/bg-pattern-footer-desktop.svg" 
          alt="" 
          width={528} 
          height={231}
          aria-hidden="true"
        />
      </div>
      <div className="absolute left-0 top-0 md:hidden">
        <Image 
          src="/images/bg-pattern-footer-mobile.svg" 
          alt="" 
          width={374} 
          height={173}
          aria-hidden="true"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Footer header */}
        <div className="py-10 border-b border-dark-grayish-violet/20 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="/">
              <Image src="/images/logo.svg" alt="Insure Logo" width={112} height={18} />
            </Link>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <Link 
                key={index} 
                href={social.href}
                className="hover:opacity-50 transition-opacity"
                aria-label={social.name}
              >
                <Image 
                  src={social.icon} 
                  alt={social.name} 
                  width={24} 
                  height={24} 
                />
              </Link>
            ))}
          </div>
        </div>
        
        {/* Footer links */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="uppercase text-dark-grayish-violet text-sm font-bold tracking-wider mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="uppercase text-very-dark-violet text-sm font-bold tracking-wider hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
