import { userData } from '$data/data';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function get({ params }) {
	return userData.find((value) => value.id === params.user)
		? {
				body: userData[userData.findIndex((value) => value.id === params.user)],
		  }
		: {
				status: 404,
		  };
}
