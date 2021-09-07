import type { SVELTEKIT_DATA_ENPOINT_CONFIG } from '../types';
import type { ISveltekitStarterEnvironmentConfig } from './isveltekit-strater-environment.interface';

export interface ISveltekitStarterCoreConfig<
	T extends ISveltekitStarterEnvironmentConfig<K>,
	K = SVELTEKIT_DATA_ENPOINT_CONFIG
> {
	environment: T;
}
