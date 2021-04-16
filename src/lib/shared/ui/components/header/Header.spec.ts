import Header from './Header.svelte';
import { render } from '@testing-library/svelte';

describe('Header Component', () => {
	it('Should create', () => {
		const { container } = render(Header);

		expect(container).toBeTruthy();
	});
});
