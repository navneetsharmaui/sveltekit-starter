import type { EnvironmentName, EnvironmentType } from '../enums';
import type { APIConfig } from '../types/api-config.type';

export interface IConfig {
	environmentType: EnvironmentType;
	production: boolean;
	isDebugMode: boolean;
	name: EnvironmentName;
	apiUrls: APIConfig;
}
