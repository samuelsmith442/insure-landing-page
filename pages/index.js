import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Insure | Insurance made simple</title>
        <meta name="description" content="Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      
      <Header />
      
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      
      <Footer />
    </>
  );
}
