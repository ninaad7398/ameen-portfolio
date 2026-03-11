"use client";

import { motion } from "framer-motion";

export default function SpotifySection() {
  return (
    <section className="py-24 relative bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading text-white uppercase tracking-wider mb-2">
            Listen on <span className="text-accent italic">Spotify</span>
          </h2>
          <div className="h-1 w-16 bg-accent opacity-50 mx-auto" />
          <p className="mt-6 text-white/50 max-w-2xl mx-auto font-light">
            Stream A. R. Ameen's top tracks and latest releases directly from Spotify.
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/5 bg-[#121212]"
        >
          <iframe 
            data-testid="embed-iframe" 
            style={{ borderRadius: "12px" }} 
            src="https://open.spotify.com/embed/artist/0pO2eJn9QBtNRVdLxI1nrE?utm_source=generator&theme=0" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
