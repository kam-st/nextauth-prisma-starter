import { LoginButton } from '@/components/auth/loginButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center justify-center'>
      <Card className='space-y-6'>
        <h1 className='text-6xl font-semibold  drop-shadow-md'>Auth</h1>
        <p className=' text-lg'>A simple authentication service</p>
        <LoginButton>
          <Button variant='secondary'>Sign in</Button>
        </LoginButton>
      </Card>
    </main>
  );
}
