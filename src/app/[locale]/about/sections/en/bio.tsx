import Image from "next/image";
import Link from "next/link";

import { userData } from "@/config";

export default function BioSection() {
  return (
    <section id="bio">
      <h2>Hi, nice to meet you!</h2>
      <picture>
        <div className="rounded w-full overflow-hidden aspect-video">
          <Image
            src="/images/about/code-in-the-dark.jpg"
            alt="Erick Nathan, a boy with curly hair, wearing a dark blue sweatshirt, in front of a computer with programming codes and a lot of spectators around him, the photograph contains a bluish tone from the lights of the event in the dark"
            className="w-full scale-125 border"
            width={1200}
            height={900}
          />
        </div>
        <figcaption className="text-center text-sm italic">
          Me competing in{" "}
          <Link
            href="http://codeinthedark.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code In The Dark Brazil
          </Link>{" "}
          (jul. 2023)
        </figcaption>
      </picture>
      <p>
        I&apos;ve always been fascinated by technology and its power to shape
        the world around us. From a young age, I found myself drawn to the
        intricacies of coding and web development, spending countless hours
        experimenting with different programming languages and frameworks. What
        started as a hobby quickly evolved into a passion, leading me to pursue
        a career in front-end development.
      </p>

      <p>
        Building on my skills and knowledge, I am currently working as a{" "}
        {userData.role} at{" "}
        <Link
          href={userData.company.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {userData.company.name}
        </Link>
        , where I am actively involved in creating intuitive and user-friendly
        interfaces for a variety of digital products for many clients like{" "}
        <Link
          href="https://www.uber.com/br/pt-br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Uber
        </Link>
        {", "}
        <Link
          href="https://www.correioscelular.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Correios
        </Link>
        {", "}
        <Link
          href="https://www.bancobmg.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          BMG Bank
        </Link>
        {", "}
        <Link
          href="https://loja.algartelecom.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Algar
        </Link>
        {" and "}
        <Link
          href="https://www.carrefour.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Carrefour
        </Link>
        . My role allows me to combine my creative mindset with my technical
        expertise, enabling me to craft engaging and visually appealing
        experiences that resonate with users.
      </p>
    </section>
  );
}
