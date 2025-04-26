
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Testimonials data
  const testimonials = [
    {
      name: "គឹម សាវុធ",
      role: "ម្ចាស់ផ្ទះ នៅភ្នំពេញ",
      quote: "ខ្ញុំមានការពេញចិត្តយ៉ាងខ្លាំងចំពោះផ្ទះថ្មីរបស់ខ្ញុំ។ ក្រុមការងាររចនា និងសាងសង់បានបង្កើតផ្ទះដែលលើសពីការរំពឹងទុករបស់ខ្ញុំ។ ពួកគេប្រកាន់ខ្ជាប់នូវកាលវិភាគ និងថវិកា ហើយផលិតផលចុងក្រោយគឺមានគុណភាពខ្ពស់បំផុត។",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "សុខ សុជាតា",
      role: "ម្ចាស់ផ្ទះ នៅសៀមរាប",
      quote: "ការសហការណ៍ជាមួយក្រុមហ៊ុនសាងសង់ផ្ទះនេះគឺជាបទពិសោធន៍ដ៏អស្ចារ្យបំផុត។ ពួកគេយល់ចិត្តពីតម្រូវការរបស់ខ្ញុំ និងបានបង្កើតផ្ទះដែលឆ្លុះបញ្ចាំងពីរបៀបរស់នៅរបស់គ្រួសារខ្ញុំ។ ខ្ញុំសូមណែនាំពួកគេដល់អ្នកដែលចង់សាងសង់ផ្ទះថ្មី។",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "ចាន់ សុផល",
      role: "ម្ចាស់អាផាតមិន នៅភ្នំពេញ",
      quote: "ការកែលម្អអាផាតមិនរបស់ខ្ញុំបានកើតឡើងដោយរលូន និងមានប្រសិទ្ធភាពខ្ពស់។ ក្រុមការងារមានវិជ្ជាជីវៈ និងយកចិត្តទុកដាក់ចំពោះព័ត៌មានលម្អិតតូចៗ។ លទ្ធផលគឺអស្ចារ្យលើសពីការរំពឹងទុករបស់ខ្ញុំទៅទៀត។",
      image: "https://randomuser.me/api/portraits/men/55.jpg"
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
          <h2 className="section-title inline-block">អ្វីដែលអតិថិជននិយាយ</h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg">
            ស្តាប់ពីបទពិសោធន៍របស់អតិថិជនដែលបានប្រើប្រាស់សេវាកម្មរចនា និងសាងសង់ផ្ទះរបស់យើង។
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
