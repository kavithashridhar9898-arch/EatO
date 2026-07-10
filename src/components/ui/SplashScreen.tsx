"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Fallback timeout in case the video fails to load or the user's browser blocks autoplay
    const timer = setTimeout(() => setShow(false), 10000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[1000] bg-black flex items-center justify-center overflow-hidden"
        >
          <video
            src="/launch.mp4"
            autoPlay
            muted
            playsInline
            onEnded={() => setShow(false)}
            className="w-full h-full object-cover opacity-90"
          />
          
          <button 
            onClick={() => setShow(false)}
            className="absolute bottom-8 right-8 z-[1001] text-white/50 hover:text-white transition-colors uppercase tracking-[0.2em] text-xs font-bold glass-card px-6 py-2 rounded-full border border-white/10 hover:bg-white/10"
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
