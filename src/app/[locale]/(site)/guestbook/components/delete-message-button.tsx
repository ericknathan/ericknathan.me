"use client";

import { useAuth } from "@/contexts";
import { toast } from "@/hooks";

import { Button, Dialog, Icon } from "@/components/ui";
import { deleteMessage } from "@/lib/api/requests";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface DeleteMessageButtonProps {
  messageId: string;
}

export function DeleteMessageButton({
  messageId,
}: DeleteMessageButtonProps) {
  const t = useTranslations("pages.guestbook.deleteDialog");
  const { user, status } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (status === "unauthenticated") return null;

  async function handleDeleteMessage() {
    try {
      if (!user) return;

      await deleteMessage(messageId, user);

      setIsModalOpen(false);
      toast({
        title: t("toast.success"),
      });
    } catch (error) {
      toast({
        title: t("toast.error"),
      });
    }
  }

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
      <Dialog.Trigger asChild>
        <Button aria-label={t("title")} variant="destructive" size="icon">
          <Icon.trash className="w-4 h-4" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>{t("title")}</Dialog.Title>
          <Dialog.Description>{t("content")}</Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button variant="outline">{t("buttons.cancel")}</Button>
          </Dialog.Close>
          <Button variant="destructive" onClick={handleDeleteMessage}>
            {t("buttons.delete")}
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}
