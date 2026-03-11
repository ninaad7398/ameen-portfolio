"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import fallbackSongs from "@/data/songs.json";
import SongCard from "@/components/ui/SongCard";
import SongDetailModal from "@/components/ui/SongDetailModal";
import Timeline from "@/components/sections/Timeline";

export default function DiscographyClient({ songs }) {
  const dataToUse = songs && songs.length > 0 ? songs : fallbackSongs;

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Newest");
  const [selectedSong, setSelectedSong] = useState(null);

  const languages = ["All", ...new Set(dataToUse.map(s => s.language))].filter(Boolean);

  let filteredSongs = filter === "All" 
    ? dataToUse 
    : dataToUse.filter(s => s.language === filter);
  
  filteredSongs = filteredSongs.sort((a, b) => {
    return sort === "Newest" ? b.year - a.year : a.year - b.year;
  });

  return (
    <div className="container mx-auto px-6 md:px-12 py-12 md:py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-heading text-white uppercase tracking-wider mb-6">
          Full <span className="text-accent italic">Discography</span>
        </h1>
        <p className="text-white/60 max-w-2xl font-light">
          Explore the complete catalog of A. R. Ameen's musical releases via Spotify.
        </p>
      </motion.div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 bg-secondary/50 p-6 rounded-2xl border border-white/5">
        <div className="flex flex-wrap gap-4">
          <span className="text-white/40 text-sm uppercase tracking-widest self-center mr-2">Language:</span>
          {languages.map(lang => (
            <button
              key={lang}
              onClick={() => setFilter(lang)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                filter === lang 
                  ? "bg-accent text-black font-semibold" 
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-white/40 text-sm uppercase tracking-widest">Sort by:</span>
          <select 
            value={sort} 
            onChange={(e) => setSort(e.target.value)}
            className="bg-white/5 border border-white/10 text-white rounded-md px-4 py-2 outline-none focus:border-accent transition appearance-none cursor-pointer"
          >
            <option value="Newest" className="bg-[#121212]">Newest First</option>
            <option value="Oldest" className="bg-[#121212]">Oldest First</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-24">
        <AnimatePresence>
          {filteredSongs.map((song) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={song.id}
            >
              <SongCard song={song} onSelect={setSelectedSong} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <Timeline />

      <SongDetailModal song={selectedSong} onClose={() => setSelectedSong(null)} />
    </div>
  );
}
