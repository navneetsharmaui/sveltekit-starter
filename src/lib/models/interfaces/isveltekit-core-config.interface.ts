import type { SveltekitDataEndpointConfig } from '../types/sveltekit-endpoits.type';
import type { ISveltekitStarterEnvironmentConfig } from './isveltekit-strater-environment.interface';

export interface ISveltekitStarterCoreConfig<
	T extends ISveltekitStarterEnvironmentConfig<K>,
	K = SveltekitDataEndpointConfig
> {
	environment: T;
}
