import Image from "next/image";
import Link from "next/link";

import { ClientsList } from "../../components";
import { getTranslations } from "next-intl/server";

export default async function BioSection() {
  const userData = await getTranslations("config.userData");

  return (
    <section id="bio">
      <h2>Hola, un placer conocerte</h2>
      <picture>
        <div className="rounded w-full overflow-hidden aspect-video">
          <Image
            src="/images/about/code-in-the-dark.jpg"
            alt="Erick Nathan, un chico con cabello rizado, vistiendo una sudadera azul oscuro, frente a una computadora con código de programación y muchos espectadores a su alrededor, la fotografía tiene un tono azulado de las luces del evento en la oscuridad"
            className="w-full scale-125 border"
            width={1200}
            height={900}
          />
        </div>
        <figcaption className="text-center text-sm italic">
          Compitiendo en{" "}
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
        Siempre me ha fascinado la tecnología y su poder para dar forma al mundo
        que nos rodea. Desde joven, me sentí atraído por las complejidades de la
        codificación y el desarrollo web, pasando innumerables horas
        experimentando con diferentes lenguajes de programación y estructuras.
        Lo que comenzó como un pasatiempo rápidamente se convirtió en una
        pasión, llevándome a seguir una carrera en el desarrollo front-end.
      </p>

      <p>
        Construyendo mis habilidades y conocimientos, actualmente trabajo como{" "}
        {userData("role")} en{" "}
        <Link
          href={userData("company.url")}
          target="_blank"
          rel="noopener noreferrer"
        >
          {userData("company.name")}
        </Link>
        , donde estoy activamente involucrado en la creación de interfaces
        intuitivas y amigables para el usuario para una variedad de productos
        digitales para clientes como <ClientsList andJoiner="y" />. Mi rol me
        permite combinar mi mentalidad creativa con mi experiencia técnica,
        permitiéndome crear experiencias envolventes y visualmente atractivas
        que resuenan con los usuarios.
      </p>
    </section>
  );
}
