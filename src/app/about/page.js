"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12 md:py-24 max-w-5xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-heading text-white uppercase tracking-wider mb-6">
          The <span className="text-accent italic">Journey</span>
        </h1>
        <div className="h-1 w-20 bg-accent opacity-50 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 md:mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5"
        >
          <Image
            src="/images/ameen_dp.jpg"
            alt="A. R. Ameen Early Life"
            fill
            className="object-cover"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-heading text-accent uppercase tracking-widest mb-4">Early Life</h2>
          <p className="text-white/70 font-light leading-relaxed mb-6">
            Born into a family deeply intertwined with music and art, A. R. Ameen was surrounded by melodies from the very beginning. His upbringing was a masterful fusion of traditional Indian classical music and contemporary global sounds, shaping his unique vocal signature.
          </p>
          <p className="text-white/70 font-light leading-relaxed">
            From a young age, he showed a profound understanding of rhythm and pitch, often spending hours in studios observing the intricate process of music production.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 md:mb-32 flex-col-reverse md:flex-row-reverse">
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 md:order-last"
        >
          <Image
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop"
            alt="A. R. Ameen Musical Journey"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:order-first"
        >
          <h2 className="text-2xl font-heading text-accent uppercase tracking-widest mb-4">Musical Journey & Collaborations</h2>
          <p className="text-white/70 font-light leading-relaxed mb-6">
            Making his playback debut with "Maula Wa Sallim" in O Kadhal Kanmani, Ameen immediately captured the hearts of audiences with his pure, emotive voice. 
          </p>
          <p className="text-white/70 font-light leading-relaxed">
            He has since lent his voice to massive blockbusters across Tamil, Hindi, and English cinema, while constantly evolving his style. His independent singles have shown an artist unafraid to explore new genres, blending RnB, pop, and classical elements seamlessly.
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#121212] p-8 md:p-12 rounded-3xl border border-white/5 text-center shadow-xl"
      >
        <h2 className="text-2xl font-heading text-accent uppercase tracking-widest mb-6">Performances with A. R. Rahman</h2>
        <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
          <div className="w-full md:w-1/3 aspect-square relative rounded-xl overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
              alt="Performance with A. R. Rahman"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-white/70 font-light leading-relaxed md:w-2/3 text-left italic bg-white/5 p-6 rounded-xl border border-white/5">
            "Sharing the stage with my father is always an ethereal experience. It's a dialogue of souls translated through music. The energy of the crowd and the sheer magnitude of the compositions make every live performance a monumental moment in my life." <br/><br/>
            <span className="text-accent not-italic font-bold tracking-widest text-xs uppercase">— A. R. Ameen</span>
          </p>
        </div>
      </motion.div>

    </div>
  );
}
