/* eslint-disable no-console */
import fs from 'fs';

const folderfiles = fs.readdirSync('./');
const envFilePaths = folderfiles.filter((file) => file.includes('.env'));

try {
	if (envFilePaths.length === 0) {
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
