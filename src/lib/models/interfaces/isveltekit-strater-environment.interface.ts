import type { SVELTEKIT_DATA_ENPOINT_CONFIG } from '../types/sveltekit-endpoits.type';
import type { SVELTEKIT_STARTER_API_CONFIG } from '../types/sveltekit-starter-api-config.type';
import type { IEnvironmentConfig } from './ienvironment.interface';
import type { ISveltekitDBConfig } from './isveltekit-db-config.interface';
import type { ITwitterConfig } from './itwitter-config.interface';
import type { IGitHubConfig } from './igithub-config.interface';

export interface ISveltekitStarterEnvironmentConfig<T = SVELTEKIT_DATA_ENPOINT_CONFIG>
	extends IEnvironmentConfig {
	apiUrls: SVELTEKIT_STARTER_API_CONFIG;
	chuckNorriesAPIConfig: Partial<ISveltekitDBConfig<T>>;
	twitterConfig: Partial<ITwitterConfig>;
	gitHubConfig: Partial<IGitHubConfig>;
}
