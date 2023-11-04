import { songRequests } from "@/lib/api/requests";

export async function SongsGrid() {
  const favoriteSongs = await songRequests.getFavoriteSongs();

  return (
    <div className="flex justify-center items-center flex-wrap gap-4">
      {favoriteSongs?.map((song) => (
        <iframe
          className="rounded-xl max-w-[calc(50%_-_.5rem)] max-[970px]:max-w-full w-full h-20 border-0 overflow-hidden"
          src={`https://open.spotify.com/embed/track/${song.id}?utm_source=generator`}
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="eager"
          key={song.id}
          width={580}
          height={80}
        />
      ))}
    </div>
  );
}
