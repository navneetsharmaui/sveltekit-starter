import type { PageLoad } from '@sveltejs/kit';

export const load: PageLoad = async ({ page, fetch }) => ({
	user: await fetch(`/users/${page.params.user}.json`).then(
		(res) => res.json() as Promise<UserModel>,
	),
});
