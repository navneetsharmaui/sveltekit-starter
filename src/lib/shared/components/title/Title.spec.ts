import Title from './Title.svelte';
import { render } from '@testing-library/svelte';

describe('Title Component', () => {
	it('Should create', async () => {
		const { container } = render(Title);

		expect(container).toBeTruthy();
	});
});
