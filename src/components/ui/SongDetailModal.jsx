"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import Image from "next/image";
import { useEffect } from "react";

export default function SongDetailModal({ song, onClose }) {
  useEffect(() => {
    if (song) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [song]);

  // Convert standard Spotify URL to an Embed URL
  const spotifyEmbedUrl = song?.spotifyUrl?.includes('spotify.com') 
    ? song.spotifyUrl.replace('spotify.com/', 'spotify.com/embed/') 
    : "https://open.spotify.com/embed/artist/0pO2eJn9QBtNRVdLxI1nrE";

  // Provide a real A. R. Ameen live performance fallback
  const youtubeEmbedUrl = song?.youtubeUrl?.includes('youtube.com/embed') 
    ? song.youtubeUrl 
    : "https://www.youtube.com/embed/nzMn4nEf_1A?si=rNzr910Ty7teWVlK";

  return (
    <AnimatePresence>
      {song && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            className="bg-[#121212] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-[#121212]/90 backdrop-blur-md p-6 flex justify-between items-center z-10 border-b border-white/5">
              <h2 className="text-2xl font-heading text-accent tracking-widest">{song.title}</h2>
              <button onClick={onClose} className="p-2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition">
                <HiX size={24} />
              </button>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-2xl mb-6 border border-white/5">
                  <Image src={song.coverUrl} alt={song.title} fill className="object-cover" />
                </div>
                <p className="text-white/70 leading-relaxed font-light text-sm md:text-base">
                  {song.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono uppercase tracking-widest text-white/40">
                  <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10">Album: {song.album}</span>
                  <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10">Year: {song.year}</span>
                  <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10">{song.language}</span>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                {/* Spotify Embed */}
                <div className="w-full">
                  <h4 className="text-white/60 text-xs uppercase tracking-widest mb-3">Listen on Spotify</h4>
                  <div className="bg-[#181818] rounded-xl overflow-hidden border border-white/5 h-[152px]">
                    <iframe
                      src={spotifyEmbedUrl}
                      width="100%"
                      height="152"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>

                {/* YouTube Embed */}
                <div className="w-full">
                  <h4 className="text-white/60 text-xs uppercase tracking-widest mb-3">Watch Performance</h4>
                  <div className="bg-[#181818] aspect-video rounded-xl overflow-hidden border border-white/5 relative">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src={youtubeEmbedUrl} 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
