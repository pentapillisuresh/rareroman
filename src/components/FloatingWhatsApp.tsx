import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  const phoneNumber = "19077476119";
  const defaultMessage = "Hello! I'm interested in your Roman antiquities collection. Could you provide more information about your available pieces?";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 rounded-full overflow-hidden shadow-2xl shadow-[#D9AF58]/20"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <img 
        src="/images/whatsapp.png" 
        alt="WhatsApp" 
        className="w-full h-full object-cover"
      />
      {/* Pulse ring */}
      <motion.span
        className="absolute inset-0 rounded-full border-2 border-[#25D366]"
        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
    </motion.a>
  );
};

export default FloatingWhatsApp;