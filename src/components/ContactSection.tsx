import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';
import { Mail, Phone, MapPin, Send, Clock, Building2, Globe } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('https://formsubmit.co/rareromanantiques@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          service: data.service,
          message: data.message,
          _captcha: 'false',
          _template: 'table',
          _subject: 'New Enquiry from Rare Roman Antiques',
        }),
      });

      if (response.ok) {
        toast.success('✨ Message sent successfully! We\'ll get back to you within 24 hours.');
        reset();
      } else {
        toast.error('❌ Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('❌ Network error. Please check your connection.');
    }
  };

  return (
    <section ref={ref} className="relative py-24 bg-black overflow-hidden mt-20" id="contact">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D9AF58' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Animated Light Orbs */}
        <motion.div
          className="absolute top-1/3 -left-48 w-96 h-96 rounded-full bg-[#D9AF58]/5 blur-[120px]"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-48 w-96 h-96 rounded-full bg-[#D9AF58]/5 blur-[120px]"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section - Same style as other sections */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#D9AF58] uppercase tracking-[0.35em] text-xs font-mono font-semibold block mb-5">
            Get In Touch
          </span>
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Connect With Our Experts
          </h2>
          
          <p className="text-white/50 text-base leading-relaxed font-sans">
            Have a rare artifact to sell or looking for a specific piece? Contact us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5"
          >
            {/* Main Office - Alaska */}
            <div className="group p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#D9AF58]/40 transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#D9AF58]/10 border border-[#D9AF58]/20 flex items-center justify-center shrink-0 group-hover:bg-[#D9AF58]/20 transition-all duration-300">
                  <Building2 className="w-4 h-4 text-[#D9AF58]" />
                </div>
                <div className="flex-1">
                  <div className="text-[#D9AF58] text-[10px] font-mono tracking-wider uppercase mb-1">Headquarters</div>
                  <div className="text-white text-sm leading-relaxed">
                    Russian American Company<br />
                    134 Lincoln Street<br />
                    Sitka, Alaska 99835
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info Cards - 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Phone, label: 'Toll Free', value: '1-800-742-62119' },
                { icon: Phone, label: 'Local', value: '+1 907-747-6119' },
                { icon: Mail, label: 'Email Us', value: 'rareromanantiques@gmail.com' },
                { icon: Clock, label: 'Working Hours', value: 'Mon - Fri: 9AM - 6PM AST' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="group flex items-start gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#D9AF58]/40 transition-all duration-300 hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-xl bg-[#D9AF58]/10 border border-[#D9AF58]/20 flex items-center justify-center shrink-0 group-hover:bg-[#D9AF58]/20 transition-all duration-300">
                    <Icon className="w-4 h-4 text-[#D9AF58]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-white/40 text-[10px] font-mono tracking-wider uppercase mb-0.5">{label}</div>
                    <div className="text-white text-sm break-words">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Link */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=134+Lincoln+Street+Sitka+Alaska+99835"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 p-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#D9AF58]/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <MapPin className="w-4 h-4 text-[#D9AF58]" />
              <span className="text-white/60 text-sm group-hover:text-white transition-colors">
                View on Google Maps →
              </span>
            </a>

            {/* Brand Signature */}
            <div className="pt-4">
              <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase font-mono text-center">
                Rudra x Romulus — Rare Antiques International
              </p>
            </div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] space-y-6 h-full">
              {/* Form Header */}
              <div className="text-center pb-4 border-b border-white/10">
                <h3 className="font-serif text-2xl font-bold text-white mb-1">Send us a Message</h3>
                <p className="text-white/40 text-xs font-sans">We'll respond within 24 hours</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-white/60 text-xs font-mono tracking-wider uppercase mb-2">Full Name</label>
                  <input
                    id="name"
                    {...register('name')}
                    placeholder="John Smith"
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#D9AF58]/50 focus:border-[#D9AF58]/50 transition-all duration-200"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/60 text-xs font-mono tracking-wider uppercase mb-2">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#D9AF58]/50 focus:border-[#D9AF58]/50 transition-all duration-200"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-white/60 text-xs font-mono tracking-wider uppercase mb-2">Service Interested In</label>
                <select
                  id="service"
                  {...register('service')}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 text-white text-sm transition-all duration-200"
                  style={{ 
                    backgroundColor: '#000000',
                    color: '#ffffff',
                  }}
                >
                  <option value="" style={{ backgroundColor: '#000000', color: 'rgba(255,255,255,0.6)' }}>Select a service...</option>
                  <option value="buying" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Buying Artifacts</option>
                  <option value="selling" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Selling Artifacts</option>
                  <option value="valuation" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Authentication & Valuation</option>
                  <option value="collection" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Private Collection</option>
                  <option value="museum" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Museum Acquisition</option>
                  <option value="investment" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Investment Consultation</option>
                </select>
                {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
              </div>

              <style>{`
                select:focus {
                  outline: none !important;
                  ring: 2px solid #D9AF58 !important;
                  border-color: #D9AF58 !important;
                  box-shadow: 0 0 0 2px rgba(217, 175, 88, 0.5) !important;
                }
                select option {
                  background-color: #000000 !important;
                  color: #ffffff !important;
                }
                select option:checked {
                  background-color: #D9AF58 !important;
                  color: #000000 !important;
                }
                select:hover {
                  border-color: rgba(217, 175, 88, 0.5) !important;
                }
              `}</style>

              <div>
                <label htmlFor="message" className="block text-white/60 text-xs font-mono tracking-wider uppercase mb-2">Your Message</label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={4}
                  placeholder="Tell us about the artifact you're interested in or looking to sell..."
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#D9AF58]/50 focus:border-[#D9AF58]/50 transition-all duration-200 resize-none"
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#D9AF58] text-black font-mono text-sm font-semibold hover:bg-[#C49A3E] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#D9AF58]/50"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  <>
                    Send Message
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;