import dotenv from 'dotenv';
import type { Handle } from '@sveltejs/kit';

dotenv.config();

export const handle: Handle = async ({ request, resolve }) => resolve(request);
