import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, MapPin, Building2, Sofa, HardHat, Gem, Shield, Coins, Crown } from 'lucide-react';

// Architecture Projects - Rare Roman Antiques Collection
const architectureProjects = [
  { 
    title: 'Imperial Roman Coin Collection', 
    type: 'Numismatics', 
    location: 'Sitka, Alaska',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop', 
    category: 'architecture'
  },
  { 
    title: 'Ancient Military Relics', 
    type: 'Antiquities', 
    location: 'European Collections',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1605568427561-40dd23c4ecc8?w=800&h=600&fit=crop', 
    category: 'architecture'
  },
  { 
    title: 'Rare Diamond Collection', 
    type: 'Precious Stones', 
    location: 'International Sources',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop', 
    category: 'architecture'
  },
  { 
    title: 'Historical Artifact Collection', 
    type: 'Heritage', 
    location: 'Global Collections',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop', 
    category: 'architecture'
  },
  { 
    title: 'Rare Metals & Alloys', 
    type: 'Metallurgy', 
    location: 'Worldwide Sources',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=600&fit=crop', 
    category: 'architecture'
  },
  { 
    title: 'Ancient Roman Architecture Fragments', 
    type: 'Architectural', 
    location: 'Roman Empire',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1582896703535-62ef6a3c1a93?w=800&h=600&fit=crop', 
    category: 'architecture'
  },
  { 
    title: 'Imperial Jewelry Collection', 
    type: 'Royal Artifacts', 
    location: 'European Collections',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop&sat=-20', 
    category: 'architecture'
  },
  { 
    title: 'Historical Document Archive', 
    type: 'Archives', 
    location: 'Global Collections',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1582896703535-62ef6a3c1a93?w=800&h=600&fit=crop&brightness=0.7', 
    category: 'architecture'
  },
];

