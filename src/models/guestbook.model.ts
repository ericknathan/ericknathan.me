export type GuestbookMessageModel = {
  id: string;
  message: string;
  createdAt: string;
  user: {
    name: string;
    avatar: string;
  };
};
