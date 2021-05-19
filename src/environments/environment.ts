import {
	EnvironmentName,
	EnvironmentType,
	SVELTEKIT_DATA_ENPOINTS,
	SVELTEKIT_STARTER_ENPOINT_CONFIG,
	SVELTEKIT_SEARCH_ENPOINTS,
} from '$lib/models';
import type { ISveltekitStarterEnvironmentConfig } from '$models/interfaces/isveltekit-strater-environment.interface';

export const environment: ISveltekitStarterEnvironmentConfig<SVELTEKIT_STARTER_ENPOINT_CONFIG> = {
	name: EnvironmentName.LOCAL,
	environmentType: EnvironmentType.LOCAL,
	production: false,
	isDebugMode: true,
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
			SEARCH: SVELTEKIT_SEARCH_ENPOINTS.SEARCH,
			SERVICE: SVELTEKIT_DATA_ENPOINTS.SERVICE,
		},
	},
};
