/* eslint-disable no-console */
import fs from 'fs';
import dotenv from 'dotenv';

const pathToWorkspaceJSON = './workspace.json';

const filterArguments = (argv: string[], flag: string): string[] =>
	argv.filter((value) => value.includes(flag)).map((value) => value.split('=')[1]);

const getArguments = (argv: string[], flag: string): string =>
	filterArguments(argv, flag) ? filterArguments(argv, flag).reduce((value) => value) : '';

const writeToFile = (filePath: string, data): void => fs.writeFileSync(filePath, data);

const processArguments = process.argv;

const env = getArguments(processArguments, '--env-file');

const envFile = env
	? env === 'local'
		? fs.existsSync('.env.local')
			? '.env.local'
			: fs.existsSync(`.env.${env}.local`)
			? `.env.${env}.local`
			: fs.existsSync(`.env.${env}`)
			? `.env.${env}`
			: '.env'
		: '.env'
	: '.env';

try {
	if (!fs.existsSync(envFile)) {
		throw new Error(`
			Environment files are not there in the workspace.
			Create the .env file with required properties defined in it.
			Create .env.local for local environment properties.
			Create .env.{development | qa | production }.local to check application with environment specific properties.
			If you create a new environment specific .env file add it in the .gitignore and do not commit that file.
		`);
	}
} catch (error) {
	console.error(error);
}

dotenv.config({
	path: envFile,
});

const project = getArguments(processArguments, '--project');

const workspace = JSON.parse(
	fs.readFileSync(pathToWorkspaceJSON, {
		encoding: 'utf8',
	}),
);

const root = workspace['projects'][project]['root'];
const routes = workspace['projects'][project]['routes'];
const assets = workspace['projects'][project]['assets'];

const URL = process.env.VITE_BASE_URL;
const baseURL = URL ? URL : 'https://localhost:3000';
const pages = [''];

fs.readdirSync(`${root}/${routes}`).forEach((file) => {
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
</urlset>
`;

const sitemap = render(pages);

writeToFile(`${root}/${assets}/sitemap.xml`, sitemap);
