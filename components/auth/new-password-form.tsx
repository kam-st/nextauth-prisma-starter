'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { NewPasswordSchema } from '@/lib/validations/auth';
import { FormError } from './form-error';
import { FormSucess } from './form-sucess';

import { useState, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';
import { newPasswordAction } from '@/actions/new-password-action';

const NewPaswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const email = searchParams.get('email');

  const [error, setError] = useState<string | undefined>('');
  const [success, setSucess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError('');
    setSucess('');
    startTransition(() => {
      newPasswordAction(values, email, token).then((data) => {
        setError(data?.error);
        setSucess(data?.success);
      });
    });
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <div className='grid gap-4'>
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      type='password'
                      placeholder='******'
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      type='password'
                      placeholder='******'
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSucess message={success} />
          <Button disabled={isPending} type='submit' className='w-full'>
            Reset Password{isPending ? '...' : ''}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default NewPaswordForm;
