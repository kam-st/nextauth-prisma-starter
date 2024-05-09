'use client';

import { newVerification } from '@/actions/newVerificationAction';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { FormSucess } from '../form-sucess';
import { FormError } from '../form-error';
import { Button } from '../ui/button';
import Link from 'next/link';

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSucess] = useState<string | undefined>('');

  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  const onSubmit = useCallback(() => {
    if (success || error) return;
    if (!token) {
      setError('Missing token!');
      return;
    }

    newVerification(token)
      .then((data) => {
        setSucess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError('Something went wrong!');
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);
  return (
    <div className='flex flex-col gap-2'>
      {!success && !error && <BeatLoader />}
      <FormSucess message={success} />
      {!success && <FormError message={error} />}

      <Button variant='ghost'>
        <Link href='/login'> Back to login </Link>
      </Button>
    </div>
  );
};
