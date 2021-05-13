// TODO: Move sitemap generator to an external script and generate it with build process
import fs from 'fs';

import { userData } from '$data/data';

import { variables } from '$data/variables';

const URL = variables.basePath;
const baseURL = URL ? URL : 'https://sveltekit-starter.vercelapp.com';
const pages = [''];

fs.readdirSync('./src/routes').forEach((file) => {
	file = file.split('.')[0];

	if (
		file.charAt(0) !== '_' &&
		file !== 'sitemap' &&
		file !== 'index' &&
		file !== '$layout' &&
		file !== '$error' &&
		file !== 'rss'
	) {
		pages.push(file);
	}
});

const render = (pages: string[]) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages
	.map(
		(page: string) => `
	<url>
		<loc>
			${baseURL}/${page ? `${page}/` : ''}
		</loc>
		<priority>0.85</priority>
	</url>
`,
	)
	.join('\n')}
${userData
	.map(
		(userData) => `
	<url>
		<loc>
			${baseURL}/users/${userData.id}/
		</loc>
		<priority>0.69</priority>
	</url>
`,
	)
	.join('\n')}
</urlset>
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function get() {
	const sitemap = render(pages);

	return {
		body: sitemap,
	};
}
