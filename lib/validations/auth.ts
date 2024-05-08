import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({ message: 'Email is required.' }).max(50),
  password: z.string().min(1, { message: 'Password is required.' }).max(30),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: 'Email is required.' }).max(50),
  password: z
    .string()
    .min(6, { message: 'Minimum 6 characters required' })
    .max(30),
  firstName: z.string().min(1, { message: 'Name is required.' }).max(30),
  lastName: z.string().min(1, { message: 'Name is required.' }).max(30),
});
