"use client";
import { useUser } from "@/hooks/useUser";
import React, { Children, createContext } from "react";

type Props = {
  children: React.ReactNode;
};

export type TUser = {
  name: string;
  avatar_url: string;
} | null;

export type TContextNow = {
  user: TUser;
  reset: () => void;
  changeName: (name: string) => void;
  changeAvatar: (avatar_url: string) => void;
} | null;

const UserProvider = createContext<TContextNow>(null);
export default function ContextProvider({ children }: Props) {
  const [user, reset, changeName, changeAvatar] = useUser();
  return (
    <UserProvider.Provider value={{ user, reset, changeName, changeAvatar }}>
      {children}
    </UserProvider.Provider>
  );
}
