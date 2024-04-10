import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

import { ClientsList } from "../../components";

export default async function BioSection() {
  const userData = await getTranslations("config.userData");

  return (
    <section id="bio">
      <h2>Olá, prazer em prazer em conhecê-lo</h2>
      <picture>
        <div className="rounded w-full overflow-hidden aspect-video">
          <Image
            src="/images/about/code-in-the-dark.jpg"
            alt="Erick Nathan, um menino com cabelos cacheados, vestindo um moletom azul-escuro, na frente de um computador com códigos de programação e muitos espectadores ao seu redor, a fotografia contém um tom azulado das luzes do evento no escuro"
            className="w-full scale-125 border"
            width={1200}
            height={900}
          />
        </div>
        <figcaption className="text-center text-sm italic">
          Eu competindo no{" "}
          <Link
            href="http://codeinthedark.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code In The Dark Brasil
          </Link>{" "}
          (jul. 2023)
        </figcaption>
      </picture>
      <p>
        Sempre fui fascinado pela tecnologia e seu poder de moldar o mundo ao
        nosso redor. Desde jovem, me vi atraído pelas complexidades da
        codificação e desenvolvimento web, passando inúmeras horas
        experimentando diferentes linguagens de programação e estruturas. O que
        começou como um hobby rapidamente se transformou em uma paixão,
        levando-me a seguir uma carreira no desenvolvimento front-end.
      </p>

      <p>
        Construindo minhas habilidades e conhecimentos, atualmente estou
        trabalhando como {userData("role")} na{" "}
        <Link
          href={userData("company.url")}
          target="_blank"
          rel="noopener noreferrer"
        >
          {userData("company.name")}
        </Link>
        , onde estou ativamente envolvido na criação de interfaces intuitivas e
        amigáveis ao usuário para uma variedade de produtos digitais para muitos
        clientes como <ClientsList andJoiner="and" />. Minha função me permite
        combinar minha mentalidade criativa com minha experiência técnica,
        permitindo-me criar experiências envolventes e visualmente atraentes que
        ressoam com os usuários.
      </p>
    </section>
  );
}
