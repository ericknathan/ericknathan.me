import Link from "next/link";

import { stack, userBirthDate, userLanguages } from "@/config";
import { calcAge } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { SongsGrid } from "../../components";

export default function TLDRSection() {
  const userData = useTranslations("config.userData");

  return (
    <section id="tl-dr">
      <h2>TL;DR</h2>
      <ul>
        <li>
          <strong>Localização:</strong> {userData("location")}
        </li>
        <li>
          <strong>Idade:</strong> {calcAge(new Date(userBirthDate))}
        </li>
        <li>
          <strong>Ocupação:</strong> {userData("role")} @{" "}
          <Link
            href={userData("company.url")}
            target="_blank"
            rel="noopener noreferrer"
          >
            {userData("company.name")}
          </Link>
        </li>
        <li>
          <strong>Minha stack principal:</strong> {stack.join(", ")}
        </li>
        <li>
          <strong>Idiomas:</strong>{" "}
          {userLanguages.map((language, index) => {
            const name = userData(`languages.${language}.name` as any);
            const proficiency = userData(
              `languages.${language}.proficiency` as any
            );

            return (
              <span key={name}>
                {name} <small className="opacity-80">({proficiency})</small>{" "}
                {index !== userLanguages.length - 1 && "· "}
              </span>
            );
          })}
        </li>
        <li>
          <strong>Intereses:</strong> {userData("interests")}
        </li>
        <li>
          <strong>Pronomes:</strong> {userData("pronouns")}
        </li>
        <li>
          <strong>Minha música favorita no momento:</strong> <SongsGrid />
        </li>
      </ul>
    </section>
  );
}
