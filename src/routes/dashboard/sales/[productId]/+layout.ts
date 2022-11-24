import { error } from '@sveltejs/kit';
import type { LayoutLoad } from '@sveltejs/kit';

export const load: LayoutLoad = ({ page }) => {
	const { params } = page;
	if (!params.productId || Number.isNaN(params.productId) || Number(params.productId) > 5) {
		throw error(404, `Not product found with id ${params.productId}`);
	}
	return {
		productId: params.productId,
	};
};
