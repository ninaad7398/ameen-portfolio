"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import fallbackSongs from "@/data/songs.json";
import SongCard from "@/components/ui/SongCard";
import SongDetailModal from "@/components/ui/SongDetailModal";

export default function DiscographyPreview({ songs }) {
  const [selectedSong, setSelectedSong] = useState(null);
  
  // Show only top 4 latest songs
  const dataToUse = songs && songs.length > 0 ? songs : fallbackSongs;
  const recentSongs = [...dataToUse].sort((a, b) => b.year - a.year).slice(0, 4);

  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading text-white uppercase tracking-wider mb-2">
              Latest <span className="text-accent italic">Releases</span>
            </h2>
            <div className="h-1 w-16 bg-accent opacity-50" />
          </div>
          
          <Link 
            href="/discography"
            className="hidden md:block text-sm uppercase tracking-widest text-white/50 hover:text-accent transition-colors"
          >
            View Full Discography
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentSongs.map((song, index) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <SongCard song={song} onSelect={setSelectedSong} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link 
            href="/discography"
            className="inline-block px-8 py-3 border border-white/20 text-white/70 uppercase tracking-widest text-xs rounded-full hover:bg-white/10 transition-colors"
          >
            View Full Discography
          </Link>
        </div>
      </div>

      <SongDetailModal song={selectedSong} onClose={() => setSelectedSong(null)} />
    </section>
  );
}
