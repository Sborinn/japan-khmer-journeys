
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Testimonials data
  const testimonials = [
    {
      name: "សុខ ចន្ទ្រា",
      role: "សិក្ខាកាមក្នុងវិស័យផលិតកម្ម",
      quote: "ក្រុមហ៊ុនជប៉ុន-ខ្មែរបានផ្លាស់ប្តូរជីវិតខ្ញុំ។ ពួកគេបានជួយរៀបចំឯកសារ បណ្តុះបណ្តាលខ្ញុំ និងគាំទ្រខ្ញុំគ្រប់ជំហានក្នុងដំណើរការទៅកាន់ប្រទេសជប៉ុន។ ឥឡូវនេះខ្ញុំមានការងារល្អ និងអនាគតភ្លឺស្វាង។",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "ម៉ៅ សុខហ៊ុយ",
      role: "សិក្ខាកាមក្នុងវិស័យសំណង់",
      quote: "ខ្ញុំមានការសង្ស័យនៅពេលដំបូង ប៉ុន្តែក្រុមការងាររបស់ជប៉ុន-ខ្មែរពិតជាអស្ចារ្យ។ ពួកគេបានរៀបចំថ្នាក់រៀនភាសាជប៉ុនប្រកបដោយគុណភាព និងបានជួយខ្ញុំឱ្យយល់ពីវប្បធម៌ជប៉ុនមុនពេលទៅដល់។",
      image: "https://randomuser.me/api/portraits/men/55.jpg"
    },
    {
      name: "សៀង សុជាតា",
      role: "អតីតសិក្ខាកាម បច្ចុប្បន្នជាអ្នកគ្រប់គ្រង",
      quote: "បន្ទាប់ពីបញ្ចប់កម្មវិធីហ្វឹកហ្វឺនរយៈពេល ៣ ឆ្នាំ ក្រុមហ៊ុនជប៉ុន-ខ្មែរបានជួយខ្ញុំឱ្យរកការងារអចិន្ត្រៃយ៍នៅជប៉ុន។ ឥឡូវនេះខ្ញុំអាចគាំទ្រគ្រួសាររបស់ខ្ញុំនៅកម្ពុជា និងមានជីវិតដែលខ្ញុំមិនធ្លាប់សង្ឃឹមថានឹងមាន។",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
  ];

  // Navigation handlers
  const goToNext = () => {
    setActiveIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };
  
  const goToPrev = () => {
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Cultural pattern decoration */}
      <div className="khmer-pattern w-96 h-96 top-0 left-0"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">របាយការណ៍ជោគជ័យ</h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg">
            ស្តាប់ពីបទពិសោធន៍របស់អតីតសិក្ខាកាមដែលបានឆ្លងកាត់កម្មវិធីរបស់យើង និងកំពុងរីកចម្រើននៅក្នុងប្រទេសជប៉ុន។
          </p>
        </div>
        
        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white dark:bg-japanNavy/40 rounded-2xl shadow-xl p-8 md:p-12">
            {/* Quote icon */}
            <div className="absolute top-6 left-6 text-sakura/30">
              <Quote className="w-16 h-16" />
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Image */}
              <div className="md:w-1/3">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-white dark:border-japanNavy shadow-lg mx-auto"
                />
              </div>
              
              {/* Content */}
              <div className="md:w-2/3">
                <blockquote className="text-gray-600 dark:text-gray-300 text-lg italic mb-6">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                <div className="flex items-center justify-center md:justify-start">
                  <div>
                    <div className="font-bold text-lg">{testimonials[activeIndex].name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{testimonials[activeIndex].role}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={goToPrev}
                className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-japanNavy/60 transition-colors"
                aria-label="មើលរបាយការណ៍មុន"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-1">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeIndex 
                        ? 'bg-sakura scale-125' 
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`មើលរបាយការណ៍ទី ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={goToNext}
                className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-japanNavy/60 transition-colors"
                aria-label="មើលរបាយការណ៍បន្ទាប់"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
