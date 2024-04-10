import Image from "next/image";

export default function ClosingNoteSection() {
  return (
    <section id="closing-note">
      <h2>Nota de cierre</h2>
      <p>
        Gracias por visitar mi portafolio y dedicar tiempo para conocer más
        sobre mi trayectoria. Estoy emocionado por las posibilidades que el
        futuro tiene reservadas y ansioso por embarcarme en nuevos desafíos que
        me permitan contribuir al siempre cambiante panorama tecnológico. No
        dudes en ponerte en contacto conmigo, ¡colaboremos y creemos algo
        notable juntos!
      </p>
      <Image
        src="/images/gifs/see-u.gif"
        alt="Gif de Bob Esponja con el texto 'Te veo en breve' en inglés"
        width={300}
        height={200}
        className="w-full md:w-1/2 h-auto mx-auto rounded border"
        loading="lazy"
      />
    </section>
  );
}
