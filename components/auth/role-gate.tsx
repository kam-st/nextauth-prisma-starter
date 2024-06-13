"use client";

import { UserRole } from "@prisma/client";
import { useCurrentRole } from "@/hooks/use-current-role";
import { FormError } from "./form-error";

type RoleGateProps = {
  children: React.ReactNode;
  allowedRole: string;
};

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="You do not have permisions to view this content" />
    );
  }

  return <>{children}</>;
};
