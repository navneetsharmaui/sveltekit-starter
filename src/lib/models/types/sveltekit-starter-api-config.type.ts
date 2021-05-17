import type { SVELTEKIT_STARTER_APIS_TYPE } from './sveltekit-apis.type';

export type SVELTEKIT_STARTER_API_CONFIG = {
	[key in SVELTEKIT_STARTER_APIS_TYPE]: string;
};
