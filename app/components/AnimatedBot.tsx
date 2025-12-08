"use client";
import React from "react";
import { motion } from "framer-motion";

interface BotI {
  strokeColor: string;
}

const AnimatedBot: React.FC<BotI> = ({ strokeColor }) => {
  return (
    <div className="flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke={strokeColor}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 6V2H8" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />

        {/* Animated blinking paths */}
        <motion.path
          d="M15 11v2"
          stroke={strokeColor}
          style={{ originY: 0.5 }}
          animate={{ scaleY: [1, 0, 1] }}
          transition={{
            type: "tween", // Use tween instead of spring
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />

        <motion.path
          d="M9 11v2"
          stroke={strokeColor}
          style={{ originY: 0.5 }}
          animate={{ scaleY: [1, 0, 1] }}
          transition={{
            type: "tween",
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
      </svg>
    </div>
  );
};

export default AnimatedBot;
