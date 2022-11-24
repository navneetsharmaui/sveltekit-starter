import type { PageLoad } from '@sveltejs/kit';

throw new Error(
	'@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)',
);
export const load: PageLoad = ({ page }) => ({
	status: 302,
	redirect: `/dashboard/sales/${page.params.productId}/overview`,
});
