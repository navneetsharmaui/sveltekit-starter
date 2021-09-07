import type { SVELTEKIT_STARTER_API_CONFIG, SVELTEKIT_DATA_ENPOINT_CONFIG } from '../types';
import type { IEnvironmentConfig } from './ienvironment.interface';
import type { ISveltekitDBConfig } from './isveltekit-db-config.interface';
import type { ITwitterConfig } from './itwitter-config.interface';
import type { ISessionConfig } from './isession-config.interface';
import type { IGitHubConfig } from './igithub-config.interface';

export interface ISveltekitStarterEnvironmentConfig<T = SVELTEKIT_DATA_ENPOINT_CONFIG> extends IEnvironmentConfig {
	apiUrls: SVELTEKIT_STARTER_API_CONFIG;
	chuckNorriesAPIConfig: Partial<ISveltekitDBConfig<T>>;
	sessionConfig: Partial<ISessionConfig>;
	twitterConfig: Partial<ITwitterConfig>;
	gitHubConfig: Partial<IGitHubConfig>;
}
