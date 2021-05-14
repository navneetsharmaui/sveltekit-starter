import type { SVELTEKIT_API_CONFIG, SVELTEKIT_DATA_ENPOINT_CONFIG } from '../types';
import type { IEnvironmentConfig } from './ienvironment.interface';
import type { ISveltekitDBConfig } from './isveltekit-db-config.interface';

export interface ISveltekitStarterEnvironmentConfig<T = SVELTEKIT_DATA_ENPOINT_CONFIG> extends IEnvironmentConfig {
	apiUrls: SVELTEKIT_API_CONFIG;
	svekitDBConfig: ISveltekitDBConfig<T>;
}
