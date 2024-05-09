'use client';

import { signIn } from 'next-auth/react';
import { DividerWithText } from '../misc/dividerWithText';
import { Button } from '../ui/button';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

type SocialAuthProps = {
  type?: 'Login' | 'Signup';
};

export const SocialAuth = ({ type }: SocialAuthProps) => {
  const onClick = (provider: 'google' | 'X') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className='grid gap-4'>
      <DividerWithText text='or' className='mt-4' />
      <Button
        variant='outline'
        className='w-full'
        onClick={() => onClick('google')}
      >
        {type} with Google
      </Button>
      {/* <Button variant='outline' className='w-full'>
        {type} with Microsoft
      </Button> */}
    </div>
  );
};
