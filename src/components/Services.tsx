
import { Home, Pencil, Building, Map } from 'lucide-react';

const Services = () => {
  // Services data
  const services = [
    {
      icon: <Pencil className="w-12 h-12 text-sakura" />,
      title: "ការរចនាគម្រោង",
      description: "ក្រុមស្ថាបត្យករនិងវិស្វករមានជំនាញរបស់យើង បង្កើតគម្រោងផ្ទះដែលបញ្ចូលគ្នារវាងការប្រើប្រាស់ប្រកបដោយប្រសិទ្ធភាព និងសោភ័ណភាព។",
    },
    {
      icon: <Building className="w-12 h-12 text-matcha" />,
      title: "ការសាងសង់",
      description: "យើងប្រើប្រាស់សម្ភារៈដែលមានគុណភាពខ្ពស់បំផុត និងបច្ចេកទេសទំនើបដើម្បីសាងសង់លំនៅដ្ឋានដែលមានភាពធន់ និងចីរភាព។",
    },
    {
      icon: <Map className="w-12 h-12 text-khmerGold" />,
      title: "ការរចនាផ្ទៃខាងក្នុង",
      description: "ក្រុមរចនាផ្ទៃក្នុងរបស់យើងបង្កើតប្លង់ដែលឆ្លុះបញ្ចាំងពីរចនាបថ និងតម្រូវការរស់នៅរបស់អតិថិជន។",
    },
    {
      icon: <Home className="w-12 h-12 text-blue-500" />,
      title: "ការកែលម្អផ្ទះ",
      description: "យើងផ្តល់ជូននូវសេវាកម្មកែលម្អផ្ទះពេញលេញ ដើម្បីធ្វើឱ្យលំនៅដ្ឋានចាស់របស់អ្នកមានរូបរាងថ្មីទាំងស្រុង។",
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-japanNavy/30 relative overflow-hidden">
      {/* Cultural pattern decoration */}
      <div className="cherry-pattern w-96 h-96 bottom-0 right-0"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">សេវាកម្មរបស់យើង</h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg">
            យើងផ្តល់ជូននូវដំណោះស្រាយពេញលេញសម្រាប់តម្រូវការសាងសង់ និងរចនាផ្ទះរបស់អ្នក។ ក្រុមជំនាញការរបស់យើងត្រៀមខ្លួនជាស្រេចដើម្បីបំប្លែងក្តីសុបិនរបស់អ្នកទៅជាការពិត។
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card bg-white dark:bg-japanNavy p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* Call-to-action */}
        <div className="mt-16 text-center">
          <a href="#portfolio" className="btn-primary inline-block">
            មើលគម្រោងរបស់យើង
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
