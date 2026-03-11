import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import DiscographyPreview from "@/components/sections/DiscographyPreview";
import SpotifySection from "@/components/sections/SpotifySection";
import VideoSection from "@/components/sections/VideoSection";
import GalleryPreview from "@/components/sections/GalleryPreview";
import { getArtistAlbums } from "@/lib/spotify";

export default async function Home() {
  const dynamicSongs = await getArtistAlbums();

  return (
    <div className="flex flex-col w-full">
      <Hero />
      <AboutPreview />
      <DiscographyPreview songs={dynamicSongs} />
      <SpotifySection />
      <VideoSection />
      <GalleryPreview />
    </div>
  );
}
