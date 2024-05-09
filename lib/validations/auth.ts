import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({ message: 'Email is required.' }).max(50),
  password: z.string().min(1, { message: 'Password is required.' }).max(30),
});

export const RegisterSchema = z
  .object({
    name: z.string().min(1, { message: 'Name is required.' }).max(30),
    lastName: z.string().min(1, { message: 'Name is required.' }).max(30),
    email: z.string().email({ message: 'Email is required.' }).max(50),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters')
      .max(30),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match',
  });
