import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { getAccessUrlByRole } from "@/data/access-url-role";

const useRoleAccess = ({ role, page }: { page?: string; role?: string }) => {
  const session = useSession();
  const pathname = usePathname();

  if (session.status === "loading" || session.status === "unauthenticated")
    return {};

  if (role === undefined) {
    role = session.data?.user.role;
  }

  const data = getAccessUrlByRole(role);

  if (page === undefined) page = pathname;

  const accessLevels = data.filter((data) => data.url == page);

  const accessLevel = accessLevels[0];

  return {
    createLevel: accessLevel?.create,
    deleteLevel: accessLevel?.delete,
    readLevel: accessLevel?.read,
    updateLevel: accessLevel?.update,
  };
};

export default useRoleAccess;
