import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const GlowButton = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }} 
    className="relative w-fit cursor-pointer">
      <div
        className="
          h-16 w-4 flex items-center justify-center 
          rounded-r-2xl bg-linear-to-r from-orange-400 to-orange-600
          shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_12px_rgba(255,255,255,0.7),inset_2px_4px_12px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(255,255,255,0.3)]
          transition-all duration-300
          relative
        "
      >
        {/* Only arrow glow */}
        <ChevronRight 
          size={20} 
          className="text-white font-extrabold relative z-10 drop-shadow-[32px_12px_12px_rgba(255,165,0,0.8)] hover:translate-x-px transition-all duration-300"
        />
      </div>
    </motion.div>
  );
};

export default GlowButton;
