import type { SveltekitDataEndpointConfig } from '../types/sveltekit-endpoits.type';
import type { SveltekitStarterApiConfig } from '../types/sveltekit-starter-api-config.type';
import type { IEnvironmentConfig } from './ienvironment.interface';
import type { ISveltekitDBConfig } from './isveltekit-db-config.interface';
import type { ITwitterConfig } from './itwitter-config.interface';
import type { IGitHubConfig } from './igithub-config.interface';

export interface ISveltekitStarterEnvironmentConfig<T = SveltekitDataEndpointConfig>
	extends IEnvironmentConfig {
	apiUrls: SveltekitStarterApiConfig;
	chuckNorriesAPIConfig: Partial<ISveltekitDBConfig<T>>;
	twitterConfig: Partial<ITwitterConfig>;
	gitHubConfig: Partial<IGitHubConfig>;
}
