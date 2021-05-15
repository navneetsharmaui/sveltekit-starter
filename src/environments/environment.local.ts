import {
	EnvironmentName,
	EnvironmentType,
	SVELTEKIT_DATA_ENPOINTS,
	SVELTEKIT_ENPOINT_CONFIG,
	SVELTEKIT_SEARCH_ENPOINTS,
} from '$lib/models';
import type { ISveltekitStarterEnvironmentConfig } from '$models/interfaces/isveltekit-strater-environment.interface';

export const environment: ISveltekitStarterEnvironmentConfig<SVELTEKIT_ENPOINT_CONFIG> = {
	name: EnvironmentName.LOCAL,
	environmentType: EnvironmentType.LOCAL,
	production: false,
	isDebugMode: true,
	apiUrls: {
		CHUCK_NORRIS: 'https://api.chucknorris.io/jokes/',
		IN_MEMORY: '',
		KIT: '',
	},
	svekitDBConfig: {
		apiKey: '',
		defaultAPILang: 'en-US',
		endPoints: {
			SEARCH: SVELTEKIT_SEARCH_ENPOINTS.SEARCH,
			SERVICE: SVELTEKIT_DATA_ENPOINTS.SERVICE,
		},
	},
};
