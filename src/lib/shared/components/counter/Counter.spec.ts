import Counter from './Counter.svelte';
import { render, fireEvent } from '@testing-library/svelte';

describe('Counter Component', () => {
	it('Should create', async () => {
		const { container } = render(Counter);

		expect(container).toBeTruthy();
	});
	it('Test Case One', async () => {
		const { getByText, getByTestId } = render(Counter);

		const increment = getByText('increment');
		const decrement = getByText('decrement');
		const counter = getByTestId('counter-value');

		await fireEvent.click(increment);
		await fireEvent.click(increment);
		await fireEvent.click(decrement);
		await fireEvent.click(increment);

		expect(counter).toHaveTextContent('2');
	});
	it('Test Case Two', async () => {
		const { getByText, getByTestId } = render(Counter);

		const increment = getByText('increment');
		const counter = getByTestId('counter-value');

		await fireEvent.click(increment);
		await fireEvent.click(increment);

		expect(counter).toHaveTextContent('2');
	});
});
