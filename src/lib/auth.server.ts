import type { Session } from 'lucia-auth';
import { auth } from './lucia/lucia.server';

export async function signupAndLogin(
	fname: string,
	lname: string,
	email: string,
	password: string
): Promise<Session> {
	const user = await auth.createUser({
		primaryKey: {
			providerId: 'email',
			providerUserId: email,
			password
		},
		attributes: {
			email,
			fname,
			lname
		}
	});

	const session = await auth.createSession(user.userId);

	return session;
}

export async function loginWithEmail(email: string, password: string): Promise<Session> {
	const key = await auth.useKey('email', email, password);
	const session = await auth.createSession(key.userId);

	return session;
}

export async function signout(sessionId: string): Promise<void> {
	await auth.invalidateSession(sessionId);
}

export async function invalidateUserSessions(email: string): Promise<void> {
	await auth.invalidateAllUserSessions(email);
}
