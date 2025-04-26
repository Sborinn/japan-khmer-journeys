
import { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'សូមបញ្ចូលឈ្មោះរបស់អ្នក';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'សូមបញ្ចូលអ៊ីមែលរបស់អ្នក';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'សូមបញ្ចូលអ៊ីមែលដែលត្រឹមត្រូវ';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'សូមបញ្ចូលសារ';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Simulate form submission
      toast({
        title: "សំណើរបស់អ្នកត្រូវបានផ្ញើចេញដោយជោគជ័យ!",
        description: "បុគ្គលិកយើងនឹងទាក់ទងអ្នកក្នុងពេលឆាប់ៗ",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Cultural pattern decoration */}
      <div className="khmer-pattern w-96 h-96 bottom-0 right-0"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">ទំនាក់ទំនងជាមួយយើង</h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg">
            ចង់ដឹងព័ត៌មានបន្ថែមអំពីកម្មវិធីរបស់យើងឬ? សូមបំពេញទម្រង់ខាងក្រោម ហើយយើងនឹងទាក់ទងអ្នកក្នុងរយៈពេល ២៤ ម៉ោង។
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact information */}
          <div className="lg:w-1/3">
            <div className="bg-white dark:bg-japanNavy/40 rounded-xl shadow-lg p-8 h-full">
              <h3 className="text-xl font-bold mb-6">ព័ត៌មានទំនាក់ទំនង</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-sakura shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">អាសយដ្ឋាន</p>
                    <p className="text-gray-600 dark:text-gray-300">អគារលេខ ១២៣, មហាវិថីព្រះនរោត្តម, សង្កាត់ទន្លេបាសាក់, ខណ្ឌចំការមន, រាជធានីភ្នំពេញ</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-matcha shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">លេខទូរស័ព្ទ</p>
                    <p className="text-gray-600 dark:text-gray-300">+855 23 456 789</p>
                    <p className="text-gray-600 dark:text-gray-300">+855 12 345 678</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-khmerGold shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">អ៊ីមែល</p>
                    <p className="text-gray-600 dark:text-gray-300">info@japan-khmer.com</p>
                    <p className="text-gray-600 dark:text-gray-300">support@japan-khmer.com</p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-8 h-48 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125425.56207744223!2d104.87730839436417!3d11.552747518225398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513c9785c13f%3A0x2cfe83158381e3b2!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1650589397642!5m2!1sen!2skh"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Japan-Khmer office location"
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="lg:w-2/3">
            <div className="bg-white dark:bg-japanNavy/40 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6">ផ្ញើសំណួរ</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    ឈ្មោះពេញ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 dark:bg-japanNavy/40 dark:border-gray-600 ${
                      errors.name 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-sakura'
                    }`}
                    placeholder="បញ្ចូលឈ្មោះរបស់អ្នក"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    អ៊ីមែល <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 dark:bg-japanNavy/40 dark:border-gray-600 ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-sakura'
                    }`}
                    placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    លេខទូរស័ព្ទ
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sakura dark:bg-japanNavy/40 dark:border-gray-600"
                    placeholder="បញ្ចូលលេខទូរស័ព្ទរបស់អ្នក"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block mb-2 font-medium">
                    សារ <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg h-32 resize-none focus:outline-none focus:ring-2 dark:bg-japanNavy/40 dark:border-gray-600 ${
                      errors.message 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-sakura'
                    }`}
                    placeholder="បញ្ចូលសាររបស់អ្នក"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                
                <div className="md:col-span-2">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn-primary flex items-center justify-center gap-2 w-full md:w-auto"
                  >
                    ផ្ញើសំណួរ
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
