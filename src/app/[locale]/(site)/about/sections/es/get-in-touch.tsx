import { socials } from "@/config";

import { ContactButton } from "../../components";

export default function GetInTouchSection() {
  return (
    <section id="get-in-touch">
      <h2>Ponte en contacto conmigo {":)"}</h2>

      <p>
        A medida que sigo creciendo tanto personal como profesionalmente, aspiro
        a contribuir al desarrollo de soluciones de vanguardia que impacten
        positivamente la vida de las personas en todo el mundo. Me impulsa una
        determinación implacable para superar los límites de lo posible,
        aprovechando mis habilidades para crear experiencias digitales
        significativas e impactantes que resuenen con los usuarios a un nivel
        profundo.
      </p>

      <p>
        Siéntete libre de ponerte en contacto conmigo a través de la información
        de contacto proporcionada a continuación. Siempre estoy abierto a nuevas
        oportunidades, colaboraciones y conversaciones envolventes sobre el
        emocionante campo de la tecnología y más allá.
      </p>

      <div className="flex flex-wrap gap-4 mb-6">
        {socials.map((social) => (
          <ContactButton key={social.name} {...social} />
        ))}
      </div>
    </section>
  );
}
