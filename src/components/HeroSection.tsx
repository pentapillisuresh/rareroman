import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[calc(100vh-80px)] mt-20 flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="./images/hero-poster.jpg"
        >
          <source src="./images/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Darker Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Background Glow Effects - Gold theme */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#D9AF58]/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#D9AF58]/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D9AF58]/5 blur-3xl" />
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{ opacity }}
      >
        {/* BRAND NAME - ROMULUS UNIVERSAL ANTIQUITIES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
          <span className="text-[#D9AF58] text-sm md:text-base font-medium tracking-[0.3em] uppercase">
            ROMULUS UNIVERSAL
          </span>
          <span className="text-white/60 text-sm md:text-base font-medium tracking-[0.3em] uppercase mx-2">
            |
          </span>
          <span className="text-white/80 text-sm md:text-base font-medium tracking-[0.3em] uppercase">
            ANTIQUITIES
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.3] mb-4 drop-shadow-lg"
        >
          Preserving History.
          <br />
          <span className="text-[#D9AF58]">Discovering Rarity.</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[white] text-base md:text-lg tracking-[0.2em] uppercase mb-4 font-medium"
        >
          CONNECTING COLLECTORS WORLDWIDE
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#D9AF58] text-black font-semibold text-base hover:bg-[#C49A3E] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Explore Our Collection
          </a>
          <a
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-[#D9AF58]/50 text-white font-semibold text-base hover:bg-[#D9AF58]/10 hover:border-[#D9AF58] transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-[#D9AF58]" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;