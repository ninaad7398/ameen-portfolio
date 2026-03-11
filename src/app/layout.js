import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PersistentAudioPlayer from "@/components/features/PersistentAudioPlayer";
import InteractiveWaveBackground from "@/components/features/InteractiveWaveBackground";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "A. R. Ameen | Official Musician Website",
  description: "Explore the music, performances, and journey of Indian playback singer A. R. Ameen. A fan-built tribute.",
  openGraph: {
    title: "A. R. Ameen | Official Musician Website",
    description: "Explore the music, performances, and journey of Indian playback singer A. R. Ameen. A fan-built tribute.",
    url: "https://ameen-portfolio.vercel.app",
    siteName: "A. R. Ameen",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A. R. Ameen | Official Musician Website",
    description: "Explore the music, performances, and journey of Indian playback singer A. R. Ameen.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground min-h-screen flex flex-col relative`}>
        <InteractiveWaveBackground />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <PersistentAudioPlayer />
      </body>
    </html>
  );
}
