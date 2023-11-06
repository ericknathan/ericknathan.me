import { FadeIn } from "@/components/animation";
import Image from "next/image";

export function UnderConstructionPage() {
  return (
    <FadeIn
      to="top"
      duration={0.25}
      className="h-[calc(100dvh_-_4rem)] md:h-[100dvh] flex flex-col text-center sm:text-start sm:flex-row items-center justify-center flex-1 gap-4 px-4"
    >
      <Image
        src="/images/gifs/steve-building.gif"
        height={100}
        width={100}
        alt="Steve, a human character with a blocky appearance, which is consistent with the aesthetic and art style of Minecraft, wears a light blue shirt with blue jeans, and has light blue eyes, and dark brown hair, building a house."
        className="bg-muted rounded-lg p-1 w-28 h-28 object-cover"
      />
      <div className="grid gap-1">
        <h1 className="text-6xl font-bold">503</h1>
        <p className="text-2xl">This page is temporarily unavailable.</p>
      </div>
    </FadeIn>
  );
}
