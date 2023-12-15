import { getTranslations } from "next-intl/server";
import Link from "next/link";

import { stack, userData as userConfig } from "@/config";
import { calcAge } from "@/lib/utils";
import { SongsGrid } from "../../components";

const { birthDate, languages } = userConfig;

export default async function TLDRSection() {
  const userData = await getTranslations("config.userData");

  return (
    <section id="tl-dr">
      <h2>TL;DR</h2>
      <ul>
        <li>
          <strong>Ubicación:</strong> {userData("location")}
        </li>
        <li>
          <strong>Edad:</strong> {calcAge(birthDate)}
        </li>
        <li>
          <strong>Cargo:</strong> {userData("role")} @{" "}
          <Link
            href={userData("company.url")}
            target="_blank"
            rel="noopener noreferrer"
          >
            {userData("company.name")}
          </Link>
        </li>
        <li>
          <strong>Principal tecnología:</strong> {stack.join(", ")}
        </li>
        <li>
          <strong>Idiomas:</strong>{" "}
          {languages.map((language, index) => {
            const name = userData(`languages.${language}.name` as any);
            const proficiency = userData(
              `languages.${language}.proficiency` as any
            );

            return (
              <span key={name}>
                {name} <small className="opacity-80">({proficiency})</small>{" "}
                {index !== languages.length - 1 && "· "}
              </span>
            );
          })}
        </li>
        <li>
          <strong>Intereses:</strong> {userData("interests")}
        </li>
        <li>
          <strong>Pronombres:</strong> {userData("pronouns")}
        </li>
        <li>
          <strong>Mis canciones favoritas en este momento:</strong>{" "}
          <SongsGrid />
        </li>
      </ul>
    </section>
  );
}
