import {LoginForm} from '@/components/auth/loginForm';
import { Icons } from '@/components/misc/icons';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { DividerWithText } from '@/components/misc/dividerWithText';

const LoginPage = () => {
  return (
    <div className='container flex h-screen w-screen flex-col items-center justify-center'>
      <Link
        href='/'
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-4 top-4 md:left-8 md:top-8'
        )}
      >
        <>
          <Icons.chevronLeft className='mr-2 h-4 w-4' />
          Back
        </>
      </Link>
      <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
            <LoginForm/>
            <div className="grid gap-4">
            <DividerWithText text='or' className='mt-4'/>
            <Button variant="outline" className="w-full">
                Login with Google
            </Button>
            <Button variant="outline" className="w-full">
                Login with Microsoft
            </Button>
            </div>
            <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="underline">
                    Sign up
                </Link>
            </div>
      </CardContent>
    </Card>
    </div>
  );
};

export default LoginPage;
