import { Fragment, Suspense } from "react";

import { CompanyThanksDialog } from "./company-thanks-dialog";
import { ConsoleEasterEgg } from "./console-easter-egg";
import { KonamiCodeEasterEgg } from "./konami-code-easter-egg";

export function EasterEggs() {
  return (
    <Fragment>
      <ConsoleEasterEgg />
      <KonamiCodeEasterEgg />
      <Suspense>
        <CompanyThanksDialog />
      </Suspense>
    </Fragment>
  );
}
