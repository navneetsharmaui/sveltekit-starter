import SEO from './SEO.svelte';
import { render } from '@testing-library/svelte';

describe('SEO Component', () => {
	it('Should create', () => {
		const { container } = render(SEO);

		expect(container).toBeTruthy();
	});
});
