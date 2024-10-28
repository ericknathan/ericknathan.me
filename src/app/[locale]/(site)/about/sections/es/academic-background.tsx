import Link from "next/link";
import { PicturesGrid } from "../../components";

export default function AcademicBackgroundSection() {
  return (
    <section id="academic-background">
      <h2>Formación académica</h2>
      <p>
        Poseo un diploma de técnico en desarrollo de sistemas de{" "}
        <Link
          href="https://jandira.sp.senai.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Senai Jandira
        </Link>
        . Mi tiempo en la institución me permitió profundizar en los aspectos teóricos de la programación, algoritmos y estructuras de datos, estableciendo así una base sólida para mi carrera. También tuve la oportunidad de colaborar en proyectos emocionantes, como mi proyecto final llamado Grati, una plataforma de gestión de retroalimentación que permite a las organizaciones adoptar una cultura de retroalimentación.
      </p>

      <PicturesGrid
        pictures={[
          {
            src: "/images/about/senai.png",
            alt: "Varios alumnos y un profesor vistiendo ropa formal.",
            legend: (
              <>
                Graduados de la clase de desarrollo de sistemas en{" "}
                <Link
                  href="https://jandira.sp.senai.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Senai Jandira
                </Link>{" "}
                en el día de la graduación. (jun. 2022)
              </>
            ),
          },
          {
            src: "/images/projects/grati.png",
            alt: "Visualización del proyecto Grati",
            legend:
              "Capturas de pantalla de Grati, una plataforma de gestión de retroalimentación que permite a las organizaciones adoptar una cultura de retroalimentación. (jun. 2022)",
          },
        ]}
      />

      <p>
        Continuando mis estudios, actualmente estoy cursando una licenciatura en Análisis y Desarrollo de Sistemas en{" "}
        <Link
          href="https://www.fiap.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          FIAP
        </Link>
        . Durante mi primer año, colaboré en un proyecto interesante llamado Easy Aluga, creado para el desafío de{" "}
        <Link href="https://www.brq.com/">BRQ Digital Solutions</Link> en colaboración con{" "}
        <Link href="https://easycarros.com/">Easy Carros</Link>, enfocado en servicios de alquiler de vehículos. Esta experiencia enriqueció aún más mi comprensión práctica del desarrollo de software y su aplicación en escenarios comerciales del mundo real.
      </p>

      <PicturesGrid
        pictures={[
          {
            src: "/images/projects/easy-aluga.png",
            alt: "Visualización del proyecto Easy Aluga",
            legend: (
              <>
                Captura de pantalla de Easy Aluga, una plataforma de alquiler de vehículos creada para el desafío de{" "}
                <Link href="https://www.brq.com/">BRQ Digital Solutions</Link>{" "}
                en colaboración con{" "}
                <Link href="https://easycarros.com/">Easy Carros</Link>. (oct.
                2023)
              </>
            ),
          },
          {
            src: "/images/about/easy-aluga-team.jpg",
            alt: '4 estudiantes vistiendo camisetas blancas con el pequeño logotipo "Easy Aluga" en la esquina superior derecha y pantalones negros',
            legend: (
              <>
                Equipo de Easy Aluga:{" "}
                <Link href="https://www.linkedin.com/in/caio-fabretti-geraldi-320849147">
                  Caio Geraldi
                </Link>
                {", "}
                <Link href="https://www.linkedin.com/in/jpangelo23">
                  João Paulo
                </Link>
                {", "}
                <Link href="https://www.linkedin.com/in/ericknathan">
                  Erick Nathan
                </Link>
                {" y "}
                <Link href="https://www.linkedin.com/in/guilherme-naufal-6a44b3279">
                  Guilherme Naufal
                </Link>
                . (oct. 2023)
              </>
            ),
          },
        ]}
      />

      <p>
        En el segundo año de la licenciatura, desarrollamos GeniusXP, una
        plataforma innovadora centrada en revolucionar eventos mediante el uso
        de Inteligencia Artificial y Deep Analytics. Creada para el desafío de
        <Link href="https://plusoft.com/">Plusoft</Link>, GeniusXP fue diseñada
        para optimizar cada etapa de un evento, desde la preparación hasta el
        post-evento. Este recorrido nos llevó al podio en el FIAP NEXT 2024,
        coronando un año de gran aprendizaje, dedicación y crecimiento en la
        aplicación práctica de la tecnología a experiencias del mundo real.
      </p>

      <PicturesGrid
        pictures={[
          {
            src: "/images/about/geniusxp-team.jpeg",
            alt: '4 estudiantes vistiendo camisetas negras con el pequeño logotipo "GeniusXP" en la esquina superior derecha y pantalones negros',
            legend: (
              <>
                Equipo de GeniusXP:{" "}
                <Link href="https://www.linkedin.com/in/ericknathan">
                  Erick Nathan
                </Link>
                {", "}
                <Link href="https://www.linkedin.com/in/guilherme-dias-gomes/">
                  Guilherme Dias
                </Link>
                {", "}
                <Link href="https://www.linkedin.com/in/lucasaraujosilva/">
                  Lucas Araujo
                </Link>
                {" y "}
                <Link href="https://www.linkedin.com/in/michael-bernardi-silva/">
                  Michael Bernardi
                </Link>
                . (oct. 2024)
              </>
            ),
          },
          {
            src: "/images/projects/geniusxp.png",
            alt: "Visualización del proyecto GeniusXP",
            legend: (
              <>
                Captura de pantalla de GeniusXP, una plataforma destinada a
                revolucionar eventos, creada para el desafío de{" "}
                <Link href="https://plusoft.com/">Plusoft</Link>. (oct. 2024)
              </>
            ),
          },
        ]}
      />
    </section>
  );
}
