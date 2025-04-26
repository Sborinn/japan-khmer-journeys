
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1953&q=80')",
          filter: "brightness(0.6)"
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 z-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          ដំណើរការរបស់អ្នកទៅកាន់ប្រទេសជប៉ុនចាប់ផ្តើមនៅទីនេះ
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 animate-fade-in" style={{animationDelay: "0.2s"}}>
          យើងភ្ជាប់ទំនាក់ទំនងអ្នកមានទេពកោសល្យខ្មែរជាមួយឱកាសការងារដែលមានគុណភាពខ្ពស់នៅប្រទេសជប៉ុន ដោយផ្ដល់ការជ្រើសរើសបុគ្គលិកប្រកបដោយជំនាញ និងការប្រឹក្សាយោបល់ផ្ទាល់ខ្លួន។
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: "0.4s"}}>
          <a 
            href="#contact" 
            className="btn-primary flex items-center justify-center gap-2 group"
          >
            ចាប់ផ្ដើមដំណើរការរបស់អ្នក
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#about" className="btn-secondary">
            ស្វែងយល់បន្ថែម
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path 
              d="M12 5V19M12 19L19 12M12 19L5 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
