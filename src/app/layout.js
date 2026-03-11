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
  metadataBase: new URL("https://ameen-portfolio.vercel.app"),
  title: {
    default: "A. R. Ameen | Official Musician Website & Portfolio",
    template: "%s | A. R. Ameen",
  },
  description: "Explore the music, performances, and artistic journey of Indian playback singer A. R. Ameen. Listen to his discography, view concert galleries, and connect.",
  keywords: ["AR Ameen", "A. R. Ameen", "A R Ameen singer", "Indian playback singer", "A. R. Rahman son", "Bollywood singer", "Kollywood singer", "Tamil playback singer", "ARR Ameen", "Ameen music", "A R Ameen discography"],
  authors: [{ name: "A. R. Ameen" }],
  creator: "A. R. Ameen",
  publisher: "A. R. Ameen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "A. R. Ameen | Official Musician Website",
    description: "Explore the music, performances, and artistic journey of Indian playback singer A. R. Ameen. Listen to his discography, view concert galleries, and connect.",
    url: "https://ameen-portfolio.vercel.app",
    siteName: "A. R. Ameen Official",
    images: [
      {
        url: "/images/ConcertAndLights.png",
        width: 1200,
        height: 630,
        alt: "A. R. Ameen Live in Concert",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A. R. Ameen | Official Musician Website",
    description: "Explore the music, performances, and artistic journey of Indian playback singer A. R. Ameen.",
    creator: "@arrameen",
    images: ["/images/ConcertAndLights.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
