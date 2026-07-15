import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Award, Users, Zap, ArrowRight, Eye, Target, Star, Leaf, Building2, Ruler, HardHat, Hammer, Gem, Shield, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const team = [
  {
    name: 'Roman Rariy',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
    bio: 'With over 20 years of experience in the antiquities trade, Roman leads the global vision of Rare Roman Antiques.',
    isLead: true,
  },
  {
    name: 'Michael Roman',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    bio: 'Specializing in rare artifact acquisition and international collector relations.',
  },
  {
    name: 'Jordan Beckett',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
    bio: 'Expert in museum-quality acquisitions and heritage collection management.',
  },
  {
    name: 'B.S.R. Krishna',
    role: 'CEO - Asian Countries',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    bio: 'Leading operations across Asian markets with deep expertise in regional antiquities.',
  },
];

const projectImages = [
  {
    src: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&h=400&fit=crop',
    title: 'Ancient Roman Coins Collection',
    category: 'Numismatics',
  },
  {
    src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=400&fit=crop',
    title: 'Imperial Roman Artifacts',
    category: 'Antiquities',
  },
  {
    src: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=400&fit=crop',
    title: 'Rare Metals & Precious Stones',
    category: 'Metallurgy',
  },
  {
    src: 'https://images.unsplash.com/photo-1582896703535-62ef6a3c1a93?w=600&h=400&fit=crop',
    title: 'Historical Document Collection',
    category: 'Archives',
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <Header />
      <main className="bg-black min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative pt-24 pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1582896703535-62ef6a3c1a93?w=1920&h=600&fit=crop"
              alt="Rare Roman Antiques - Ancient artifacts and collectibles"
              width={1920}
              height={600}
              className="w-full h-full object-cover opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[#D9AF58] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">Welcome to</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 px-4">Rare Roman Antiques</h1>
              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto px-4">
                Preserving history, discovering rarity, and connecting collectors worldwide with authentic Roman artifacts, rare coins, precious stones, and heritage collections.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section ref={ref} className="py-12 md:py-16 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Rare Roman Antiques is an international destination for collectors, investors, museums, historians, 
              and enthusiasts seeking rare historical treasures, antique collectibles, and unique artifacts from 
              the Roman Empire and other civilizations.
            </p>
          </motion.div>
        </section>

        {/* Our Story Section */}
        <section className="py-12 md:py-16 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="text-[#D9AF58] uppercase tracking-[0.35em] text-xs font-mono font-semibold block mb-5">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              The <span className="text-[#D9AF58]">Rare Roman</span> Legacy
            </h2>
            <p className="text-white/50 text-sm md:text-base leading-relaxed font-sans max-w-2xl mx-auto px-4">
              Inspired by the legacy of Ancient Rome, our brand represents strength, authenticity, heritage, and timeless value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-white/60 text-sm md:text-base leading-relaxed text-justify">
                Rare Roman Antiques was founded with a singular vision: to connect collectors worldwide with authentic 
                historical treasures from the Roman Empire and beyond. What began as a passion for ancient history has 
                grown into a globally recognized name in the antiquities trade.
              </p>
              <p className="text-white/60 text-sm md:text-base leading-relaxed text-justify">
                We specialize in sourcing, authenticating, and trading exceptional Roman artifacts including ancient coins, 
                military relics, sculptures, pottery, architectural fragments, and rare collectibles from the Roman Empire. 
                Every piece in our collection reflects the rich history, exceptional craftsmanship, and cultural significance 
                of one of history's greatest civilizations.
              </p>
              <p className="text-white/60 text-sm md:text-base leading-relaxed text-justify">
                Our commitment to authenticity and transparent business practices ensures that every artifact we offer is 
                genuine, historically significant, and handled with the utmost care and professionalism. We work with trusted 
                sources, archaeologists, and experts to verify the provenance and authenticity of each piece.
              </p>
              <p className="text-white/60 text-sm md:text-base leading-relaxed text-justify">
                Whether you are an experienced collector, a museum curator, or someone discovering the fascinating world of 
                Roman antiquities for the first time, we provide expert guidance, authentication support, and personalized 
                service to help you find the perfect addition to your collection.
              </p>
              <p className="text-white/60 text-sm md:text-base leading-relaxed text-justify">
                Our passion for preserving history and sharing the legacy of Ancient Rome drives everything we do. Each 
                artifact tells a story of emperors, warriors, artisans, and everyday life in one of the world's most 
                influential civilizations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1582896703535-62ef6a3c1a93?w=800&h=600&fit=crop"
                  alt="Roman artifacts and antiquities collection"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Collections Section */}
        <section className="py-12 md:py-16 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="text-[#D9AF58] uppercase tracking-[0.35em] text-xs font-mono font-semibold block mb-5">
              Our Collection
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Featured <span className="text-[#D9AF58]">Treasures</span>
            </h2>
            <p className="text-white/50 text-sm md:text-base leading-relaxed font-sans max-w-2xl mx-auto px-4">
              Explore some of our finest pieces across numismatics, antiquities, metallurgy, and archives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectImages.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <div className="relative overflow-hidden bg-black/40 h-64 md:h-72 lg:h-80">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <div className="text-[#D9AF58] text-[10px] font-mono tracking-wider uppercase mb-1">
                    {project.category}
                  </div>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-[#D9AF58]/0 group-hover:bg-[#D9AF58]/10 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Lead Team Spotlight */}
        <section className="py-12 md:py-16 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1582896703535-62ef6a3c1a93?w=1920&h=800&fit=crop"
                alt="Roman antiquities collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/80 to-black/70" />
            </div>
            
            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Gem className="w-5 h-5 md:w-6 md:h-6 text-[#D9AF58]" />
                  <span className="text-[#D9AF58] text-xs md:text-sm font-medium">Authenticity Guaranteed</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Rare Roman Antiques</h2>
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
                  Led by a team of experienced antiquities specialists, numismatists, and metallurgists, Rare Roman Antiques 
                  has established itself as a trusted name in the international antiquities market.
                </p>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  Our commitment to authenticity, transparent business practices, and personalized collector support has 
                  made us a trusted partner for collectors, museums, and investors worldwide.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-12 md:py-16 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="p-6 md:p-8 rounded-2xl border border-[#D9AF58]/20 bg-black"
            >
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 md:w-8 md:h-8 text-[#D9AF58]" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-white/60 text-sm md:text-base leading-relaxed text-justify">
                To become one of the world's most trusted names in antique collections, historical artifacts, and rare 
                collectibles by preserving cultural heritage and connecting collectors across generations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="p-6 md:p-8 rounded-2xl border border-[#D9AF58]/20 bg-black"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-[#D9AF58]" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-white/60 text-sm md:text-base leading-relaxed text-justify">
                To discover, preserve, and responsibly present rare historical treasures while providing collectors with 
                access to authentic and meaningful artifacts from around the world.
              </p>
            </motion.div>
          </div>

          {/* Milestones Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mb-12 md:mb-16 p-6 md:p-8 rounded-2xl border border-[#D9AF58]/20 bg-black"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 md:w-8 md:h-8 text-[#D9AF58]" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">Our Milestones</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-l-2 border-[#D9AF58] pl-4">
                <p className="text-[#D9AF58] font-bold text-xl">Founded</p>
                <p className="text-white/60 text-sm">Established with a vision to preserve and share authentic Roman artifacts.</p>
              </div>
              <div className="border-l-2 border-[#D9AF58] pl-4">
                <p className="text-[#D9AF58] font-bold text-xl">Global Reach</p>
                <p className="text-white/60 text-sm">Built an international network of collectors, museums, and institutions.</p>
              </div>
              <div className="border-l-2 border-[#D9AF58] pl-4">
                <p className="text-[#D9AF58] font-bold text-xl">Today</p>
                <p className="text-white/60 text-sm">A trusted name in Roman antiquities and rare collectibles worldwide.</p>
              </div>
            </div>
          </motion.div>

          {/* Brand Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-12 md:mb-16 p-6 md:p-8 rounded-2xl border border-[#D9AF58]/20 bg-black"
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-[#D9AF58]" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">Our Values</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-xl bg-white/5">
                <Shield className="w-8 h-8 text-[#D9AF58] mx-auto mb-2" />
                <h3 className="text-white font-semibold text-sm">Authenticity</h3>
                <p className="text-white/50 text-xs">Verified Artifacts</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5">
                <Gem className="w-8 h-8 text-[#D9AF58] mx-auto mb-2" />
                <h3 className="text-white font-semibold text-sm">Rarity</h3>
                <p className="text-white/50 text-xs">Unique Collectibles</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5">
                <Globe className="w-8 h-8 text-[#D9AF58] mx-auto mb-2" />
                <h3 className="text-white font-semibold text-sm">Global Reach</h3>
                <p className="text-white/50 text-xs">Worldwide Network</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5">
                <Clock className="w-8 h-8 text-[#D9AF58] mx-auto mb-2" />
                <h3 className="text-white font-semibold text-sm">Heritage</h3>
                <p className="text-white/50 text-xs">Preserving History</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">Our Commitment</h2>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-4 text-justify">
                Every item offered through Rare Roman Antiques is handled with professionalism, respect, and care. 
                We are committed to ethical sourcing, transparent communication, and preserving the historical and 
                cultural importance of every collectible.
              </p>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 text-justify">
                Whether you are an experienced collector, an investor, or someone searching for a unique historical piece, 
                we aim to provide an exceptional experience built on trust and expertise.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 text-[#D9AF58] font-medium hover:gap-3 transition-all duration-200"
              >
                Explore Our Collection <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="p-6 md:p-8 rounded-2xl border border-[#D9AF58]/20 bg-black"
            >
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6 text-left">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-left">
                  <span className="text-[#D9AF58] text-lg">✦</span>
                  <span className="text-white/60 text-sm md:text-base">Authenticity Guaranteed</span>
                </li>
                <li className="flex items-center gap-3 text-left">
                  <span className="text-[#D9AF58] text-lg">✦</span>
                  <span className="text-white/60 text-sm md:text-base">Professional Evaluation</span>
                </li>
                <li className="flex items-center gap-3 text-left">
                  <span className="text-[#D9AF58] text-lg">✦</span>
                  <span className="text-white/60 text-sm md:text-base">Global Network</span>
                </li>
                <li className="flex items-center gap-3 text-left">
                  <span className="text-[#D9AF58] text-lg">✦</span>
                  <span className="text-white/60 text-sm md:text-base">Secure Transactions</span>
                </li>
                <li className="flex items-center gap-3 text-left">
                  <span className="text-[#D9AF58] text-lg">✦</span>
                  <span className="text-white/60 text-sm md:text-base">Fair Market Pricing</span>
                </li>
                <li className="flex items-center gap-3 text-left">
                  <span className="text-[#D9AF58] text-lg">✦</span>
                  <span className="text-white/60 text-sm md:text-base">Personalized Service</span>
                </li>
                <li className="flex items-center gap-3 text-left">
                  <span className="text-[#D9AF58] text-lg">✦</span>
                  <span className="text-white/60 text-sm md:text-base">Trust & Integrity</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-12 md:mt-24 p-8 md:p-12 rounded-2xl border border-[#D9AF58]/20 bg-black text-center"
          >
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 px-4">
              Ready to Discover Your Next Treasure?
            </h2>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-8 px-4">
              Whether you're looking to buy, sell, or learn more about a historical collectible, our team is here 
              to help you with expert guidance and personalized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#D9AF58] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#D9AF58]/90 transition-all duration-200"
              >
                Get In Touch Today
              </Link>
              <Link
                to="/collections"
                className="inline-flex items-center justify-center gap-2 border border-[#D9AF58]/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
              >
                Explore Our Collection
              </Link>
            </div>
            <p className="text-white/40 text-xs md:text-sm mt-6 px-4">
              Rare Roman Antiques — Preserving History. Discovering Rarity. Connecting Collectors Worldwide.
            </p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}