"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { storageKeys, userData } from "@/config";

import { Button, Dialog, Icon } from "@/components/ui";
import { getSessionStorageItem } from "@/lib/utils";

export function CompanyThanksDialog() {
  const [hasDomLoaded, setHasDomLoaded] = useState(false);
  const [isDialogAlreadyOpen, setIsDialogAlreadyOpen] = useState(
    Boolean(
      getSessionStorageItem(storageKeys.isCompanyThanksDialogAlreadyOpen)
    ) || false
  );

  const query = useSearchParams();
  const companyName = query.get("company_name");
  const t = useTranslations("components.companyThanks");

  function handleDialogClose(isOpen: boolean) {
    if (!isOpen) {
      setIsDialogAlreadyOpen(true);
      sessionStorage.setItem(
        storageKeys.isCompanyThanksDialogAlreadyOpen,
        "true"
      );
    }
  }

  useEffect(() => {
    setHasDomLoaded(true);
  }, []);

  return (
    <>
      {hasDomLoaded && (
        <Dialog.Root
          defaultOpen={!!companyName && !isDialogAlreadyOpen}
          onOpenChange={handleDialogClose}
        >
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{t("title", { companyName })}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Description>
              {t.rich("message", { companyName, br: () => <br /> })}
            </Dialog.Description>
            <Dialog.Footer className="grid grid-cols-2 gap-4">
              <Dialog.Close asChild>
                <Button variant="outline">
                  <Icon.x className="w-4 h-4 mr-2" />
                  {t("close")}
                </Button>
              </Dialog.Close>
              <Button asChild>
                <Link
                  href={userData.linkedinUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon.linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Link>
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Root>
      )}
    </>
  );
}