// Interior Projects - Antique Collections
const interiorProjects = [
  { title: 'Museum-Quality Artifacts', style: 'Heritage', location: 'Sitka, Alaska', year: '2024', image: 'https://images.unsplash.com/photo-1582896703535-62ef6a3c1a93?w=800&h=600&fit=crop', category: 'interior' },
  { title: 'Private Collector\'s Vault', style: 'Luxury', location: 'Global Collections', year: '2024', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=600&fit=crop&sat=-20', category: 'interior' },
  { title: 'Ancient Coin Display Collection', style: 'Numismatic', location: 'International Sources', year: '2023', image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop', category: 'interior' },
  { title: 'Roman Military Exhibit', style: 'Historical', location: 'European Collections', year: '2023', image: 'https://images.unsplash.com/photo-1605568427561-40dd23c4ecc8?w=800&h=600&fit=crop', category: 'interior' },
  { title: 'Precious Gemstone Collection', style: 'Luxury', location: 'Worldwide Sources', year: '2023', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop', category: 'interior' },
  { title: 'Historical Artifact Gallery', style: 'Heritage', location: 'Sitka, Alaska', year: '2024', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop', category: 'interior' },
  { title: 'Rare Metals Showcase', style: 'Industrial', location: 'Global Sources', year: '2023', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=600&fit=crop&sat=-30', category: 'interior' },
  { title: 'Imperial Artifacts Display', style: 'Royal', location: 'European Collections', year: '2024', image: 'https://images.unsplash.com/photo-1582896703535-62ef6a3c1a93?w=800&h=600&fit=crop&brightness=0.8', category: 'interior' },
  { title: 'Heritage Collection Showroom', style: 'Classic', location: 'Sitka, Alaska', year: '2023', image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop&sat=-20', category: 'interior' },
];

// Structural Projects - Collection Categories
const structuralProjects = [
  { title: 'Roman Coin Authentication', type: 'Numismatics', location: 'Sitka, Alaska', year: '2024', image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop', category: 'structural' },
  { title: 'Artifact Provenance Research', type: 'Historical', location: 'Global Research', year: '2023', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop', category: 'structural' },
  { title: 'Metal Composition Analysis', type: 'Metallurgy', location: 'International Labs', year: '2023', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=600&fit=crop', category: 'structural' },
  { title: 'Gemstone Authentication', type: 'Precious Stones', location: 'Global Sources', year: '2024', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop', category: 'structural' },
];

// Combine all projects
const allProjects = [...architectureProjects, ...interiorProjects, ...structuralProjects];

// Filter options
const categoryFilters = [
  { id: 'all', label: 'All Collections', icon: null },
  { id: 'architecture', label: 'Antiquities', icon: Building2 },
  { id: 'interior', label: 'Collectibles', icon: Sofa },
  { id: 'structural', label: 'Authentication', icon: HardHat },
];

// Architecture type filters
const architectureTypes = ['All', 'Numismatics', 'Antiquities', 'Precious Stones', 'Heritage', 'Metallurgy', 'Architectural', 'Royal Artifacts', 'Archives'];

// Interior style filters
const interiorStyles = ['All', 'Heritage', 'Luxury', 'Numismatic', 'Historical', 'Industrial', 'Royal', 'Classic'];

export default function TrendingPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeArchitectureType, setActiveArchitectureType] = useState('All');
  const [activeInteriorStyle, setActiveInteriorStyle] = useState('All');

  const getFilteredProjects = () => {
    let filtered = allProjects;
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    
    if (activeCategory === 'architecture' && activeArchitectureType !== 'All') {
      filtered = filtered.filter(p => 'type' in p && p.type === activeArchitectureType);
    }
    
    if (activeCategory === 'interior' && activeInteriorStyle !== 'All') {
      filtered = filtered.filter(p => 'style' in p && p.style === activeInteriorStyle);
    }
    
    return filtered;
  };

  const filteredProjects = getFilteredProjects();

  return (
    <>
      <Header />
      <main className="bg-black min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1582896703535-62ef6a3c1a93?w=1920&h=600&fit=crop"
              alt="Rare Roman Antiques Collection"
              width={1920}
              height={600}
              className="w-full h-full object-cover opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/90" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[#D9AF58] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">Our Collections</span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Our Collection</h1>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
                A curated selection of rare Roman antiquities, precious metals, diamonds, and collectible artifacts from around the world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={ref} className="pb-24 max-w-7xl mx-auto px-6 lg:px-8 mt-4">
          {/* Main Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {categoryFilters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => {
                    setActiveCategory(filter.id);
                    setActiveArchitectureType('All');
                    setActiveInteriorStyle('All');
                  }}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === filter.id
                      ? 'bg-[#D9AF58] text-black'
                      : 'border border-white/20 text-white/60 hover:border-[#D9AF58]/50 hover:text-[#D9AF58]'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {filter.label}
                </button>
              );
            })}
          </div>

          {/* Architecture Type Filters */}
          {activeCategory === 'architecture' && (
            <div className="flex flex-wrap items-center gap-3 mb-12 justify-center">
              {architectureTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveArchitectureType(type)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    activeArchitectureType === type
                      ? 'bg-[#D9AF58]/20 text-[#D9AF58] border border-[#D9AF58]/40'
                      : 'border border-white/20 text-white/40 hover:border-[#D9AF58]/30 hover:text-[#D9AF58]/70'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          )}

          {/* Interior Style Filters */}
          {activeCategory === 'interior' && (
            <div className="flex flex-wrap items-center gap-3 mb-12 justify-center">
              {interiorStyles.map((style) => (
                <button
                  key={style}
                  onClick={() => setActiveInteriorStyle(style)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    activeInteriorStyle === style
                      ? 'bg-[#D9AF58]/20 text-[#D9AF58] border border-[#D9AF58]/40'
                      : 'border border-white/20 text-white/40 hover:border-[#D9AF58]/30 hover:text-[#D9AF58]/70'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          )}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={`${project.category}-${project.title}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#D9AF58]/40 transition-all duration-300 bg-black hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden bg-black/40">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    width={800} 
                    height={600} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    loading="lazy"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  {(project.category === 'architecture' || project.category === 'structural') ? (
                    <>
                      <span className="inline-block px-2 py-0.5 rounded-full bg-[#D9AF58]/20 text-[#D9AF58] text-xs font-medium border border-[#D9AF58]/30 backdrop-blur-sm">
                        {'type' in project ? project.type : 'Collection'}
                      </span>
                      <h3 className="font-serif text-base md:text-lg font-semibold text-white mt-2 group-hover:text-[#D9AF58] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3 text-[#D9AF58]" />
                        <span className="text-white/50 text-xs">{'location' in project ? project.location : 'Global'}</span>
                      </div>
                      {'year' in project && (
                        <span className="text-white/40 text-[10px] mt-1 block">{project.year}</span>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded-full bg-[#D9AF58]/20 text-[#D9AF58] text-xs font-medium border border-[#D9AF58]/30 backdrop-blur-sm">
                          {'style' in project && project.style}
                        </span>
                        <span className="text-white/60 text-xs font-mono backdrop-blur-sm">{'year' in project && project.year}</span>
                      </div>
                      <h3 className="font-serif text-base md:text-lg font-semibold text-white mt-2 group-hover:text-[#D9AF58] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3 text-[#D9AF58]" />
                        <span className="text-white/50 text-xs">{'location' in project && project.location}</span>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#D9AF58]/20 backdrop-blur-sm border border-[#D9AF58]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowRight className="w-3.5 h-3.5 text-[#D9AF58]" />
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/40">No items found in this category.</p>
            </div>
          )}

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-20 p-12 rounded-2xl border border-[#D9AF58]/20 bg-gradient-to-br from-black to-[#D9AF58]/5 text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Discover Your Treasure?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              Whether you're a collector, investor, or museum, our team of experts is ready to help you find 
              authentic Roman antiquities, rare metals, diamonds, and valuable collectibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#D9AF58] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#D9AF58]/90 transition-all duration-200"
              >
                Explore Our Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border border-[#D9AF58]/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}