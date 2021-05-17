import fs from 'fs';

import dotenv from 'dotenv';

dotenv.config({
	path: `.env.${process.env.NODE_ENV}`,
});

const URL = process.env.VITE_LOCAL_BASE_URL;
const baseURL = URL ? URL : 'https://sveltekit-starter.vercelapp.com';
// const pages = [''];

console.log('Base Url', baseURL);
