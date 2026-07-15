import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Globe, Shield, Gem, Clock, BookOpen } from 'lucide-react';

const AboutPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#D9AF58]/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#D9AF58] uppercase tracking-[0.35em] text-xs font-mono font-semibold block mb-5">
            About Rare Roman Antiques
          </span>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Preserving Roman Heritage,
            <br />
            <span className="text-[#D9AF58]">Discovering Timeless Treasures</span>
          </h2>

          <p className="text-white/50 text-base leading-relaxed font-sans">
            Rare Roman Antiques is a premier destination for collectors, historians, museums, 
            and enthusiasts seeking authentic Roman artifacts, ancient coins, sculptures, 
            and historical treasures from the Roman Empire.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-white/60 leading-relaxed text-justify">
              Inspired by the grandeur and legacy of Ancient Rome, Rare Roman Antiques represents 
              strength, authenticity, and timeless value. Every piece in our collection reflects 
              the rich history, exceptional craftsmanship, and cultural significance of one of 
              history's greatest civilizations.
            </p>

            <p className="text-white/60 leading-relaxed text-justify">
              We specialize in sourcing, authenticating, and trading exceptional Roman artifacts 
              including ancient coins, military relics, sculptures, pottery, architectural fragments, 
              and rare collectibles from the Roman Empire.
            </p>

            <p className="text-white/60 leading-relaxed text-justify">
              Our commitment to authenticity and transparent business practices ensures that every 
              artifact we offer is genuine, historically significant, and handled with the utmost 
              care and professionalism. We work with trusted sources, archaeologists, and experts 
              to verify the provenance and authenticity of each piece.
            </p>

            <p className="text-white/60 leading-relaxed text-justify">
              Whether you are an experienced collector, a museum curator, or someone discovering 
              the fascinating world of Roman antiquities for the first time, we provide expert 
              guidance, authentication support, and personalized service to help you find the 
              perfect addition to your collection.
            </p>

            <p className="text-white/60 leading-relaxed text-justify">
              Our passion for preserving history and sharing the legacy of Ancient Rome drives 
              everything we do. Each artifact tells a story of emperors, warriors, artisans, 
              and everyday life in one of the world's most influential civilizations.
            </p>

            {/* Milestones Section */}
            <div className="pt-4">
              <h3 className="text-[#D9AF58] font-semibold text-lg mb-4">Our Journey Through History</h3>
              <div className="space-y-3">
                <div className="border-l-2 border-[#D9AF58] pl-4">
                  <p className="text-[#D9AF58] font-bold">Founded</p>
                  <p className="text-white/50 text-sm">Established with a mission to preserve and share authentic Roman artifacts with the world.</p>
                </div>
                <div className="border-l-2 border-[#D9AF58] pl-4">
                  <p className="text-[#D9AF58] font-bold">Global Recognition</p>
                  <p className="text-white/50 text-sm">Built an international network of collectors, museums, and institutions seeking genuine Roman treasures.</p>
                </div>
                <div className="border-l-2 border-[#D9AF58] pl-4">
                  <p className="text-[#D9AF58] font-bold">Today</p>
                  <p className="text-white/50 text-sm">A trusted name in Roman antiquities, offering curated collections of rare and significant historical artifacts.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center gap-6"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl w-full">
              <img
                src="/images/about1.png"
                alt="Rare Roman Antiques - Authentic Roman artifacts and collectibles"
                width={800}
                height={600}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1582896703535-62ef6a3c1a93?w=800&h=600&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30,20%,6%)]/60 to-transparent" />
            </div>

            {/* Values Cards - Roman Themed */}
            <div className="grid grid-cols-2 gap-4 w-full mt-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                <Award className="w-6 h-6 text-[#D9AF58] mx-auto mb-2" />
                <p className="text-white text-sm font-medium">Authenticity</p>
                <p className="text-white/40 text-xs">Verified Roman Artifacts</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                <Shield className="w-6 h-6 text-[#D9AF58] mx-auto mb-2" />
                <p className="text-white text-sm font-medium">Integrity</p>
                <p className="text-white/40 text-xs">Ethical Sourcing</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                <Gem className="w-6 h-6 text-[#D9AF58] mx-auto mb-2" />
                <p className="text-white text-sm font-medium">Rarity</p>
                <p className="text-white/40 text-xs">Unique Collectibles</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                <Clock className="w-6 h-6 text-[#D9AF58] mx-auto mb-2" />
                <p className="text-white text-sm font-medium">Ancient Heritage</p>
                <p className="text-white/40 text-xs">Preserving Roman Legacy</p>
              </div>
            </div>

            {/* Animated CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group w-full"
            >
              <Link
                to="/contact"
                className="relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full overflow-hidden bg-gradient-to-r from-[#D9AF58] to-[#C49A3E] text-black font-semibold text-base shadow-lg hover:shadow-2xl transition-all duration-300 w-full"
              >
                {/* Animated background shine */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                {/* Button content */}
                <span className="relative z-10 flex items-center gap-2">
                  Explore Roman Treasures
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </span>
              </Link>
              
              {/* Pulse effect */}
              <div className="absolute inset-0 rounded-full bg-[#D9AF58] opacity-0 group-hover:opacity-20 animate-pulse transition-opacity duration-300" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;