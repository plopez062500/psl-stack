import {prisma} from '$lib/prisma/prisma.server';
import prismaAdapter from "@lucia-auth/adapter-prisma";
import lucia from "lucia-auth";
import { dev } from "$app/environment";
import { sveltekit } from 'lucia-auth/middleware';

console.log('initializing lucia...')

export const auth = lucia({
   adapter: prismaAdapter(prisma),
   env: dev ? "DEV" : "PROD",
	middleware: sveltekit(),
   transformDatabaseUser: (userData) => {
		return {
			userId: userData.id,
			fname: userData.fname,
			lname: userData.lname,
			email: userData.email
		};
	}
})
console.log('initialized lucia')

export type Auth = typeof auth;
