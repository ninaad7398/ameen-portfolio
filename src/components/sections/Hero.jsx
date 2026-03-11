"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaSpotify, FaYoutube } from "react-icons/fa";

export default function Hero() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden -mt-20 pt-20"
    >
      {/* Background Image Parallax */}
      <motion.div 
        style={{ y: yBg }} 
        className="absolute inset-0 w-full h-full -z-10"
      >
        <Image
          src="/images/ConcertAndLights.png"
          alt="A. R. Ameen Cinematic Hero"
          fill
          priority
          className="object-cover object-top opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        style={{ y: yText, opacity }} 
        className="container mx-auto px-6 text-center z-10 flex flex-col items-center mt-20"
      >
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl font-heading text-white uppercase tracking-[0.2em] drop-shadow-2xl"
        >
          A. R. Ameen
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-xl md:text-2xl text-accent font-light uppercase tracking-[0.3em]"
        >
          Playback Singer &bull; Performer
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a 
            href="https://open.spotify.com/artist/0pO2eJn9QBtNRVdLxI1nrE?si=eoYZMyYzS7WWA_XqdbKFBw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-[#1DB954] text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(29,185,84,0.4)]"
          >
            <FaSpotify size={20} />
            Listen on Spotify
          </a>
          <a 
            href="https://www.youtube.com/@ARAmeenOfficial" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
          >
            <FaYoutube size={20} />
            Watch on YouTube
          </a>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
