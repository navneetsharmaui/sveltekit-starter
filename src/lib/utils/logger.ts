export enum LogLevel {
	off = 0,
	Debug,
	Error,
	Warning,
	Info,
}

export class Logger {
	static level = LogLevel.Debug;

	private source: string;

	constructor(component: string) {
		this.source = component;
	}

	public debug(...data: unknown[]): void {
		this.log(console.info, LogLevel.Debug, data);
	}

	public info(...data: unknown[]): void {
		this.log(console.info, LogLevel.Debug, data);
	}

	public warn(...data: unknown[]): void {
		this.log(console.warn, LogLevel.Debug, data);
	}

	public error(...data: unknown[]): void {
		this.log(console.error, LogLevel.Debug, data);
	}

	private log = (fun: () => void, level: LogLevel, objects: unknown[]): void => {
		if (level >= Logger.level) {
			const log = this.source ? [`[${this.source}]`].concat(objects as string[]) : objects;
			fun.apply<Console, unknown[], void>(console, log);
		}
	};
}

export const LoggerUtils = {
	getInstance(className: string): Logger {
		return new Logger(className);
	},
};
