import {
	EnvironmentName,
	EnvironmentType,
	SVELTEKIT_DATA_ENPOINTS_DEV,
	SVELTEKIT_ENPOINT_CONFIG,
	SVELTEKIT_SEARCH_ENPOINTS_DEV,
} from '$lib/models';
import type { ISveltekitStarterEnvironmentConfig } from '$models/interfaces/isveltekit-strater-environment.interface';

export const environment: ISveltekitStarterEnvironmentConfig<SVELTEKIT_ENPOINT_CONFIG> = {
	name: EnvironmentName.DEVELOPMENT,
	environmentType: EnvironmentType.DEV,
	production: true,
	isDebugMode: false,
	apiUrls: {
		CHUCK_NORRIS: 'https://api.chucknorris.io/jokes/',
		IN_MEMORY: '',
		KIT: '',
	},
	svekitDBConfig: {
		apiKey: '',
		defaultAPILang: 'en-US',
		endPoints: {
			SEARCH: SVELTEKIT_SEARCH_ENPOINTS_DEV.SEARCH,
			SERVICE: SVELTEKIT_DATA_ENPOINTS_DEV.SERVICE,
		},
	},
};
