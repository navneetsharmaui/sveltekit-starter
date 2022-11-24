import dotenv from 'dotenv';
import type { Handle } from '@sveltejs/kit';

dotenv.config();

export const handle: Handle = async ({ event, resolve }) => resolve(event);
