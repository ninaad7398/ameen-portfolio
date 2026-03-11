import { create } from 'zustand';

export const useAudioStore = create((set) => ({
  currentSong: null,
  isPlaying: false,
  progress: 0,
  duration: 0,
  playSong: (song) => set({ currentSong: song, isPlaying: true }),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setProgress: (progress) => set({ progress }),
  setDuration: (duration) => set({ duration }),
}));
