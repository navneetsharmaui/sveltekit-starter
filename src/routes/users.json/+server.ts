import type { RequestHandler } from '@sveltejs/kit';

import { json } from '@sveltejs/kit';
import { userData } from '$data/data';

export const GET: RequestHandler = () => json([...userData]);
