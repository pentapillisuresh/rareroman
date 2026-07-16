import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  Building2, 
  Gem, 
  Shield, 
  Coins, 
  Crown,
  Users,
  Award,
  Briefcase,
  Globe,
  Mail,
  Phone
} from 'lucide-react';

const leadershipTeam = [
  {
    name: 'Roman Rariy',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
    bio: 'With over 20 years of experience in the antiquities trade, Roman leads the global vision of Rare Roman Antiques.',
    category: 'leadership'
  },
  {
    name: 'Michael Roman',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    bio: 'Specializing in rare artifact acquisition and international collector relations.',
    category: 'leadership'
  },
  {
    name: 'Jordan Beckett',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
    bio: 'Expert in museum-quality acquisitions and heritage collection management.',
    category: 'leadership'
  },
  {
    name: 'B.S.R. Krishna',
    role: 'CEO - Asian Countries',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    bio: 'Leading operations across Asian markets with deep expertise in regional antiquities.',
    category: 'leadership'
  },
];

const financeTeam = [
  {
    name: 'Shiva Chowdary',
    role: 'Asian Countries Financial Head',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=400&h=400&fit=crop&crop=face',
    category: 'finance'
  },
  {
    name: 'Kaundinya Gowda',
    role: 'Financial Head - India',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop&crop=face',
    category: 'finance'
  },
];

const metallurgyTeam = [
  { name: 'Rudra Chowdary', role: 'Senior Metallurgist' },
  { name: 'K. Kesava', role: 'Metallurgist & Financial Advisor' },
  { name: 'M.G. Chowdary', role: 'Legal Financial Advisor' },
  { name: 'V.S. Narayanan', role: 'Junior Metallurgist' },
];

const coordinators = [
  { name: 'Anjannapa Mahesh', role: 'Co-ordinator' },
  { name: 'J. Satish Reddy', role: 'Co-ordinator' },
  { name: 'Subhash', role: 'Co-ordinator - South India' },
  { name: 'Manish Sharma', role: 'Co-ordinator - North India' },
  { name: 'B.S.V. Krishna', role: 'Co-ordinator - Tamil Nadu' },
  { name: 'Jayaram Sahoo', role: 'Co-ordinator - Chhattisgarh' },
  { name: 'Prince Royal', role: 'Operational Head' },
  { name: 'Naveen Shetty', role: 'Operational Head' },
  { name: 'Avigna Akash', role: 'Indian Co-ordinator' },
];

export default function Leadership() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <Header />
      <main className="bg-black min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="./images/teambanner.png"
              alt="Rare Roman Antiques Leadership Team"
              width={1920}
              height={600}
              className="w-full h-full object-cover opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[#D9AF58] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">Our Team</span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Meet Our Leadership</h1>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
                Our experienced leadership team brings together expertise in antique trading, finance, metallurgy, and international business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section ref={ref} className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-[#D9AF58] uppercase tracking-[0.35em] text-xs font-mono font-semibold block mb-5">
              Leadership Team
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Our <span className="text-[#D9AF58]">Leadership</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed font-sans max-w-2xl mx-auto">
              Leading our global operations with expertise, integrity, and a passion for preserving history
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#D9AF58]/40 hover:shadow-2xl hover:shadow-[#D9AF58]/5 transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-80 w-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-bold text-white">{member.name}</h3>
                  <div className="w-12 h-[2px] bg-[#D9AF58] mx-auto my-3" />
                  <p className="text-[#D9AF58] text-sm font-mono tracking-wide">{member.role}</p>
                  <p className="text-white/40 text-xs mt-3 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Financial Leadership Section */}
        <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-[#D9AF58] uppercase tracking-[0.35em] text-xs font-mono font-semibold block mb-5">
              Financial Leadership
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              <span className="text-[#D9AF58]">Financial</span> Team
            </h2>
            <p className="text-white/50 text-base leading-relaxed font-sans max-w-2xl mx-auto">
              Expert financial leadership driving our global operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {financeTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#D9AF58]/40 hover:shadow-2xl hover:shadow-[#D9AF58]/5 transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-80 w-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-bold text-white">{member.name}</h3>
                  <div className="w-12 h-[2px] bg-[#D9AF58] mx-auto my-3" />
                  <p className="text-[#D9AF58] text-sm font-mono tracking-wide">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Metallurgy & Advisory Section */}
        <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="text-[#D9AF58] uppercase tracking-[0.35em] text-xs font-mono font-semibold block mb-5">
              Metallurgy & Advisory
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              <span className="text-[#D9AF58]">Expert</span> Advisors
            </h2>
            <p className="text-white/50 text-base leading-relaxed font-sans max-w-2xl mx-auto">
              Our team of metallurgists and advisors ensures the highest standards of authenticity and value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metallurgyTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-[#D9AF58]/40 hover:shadow-xl hover:shadow-[#D9AF58]/5 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-[#D9AF58]/10 border border-[#D9AF58]/30 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#D9AF58]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white">{member.name}</h3>
                <div className="w-10 h-[2px] bg-[#D9AF58] mx-auto my-2" />
                <p className="text-white/50 text-sm font-sans">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Regional Coordinators & Operations Section */}
        <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="text-[#D9AF58] uppercase tracking-[0.35em] text-xs font-mono font-semibold block mb-5">
              Regional Operations
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              <span className="text-[#D9AF58]">Global</span> Presence
            </h2>
            <p className="text-white/50 text-base leading-relaxed font-sans max-w-2xl mx-auto">
              Our coordinators and operational heads manage our global network across regions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coordinators.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-[#D9AF58]/40 hover:shadow-xl hover:shadow-[#D9AF58]/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#D9AF58]/10 border border-[#D9AF58]/30 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-[#D9AF58]" />
                </div>
                <h3 className="font-serif text-base font-bold text-white">{member.name}</h3>
                <div className="w-8 h-[2px] bg-[#D9AF58] mx-auto my-2" />
                <p className="text-white/40 text-xs font-mono tracking-wide">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="p-12 rounded-2xl border border-[#D9AF58]/20 bg-gradient-to-br from-black to-[#D9AF58]/5 text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Connect With Our Experts?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              Whether you're looking to buy, sell, or authenticate valuable items, our team of experts is ready 
              to assist you with personalized service and professional guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#D9AF58] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#D9AF58]/90 transition-all duration-200"
              >
                Contact Our Team
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 border border-[#D9AF58]/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}