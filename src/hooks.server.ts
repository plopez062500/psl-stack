import { auth } from "$lib/lucia/lucia.server";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);
	
	return await resolve(event);
};