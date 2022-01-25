export class JSONHttp {
	public static async get<T>(url: string): Promise<T> {
		const res = await JSONHttp.fetch(url);
		return res.json() as Promise<T>;
	}

	private static async fetch(url: string): Promise<Response> {
		return fetch(url);
	}
}

export const jsonHttpUtil = new JSONHttp();
