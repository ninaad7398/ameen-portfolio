"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaVolumeUp } from "react-icons/fa";
import { useAudioStore } from "@/store/useAudioStore";

export default function PersistentAudioPlayer() {
  const { currentSong, isPlaying, togglePlay, progress, duration, setProgress, setDuration } = useAudioStore();
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(err => console.error("Playback prevented:", err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const newTime = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setProgress(newTime);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <AnimatePresence>
      {currentSong && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 w-full bg-secondary/95 backdrop-blur-xl border-t border-white/10 p-3 px-6 z-50 flex items-center justify-between"
        >
          {/* Audio Element */}
          <audio
            ref={audioRef}
            src={currentSong.previewUrl}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleTimeUpdate}
            onEnded={() => togglePlay()}
          />

          {/* Song Info */}
          <div className="flex items-center gap-4 w-1/4">
            <div className="relative w-12 h-12 rounded overflow-hidden">
              <Image
                src={currentSong.coverUrl || "/images/placeholder-album.jpg"}
                alt={currentSong.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-sm font-semibold truncate">{currentSong.title}</span>
              <span className="text-white/50 text-xs truncate">A. R. Ameen</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center justify-center w-1/2 max-w-lg">
            <div className="flex items-center gap-6 mb-2">
              <button className="text-white/60 hover:text-white transition">
                <FaStepBackward />
              </button>
              <button
                onClick={togglePlay}
                className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:scale-105 transition"
              >
                {isPlaying ? <FaPause /> : <FaPlay className="ml-1" />}
              </button>
              <button className="text-white/60 hover:text-white transition">
                <FaStepForward />
              </button>
            </div>
            {/* Progress Bar */}
            <div className="flex items-center gap-2 w-full text-xs text-white/50">
              <span>{formatTime(progress)}</span>
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={progress || 0}
                onChange={handleSeek}
                className="w-full h-1 bg-white/20 rounded-full appearance-none outline-none cursor-pointer accent-accent"
              />
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Extra Controls */}
          <div className="flex items-center justify-end w-1/4">
            <div className="flex items-center gap-2">
              <FaVolumeUp className="text-white/60" />
              <div className="w-20 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white/80 w-2/3"></div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
