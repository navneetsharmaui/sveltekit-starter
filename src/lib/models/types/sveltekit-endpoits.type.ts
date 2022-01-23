import type {
	SveltekitDataEndpointsDev,
	SveltekitSearchEndpointsDev,
} from '../enums/sveltekit-endpoint.dev.enum';
import type {
	SveltekitDataEndpointsQa,
	SveltekitSearchEndpointsQa,
} from '../enums/sveltekit-endpoint.qa.enum';
import type {
	SveltekitDataEndpointsProd,
	SveltekitSearchEndpointsProd,
} from '../enums/sveltekit-endpoint.prod.enum';
import type {
	SveltekitDataEndpoints,
	SveltekitSearchEndpoints,
} from '../enums/sveltekit-endpoint.enum';

export type SveltekitDataEndpointType = 'SERVICE';

export type SveltekitSearchEndpointType = 'SEARCH';

export type SveltekitEndpointType = SveltekitDataEndpointType | SveltekitSearchEndpointType;

export type SveltekitEndpoints = SveltekitDataEndpoints | SveltekitSearchEndpoints;

export type SveltekitDataEndpointConfig = {
	[key in SveltekitDataEndpointType]:
		| SveltekitDataEndpoints
		| SveltekitDataEndpointsProd
		| SveltekitDataEndpointsDev
		| SveltekitDataEndpointsQa;
};

export type SveltekitSearchEndpointConfig = {
	[key in SveltekitSearchEndpointType]:
		| SveltekitSearchEndpoints
		| SveltekitSearchEndpointsProd
		| SveltekitSearchEndpointsDev
		| SveltekitSearchEndpointsQa;
};

export type SveltekitStarterEndpointConfig = SveltekitDataEndpointConfig &
	SveltekitSearchEndpointConfig;
