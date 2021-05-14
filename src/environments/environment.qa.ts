import {
	EnvironmentName,
	EnvironmentType,
	SVELTEKIT_DATA_ENPOINTS_QA,
	SVELTEKIT_ENPOINT_CONFIG,
	SVELTEKIT_SEARCH_ENPOINTS_QA,
} from '$lib/models';
import type { ISveltekitStarterEnvironmentConfig } from '$models/interfaces/isveltekit-strater-environment.interface';

export const environment: ISveltekitStarterEnvironmentConfig<SVELTEKIT_ENPOINT_CONFIG> = {
	name: EnvironmentName.QA,
	environmentType: EnvironmentType.QA,
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
			SEARCH: SVELTEKIT_SEARCH_ENPOINTS_QA.SEARCH,
			SERVICE: SVELTEKIT_DATA_ENPOINTS_QA.SERVICE,
		},
	},
};
