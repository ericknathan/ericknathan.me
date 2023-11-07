import { Fragment } from "react";

import { ConsoleEasterEgg } from "./console-easter-egg";
import { KonamiCodeEasterEgg } from "./konami-code-easter-egg";

export function EasterEggs() {
  return (
    <Fragment>
      <ConsoleEasterEgg />
      <KonamiCodeEasterEgg />
    </Fragment>
  );
}
