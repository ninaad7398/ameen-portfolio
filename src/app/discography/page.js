import { getArtistAlbums } from "@/lib/spotify";
import DiscographyClient from "@/components/sections/DiscographyClient";

export default async function Discography() {
  const dynamicSongs = await getArtistAlbums();

  return <DiscographyClient songs={dynamicSongs} />;
}
