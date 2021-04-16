import Card from './Card.svelte';
import { render } from '@testing-library/svelte';

describe('Card Component', () => {
	it('Should create', async () => {
		const { container } = render(Card);

		expect(container).toBeTruthy();
	});
});
