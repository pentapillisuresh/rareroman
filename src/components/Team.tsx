import { motion } from "framer-motion";

const leadership = [
  {
    name: "Roman Rariy",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=face",
  },
  {
    name: "Michael Roman",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&crop=face",
  },
  {
    name: "Jordan Beckett",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop&crop=face",
  },
  {
    name: "B.S.R. Krishna",
    role: "CEO - Asian Countries",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=face&sat=-30",
  },
];

const finance = [
  {
    name: "Shiva Chowdary",
    role: "Asian Countries Financial Head",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop&crop=face&sat=-20",
  },
  {
    name: "Kaundinya Gowda",
    role: "Financial Head - India",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&crop=face&sat=-20",
  },
];

const specialists = [
  { name: "Rudra Chowdary", role: "Senior Metallurgist" },
  { name: "K. Kesava", role: "Metallurgist & Financial Advisor" },
  { name: "M.G. Chowdary", role: "Legal Financial Advisor" },
  { name: "V.S. Narayanan", role: "Junior Metallurgist" },
];

const coordinators = [
  { name: "Anjannapa Mahesh", role: "Co-ordinator" },
  { name: "J. Satish Reddy", role: "Co-ordinator" },
  { name: "Subhash", role: "Co-ordinator - South India" },
  { name: "Manish Sharma", role: "Co-ordinator - North India" },
  { name: "B.S.V. Krishna", role: "Co-ordinator - Tamil Nadu" },
  { name: "Jayaram Sahoo", role: "Co-ordinator - Chhattisgarh" },
  { name: "Prince Royal", role: "Operational Head" },
  { name: "Naveen Shetty", role: "Operational Head" },
  { name: "Avigna Akash", role: "Indian Co-ordinator" },
];

export default function Leadership() {
  return (
    <section className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.35em] text-[#D9AF58] text-xs font-mono font-semibold block mb-4">
            Leadership Team
          </span>

          <h2 className="font-serif text-5xl font-bold text-white">
            Meet Our Leadership
          </h2>

          <p className="mt-5 text-white/50 max-w-2xl mx-auto font-sans">
            Our experienced leadership team brings together expertise in
            antique trading, finance, metallurgy, and international business.
          </p>
        </div>

        {/* Top Row - Leadership */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {leadership.map((item) => (
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35 }}
              key={item.name}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#D9AF58]/40 hover:shadow-2xl hover:shadow-[#D9AF58]/5 transition-all"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[320px] w-full object-cover hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-2xl font-bold text-white">
                  {item.name}
                </h3>
                <div className="w-14 h-[2px] bg-[#D9AF58] mx-auto my-4"></div>
                <p className="text-[#D9AF58] text-sm font-mono tracking-wide">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Financial Leadership */}
        <div className="mt-20">
          <h3 className="text-center uppercase tracking-[0.35em] text-[#D9AF58] text-xs font-mono font-semibold mb-12">
            Financial Leadership
          </h3>

          <div className="grid lg:grid-cols-3 gap-10 items-center">
            {/* Left */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#D9AF58]/40 hover:shadow-2xl hover:shadow-[#D9AF58]/5 transition-all"
            >
              <img
                src={finance[0].image}
                alt={finance[0].name}
                className="h-[300px] w-full object-cover"
              />
              <div className="p-6 text-center">
                <h4 className="font-serif text-2xl font-bold text-white">
                  {finance[0].name}
                </h4>
                <div className="w-12 h-[2px] bg-[#D9AF58] mx-auto my-3"></div>
                <p className="text-[#D9AF58] text-sm font-mono tracking-wide">
                  {finance[0].role}
                </p>
              </div>
            </motion.div>

            {/* Logo */}
            <div className="flex justify-center">
              <div className="w-52 h-52 rounded-full border-2 border-[#D9AF58]/30 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full bg-[#D9AF58]/5 blur-2xl"></div>
                <div className="w-40 h-40 rounded-full border border-[#D9AF58]/50 flex items-center justify-center relative z-10">
                  <span className="font-serif text-6xl text-[#D9AF58] font-bold tracking-wider">
                    RR
                  </span>
                </div>
              </div>
            </div>

            {/* Right */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#D9AF58]/40 hover:shadow-2xl hover:shadow-[#D9AF58]/5 transition-all"
            >
              <img
                src={finance[1].image}
                alt={finance[1].name}
                className="h-[300px] w-full object-cover"
              />
              <div className="p-6 text-center">
                <h4 className="font-serif text-2xl font-bold text-white">
                  {finance[1].name}
                </h4>
                <div className="w-12 h-[2px] bg-[#D9AF58] mx-auto my-3"></div>
                <p className="text-[#D9AF58] text-sm font-mono tracking-wide">
                  {finance[1].role}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Specialists */}
        <div className="mt-20">
          <h3 className="text-center uppercase tracking-[0.35em] text-[#D9AF58] text-xs font-mono font-semibold mb-12">
            Metallurgy & Advisory
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specialists.map((item) => (
              <motion.div
                whileHover={{ y: -4 }}
                key={item.name}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-[#D9AF58]/40 hover:shadow-xl hover:shadow-[#D9AF58]/5 transition-all"
              >
                <h4 className="font-serif text-lg font-bold text-white">
                  {item.name}
                </h4>
                <div className="w-10 h-[2px] bg-[#D9AF58] mx-auto my-3"></div>
                <p className="text-white/50 text-sm font-sans">
                  {item.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coordinators */}
        <div className="mt-20">
          <h3 className="text-center uppercase tracking-[0.35em] text-[#D9AF58] text-xs font-mono font-semibold mb-12">
            Regional Coordinators & Operations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {coordinators.map((item) => (
              <motion.div
                whileHover={{ y: -4 }}
                key={item.name}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-[#D9AF58]/40 hover:shadow-xl hover:shadow-[#D9AF58]/5 transition-all"
              >
                <h4 className="font-serif text-base font-bold text-white">
                  {item.name}
                </h4>
                <div className="w-8 h-[2px] bg-[#D9AF58] mx-auto my-2"></div>
                <p className="text-white/40 text-xs font-mono tracking-wide">
                  {item.role}
                </p>
              </motion.div>
            ))}
          </div>
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
}