import { songRequests } from "@/lib/api/requests";

export async function SongsGrid() {
  const favoriteSongs = await songRequests.getFavoriteSongs();

  if (!favoriteSongs || favoriteSongs?.length === 0) return null;

  return (
    <li>
      <strong>Minhas músicas favoritas no momento:</strong>
      <div className="flex justify-center items-center flex-wrap gap-4">
        {favoriteSongs?.map((song) => (
          <iframe
            className="rounded-xl max-w-[calc(50%_-_.5rem)] max-[970px]:max-w-full w-full h-20 border-0 overflow-hidden bg-accent p-0"
            src={`https://open.spotify.com/embed/track/${song.id}?utm_source=generator`}
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            key={song.id}
            width={580}
            height={80}
            scrolling="no"
            frameBorder={0}
          />
        ))}
      </div>
    </li>
  );
}
