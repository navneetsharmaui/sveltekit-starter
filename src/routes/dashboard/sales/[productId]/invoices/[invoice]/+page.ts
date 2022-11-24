import { error } from '@sveltejs/kit';
import type { PageLoad } from '@sveltejs/kit';

export const load: PageLoad = ({ page }) => {
	const { params } = page;
	if (!params.invoice || Number.isNaN(params.invoice) || Number(params.invoice) > 88888) {
		throw error(404, 'Not Invoice found with given id');
	}
	return {
		invoice: page.params.invoice,
	};
};
