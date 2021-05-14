import type { IEnvironmentConfig } from './ienvironment.interface';

export interface ICoreConfig<T extends IEnvironmentConfig> {
	environment: T;
}
