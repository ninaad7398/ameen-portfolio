"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/5">
              <Image
                src="/images/StagePerformance.png"
                alt="A. R. Ameen in studio"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-accent/20 rounded-full blur-sm -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-heading text-white uppercase tracking-wider mb-6">
              The Voice of a <span className="text-accent italic">New Generation</span>
            </h2>
            <div className="h-1 w-20 bg-accent mb-8" />
            <p className="text-white/70 text-lg leading-relaxed mb-8 font-light">
              A. R. Ameen is an Indian playback singer known for his soulful voice and musical versatility. Growing up surrounded by music, he began performing at a young age and has contributed to film soundtracks and independent singles across multiple languages.
            </p>
            <p className="text-white/50 text-base leading-relaxed mb-10 font-light">
              Rooted in classical traditions yet embracing modern global sounds, Ameen continues to forge his own unique path in the music industry.
            </p>

            <Link
              href="/about"
              className="inline-block px-10 py-4 bg-white/5 border border-accent/50 text-accent uppercase tracking-widest text-sm hover:bg-accent hover:text-black transition-all duration-300"
            >
              Read Full Biography
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
