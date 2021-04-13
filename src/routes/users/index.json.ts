import { userData } from '$data/data';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function get() {
	return {
		body: [...userData],
	};
}
