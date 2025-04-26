
import { useState } from 'react';
import { X } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  
  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: "វីឡាទំនើប នៅភ្នំពេញ",
      category: "residential",
      description: "វីឡាទំនើបដែលរចនាក្នុងរចនាបថសម័យទំនើបជាមួយនឹងការប្រើប្រាស់ពន្លឺធម្មជាតិ និងសម្ភារៈប្រកបដោយគុណភាព។",
      location: "សង្កាត់បឹងកេងកង, ភ្នំពេញ",
      size: "៣៥០ ម៉ែត្រការ៉េ",
      completed: "២០២៣",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      ]
    },
    {
      id: 2,
      title: "ការិយាល័យតម្បាញ",
      category: "commercial",
      description: "ការិយាល័យដែលរចនាឡើងដើម្បីលើកកម្ពស់ភាពច្នៃប្រឌិត និងសហការណ៍ ជាមួយនឹងពន្លឺធម្មជាតិ និងបរិយាកាសបើកចំហ។",
      location: "សង្កាត់ទួលគោក, ភ្នំពេញ",
      size: "៥០០ ម៉ែត្រការ៉េ",
      completed: "២០២២",
      images: [
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      ]
    },
    {
      id: 3,
      title: "ផ្ទះឈើបែបប្រពៃណី",
      category: "residential",
      description: "ផ្ទះឈើដែលរចនាក្នុងរចនាបថខ្មែរប្រពៃណី ប៉ុន្តែមានបំពាក់បច្ចេកវិទ្យាទំនើប។",
      location: "ខេត្តសៀមរាប",
      size: "២០០ ម៉ែត្រការ៉េ",
      completed: "២០២១",
      images: [
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      ]
    },
    {
      id: 4,
      title: "ការកែលម្អផ្ទះចាស់",
      category: "renovation",
      description: "ការកែលម្អផ្ទះចាស់ឱ្យមានរូបរាងទំនើបជាមួយនឹងការប្រើប្រាស់សម្ភារៈប្រកបដោយគុណភាព និងការរចនាសម័យថ្មី។",
      location: "សង្កាត់ចំការមន, ភ្នំពេញ",
      size: "១៥០ ម៉ែត្រការ៉េ",
      completed: "២០២២",
      images: [
        "https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      ]
    },
    {
      id: 5,
      title: "សណ្ឋាគារលំដាប់ខ្ពស់",
      category: "commercial",
      description: "សណ្ឋាគារលំដាប់ខ្ពស់ដែលរចនាក្នុងរចនាបថទំនើប ជាមួយនឹងការរចនាផ្ទៃក្នុងដ៏ស្រស់ស្អាត។",
      location: "ខេត្តព្រះសីហនុ",
      size: "១២០០ ម៉ែត្រការ៉េ",
      completed: "២០២១",
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      ]
    },
    {
      id: 6,
      title: "កែលម្អផ្ទះបាយ",
      category: "renovation",
      description: "កែលម្អផ្ទះបាយចាស់ឱ្យមានរូបរាងទំនើប ជាមួយនឹងគ្រឿងបរិក្ខារទំនើប និងការរចនាប្រកបដោយភាពងាយស្រួល។",
      location: "សង្កាត់៧មករា, ភ្នំពេញ",
      size: "៣០ ម៉ែត្រការ៉េ",
      completed: "២០២៣",
      images: [
        "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      ]
    }
  ];

  const categoryMapping = {
    'all': 'ទាំងអស់',
    'residential': 'លំនៅដ្ឋាន',
    'commercial': 'ពាណិជ្ជកម្ម',
    'renovation': 'កែលម្អ'
  };

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Handle opening project modal
  const openProjectModal = (project) => {
    setActiveProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Handle closing project modal
  const closeProjectModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Cultural pattern decoration */}
      <div className="khmer-pattern w-96 h-96 bottom-0 right-0 opacity-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">គម្រោងរបស់យើង</h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg">
            ទស្សនាគម្រោងដែលយើងបានបញ្ចប់។ ពួកយើងមានមោទនភាពក្នុងការបង្កើតលំនៅដ្ឋានដែលស្រស់ស្អាត និងមានគុណភាពខ្ពស់។
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categoryMapping).map(([key, label]) => (
            <button
              key={key}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeFilter === key
                  ? 'bg-khmerGold text-japanNavy'
                  : 'bg-gray-100 dark:bg-japanNavy/40 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-japanNavy/60'
              }`}
              onClick={() => setActiveFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => openProjectModal(project)}
            >
              <div className="h-72">
                <img 
                  src={project.images[0]} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                <p className="text-white/80 mt-2">{categoryMapping[project.category]}</p>
                <button className="mt-4 bg-khmerGold text-japanNavy py-2 px-4 rounded-lg">
                  មើលព័ត៌មានលម្អិត
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load more button */}
        <div className="mt-12 text-center">
          <button className="btn-secondary">
            មើលគម្រោងបន្ថែមទៀត
          </button>
        </div>
      </div>

      {/* Project modal */}
      {modalOpen && activeProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-japanNavy/95 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              onClick={closeProjectModal}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Modal content */}
            <div className="p-6">
              {/* Image gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {activeProject.images.map((image, i) => (
                  <div key={i} className={`${i === 0 ? 'md:col-span-2' : ''}`}>
                    <img 
                      src={image} 
                      alt={`${activeProject.title} - រូបភាពទី ${i + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>

              {/* Project details */}
              <h3 className="text-2xl font-bold mb-4">{activeProject.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{activeProject.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <h4 className="font-bold text-sm text-gray-500 dark:text-gray-400">ទីតាំង</h4>
                  <p>{activeProject.location}</p>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-500 dark:text-gray-400">ទំហំ</h4>
                  <p>{activeProject.size}</p>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-500 dark:text-gray-400">បានបញ្ចប់</h4>
                  <p>{activeProject.completed}</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <a href="#contact" className="btn-primary" onClick={closeProjectModal}>
                  ទាក់ទងសម្រាប់គម្រោងស្រដៀងគ្នា
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
