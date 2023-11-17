"use client";

import { onValue, ref } from "firebase/database";
import { useFormatter, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

import { FadeIn } from "@/components/animation";
import { useAuth } from "@/contexts";
import { listenMessages, updateMessages } from "@/lib/api/requests";
import { database } from "@/lib/firebase/database";
import { GuestbookMessageModel } from "@/models";
import { DeleteMessageButton } from "./delete-message-button";
import { MessagesListFallback } from "./messages-list-fallback";

export function MessagesList() {
  const t = useTranslations("pages.guestbook");
  const format = useFormatter();
  const { user } = useAuth();

  const [messages, setMessages] = useState<GuestbookMessageModel[]>([]);
  const [status, setStatus] = useState<"loading" | "error" | "success">(
    "loading"
  );

  useEffect(() => {
    return listenMessages(
      (messages) => {
        setStatus("success");
        setMessages(messages);
      },
      (error) => {
        setStatus("error");
      }
    );
  }, []);

  if (status === "error")
    return <MessagesListFallback message={t("messages.error")} />;
  if (messages.length === 0 && status !== "loading")
    return <MessagesListFallback message={t("messages.empty")} />;

  return (
    <div className="flex flex-col gap-4 flex-1">
      {messages.map((message, index) => (
        <FadeIn
          key={message.id}
          className="card flex flex-col gap-4 h-fit"
          delay={(index <= 3 ? 0.1 * index : 0) + 0.1}
          startOnScrollIntersect
        >
          <div className="flex">
            <p className="leading-relaxed flex-1">{message.message}</p>
            {message.user.name === user?.displayName && (
              <DeleteMessageButton messageId={message.id} />
            )}
          </div>
          <footer className="flex items-center justify-between text-sm font-medium">
            <div className="flex items-center gap-2">
              <Image
                width={36}
                height={36}
                src={message.user.avatar}
                alt={message.user.name}
                className="w-8 h-8 rounded-full bg-muted-foreground/50"
              />
              <span className="opacity-80">{message.user.name}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              {format.relativeTime(new Date(message.createdAt), new Date())}
            </span>
          </footer>
        </FadeIn>
      ))}
    </div>
  );
}
