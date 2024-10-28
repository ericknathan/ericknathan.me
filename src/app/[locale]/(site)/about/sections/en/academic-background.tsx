import Link from "next/link";
import { PicturesGrid } from "../../components";

export default function AcademicBackgroundSection() {
  return (
    <section id="academic-background">
      <h2>Academic background</h2>
      <p>
        I have a technical degree in systems development at{" "}
        <Link
          href="https://jandira.sp.senai.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Senai Jandira
        </Link>
        . My time at the institution allowed me to delve deeper into the
        theoretical aspects of programming, algorithms, and data structures,
        which laid a strong foundation for my career. I also had the opportunity
        to collaborate on exciting projects, such as my final project called
        Grati, a feedback management platform that allows organizations to adopt
        a feedback culture.
      </p>

      <PicturesGrid
        pictures={[
          {
            src: "/images/about/senai.png",
            alt: "Several students and teacher wearing formal clothes.",
            legend: (
              <>
                Graduating students of the systems development class at{" "}
                <Link
                  href="https://jandira.sp.senai.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Senai Jandira
                </Link>{" "}
                at their graduation day. (jun. 2022)
              </>
            ),
          },
          {
            src: "/images/projects/grati.png",
            alt: "Preview of Grati project",
            legend:
              "Grati's screenshots, a feedback management platform that allows organizations to adopt a feedback culture. (jun. 2022)",
          },
        ]}
      />

      <p>
        Continuing my studies, I am currently pursuing a degree in Analysis and
        Development of Systems at{" "}
        <Link
          href="https://www.fiap.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          FIAP
        </Link>
        . During my first year, I collaborated on an interesting project named
        Easy Aluga, created for the{" "}
        <Link href="https://www.brq.com/">BRQ Digital Solutions</Link> challenge
        in partnership with{" "}
        <Link href="https://easycarros.com/">Easy Carros</Link>, focusing on
        vehicle rental services. This experience further enriched my practical
        understanding of software development and its application in real-world
        business scenarios.
      </p>

      <PicturesGrid
        pictures={[
          {
            src: "/images/projects/easy-aluga.png",
            alt: "Preview of Easy Aluga project",
            legend: (
              <>
                Easy Aluga&apos;s screenshot, a vehicle rental platform created
                for the{" "}
                <Link href="https://www.brq.com/">BRQ Digital Solutions</Link>{" "}
                challenge in partnership with{" "}
                <Link href="https://easycarros.com/">Easy Carros</Link>. (oct.
                2023)
              </>
            ),
          },
          {
            src: "/images/about/easy-aluga-team.jpg",
            alt: '4 students wearing white shirts with "Easy Aluga" small logo on right top side and black pants',
            legend: (
              <>
                Easy Aluga&apos;s team:{" "}
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
                {" and "}
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
        In the second year of my degree, we developed GeniusXP, an innovative
        platform focused on revolutionizing events through the use of Artificial
        Intelligence and Deep Analytics. Created for the{" "}
        <Link href="https://plusoft.com/">Plusoft</Link> challenge, GeniusXP was
        designed to optimize every stage of an event, from preparation to
        post-event. This journey earned us a podium finish at FIAP NEXT 2024,
        crowning a year of significant learning, dedication, and growth in the
        practical application of technology to real-world experiences.
      </p>

      <PicturesGrid
        pictures={[
          {
            src: "/images/about/geniusxp-team.jpeg",
            alt: '4 students wearing black shirts with "GeniusXP" small logo on right top side and black pants',
            legend: (
              <>
                GeniusXP&apos;s team:{" "}
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
                {" and "}
                <Link href="https://www.linkedin.com/in/michael-bernardi-silva/">
                  Michael Bernardi
                </Link>
                . (oct. 2024)
              </>
            ),
          },
          {
            src: "/images/projects/geniusxp.png",
            alt: "Preview of GeniusXP project",
            legend: (
              <>
                Screenshot of GeniusXP, a platform aimed at revolutionizing
                events, created for the{" "}
                <Link href="https://plusoft.com/">Plusoft</Link> challenge.
                (oct. 2024)
              </>
            ),
          },
        ]}
      />
    </section>
  );
}
