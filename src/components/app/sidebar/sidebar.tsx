import { navbarSections } from "@/config";
import { useTranslations } from "next-intl";
import { SidebarController } from "./sidebar-controller";

export function Sidebar() {
  const t = useTranslations("config.navbarSections");
  const userData = useTranslations("config.userData");

  const sections = navbarSections.map((section) => ({
    title: t(`${section.name}.title` as any),
    buttons: section.buttons.map((button) => ({
      label: t(`${section.name}.buttons.${button.name}` as any),
      ...button,
    })),
  }));

  const spotifyMessages = {
    playing: t("spotify.playing"),
    nothing: t("spotify.nothing"),
  }

  const identificationMessages = {
    name: userData("name"),
    role: userData("role"),
    avatarUrl: userData("avatarUrl"),
    avatarAltDescription: userData("avatarAltDescription"),
  }

  return <SidebarController sections={sections} spotifyMessages={spotifyMessages} identificationMessages={identificationMessages} />;
}
