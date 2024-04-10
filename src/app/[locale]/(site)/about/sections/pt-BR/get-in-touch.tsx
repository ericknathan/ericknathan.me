import { socials } from "@/config";

import { ContactButton } from "../../components";

export default function GetInTouchSection() {
  return (
    <section id="get-in-touch">
      <h2>Entre em contato comigo {":)"}</h2>

      <p>
        À medida que continuo a crescer tanto pessoal quanto profissionalmente,
        aspiro a contribuir para o desenvolvimento de soluções de ponta que
        impactem positivamente a vida das pessoas ao redor do mundo. Sou
        impulsionado por uma determinação implacável para ultrapassar os limites
        do que é possível, aproveitando minhas habilidades para criar
        experiências digitais significativas e impactantes que ressoem com os
        usuários em um nível profundo.
      </p>

      <p>
        Sinta-se à vontade para entrar em contato comigo através das informações
        de contato fornecidas abaixo. Estou sempre aberto a novas oportunidades,
        colaborações e conversas envolventes sobre o emocionante campo da
        tecnologia e além.
      </p>

      <div className="flex flex-wrap gap-4 mb-6">
        {socials.map((social) => (
          <ContactButton key={social.name} {...social} />
        ))}
      </div>
    </section>
  );
}
