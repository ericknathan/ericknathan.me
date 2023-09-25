import Image from "next/image";

export default function NotFound() {
  return (
    <div className="h-full flex items-center justify-center flex-1 gap-4">
      <Image
        src="/images/not-found-gifs/mario-dance.gif"
        height={100}
        width={100}
        alt=""
        className="bg-muted rounded-lg p-1"
      />
      <div className="grid gap-1">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl">This was probably a mistake.</p>
      </div>
    </div>
  );
}
