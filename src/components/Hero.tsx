
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
          backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1953&q=80')",
          filter: "brightness(0.6)"
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 z-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          សាងសង់ផ្ទះនៃក្តីសុបិនរបស់អ្នក
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 animate-fade-in" style={{animationDelay: "0.2s"}}>
          យើងផ្តល់ជូនសេវាកម្មដែលមានគុណភាពខ្ពស់បំផុតក្នុងការរចនាផ្ទះ និងសាងសង់ ដើម្បីបំពេញក្តីស្រមៃរបស់អ្នក។
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: "0.4s"}}>
          <a 
            href="#contact" 
            className="btn-primary flex items-center justify-center gap-2 group"
          >
            ទាក់ទងឥឡូវនេះ
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#portfolio" className="btn-secondary">
            មើលគម្រោងរបស់យើង
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
