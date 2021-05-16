import fs from 'fs';

const pathToEnvironmentPorpertiesFolder = './src/environments';

const mode = process.env.MODE;

let pages = '';
const fileToRead = mode ? mode : 'local';

fs.readdirSync(pathToEnvironmentPorpertiesFolder).forEach((file) => {
	if (file.includes(fileToRead)) {
		pages = file;
	}
});

const environmentFileContent = fs.readFileSync(`${pathToEnvironmentPorpertiesFolder}/${pages}`);

fs.writeFileSync(`${pathToEnvironmentPorpertiesFolder}/environment.ts`, environmentFileContent);
