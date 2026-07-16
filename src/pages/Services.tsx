import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Coins, 
  Gem, 
  Shield, 
  Award, 
  Handshake, 
  TrendingUp, 
  Users,
  Diamond,
  Medal,
  Sparkles
} from 'lucide-react';

const services = [
  {
    icon: Coins,
    number: '01',
    title: 'Buying Antique Metals & Collectibles',
    subtitle: 'Acquisition Services',
    desc: 'We purchase valuable antique metals, historical metal objects, vintage collectibles, and heritage artifacts with cultural or historical significance.',
    features: ['Historical Metal Objects', 'Vintage Collectibles', 'Heritage Artifacts', 'Cultural Significance', 'Fair Market Pricing'],
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=400&fit=crop',
  },
  {
    icon: Shield,
    number: '02',
    title: 'Selling Authenticated Rare Items',
    subtitle: 'Sales & Trading',
    desc: 'We help clients sell authenticated rare items, antique metals, and collectibles through our extensive network of collectors, investors, and institutions.',
    features: ['Authenticated Items', 'Global Buyer Network', 'Competitive Pricing', 'Professional Handling', 'Confidential Transactions'],
    image: 'https://images.unsplash.com/photo-1582896703535-62ef6a3c1a93?w=600&h=400&fit=crop',
  },
  {
    icon: Diamond,
    number: '03',
    title: 'Diamond Sourcing & Trading',
    subtitle: 'Certified Natural Diamonds',
    desc: 'We buy and sell certified natural diamonds, loose diamonds, and selected diamond jewelry, ensuring quality, authenticity, and ethical sourcing.',
    features: ['Certified Natural Diamonds', 'Loose Diamonds', 'Diamond Jewelry', 'Quality Assurance', 'Ethical Sourcing'],
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop',
  },
  {
    icon: Gem,
    number: '04',
    title: 'Rare Metal Procurement',
    subtitle: 'High-Value Metals',
    desc: 'We source and trade rare and high-value metals used for investment, industrial applications, and specialized collections with verified authenticity.',
    features: ['High-Value Metals', 'Investment Grade', 'Industrial Applications', 'Specialized Collections', 'Verified Authenticity'],
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=400&fit=crop&sat=-20',
  },
  {
    icon: Award,
    number: '05',
    title: 'Item Authentication & Evaluation',
    subtitle: 'Expert Verification',
    desc: 'Our experts provide professional authentication and evaluation services for antique metals, rare items, and collectibles to ensure their authenticity and value.',
    features: ['Professional Authentication', 'Expert Evaluation', 'Provenance Verification', 'Condition Assessment', 'Detailed Reports'],
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=400&fit=crop',
  },
  {
    icon: TrendingUp,
    number: '06',
    title: 'Market Value Assessments',
    subtitle: 'Valuation Services',
    desc: 'We provide accurate market value assessments based on current demand, rarity, historical significance, and international market trends.',
    features: ['Current Market Analysis', 'Rarity Assessment', 'Historical Significance', 'International Trends', 'Fair Valuations'],
    image: 'https://images.unsplash.com/photo-1582896703535-62ef6a3c1a93?w=600&h=400&fit=crop&brightness=0.7',
  },
  {
    icon: Users,
    number: '07',
    title: 'Private Collector Services',
    subtitle: 'Personalized Support',
    desc: 'We offer dedicated private collector services including acquisition assistance, portfolio management, and personalized guidance for building exceptional collections.',
    features: ['Acquisition Assistance', 'Portfolio Management', 'Personalized Guidance', 'Curated Collections', 'Expert Advice'],
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&h=400&fit=crop',
  },
  {
    icon: Handshake,
    number: '08',
    title: 'Secure Transactions with Confidentiality',
    subtitle: 'Trusted & Transparent',
    desc: 'All transactions are handled with the highest level of professionalism, security, and confidentiality to ensure a seamless and trustworthy experience.',
    features: ['Secure Transactions', 'Complete Confidentiality', 'Professional Handling', 'Transparent Process', 'Peace of Mind'],
    image: 'https://images.unsplash.com/photo-1605568427561-40dd23c4ecc8?w=600&h=400&fit=crop&brightness=0.6',
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <Header />
      <main className="bg-black min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative pt-32 pb-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="./images/servicebanner1.png"
              alt="Rare Roman Antiques - Services"
              width={1920}
              height={800}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[#D9AF58] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">Our Services</span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Services We Offer</h1>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
                Specializing in buying, selling, authenticating, and trading antique metals, rare metals, diamonds, and valuable collectibles.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={ref} className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Image Section */}
                  <div className={`${!isEven ? 'lg:order-2' : ''} group`}>
                    <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl border border-[#D9AF58]/20">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        width={600} 
                        height={400} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 bg-[#D9AF58]/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {service.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-[#D9AF58]/10 border border-[#D9AF58]/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#D9AF58]" />
                      </div>
                      <span className="text-[#D9AF58]/60 font-mono text-4xl font-bold">{service.number}</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">{service.title}</h2>
                    <p className="text-[#D9AF58] text-sm font-medium mb-4 tracking-wide">{service.subtitle}</p>
                    <p className="text-white/60 leading-relaxed mb-6">{service.desc}</p>
                    
                    {/* Features List */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-white/60 text-sm">
                          <CheckCircle className="w-4 h-4 text-[#D9AF58] shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link 
                      to="/contact" 
                      className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#D9AF58]/40 text-[#D9AF58] hover:bg-[#D9AF58]/10 transition-all duration-300 text-sm font-medium"
                    >
                      Enquire About This Service
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-24 p-12 rounded-2xl border border-[#D9AF58]/20 bg-gradient-to-br from-black to-[#D9AF58]/5 text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              Whether you're looking to buy, sell, authenticate, or evaluate valuable items, our team of experts 
              is ready to assist you with personalized service and professional guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#D9AF58] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#D9AF58]/90 transition-all duration-200"
              >
                Get In Touch Today
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 border border-[#D9AF58]/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
              >
                Explore Our Collection
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}