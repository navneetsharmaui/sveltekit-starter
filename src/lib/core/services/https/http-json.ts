export class JSONHttp {
	public async get<T>(url: string): Promise<T> {
		const res = await this.fetch(url);
		return res.json();
	}

	private async fetch(url: string): Promise<Response> {
		return await fetch(url);
	}
}

export const jsonHttpUtil = new JSONHttp();
