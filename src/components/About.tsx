
import { Award, Home, Hammer, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Cultural pattern decoration */}
      <div className="cherry-pattern w-96 h-96 top-0 right-0 transform rotate-180"></div>
      <div className="khmer-pattern w-96 h-96 bottom-0 left-0"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2 relative">
            <div className="w-full h-[400px] overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&auto=format&fit=crop&w=1336&q=80"
                alt="ក្រុមការងាររចនា និងសាងសង់ផ្ទះរបស់យើង"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-khmerGold rounded-xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-sakura rounded-xl -z-10"></div>
          </div>
          
          {/* Text content */}
          <div className="lg:w-1/2">
            <h2 className="section-title">អំពីយើង</h2>
            <p className="mb-6 text-lg">
              យើងជាក្រុមហ៊ុនរចនា និងសាងសង់ផ្ទះដែលមានបទពិសោធន៍ជាង ១៥ ឆ្នាំនៅក្នុងវិស័យសំណង់។ យើងផ្តល់ជូននូវសេវាកម្មពេញលេញ ចាប់ពីការរចនាផ្ទះរហូតដល់ការសាងសង់រចនាសម្ព័ន្ធ និងការរចនាផ្ទៃក្នុងដ៏ស្រស់ស្អាត។
            </p>
            <p className="mb-10 text-lg">
              បេសកកម្មរបស់យើងគឺការបង្កើតលំនៅដ្ឋានប្រកបដោយគុណភាព និងចីរភាព ដែលឆ្លុះបញ្ចាំងពីរបៀបរស់នៅ និងរចនាបថផ្ទាល់ខ្លួនរបស់អតិថិជន។ យើងធ្វើការយ៉ាងជិតស្និទ្ធជាមួយអតិថិជនដើម្បីបំពេញក្តីសុបិនរបស់ពួកគេ។
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-md bg-white dark:bg-japanNavy/40">
                <Home className="w-10 h-10 text-sakura mb-2" />
                <span className="text-3xl font-bold">៣០០+</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">ផ្ទះបានសាងសង់</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-md bg-white dark:bg-japanNavy/40">
                <Star className="w-10 h-10 text-matcha mb-2" />
                <span className="text-3xl font-bold">៩៨%</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">អតិថិជនពេញចិត្ត</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-md bg-white dark:bg-japanNavy/40">
                <Award className="w-10 h-10 text-khmerGold mb-2" />
                <span className="text-3xl font-bold">១២</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">ពានរង្វាន់ឧស្សាហកម្ម</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-md bg-white dark:bg-japanNavy/40">
                <Hammer className="w-10 h-10 text-blue-500 mb-2" />
                <span className="text-3xl font-bold">១៥+</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">ឆ្នាំនៃបទពិសោធន៍</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
