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
          <strong>Location:</strong> {userData("location")}
        </li>
        <li>
          <strong>Age:</strong> {calcAge(new Date(userBirthDate))}
        </li>
        <li>
          <strong>Occupation:</strong> {userData("role")} @{" "}
          <Link
            href={userData("company.url")}
            target="_blank"
            rel="noopener noreferrer"
          >
            {userData("company.name")}
          </Link>
        </li>
        <li>
          <strong>Main tech stack:</strong> {stack.join(", ")}
        </li>
        <li>
          <strong>Languages:</strong>{" "}
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
          <strong>Interests:</strong> {userData("interests")}
        </li>
        <li>
          <strong>Pronouns:</strong> {userData("pronouns")}
        </li>
        <li>
          <strong>My favorite songs in this moment:</strong> <SongsGrid />
        </li>
      </ul>
    </section>
  );
}
