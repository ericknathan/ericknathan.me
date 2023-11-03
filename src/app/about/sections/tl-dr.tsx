import Link from "next/link";

import { userData } from "@/config";
import { songRequests } from "@/lib/api/requests";
import { calcAge } from "@/lib/utils";

export async function TLDRSection() {
  const favoriteSongs = await songRequests
    .getFavoriteSongs()

  return (
    <section id="tl-dr">
      <h2>TL;DR</h2>
      <ul>
        <li>
          <strong>Location:</strong> {userData.location}
        </li>
        <li>
          <strong>Age:</strong> {calcAge(userData.birthDate)}
        </li>
        <li>
          <strong>Occupation:</strong> {userData.role} @{" "}
          <Link
            href={userData.company.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {userData.company.name}
          </Link>
        </li>
        <li>
          <strong>Interests:</strong> {userData.interests.join(", ")}
        </li>
        <li>
          <strong>Pronouns:</strong> {userData.pronouns}
        </li>
        {favoriteSongs && favoriteSongs.length > 0 && (
          <li>
            <strong>My favorite songs in this moment:</strong>{" "}
            <div className="flex justify-center items-center flex-wrap gap-4">
              {favoriteSongs?.map((song) => (
                <iframe
                  className="rounded-xl max-w-[calc(50%_-_.5rem)] max-[970px]:max-w-full w-full h-20 border-0 overflow-hidden"
                  src={`https://open.spotify.com/embed/track/${song.id}?utm_source=generator`}
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  key={song.id}
                  width={580}
                  height={80}
                />
              ))}
            </div>
          </li>
        )}
      </ul>
    </section>
  );
}