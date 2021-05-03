import type { IArticleMetaTagProperties } from './iarticle-meta-tag-properties.interface';
import type { ITwitterMetaTagProperties } from './itwitter-meta-tag-properties.interface';
import type { IImageMetaTagProperties } from './iimage-meta-tag-properties.interface';
import type { IOpenGraphMetaTagProperties } from './iopen-graph-meta-tag-properties.interface';

export interface IMetaTagProperties {
	title: string;
	description: string;
	keywords: string[];
	image: string | IImageMetaTagProperties;
	url: string;
	logoUrl: string;
	searchUrl: string;
	sitemapUrl: string;

	rss: string;
	atom: string;

	twitter: Partial<ITwitterMetaTagProperties>;

	openGraph: Partial<IOpenGraphMetaTagProperties>;

	article: Partial<IArticleMetaTagProperties>;

	robots: string;
}
