import Link from "next/link";

interface ClientsListProps {
  andJoiner: string;
}

export function ClientsList({ andJoiner }: ClientsListProps) {
  return (
    <>
      <Link
        href="https://www.drogariasultrapopular.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Farmácia Ultra Popular
      </Link>
      {", "}
      <Link
        href="http://entrefarma.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Entrefarma
      </Link>
      {", "}
      <Link
        href="https://www.farmaciasbigfort.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bigfort
      </Link>
      {", "}
      <Link
        href="https://www.grupoasfar.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Grupo Asfar
      </Link>
      {` ${andJoiner} `}
      <Link
        href="https://www.drogariaspoupaqui.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Poupaqui
      </Link>
    </>
  );
}
