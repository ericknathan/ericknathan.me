import Link from "next/link";

import { socials } from "@/config";

import { Button, Icon } from "@/components/ui";

function ContactButton(social: (typeof socials)[0]) {
  const ButtonIcon = Icon[social.icon];

  return (
    <Button asChild variant="outline" className="min-w-fit flex-1">
      <Link className="!text-inherit !no-underline" href={social.href}>
        <ButtonIcon size={16} className="mr-2" />
        {social.name}
      </Link>
    </Button>
  );
}

export function GetInTouchSection() {
  return (
    <section id="get-in-touch">
      <h2>Get in Touch {":)"}</h2>

      <p>
        As I continue to grow both personally and professionally, I aspire to
        contribute to the development of cutting-edge solutions that positively
        impact the lives of people around the globe. I am driven by a relentless
        determination to push the boundaries of what is possible, leveraging my
        skills to create meaningful and impactful digital experiences that
        resonate with users on a profound level.
      </p>

      <p>
        Feel free to reach out to me through the contact information provided
        below. I am always open to new opportunities, collaborations, and
        engaging conversations about the exciting realm of technology and
        beyond.
      </p>

      <div className="flex flex-wrap gap-4 mb-6">
        {socials.map((social) => (
          <ContactButton key={social.name} {...social} />
        ))}
      </div>
    </section>
  );
}
