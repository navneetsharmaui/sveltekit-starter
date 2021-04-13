import { userData } from '$data/data';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function get({ params }) {
	console.log(params);
	return userData.find((value) => value.id === params.slug)
		? {
				body: userData[userData.findIndex((value) => value.id === params.slug)],
		  }
		: {
				status: 404,
		  };
}
