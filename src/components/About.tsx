
import { Users, Globe, BarChart4 } from 'lucide-react';

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
                src="https://images.unsplash.com/photo-1554797589-7241bb691973?ixlib=rb-4.0.3&auto=format&fit=crop&w=1336&q=80"
                alt="ការប្រជុំគណៈគ្រប់គ្រងរបស់ក្រុមហ៊ុន ជប៉ុន-ខ្មែរ"
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
              យើងជាអ្នកជំនាញក្នុងការភ្ជាប់ទំនាក់ទំនងរវាងអ្នកមានទេពកោសល្យខ្មែរ និងឱកាសការងារល្អៗនៅប្រទេសជប៉ុន។ ដោយមានបទពិសោធន៍ជាង ១០ ឆ្នាំ យើងបានជួយសិក្ខាកាមរាប់រយនាក់ឱ្យស្វែងរកការងារ និងជោគជ័យនៅប្រទេសជប៉ុន។
            </p>
            <p className="mb-10 text-lg">
              ទស្សនវិស័យរបស់យើងគឺដើម្បីកសាងស្ពានវប្បធម៌ និងអាជីពរវាងប្រទេសទាំងពីរ ដោយបង្កើតឱកាសដែលផ្តល់ផលប្រយោជន៍ទាំងសិក្ខាកាមរបស់យើង និងក្រុមហ៊ុនជប៉ុនដែលពួកគេធ្វើការ។
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-md bg-white dark:bg-japanNavy/40">
                <Users className="w-10 h-10 text-sakura mb-2" />
                <span className="text-3xl font-bold">៥០០+</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">សិក្ខាកាមជោគជ័យ</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-md bg-white dark:bg-japanNavy/40">
                <Globe className="w-10 h-10 text-matcha mb-2" />
                <span className="text-3xl font-bold">២០+</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">ក្រុមហ៊ុនដៃគូ</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-md bg-white dark:bg-japanNavy/40">
                <BarChart4 className="w-10 h-10 text-khmerGold mb-2" />
                <span className="text-3xl font-bold">៩៥%</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">អត្រាជោគជ័យ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
