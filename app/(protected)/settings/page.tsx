'use client';

import { logout } from '@/actions/logout';
// import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/hooks/use-current-user';
import { useSession, signOut } from 'next-auth/react';

const Settings = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };
  return (
    <div className='bg-white p-10 rounded-xl'>
      <Button onClick={onClick} type='submit' variant='link'>
        Sign Out
      </Button>
    </div>
  );
};

export default Settings;
