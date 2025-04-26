
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollAnimator from '@/components/ScrollAnimator';

const Index = () => {
  useEffect(() => {
    // Set the page title and meta description in Khmer
    document.title = 'ជប៉ុន-ខ្មែរ | ការងារនិងឱកាសនៅប្រទេសជប៉ុន';
    
    // Update meta tags for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'ជប៉ុន-ខ្មែរ ជួយភ្ជាប់ទំនាក់ទំនងអ្នកមានទេពកោសល្យខ្មែរជាមួយឱកាសការងារដែលមានគុណភាពខ្ពស់នៅប្រទេសជប៉ុន។');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-japanNavy text-gray-800 dark:text-gray-200 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
      <ScrollAnimator />
    </div>
  );
};

export default Index;
