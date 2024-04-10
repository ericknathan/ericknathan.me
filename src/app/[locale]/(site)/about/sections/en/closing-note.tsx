import Image from "next/image";

export default function ClosingNoteSection() {
  return (
    <section id="closing-note">
      <h2>Closing Note</h2>
      <p>
        Thank you for visiting my portfolio and taking the time to learn more
        about my journey. I am thrilled about the possibilities that the future
        holds and am eager to embark on new ventures that allow me to contribute
        to the ever-evolving tech landscape. Don&apos;t hesitate to get in
        touch, Let&apos;s collaborate and create something remarkable together!
      </p>
      <Image
        src="/images/gifs/see-u.gif"
        alt="Bob Sponge gif with 'See you soon' text"
        width={300}
        height={200}
        className="w-full md:w-1/2 h-auto mx-auto rounded border"
        loading="lazy"
      />
    </section>
  );
}
