import type { SVELTEKIT_ENPOINT_CONFIG } from '$models/types/sveltekit-endpoits.type';
import type { ISveltekitCoreConfig } from '$models/interfaces/isveltekit-core-config.interface';
import type { ISveltekitStarterEnvironmentConfig } from '$models/interfaces/isveltekit-strater-environment.interface';
import { environment } from '$environment/environment';

/**
 * A facacde class for the Environment properties.
 *
 * @remarks
 * This facade class will provide the access to the environment properties
 * with DI. As the envirnment properties are accessed through this class and envirnment files are
 * not accessed directly, it will reduce the number of files where the environment properties needs to be changed when
 * new properties are added or properties are changed.
 *
 * @alpha
 * @public
 */
class SveltekitStarterEnvironmentFacade<
	T extends ISveltekitStarterEnvironmentConfig<SVELTEKIT_ENPOINT_CONFIG> = ISveltekitStarterEnvironmentConfig<SVELTEKIT_ENPOINT_CONFIG>,
> {
	constructor(private readonly coreConfig: ISveltekitCoreConfig<T>) {}

	public get endPoints(): SVELTEKIT_ENPOINT_CONFIG {
		return this.coreConfig.environment.svekitDBConfig.endPoints;
	}

	public get defaultAPILang(): string {
		return this.coreConfig.environment.svekitDBConfig.defaultAPILang;
	}
}

export const sveltekitStarterEnvironmentFacade = new SveltekitStarterEnvironmentFacade({
	environment: environment,
});
