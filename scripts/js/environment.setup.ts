import fs from 'fs';

const pathToWorkspaceJSON = './workspace.json';

// const pathToEnvironmentPorpertiesFolder = './src/environments';

const mode = process.env.MODE;
const project = process.env.PROJECT;
const architectType = process.env.ARCHITECT_TYPE;
const configuration = process.env.configurations;
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
