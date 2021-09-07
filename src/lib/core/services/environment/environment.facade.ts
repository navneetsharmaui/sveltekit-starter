import { environment } from '$environment/environment';
import type { SVELTEKIT_STARTER_ENPOINT_CONFIG } from '$models/types/sveltekit-endpoits.type';
import type { ISveltekitStarterCoreConfig } from '$models/interfaces/isveltekit-core-config.interface';
import type { ISveltekitStarterEnvironmentConfig } from '$models/interfaces/isveltekit-strater-environment.interface';

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
	T extends ISveltekitStarterEnvironmentConfig<SVELTEKIT_STARTER_ENPOINT_CONFIG> = ISveltekitStarterEnvironmentConfig<SVELTEKIT_STARTER_ENPOINT_CONFIG>
> {
	constructor(private readonly coreConfig: ISveltekitStarterCoreConfig<T>) {}

	public get endPoints(): SVELTEKIT_STARTER_ENPOINT_CONFIG {
		return this.coreConfig.environment.chuckNorriesAPIConfig.endPoints;
	}

	public get defaultAPILang(): string {
		return this.coreConfig.environment.chuckNorriesAPIConfig.defaultAPILang;
	}

	public get environmentName(): string {
		return this.coreConfig.environment.name;
	}

	public get launchURL(): string {
		return this.coreConfig.environment.launchURL;
	}

	public get isProd(): boolean {
		return this.coreConfig.environment.production;
	}
}

export const sveltekitStarterEnvironmentFacade = new SveltekitStarterEnvironmentFacade({
	environment: environment,
});
