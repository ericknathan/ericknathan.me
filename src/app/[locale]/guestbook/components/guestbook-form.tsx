"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { FormEvent, useState } from "react";

import { useAuth } from "@/contexts";

import { Button, Icon, Textarea } from "@/components/ui";
import { toast } from "@/hooks";
import { sendMessage } from "@/lib/api/requests/guestbook.requests";

const MAX_MESSAGE_LENGTH = 280;

export function GuestbookForm() {
  const [message, setMessage] = useState("");
  const { user, status, signIn, signOut } = useAuth();
  const t = useTranslations("pages.guestbook");

  const formIsInvalid =
    message.trim().split(" ").length < 2 || message.length > MAX_MESSAGE_LENGTH;

  async function handleSaveMessage(event: FormEvent) {
    event.preventDefault();

    if (!user || status !== "authenticated") return;

    const { state, params } = await sendMessage(message, user);

    switch (state) {
      case "cooldown":
        toast({
          title: t("messages.cooldown", params),
          variant: "destructive",
        });
        break;
      case "error":
        toast({
          title: t("messages.error"),
          variant: "destructive",
        });
        break;
      default:
        toast({
          title: t("messages.success"),
        });
        setMessage("");
        break;
    }
  }

  return (
    <form
      className="flex flex-col w-full gap-4 pb-4 border-b"
      onSubmit={handleSaveMessage}
    >
      <div className="relative">
        <Textarea
          className="max-h-28"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t("placeholder")}
          maxLength={MAX_MESSAGE_LENGTH}
          required
          minLength={2}
        />
        <span className="absolute bottom-2 right-2 text-xs text-muted-foreground">
          {message.length}/{MAX_MESSAGE_LENGTH}
        </span>
      </div>
      <footer className="flex flex-row-reverse items-center gap-2">
        {user ? (
          <>
            <Button className="ml-auto" disabled={formIsInvalid}>
              {t("buttons.send")}
            </Button>
            <span className="flex flex-col items-start text-sm font-medium">
              {user.displayName}
              <button
                className="rounded-sm text-primary underline text-xs focus-visible:outline outline-2 focus-visible:outline-ring outline-offset-1"
                onClick={signOut}
                type="button"
              >
                {t("buttons.signOut")}
              </button>
            </span>
            <Image
              src={user.photoURL!}
              alt={user.displayName!}
              className="w-8 h-8 rounded-full bg-muted-foreground/50"
              width={36}
              height={36}
            />
          </>
        ) : (
          <>
            <Button
              onClick={signIn}
              variant="outline"
              disabled={formIsInvalid || status === "loading"}
              className="ml-auto"
            >
              <Icon.github className="w-4 h-4 mr-2" /> {t("buttons.signIn")}
            </Button>
          </>
        )}
      </footer>
    </form>
  );
}
