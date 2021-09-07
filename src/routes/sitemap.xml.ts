import fs from 'fs';

import { environment } from '$environment/environment';

const BASE_URL = `${environment.launchURL}`.trim().slice();
const pages: string[] = [''];

fs.readdirSync('./src/routes').forEach((file) => {
	file = file.includes('.') ? file.split('.')[0] : file;
	if (file.charAt(0) !== '_' && file !== 'sitemap' && file !== 'index' && file !== 'api') {
		pages.push(file);
	}
});

//
const render = (pages: string[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${pages
		.map(
			(page: string) => `
    <url><loc>${BASE_URL}/${page ? `${page}/` : ''}</loc><priority>0.85</priority></url>
  `,
		)
		.join('\n')}
</urlset>
`;

export function get(): {
	body: string;
} {
	const sitemap = render(pages);

	return {
		body: sitemap,
	};
}
