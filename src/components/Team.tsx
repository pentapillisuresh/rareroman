import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const leadership = [
  {
    name: "Roman Rariy",
    role: "Chief Executive Officer",
    image: "./images/team1.png",
  },
  {
    name: "Michael Roman",
    role: "Chief Executive Officer",
    image: "./images/team2.png",
  },
  {
    name: "Jordan Beckett",
    role: "Managing Director",
    image: "./images/team3.png",
  },
  {
    name: "B.S.R. Krishna",
    role: "CEO - Asian Countries",
    image: "./images/team4.png",
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
  const navigate = useNavigate();

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

        {/* View More Button */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/gallery')}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#D9AF58] text-[#D9AF58] hover:bg-[#D9AF58] hover:text-black transition-all duration-300 rounded-full font-mono tracking-wide text-sm uppercase"
          >
            <span>View More Leaders</span>
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

       

      

      </div>
    </section>
  );
}