import fs from 'fs';

import dotenv from 'dotenv';

const isEnvFilePresent = fs.existsSync(`.env.${process.env.NODE_ENV}`);

const envFilePath = isEnvFilePresent ? `.env.${process.env.NODE_ENV}` : `.env.${process.env.NODE_ENV}.local`;

dotenv.config({
	path: envFilePath,
});

const URL = process.env.VITE_LOCAL_BASE_URL;
const baseURL = URL;
// const pages = [''];

console.log('Base Url', baseURL);
