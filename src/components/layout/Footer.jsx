import Link from "next/link";
import { FaSpotify, FaYoutube, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-white/10 pt-16 pb-8 mt-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">

        <Link href="/" className="text-3xl font-heading text-accent mb-6 uppercase tracking-widest">
          A. R. Ameen
        </Link>

        <p className="text-white/60 max-w-2xl mx-auto mb-8 font-light text-sm">
          Experience the soulful voice and musical journey of Indian playback singer A. R. Ameen.
        </p>

        <div className="flex gap-6 mb-12">
          <a href="https://open.spotify.com/artist/0pO2eJn9QBtNRVdLxI1nrE?si=eoYZMyYzS7WWA_XqdbKFBw" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors text-2xl">
            <FaSpotify />
          </a>
          <a href="https://www.youtube.com/@ARAmeenOfficial" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors text-2xl">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com/arrameen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors text-2xl">
            <FaInstagram />
          </a>
          <a href="https://x.com/arrameen" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors text-2xl">
            <FaXTwitter />
          </a>
        </div>

        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 gap-4">
          <p>&copy; {new Date().getFullYear()} A. R. Ameen. All rights reserved.</p>
          <p className="text-white/50">
            Fan-built tribute website created with love by <a href="https://ninaadpatnaik.vercel.app" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Ninaad Patnaik</a> from the <a href="https://ilovearr.wordpress.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">I❤️ARR Community</a>.
          </p>
        </div>

      </div>
    </footer>
  );
}
