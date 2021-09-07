/* eslint-disable no-console */
import fs from 'fs';

const pathToWorkspaceJSON = './sveltekit-space.json';

// const pathToEnvironmentPorpertiesFolder = './src/environments';

const getArguments = (argv: string[], flag: string): string =>
	argv
		.filter((value) => value.includes(flag))
		.map((value) => value.split('=')[1])
		.reduce((value) => value);

const processArguments = process.argv;

try {
	const mode = getArguments(processArguments, '--mode');
	const project = getArguments(processArguments, '--project');
	const architectType = getArguments(processArguments, '--arhitect-type');
	// const configuration = getArguments(processArguments, '--configurations');
	const fileToRead = mode ? mode : 'local';

	const writeToFile = (filePath: string, data): void => fs.writeFileSync(filePath, data);

	const workspace = JSON.parse(
		fs.readFileSync(pathToWorkspaceJSON, {
			encoding: 'utf8',
		}),
	);
	const root = workspace['projects'][project]['root'];
	const fileReplacements =
		workspace['projects'][project]['architect'][architectType]['configurations'][fileToRead]['fileReplacements'];

	fileReplacements.forEach((value) => {
		const content = fs.readFileSync(`${root}${value.with}`);
		writeToFile(`${root}${value.replace}`, content);
	});
} catch (error) {
	console.error(error);
}
