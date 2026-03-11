"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import data from "@/data/gallery.json";

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12 md:py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-heading text-white uppercase tracking-wider mb-6">
          Photo <span className="text-accent italic">Gallery</span>
        </h1>
        <div className="h-1 w-20 bg-accent opacity-50 mx-auto" />
      </motion.div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6 pb-24">
        {data.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 4) * 0.1, duration: 0.5 }}
            className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-zoom-in"
          >
            <Image
              src={img.url}
              alt={img.alt}
              width={600}
              height={800}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
              <span className="text-accent text-xs font-bold uppercase tracking-widest mb-1">{img.category}</span>
              <p className="text-white/80 text-sm">{img.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
