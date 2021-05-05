import Button from './Button.svelte';
import { render } from '@testing-library/svelte';

describe('Button Component', () => {
	it('Should create', () => {
		const { container } = render(Button);

		expect(container).toBeTruthy();
	});
});
