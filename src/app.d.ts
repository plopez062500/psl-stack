// See https://kit.svelte.dev/docs/types#app

import type { Auth } from '$lib/lucia/lucia.server';
import type { Session, User } from '$lib/prisma/auth.server';
import type { PrismaClient } from '@prisma/client';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface PageData {}
		// interface Platform {}

		interface Locals {
			auth: import('lucia-auth').AuthRequest;
		}
	}

	var prisma: PrismaClient;

	namespace Lucia {
		type Auth = import('$lib/lucia/lucia.server').Auth;
		type UserAttributes = {
			fname: string;
			lname: string;
			email: string;
		};
	}
}

export {};
