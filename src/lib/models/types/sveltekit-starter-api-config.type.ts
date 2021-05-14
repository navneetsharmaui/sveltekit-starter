import type { SVELTEKIT_APIS_TYPE } from './sveltekit-apis.type';

export type SVELTEKIT_API_CONFIG = {
	[key in SVELTEKIT_APIS_TYPE]: string;
};
