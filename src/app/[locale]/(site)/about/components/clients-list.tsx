import Link from "next/link";

interface ClientsListProps {
  andJoiner: string;
}

export function ClientsList({ andJoiner }: ClientsListProps) {
  return (
    <>
      <Link
        href="https://www.uber.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Uber
      </Link>
      {", "}
      <Link
        href="https://www.correioscelular.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Correios
      </Link>
      {", "}
      <Link
        href="https://www.bancobmg.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        BMG Bank
      </Link>
      {", "}
      <Link
        href="https://loja.algartelecom.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Algar
      </Link>
      {` ${andJoiner} `}
      <Link
        href="https://www.carrefour.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Carrefour
      </Link>
    </>
  );
}
