import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  Globe,
  Gem,
  Handshake,
  Award,
  Users,
  Clock,
  Leaf,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Authenticity Guaranteed",
    desc: "Every collection is carefully inspected by experienced specialists.",
    number: "01",
  },
  {
    icon: Award,
    title: "Professional Evaluation",
    desc: "We assess historical significance, rarity, and current market value.",
    number: "02",
  },
  {
    icon: Globe,
    title: "Global Network",
    desc: "Strong relationships with collectors, investors, museums, and dealers worldwide.",
    number: "03",
  },
  {
    icon: ShieldCheck,
    title: "Secure Transactions",
    desc: "Professional handling with complete confidentiality.",
    number: "04",
  },
  {
    icon: Gem,
    title: "Fair Market Pricing",
    desc: "Transparent valuations based on international market demand.",
    number: "05",
  },
  {
    icon: Users,
    title: "Personalized Service",
    desc: "Every client receives dedicated guidance from our experts.",
    number: "06",
  },
  {
    icon: Clock,
    title: "Heritage Premium",
    desc: "We are passionate about preserving history for future generations.",
    number: "07",
  },
  {
    icon: Handshake,
    title: "Trust & Integrity",
    desc: "Our business is built on honesty, transparency, and long-term relationships.",
    number: "08",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      ref={ref}
      className="relative py-24 bg-black overflow-hidden mt-20"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#D9AF58] uppercase tracking-[0.35em] text-xs font-mono font-semibold block mb-5">
            Why Choose Us
          </span>

          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Excellence Built
            <br />
            <span className="text-[#D9AF58]">On Trust</span>
          </h2>

          <p className="max-w-2xl mx-auto text-white/50 text-base leading-relaxed font-sans">
            Rare Roman Antiques is built on a foundation of authenticity, integrity, 
            and a deep respect for history. Every artifact we handle is treated with 
            professionalism and care.
          </p>
        </motion.div>

        {/* Cards Grid - 4 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group"
              >
                <div className="relative h-full bg-white/[0.03] border border-white/10 rounded-[26px] p-7 hover:border-[#D9AF58]/40 transition-all duration-500 hover:-translate-y-2">
                  
                  {/* Number */}
                  <div className="absolute top-5 right-5 text-5xl font-serif font-bold text-white/[0.04] group-hover:text-[#D9AF58]/10 transition-all duration-500">
                    {item.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D9AF58] transition-all duration-500">
                    <Icon className="w-6 h-6 text-[#D9AF58] group-hover:text-black transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-lg font-bold text-white mb-3 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-white/45 leading-relaxed text-sm mb-8 font-sans">
                    {item.desc}
                  </p>

                  {/* Bottom */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-[1px] bg-[#D9AF58]" />

                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#D9AF58] group-hover:border-[#D9AF58] transition-all duration-500">
                      <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Brand Signature */}
        <div className="text-center mt-16">
          <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase font-mono">
            Rudra x Romulus — Rare Antiques International
          </p>
        </div>

      </div>
    </section>
  );
};
 
export default WhyChooseUs;