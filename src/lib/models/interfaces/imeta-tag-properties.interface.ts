import type { ITwitterMetaTagProperties } from './itwitter-meta-tag-properties.interface';
import type { IImageMetaTagProperties } from './iimage-meta-tag-properties.interface';
import type { IOpenGraphMetaTagProperties } from './iopen-graph-meta-tag-properties.interface';

export interface IMetaTagProperties {
	title: string;
	description: string;
	keywords: string;
	image: string | IImageMetaTagProperties;
	url: string;
	logoUrl: string;
	searchUrl: string;
	sitemapUrl: string;

	twitter: Partial<ITwitterMetaTagProperties>;

	openGraph: Partial<IOpenGraphMetaTagProperties>;

	robots: string;
}
