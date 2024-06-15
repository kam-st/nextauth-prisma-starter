import { useSession } from "next-auth/react";

export const useCurrentUser = () => {
  const session = useSession();
  const user = session.data?.user;

  if (user === undefined) {
    window.location.reload();
  }

  return user;
};
