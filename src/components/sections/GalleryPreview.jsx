"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import galleryData from "@/data/gallery.json";

export default function GalleryPreview() {
  // Take 4 varied images for preview
  const previewImages = galleryData.slice(0, 4);

  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading text-white uppercase tracking-wider mb-2">
              Visual <span className="text-accent italic">Journey</span>
            </h2>
            <div className="h-1 w-16 bg-accent opacity-50" />
            <p className="mt-6 text-white/50 max-w-xl font-light">
              Glimpses from recording sessions, international concerts, and behind the scenes moments.
            </p>
          </div>
          
          <Link 
            href="/gallery"
            className="inline-block px-10 py-4 bg-transparent border border-white/20 text-white uppercase tracking-widest text-xs hover:border-accent hover:text-accent transition-all duration-300"
          >
            Explore Gallery
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {previewImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className={`relative overflow-hidden rounded-xl border border-white/5 group ${
                index === 0 || index === 3 ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image 
                src={img.url} 
                alt={img.alt} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-accent uppercase tracking-widest text-xs font-bold mb-1">{img.category}</span>
                <p className="text-white/80 text-sm font-light leading-snug line-clamp-2">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
