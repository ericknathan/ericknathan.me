import Link from "next/link";
import { PicturesGrid } from "../../components";

export default function PersonalInterestsSection() {
  return (
    <section id="personal-interests">
      <h2>Personal Interests</h2>
      <p>
        Outside of my professional endeavors, I am an avid enthusiast of various
        forms of art and entertainment. Music, in particular, holds a special
        place in my heart. I find solace in the melodic rhythms and lyrical
        depth of various genres, often using it as a source of inspiration
        during my coding sessions, you can check out more about my musical
        tastes on my{" "}
        <Link
          href="https://last.fm/user/ericknathan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Last.fm
        </Link>
        . Tech events and meetups are another passion of mine, as they provide
        me with the opportunity to explore new technological advancements, meet
        diverse professionals, and broaden my perspectives. Immersing myself in
        different tech communities fuels my creativity and encourages me to
        approach problems from unique angles.
      </p>

      <PicturesGrid
        pictures={[
          {
            src: "/images/about/adam-levine-thetown.jpg",
            alt: "Adam Levine, lead singer of the band Maroon 5, wearing light gray pants and a denim jacket, singing at The Town 2023",
            legend: (
              <>
                Photo taken by me of Adam Levine, lead singer of the band Maroon
                5, during{" "}
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
            alt: 'Erick Nathan, a boy with curly hair, wearing a white shirt, black pants and white sneakers in front of a mirrored LED panel reading "Feel the future"',
            legend: (
              <>
                Me at the Next 2023 event, an innovation and technology
                conference promoted by{" "}
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
