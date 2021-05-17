export interface ISveltekitDBConfig<T> {
	apiKey?: string;
	defaultAPILang?: string;
	authName?: string;
	endPoints: T;
}
