import { database } from "@/lib/firebase/database";
import { GuestbookMessageModel } from "@/models";
import { User } from "firebase/auth";
import {
  DataSnapshot,
  get,
  onValue,
  ref,
  remove,
  set,
} from "firebase/database";

const COOLDOWN_DURATION = 5 * 60 * 1000; // 5 minutes

export function listenMessages(
  onSuccess: (messages: GuestbookMessageModel[]) => void,
  onFailure: (error: Error) => void
) {
  const query = ref(database, "guestbook/messages");
  return onValue(
    query,
    (snapshot) => {
      const messages = updateMessages(snapshot);
      onSuccess(messages);
    },

    onFailure
  );
}

export function updateMessages(snapshot: DataSnapshot) {
  const data = snapshot.val() as Record<string, GuestbookMessageModel[]>;

  let messages = [];

  if (snapshot.exists()) {
    messages = Object.values(data)
      .flatMap((message) => message)
      .map(Object.values)
      .flat()
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
  }

  return messages;
}

export async function sendMessage(
  message: string,
  user: User
): Promise<{
  state: "cooldown" | "error" | "success";
  params?: any;
}> {
  const cooldownQuery = ref(
    database,
    `guestbook/cooldown/${user.uid}/lastMessageSentAt`
  );
  const cooldown = await get(cooldownQuery);

  if (cooldown.exists()) {
    const lastMessageSentAt = new Date(cooldown.val()).getTime();
    const now = new Date().getTime();

    const diff = now - lastMessageSentAt;

    if (diff < COOLDOWN_DURATION) {
      const remainingTime = COOLDOWN_DURATION - diff;
      const minutes = Math.floor(remainingTime / 60000);
      const seconds = ((remainingTime % 60000) / 1000).toFixed(0);

      return {
        state: "cooldown",
        params: {
          minutes,
          seconds,
        },
      };
    }
  }

  const id = Date.now();
  const query = ref(database, `guestbook/messages/${user.uid}/${id}`);
  const messages = await get(query);

  if (messages.exists()) {
    return {
      state: "error",
    };
  }

  const githubData = await fetch(`https://api.github.com/user/${user.providerData[0].uid}`).then(
    (res) => res.json()
  );

  await set(query, {
    id,
    message,
    createdAt: new Date().toISOString(),
    user: {
      name: user.displayName,
      avatar: user.photoURL,
      profileUrl: githubData.html_url
    },
  });

  await set(ref(database, `guestbook/cooldown/${user.uid}`), {
    lastMessageSentAt: new Date().toISOString(),
  });

  return {
    state: "success",
  };
}

export async function deleteMessage(messageId: string, user: User) {
  const query = ref(database, `guestbook/messages/${user.uid}/${messageId}`);

  await remove(query);
}
