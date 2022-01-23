import type { EnvironmentName } from '../enums/environment-name.enum';
import type { EnvironmentType } from '../enums/environment-type.enum';
import type { ApiConfig } from '../types/api-config.type';

export interface IConfig {
	launchURL: string;
	environmentType: EnvironmentType;
	production: boolean;
	isDebugMode: boolean;
	name: EnvironmentName;
	apiUrls: ApiConfig;
}
