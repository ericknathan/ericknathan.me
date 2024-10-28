import Link from "next/link";
import { PicturesGrid } from "../../components";

export default function AcademicBackgroundSection() {
  return (
    <section id="academic-background">
      <h2>Formação acadêmica</h2>
      <p>
        Tenho um diploma de técnico em desenvolvimento de sistemas pelo{" "}
        <Link
          href="https://jandira.sp.senai.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Senai Jandira
        </Link>
        . Meu tempo na instituição permitiu-me aprofundar-me nos aspectos
        teóricos da programação, algoritmos e estruturas de dados, o que
        estabeleceu uma base sólida para minha carreira. Também tive a
        oportunidade de colaborar em projetos empolgantes, como meu projeto
        final chamado Grati, uma plataforma de gestão de feedback que permite às
        organizações adotar uma cultura de feedback.
      </p>

      <PicturesGrid
        pictures={[
          {
            src: "/images/about/senai.png",
            alt: "Vários alunos e um professor vestindo roupas formais.",
            legend: (
              <>
                Alunos formandos da turma de desenvolvimento de sistemas no{" "}
                <Link
                  href="https://jandira.sp.senai.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Senai Jandira
                </Link>{" "}
                no dia da formatura. (jun. 2022)
              </>
            ),
          },
          {
            src: "/images/projects/grati.png",
            alt: "Visualização do projeto Grati",
            legend:
              "Capturas de tela do Grati, uma plataforma de gestão de feedback que permite às organizações adotar uma cultura de feedback. (jun. 2022)",
          },
        ]}
      />

      <p>
        Continuando meus estudos, atualmente estou cursando uma graduação em
        Análise e Desenvolvimento de Sistemas na{" "}
        <Link
          href="https://www.fiap.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          FIAP
        </Link>
        . Durante meu primeiro ano, colaborei em um projeto interessante
        chamado Easy Aluga, criado para o desafio da{" "}
        <Link href="https://www.brq.com/">BRQ Digital Solutions</Link> em
        parceria com a <Link href="https://easycarros.com/">Easy Carros</Link>,
        com foco em serviços de aluguel de veículos. Essa experiência enriqueceu
        ainda mais minha compreensão prática do desenvolvimento de software e
        sua aplicação em cenários de negócios do mundo real.
      </p>

      <PicturesGrid
        pictures={[
          {
            src: "/images/projects/easy-aluga.png",
            alt: "Visualização do projeto Easy Aluga",
            legend: (
              <>
                Captura de tela do Easy Aluga, uma plataforma de aluguel de
                veículos criada para o desafio da{" "}
                <Link href="https://www.brq.com/">BRQ Digital Solutions</Link>{" "}
                em parceria com{" "}
                <Link href="https://easycarros.com/">Easy Carros</Link>. (out.
                2023)
              </>
            ),
          },
          {
            src: "/images/about/easy-aluga-team.jpg",
            alt: '4 estudantes vestindo camisetas brancas com o pequeno logotipo "Easy Aluga" no canto superior direito e calças pretas',
            legend: (
              <>
                Equipe do Easy Aluga:{" "}
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
                {" e "}
                <Link href="https://www.linkedin.com/in/guilherme-naufal-6a44b3279">
                  Guilherme Naufal
                </Link>
                . (out. 2023)
              </>
            ),
          },
        ]}
      />

      <p>
        No segundo ano da graduação, desenvolvemos o GeniusXP, uma plataforma
        inovadora focada em revolucionar eventos com o uso de Inteligência
        Artificial e Deep Analytics. Criada para o desafio da{" "}
        <Link href="https://plusoft.com/">Plusoft</Link>, o GeniusXP foi
        projetado para otimizar cada etapa de um evento, desde a preparação até
        o pós-evento. Essa jornada nos rendeu o pódio no FIAP NEXT 2024,
        coroando um ano de muito aprendizado, dedicação e evolução na prática de
        tecnologia aplicada a experiências reais.
      </p>

      <PicturesGrid
        pictures={[
          {
            src: "/images/about/geniusxp-team.jpeg",
            alt: '4 estudantes vestindo camisetas pretas com o logotipo "GeniusXP" no canto superior direito e calças pretas',
            legend: (
              <>
                Equipe do GeniusXP:{" "}
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
                {" e "}
                <Link href="https://www.linkedin.com/in/michael-bernardi-silva/">
                  Michael Bernardi
                </Link>
                . (out. 2024)
              </>
            ),
          },
          {
            src: "/images/projects/geniusxp.png",
            alt: "Visualização do projeto GeniusXP",
            legend: (
              <>
                Captura de tela do GeniusXP, uma plataforma que visa
                revolucionar eventos criada para o desafio da{" "}
                <Link href="https://plusoft.com/">Plusoft</Link>. (out. 2024)
              </>
            ),
          },
        ]}
      />
    </section>
  );
}
