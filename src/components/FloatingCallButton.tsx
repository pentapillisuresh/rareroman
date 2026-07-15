import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  const phoneNumber = "+919676310419";

  return (
    <motion.a
      href={`tel:${phoneNumber}`}
      aria-label="Call Us"
      className="fixed bottom-28 right-8 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:bg-[#C49A3E] transition-colors duration-300"
      style={{ backgroundColor: '#D9AF58' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.7, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <Phone className="w-6 h-6 text-white" />
    </motion.a>
  );
};

export default FloatingCallButton;