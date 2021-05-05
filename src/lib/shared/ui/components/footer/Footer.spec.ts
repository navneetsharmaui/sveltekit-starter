import Footer from './Footer.svelte';
import { render } from '@testing-library/svelte';

describe('Footer Component', () => {
	it('Should create', () => {
		const { container } = render(Footer);

		expect(container).toBeTruthy();
	});
});
