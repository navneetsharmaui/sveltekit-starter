import type { RequestHandler } from '@sveltejs/kit';

import { userData } from '$data/data';

export const get: RequestHandler = () => ({
	body: JSON.stringify([...userData]),
	status: 200,
});
