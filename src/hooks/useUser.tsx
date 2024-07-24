import { TUser } from "@/providers/context.provider";
import { useState } from "react";

export const useUser = (): [
  user: TUser,
  reset: () => void,
  changename: (name: string) => void,
  changeAvatar: (avatar_url: string) => void
] => {
  const init: TUser = {
    name: "",
    avatar_url: "https://www.svgrepo.com/show/452030/avatar-default.svg",
  };

  const [user, setUser] = useState<TUser>({ ...init });
  const reset = () => setUser(init);
  const changeName = (name: string) => setUser({ ...user, name } as TUser);
  const changeAvatar = (avatar_url: string) =>
    setUser({ ...user, avatar_url } as TUser);

  return [user, reset, changeName, changeAvatar];
};
