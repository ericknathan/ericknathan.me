import Link from "next/link";
import { PicturesGrid } from "../../components";

export default function PersonalInterestsSection() {
  return (
    <section id="personal-interests">
      <h2>Intereses personales</h2>
      <p>
        Fuera del ámbito profesional, soy un entusiasta de diversas formas de arte y entretenimiento. La música, en particular, ocupa un lugar especial en mi corazón. Encuentro consuelo en los ritmos melódicos y en la profundidad lírica de varios géneros, a menudo utilizándola como fuente de inspiración durante mis sesiones de programación. Puedes conocer más sobre mis preferencias musicales en mi perfil de{" "}
        <Link
          href="https://last.fm/user/ericknathan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Last.fm
        </Link>
        . Los eventos y encuentros tecnológicos son otra pasión, ya que me brindan la oportunidad de explorar nuevos avances tecnológicos, conocer a profesionales diversos y ampliar mis perspectivas. Inmerso en diferentes comunidades tecnológicas, mi creatividad se estimula, lo que me anima a abordar problemas desde ángulos únicos.
      </p>

      <PicturesGrid
        pictures={[
          {
            src: "/images/about/adam-levine-thetown.jpg",
            alt: "Adam Levine, vocalista de la banda Maroon 5, vistiendo pantalones grises claros y una chaqueta vaquera, cantando en The Town 2023",
            legend: (
              <>
                Foto tomada por mí de Adam Levine, vocalista de la banda Maroon 5,
                durante{" "}
                <Link
                  href="https://thetown.com.br/pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Town
                </Link>{" "}
                (sep. 2023)
              </>
            ),
          },
          {
            src: "/images/about/tech-events.png",
            alt: 'Erick Nathan, un chico con cabello rizado, usando una camiseta blanca, pantalones negros y zapatillas blancas frente a un panel de LED con el lema "Siente el futuro" en inglés',
            legend: (
              <>
                Yo en el evento Next 2023, una conferencia de innovación y tecnología
                patrocinada por{" "}
                <Link
                  href="https://www.fiap.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FIAP
                </Link>
                . (oct. 2023)
              </>
            ),
          },
        ]}
      />
    </section>
  );
}
