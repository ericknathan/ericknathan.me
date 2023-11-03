import Image from "next/image";

interface PicturesGridProps {
  pictures: {
    src: string;
    alt: string;
    description: string | JSX.Element;
  }[];
}

export function PicturesGrid({ pictures }: PicturesGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 mt-8 mb-6">
      {pictures.map((picture) => (
        <figure className="m-0" key={picture.src}>
          <Image
            src={picture.src}
            alt={picture.alt}
            className="border aspect-video object-cover rounded mx-auto"
            width={600}
            height={400}
          />
          <figcaption className="text-center text-sm italic">
            {picture.description}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
