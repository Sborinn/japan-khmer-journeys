
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-japanNavy text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">ជប៉ុន-ខ្មែរ</h4>
            <p className="text-gray-300 mb-6">
              កសាងស្ពានវប្បធម៌ និងជំនាញរវាងប្រទេសកម្ពុជា និងប្រទេសជប៉ុន តាមរយៈឱកាសការងារដែលផ្តល់ការបំពេញបំណង។
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                aria-label="Facebook"
                className="bg-white/10 p-2 rounded-full hover:bg-sakura/80 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                aria-label="Twitter"
                className="bg-white/10 p-2 rounded-full hover:bg-sakura/80 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                aria-label="Instagram"
                className="bg-white/10 p-2 rounded-full hover:bg-sakura/80 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                aria-label="LinkedIn"
                className="bg-white/10 p-2 rounded-full hover:bg-sakura/80 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">តំណរភ្ជាប់រហ័ស</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">អំពីយើង</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">សេវាកម្ម</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">របាយការណ៍ជោគជ័យ</a>
              </li>
              <li>
                <a href="#process" className="text-gray-300 hover:text-white transition-colors">ដំណើរការ</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">ទំនាក់ទំនង</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4">សេវាកម្ម</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">ការជ្រើសរើសសិក្ខាកាម</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">ការប្រឹក្សាយោបល់</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">កិច្ចសហការជាមួយក្រុមហ៊ុន</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">ការគាំទ្រវប្បធម៌និងភាសា</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">ទំនាក់ទំនង</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>អគារលេខ ១២៣, មហាវិថីព្រះនរោត្តម</p>
              <p>សង្កាត់ទន្លេបាសាក់, ខណ្ឌចំការមន</p>
              <p>រាជធានីភ្នំពេញ</p>
              <p className="mt-4">ទូរស័ព្ទ: +855 23 456 789</p>
              <p>អ៊ីមែល: info@japan-khmer.com</p>
            </address>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ជប៉ុន-ខ្មែរ។ រក្សាសិទ្ធិគ្រប់យ៉ាង។
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">គោលការណ៍ឯកជនភាព</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">លក្ខខណ្ឌនៃការប្រើប្រាស់</a>
          </div>
          <button
            onClick={scrollToTop}
            className="bg-sakura/80 hover:bg-sakura p-2 rounded-full text-white mt-4 md:mt-0 transition-colors"
            aria-label="ទៅទំព័រខាងលើ"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
