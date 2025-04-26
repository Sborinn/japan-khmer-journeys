
import { GraduationCap, Headphones, Building, UserCheck } from 'lucide-react';

const Services = () => {
  // Services data
  const services = [
    {
      icon: <GraduationCap className="w-12 h-12 text-sakura" />,
      title: "ការជ្រើសរើសសិក្ខាកាមទៅប្រទេសជប៉ុន",
      description: "យើងជ្រើសរើស និងបណ្តុះបណ្តាលសិក្ខាកាមដែលមានសក្តានុពល ហើយភ្ជាប់ពួកគេទៅនឹងក្រុមហ៊ុនជប៉ុនដែលត្រូវនឹងជំនាញរបស់ពួកគេ។",
    },
    {
      icon: <Headphones className="w-12 h-12 text-matcha" />,
      title: "ការប្រឹក្សាយោបល់សម្រាប់អ្នកធ្វើការ",
      description: "យើងផ្តល់សេវាប្រឹក្សាផ្ទាល់ខ្លួនដើម្បីជួយអ្នកធ្វើការឱ្យសម្របខ្លួន និងបន្តអាជីពរបស់ពួកគេនៅប្រទេសជប៉ុន។",
    },
    {
      icon: <Building className="w-12 h-12 text-khmerGold" />,
      title: "កិច្ចសហការជាមួយក្រុមហ៊ុនជប៉ុន",
      description: "យើងធ្វើការយ៉ាងជិតស្និទ្ធជាមួយក្រុមហ៊ុនជប៉ុនដើម្បីយល់ពីតម្រូវការរបស់ពួកគេ និងដើម្បីផ្តល់សិក្ខាកាមដែលមានគុណភាពខ្ពស់។",
    },
    {
      icon: <UserCheck className="w-12 h-12 text-blue-500" />,
      title: "ការគាំទ្រវប្បធម៌និងភាសា",
      description: "យើងជួយសិក្ខាកាមក្នុងការសម្របខ្លួនទៅនឹងវប្បធម៌ និងភាសាជប៉ុន ដែលជាចំណែកដ៏សំខាន់នៃជោគជ័យរបស់ពួកគេ។",
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
            យើងផ្តល់ជូននូវសេវាកម្មគ្រប់ជ្រុងជ្រោយដើម្បីធានាបាននូវបទពិសោធន៍ប្រកបដោយជោគជ័យសម្រាប់ទាំងសិក្ខាកាម និងក្រុមហ៊ុនដៃគូរបស់យើង។
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
          <a href="#contact" className="btn-primary inline-block">
            និយាយជាមួយអ្នកជំនាញរបស់យើង
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
