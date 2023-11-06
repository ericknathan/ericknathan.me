import Image from "next/image";

export default function ClosingNoteSection() {
  return (
    <section id="closing-note">
      <h2>Nota de conclusão</h2>
      <p>
        Obrigado por visitar meu portfólio e dedicar tempo para saber mais sobre
        minha jornada. Estou entusiasmado com as possibilidades que o futuro
        reserva e ansioso para embarcar em novos empreendimentos que me permitam
        contribuir para o cenário tecnológico em constante evolução. Não hesite
        em entrar em contato usando as informações fornecidas. Vamos colaborar e
        criar algo notável juntos!
      </p>
      <Image
        src="/images/gifs/see-u.gif"
        alt="Gif do Bob Esponja com o texto 'Vejo você em breve' em inglês"
        width={300}
        height={200}
        className="w-full md:w-1/2 h-auto mx-auto rounded border"
        loading="lazy"
      />
    </section>
  );
}
