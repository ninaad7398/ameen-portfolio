"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { useAudioStore } from "@/store/useAudioStore";

export default function SongCard({ song, onSelect }) {
  const playSong = useAudioStore((state) => state.playSong);

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative bg-[#181818] p-4 rounded-xl overflow-hidden cursor-pointer transition-shadow hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
      onClick={() => onSelect(song)}
    >
      <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg shadow-lg">
        <Image
          src={song.coverUrl}
          alt={song.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              playSong(song);
            }}
            className="w-12 h-12 rounded-full bg-accent text-black flex items-center justify-center hover:scale-110 transition shadow-[0_0_20px_rgba(212,175,55,0.6)]"
          >
            <FaPlay className="ml-1 text-lg" />
          </button>
        </div>
      </div>
      <h3 className="font-semibold text-white truncate text-lg tracking-wide">{song.title}</h3>
      <div className="flex justify-between items-center text-sm text-white/50 mt-1">
        <span>{song.year} &bull; {song.language}</span>
      </div>
    </motion.div>
  );
}
