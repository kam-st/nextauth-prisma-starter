'use client';

import { useCurrentRole } from '@/hooks/use-current-role';

import { FormError } from './form-error';
import { UserRole } from '@/types';

type RoleGateProps = {
  children: React.ReactNode;
  allowedRole: UserRole;
};

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message='You do not have permisions to view this content' />
    );
  }

  return <>{children}</>;
};
