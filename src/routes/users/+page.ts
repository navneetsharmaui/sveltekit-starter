import type { PageLoad } from '@sveltejs/kit';

export const load: PageLoad = async ({ fetch }) => ({
	users: await fetch('/users.json').then((res) => res.json() as Promise<UserModel[]>),
});
