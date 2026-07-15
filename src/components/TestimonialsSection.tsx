import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. James Anderson',
    role: 'Director, Smithsonian Institute',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    quote: 'The authentication and quality of Roman artifacts from Rare Roman Antiques is exceptional. We have acquired several pieces for our museum collection, and each one has been meticulously verified and historically documented.',
    rating: 5,
    project: 'Museum Acquisition - Smithsonian',
  },
  {
    name: 'Victoria Chen',
    role: 'Private Collector & Investor',
    avatar: 'https://images.unsplash.com/photo-1494790108372-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    quote: 'As a collector of ancient coins for over 20 years, I can confidently say that Rare Roman Antiques offers some of the finest authenticated pieces I have ever encountered. Their expertise and professionalism are unmatched.',
    rating: 5,
    project: 'Roman Coins Collection - Private',
  },
  {
    name: 'Marcus Aurelius',
    role: 'Head Curator, European Heritage Museum',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    quote: 'We regularly source rare Roman artifacts from Rare Roman Antiques for our exhibitions. Their ability to provide detailed provenance and historical context sets them apart from other dealers in the industry.',
    rating: 5,
    project: 'Ancient Rome Exhibition - European Museum',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Investment Advisor, Heritage Wealth',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    quote: 'The valuation and authenticity verification services provided by Rare Roman Antiques have been instrumental in building our clients\' rare metal and artifact portfolios. Their market insights are invaluable.',
    rating: 5,
    project: 'Rare Metals & Artifacts Portfolio',
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section ref={ref} className="relative py-28 bg-black overflow-hidden mt-20">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D9AF58' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Animated Light Orbs */}
        <motion.div
          className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#D9AF58]/5 blur-[120px]"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full bg-[#D9AF58]/5 blur-[120px]"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header Section - Same style as Services/About/Process */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-[#D9AF58] uppercase tracking-[0.35em] text-xs font-mono font-semibold block mb-5">
            Testimonials
          </span>
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            What Our <span className="text-[#D9AF58]">Collectors Say</span>
          </h2>
          
          <p className="text-white/50 text-base leading-relaxed font-sans">
            Trusted by collectors, museums, and investors worldwide for authentic Roman antiquities
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative p-10 md:p-14 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm overflow-hidden shadow-2xl">
            {/* Premium Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#D9AF58]/20" />
            
            {/* Quote Icon Background */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#D9AF58]/5 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#D9AF58]/5 blur-2xl" />
            
            {/* Large Quote Mark */}
            <div className="absolute top-8 left-8 opacity-[0.03]">
              <Quote className="w-24 h-24 text-white" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Rating Stars */}
                <motion.div 
                  className="flex items-center gap-1 mb-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#D9AF58] fill-[#D9AF58]" />
                  ))}
                </motion.div>

                {/* Quote Text */}
                <motion.blockquote 
                  className="font-serif text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed mb-10 italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  "{testimonials[current].quote}"
                </motion.blockquote>

                {/* Client Info */}
                <motion.div 
                  className="flex items-center gap-5 pt-4 border-t border-white/10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {/* Avatar with Premium Border */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[#D9AF58] blur-md opacity-30" />
                    <img
                      src={testimonials[current].avatar}
                      alt={testimonials[current].name}
                      width={64}
                      height={64}
                      className="relative w-16 h-16 rounded-full object-cover border-2 border-[#D9AF58]"
                    />
                  </div>
                  
                  <div>
                    <div className="font-serif text-xl font-bold text-white">
                      {testimonials[current].name}
                    </div>
                    <div className="text-white/50 text-sm font-sans mt-0.5">
                      {testimonials[current].role}
                    </div>
                    <div className="text-[#D9AF58] text-xs font-mono tracking-wider mt-1">
                      {testimonials[current].project}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls - Premium Style */}
          <div className="flex items-center justify-center gap-6 mt-10">
            {/* Prev Button */}
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="group w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-[#D9AF58] hover:border-[#D9AF58] hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D9AF58]/50"
            >
              <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
            
            {/* Dot Indicators */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D9AF58]/50 ${
                    i === current 
                      ? 'w-8 h-2 bg-[#D9AF58]' 
                      : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            {/* Next Button */}
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="group w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-[#D9AF58] hover:border-[#D9AF58] hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D9AF58]/50"
            >
              <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;