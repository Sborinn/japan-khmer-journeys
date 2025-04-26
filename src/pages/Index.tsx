
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';  // New component for the portfolio
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollAnimator from '@/components/ScrollAnimator';

const Index = () => {
  useEffect(() => {
    // Set the page title and meta description in Khmer
    document.title = 'ក្រុមហ៊ុនរចនា និងសាងសង់ផ្ទះ | គុណភាពខ្ពស់ សេវាកម្មល្អឥតខ្ចោះ';
    
    // Update meta tags for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'ក្រុមហ៊ុនរចនា និងសាងសង់ផ្ទះដែលផ្តល់ជូនសេវាកម្មពេញលេញ រួមមានការរចនាគម្រោង ការសាងសង់ និងការរចនាផ្ទៃក្នុង។');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-japanNavy text-gray-800 dark:text-gray-200 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
      <ScrollAnimator />
    </div>
  );
};

export default Index;
