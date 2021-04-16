import Title from './Title.svelte';
import { render } from '@testing-library/svelte';

describe('Title Component', () => {
	it('Should create', () => {
		const { container } = render(Title);

		expect(container).toBeTruthy();
	});
});
