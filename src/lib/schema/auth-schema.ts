import { z } from 'zod';

export const signupFormSchema = z.object({
	fname: z.string().min(1, 'First name is required.'),
	lname: z.string().min(1, 'Last name is required.'),
	email: z.string().min(1, 'Email is required.').email('Invalid email address.'),
	password: z.string().min(1, 'Password is required.')
});

export const loginFormSchema = z.object({
	email: z.string().min(1, 'Email is required.').email('Invalid email address.'),
	password: z.string().min(1, 'Password is required.')
});
