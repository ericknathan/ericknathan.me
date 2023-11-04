import Link from "next/link";
import { PicturesGrid } from "../../components";

export default function PersonalInterestsSection() {
  return (
    <section id="personal-interests">
      <h2>Interesses pessoais</h2>
      <p>
        Fora dos meus empreendimentos profissionais, sou um entusiasta ávido de
        várias formas de arte e entretenimento. A música, em particular, ocupa
        um lugar especial no meu coração. Encontro consolo nos ritmos melódicos
        e na profundidade lírica de diversos gêneros, muitas vezes utilizando-a
        como fonte de inspiração durante minhas sessões de codificação. Você
        pode conferir mais sobre meus gostos musicais no meu perfil do{" "}
        <Link
          href="https://last.fm/user/ericknathan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Last.fm
        </Link>
        . Eventos e encontros de tecnologia são outra paixão minha, pois me
        proporcionam a oportunidade de explorar novos avanços tecnológicos,
        conhecer profissionais diversos e ampliar minhas perspectivas. Imerso em
        diferentes comunidades tecnológicas, minha criatividade é estimulada, o
        que me encoraja a abordar problemas por ângulos únicos.
      </p>

      <PicturesGrid
        pictures={[
          {
            src: "/images/about/adam-levine-thetown.jpg",
            alt: "Adam Levine, vocalista da banda Maroon 5, usando calças cinza claro e uma jaqueta jeans, cantando no The Town 2023",
            legend: (
              <>
                Foto tirada por mim de Adam Levine, vocalista da banda Maroon 5,
                durante o{" "}
                <Link
                  href="https://thetown.com.br/pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Town
                </Link>{" "}
                (set. 2023)
              </>
            ),
          },
          {
            src: "/images/about/tech-events.png",
            alt: 'Erick Nathan, um rapaz de cabelos cacheados, usando uma camiseta branca, calças pretas e tênis brancos na frente de um painel de LED espelhado com a inscrição "Sinta o futuro" em inglês',
            legend: (
              <>
                Eu no evento Next 2023, uma conferência de inovação e tecnologia
                promovida pela{" "}
                <Link
                  href="https://www.fiap.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FIAP
                </Link>
                . (out. 2023)
              </>
            ),
          },
        ]}
      />
    </section>
  );
}
