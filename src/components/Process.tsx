
import { useState } from 'react';
import { Check } from 'lucide-react';

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  // Process steps
  const steps = [
    {
      number: 1,
      title: "ការចុះឈ្មោះ និងការវាយតម្លៃ",
      description: "ដំណើរការចាប់ផ្តើមជាមួយនឹងការចុះឈ្មោះ និងការវាយតម្លៃដើម្បីកំណត់សក្តានុពល និងភាពសមស្របរបស់អ្នកសម្រាប់កម្មវិធីរបស់យើង។",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
    },
    {
      number: 2,
      title: "បណ្តុះបណ្តាលភាសា និងវប្បធម៌",
      description: "អ្នកនឹងចូលរួមក្នុងវគ្គបណ្តុះបណ្តាលភាសាជប៉ុន និងវប្បធម៌ដែលត្រូវបានរចនាឡើងដើម្បីរៀបចំអ្នកសម្រាប់ជីវិតនៅប្រទេសជប៉ុន។",
      image: "https://images.unsplash.com/photo-1581093579830-71e18d15d50c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      number: 3,
      title: "ការជ្រើសរើសក្រុមហ៊ុន",
      description: "យើងភ្ជាប់អ្នកជាមួយក្រុមហ៊ុនជប៉ុនដែលត្រូវនឹងជំនាញ និងគោលដៅរបស់អ្នក និងរៀបចំការសម្ភាស។",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      number: 4,
      title: "ការរៀបចំឯកសារ",
      description: "យើងជួយអ្នកក្នុងការរៀបចំឯកសារទាំងអស់ដែលត្រូវការសម្រាប់ទិដ្ឋាការ និងការធ្វើដំណើររបស់អ្នក។",
      image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      number: 5,
      title: "ការចាប់ផ្តើមជីវិតនៅជប៉ុន",
      description: "នៅពេលអ្នកមកដល់ប្រទេសជប៉ុន យើងនឹងបន្តគាំទ្រអ្នកក្នុងការសម្របខ្លួនទៅនឹងការងារ និងជីវិតរបស់អ្នក។",
      image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
  ];

  return (
    <section id="process" className="py-20 bg-gray-50 dark:bg-japanNavy/30 relative overflow-hidden">
      {/* Cultural pattern decoration */}
      <div className="cherry-pattern w-96 h-96 top-0 right-0 transform rotate-180"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">ដំណើរការរបស់យើង</h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg">
            ស្វែងយល់ពីដំណើរការងាយស្រួល ៥ ជំហានរបស់យើងដែលនាំអ្នកពីការចុះឈ្មោះដំបូងរហូតដល់ការចាប់ផ្តើមជីវិតរបស់អ្នកនៅប្រទេសជប៉ុន។
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
          
          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step) => (
              <div 
                key={step.number}
                className={`relative ${step.number % 2 === 0 ? 'md:text-right' : ''}`}
              >
                {/* Timeline dot */}
                <div 
                  className={`hidden md:flex absolute left-1/2 top-0 w-12 h-12 bg-white dark:bg-japanNavy border-4 rounded-full items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10 ${
                    step.number <= activeStep 
                      ? 'border-sakura text-sakura' 
                      : 'border-gray-300 dark:border-gray-600 text-gray-400'
                  }`}
                >
                  {step.number <= activeStep ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <span className="font-bold">{step.number}</span>
                  )}
                </div>
                
                <div 
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    step.number % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  onClick={() => setActiveStep(step.number)}
                >
                  {/* Mobile number indicator */}
                  <div 
                    className={`flex md:hidden w-10 h-10 rounded-full items-center justify-center mb-4 ${
                      step.number <= activeStep 
                        ? 'bg-sakura text-white' 
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {step.number <= activeStep ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <span className="font-bold">{step.number}</span>
                    )}
                  </div>
                  
                  {/* Image */}
                  <div className="md:w-5/12">
                    <div className={`rounded-lg overflow-hidden shadow-lg transition-all ${
                      step.number === activeStep ? 'ring-4 ring-sakura' : ''
                    }`}>
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-60 object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-5/12">
                    <h3 className={`text-xl font-bold mb-4 ${
                      step.number === activeStep ? 'text-sakura' : ''
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
