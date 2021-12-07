import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ request, resolve }) => {
	return resolve(request);
};
