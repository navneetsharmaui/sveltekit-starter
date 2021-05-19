import {
	EnvironmentName,
	EnvironmentType,
	SVELTEKIT_DATA_ENPOINTS_DEV,
	SVELTEKIT_STARTER_ENPOINT_CONFIG,
	SVELTEKIT_SEARCH_ENPOINTS_DEV,
} from '$lib/models';
import type { ISveltekitStarterEnvironmentConfig } from '$models/interfaces/isveltekit-strater-environment.interface';

export const environment: ISveltekitStarterEnvironmentConfig<SVELTEKIT_STARTER_ENPOINT_CONFIG> = {
	name: EnvironmentName.DEVELOPMENT,
	environmentType: EnvironmentType.DEV,
	production: true,
	isDebugMode: false,
	lauchURL: import.meta.env.VITE_BASE_URL,
	apiUrls: {
		CHUCK_NORRIS: import.meta.env.VITE_CHUCK_NORRIS_API_URL,
		IN_MEMORY: '',
		GITHUB: import.meta.env.VITE_GITHUB_API_URL,
	},
	chuckNorriesAPIConfig: {
		defaultAPILang: import.meta.env.VITE_CHUCK_NORRIS_API_LANG
			? import.meta.env.VITE_CHUCK_NORRIS_API_LANG
			: 'en-US',
		endPoints: {
			SEARCH: SVELTEKIT_SEARCH_ENPOINTS_DEV.SEARCH,
			SERVICE: SVELTEKIT_DATA_ENPOINTS_DEV.SERVICE,
		},
	},
};
