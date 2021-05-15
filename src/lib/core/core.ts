import { container } from 'tsyringe';

import type { ISveltekitCoreConfig } from '$models/interfaces/isveltekit-core-config.interface';
import type { ISveltekitStarterEnvironmentConfig } from '$models/interfaces/isveltekit-strater-environment.interface';
import type { SVELTEKIT_ENPOINT_CONFIG } from '$models/types/sveltekit-endpoits.type';
import { environment } from '$environment/environment';

import { SveltekitCoreConfigToken } from './tokens/sveltekit-core-config.token';
import { SveltekitStarterEnvironmentFacade } from './services/environment/environment.facade';
import { JSONHttp } from './services/https/http-json';

// ISveltekitStarterEnvironmentConfig<SVELTEKIT_ENPOINT_CONFIG>
container.register<ISveltekitCoreConfig<ISveltekitStarterEnvironmentConfig<SVELTEKIT_ENPOINT_CONFIG>>>(
	SveltekitCoreConfigToken,
	{
		useValue: {
			environment,
		},
	},
);

export const sveltekitStarterEnvironmentFacade = container.resolve(SveltekitStarterEnvironmentFacade);
export const jsonHttpUtil = container.resolve(JSONHttp);
