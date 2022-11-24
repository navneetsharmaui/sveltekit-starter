import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { userData } from '$data/data';

export const GET: RequestHandler = ({ params }) => {
	const userPayload = userData.find((value) => value.id === params.user);
	if (userPayload) {
		return {
			body: JSON.stringify(userData[userData.findIndex((value) => value.id === params.user)]),
			status: 200,
		};
	}
	throw error(404);
};
