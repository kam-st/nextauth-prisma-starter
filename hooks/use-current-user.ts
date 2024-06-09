import { useSession } from "next-auth/react";
import { useEffect } from "react";

export const useCurrentUser = () => {
  const session = useSession();
  const user = session.data?.user;

  useEffect(() => {
    if (user === undefined) {
      window.location.reload();
    }
  }, [user]);

  return user;
};
