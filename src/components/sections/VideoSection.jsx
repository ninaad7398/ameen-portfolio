"use client";

import { motion } from "framer-motion";

export default function VideoSection() {
  const videos = [
    { title: "A. R. Ameen Live Performance", id: "nzMn4nEf_1A" },
    { title: "A. R. Ameen Studio Session", id: "59SjpWowJ10" }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading text-white uppercase tracking-wider mb-2">
            Captured <span className="text-accent italic">Live</span>
          </h2>
          <div className="h-1 w-16 bg-accent opacity-50 mx-auto" />
          <p className="mt-6 text-white/50 max-w-2xl mx-auto font-light">
            Experience the energy and soul of A. R. Ameen's performances from around the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {videos.map((vid, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative"
            >
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/5 relative z-10 bg-[#121212]">
                <iframe
                  src={`https://www.youtube.com/embed/${vid.id}?si=abcdef123`}
                  title={vid.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-4 flex flex-col pl-2 border-l border-accent/30">
                <h3 className="text-xl font-heading text-white/90 tracking-wide">{vid.title}</h3>
                <span className="text-accent/60 text-xs font-mono uppercase tracking-widest mt-1">Official Video</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
