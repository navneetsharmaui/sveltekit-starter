import type { SveltekitStarterApisType } from './sveltekit-apis.type';

export type SveltekitStarterApiConfig = {
	[key in SveltekitStarterApisType]: string;
};
