import cookieSession from 'micro-cookie-session';

import { environment } from '$environment/environment';

const session = cookieSession({
	name: 'session',
	keys: [environment.sessionConfig.SESSION_KEY],
	maxAge: 24 * 60 * 60 * 1000,
});

export default function wrapper(req: unknown, res: unknown): void {
	session(req, res);
}
