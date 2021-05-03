import HeadTags from './HeadTags.svelte';
import { render } from '@testing-library/svelte';

describe('HeadTags Component', () => {
	it('Should create', () => {
		const { container } = render(HeadTags);

		expect(container).toBeTruthy();
	});
});
