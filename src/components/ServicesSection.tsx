import { useRef } from 'react';
import type { FC } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  Coins,
  Gem,
  Shield,
  Trophy,
  Landmark,
  Scroll,
  Sword,
  Crown,
} from 'lucide-react';

interface Service {
  id: number;
  icon: FC<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  number: string;
}

const services = [
  {
    id: 1,
    icon: Shield,
    title: "Authentication Support",
    subtitle: "Professional Verification",
    description:
      "Expert evaluation and authentication using historical references and established assessment methods.",
    number: "01",
  },
  {
    id: 2,
    icon: Landmark,
    title: "Antique Sourcing",
    subtitle: "Global Network",
    description:
      "We source rare antiques and historical collectibles for private collectors and institutions worldwide.",
    number: "02",
  },
  {
    id: 3,
    icon: Scroll,
    title: "Historical Research",
    subtitle: "Expert Assistance",
    description:
      "Research support to understand provenance, historical context, and cultural significance.",
    number: "03",
  },
  {
    id: 4,
    icon: Trophy,
    title: "Collection Evaluation",
    subtitle: "Professional Assessment",
    description:
      "Comprehensive evaluation based on rarity, condition, provenance, and market demand.",
    number: "04",
  },
  {
    id: 5,
    icon: Coins,
    title: "Market Valuation",
    subtitle: "Fair Pricing",
    description:
      "Transparent market valuation prepared by experienced specialists.",
    number: "05",
  },
  {
    id: 6,
    icon: Crown,
    title: "Collector Consultation",
    subtitle: "Private Advisory",
    description:
      "Personalized guidance for collectors, museums, and investors.",
    number: "06",
  },
  {
    id: 7,
    icon: Gem,
    title: "Secure Buying & Selling",
    subtitle: "Confidential Transactions",
    description:
      "Professional assistance for secure acquisitions and private sales.",
    number: "07",
  },
  {
    id: 8,
    icon: Sword,
    title: "Global Collector Network",
    subtitle: "International Reach",
    description:
      "Connecting collectors, institutions, and enthusiasts around the world.",
    number: "08",
  },
];
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const ServicesSection: FC = () => {
  const ref = useRef<HTMLElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <section
      ref={ref}
      className="w-full bg-black py-20 mt-20"
    >
      <div className="container mx-auto px-6">

        {/* Heading - Brand Name: Rudra x Romulus - Rare Antiques International */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#D9AF58] uppercase tracking-[0.35em] text-xs font-mono font-semibold block mb-5">
            Rudra x Romulus
          </span>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Rare Antiques
            <br />
            <span className="text-[#D9AF58]">International Collection</span>
          </h2>

          <p className="text-white/50 text-base leading-relaxed font-sans">
            Rudra x Romulus - Rare Antiques International brings together the power of ancient 
            Roman heritage and universal rarity. We specialize in sourcing, evaluating, and trading 
            exceptional collectible items from around the world.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center max-w-7xl mx-auto"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative w-44 h-44 rounded-full bg-white/[0.03] flex flex-col items-center justify-center border border-white/5 shadow-md cursor-pointer transition-all duration-500 hover:bg-[#D9AF58] hover:border-[#D9AF58]/50 hover:scale-105 hover:shadow-2xl">

                  {/* Outer Glow */}
                  <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-[#D9AF58]/30 transition-all duration-500" />

                  {/* Number Badge */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#D9AF58] flex items-center justify-center text-black text-xs font-bold z-20">
                    {service.number}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center px-4">
                    <Icon className="w-10 h-10 text-[#D9AF58] group-hover:text-white transition-all duration-500 mb-3" />

                    <h3 className="font-serif text-sm font-semibold text-white leading-snug">
                      {service.title}
                    </h3>

                    <p className="font-sans text-[10px] text-white/40 group-hover:text-white/80 mt-2 px-2 transition-all duration-500">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Animated Ring */}
                  <div className="absolute w-full h-full rounded-full border-2 border-transparent scale-110 group-hover:scale-100 group-hover:border-white/20 transition-all duration-700" />
                </div>

                {/* Description below the circle */}
                <p className="text-white/40 text-xs mt-4 max-w-[180px] text-center group-hover:text-white/60 transition-colors duration-500">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>



      </div>
    </section>
  );
};

export default ServicesSection;