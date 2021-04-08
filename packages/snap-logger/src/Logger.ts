import { colors } from './colors';
import { emoji } from './emoji';

export class Logger {
	private mode = LogMode.PRODUCTION;
	public emoji = emoji;
	public colors = colors;
	private prefix = '';

	constructor(prefix?: string) {
		this.prefix = prefix;
	}

	public setGroup(group: string): void {
		this.prefix = ` [${group}] :: `;
	}

	public setMode(mode: LogMode): void {
		if (Object.values(LogMode).includes(mode)) {
			this.mode = mode;
		}
	}

	public error(...params: any[]): void {
		let text = '';
		let rest = params;
		if (params.length && typeof params[0] == 'string') {
			[text, ...rest] = params;
		}

		console.log(
			`%c ${emoji.bang} %c${this.prefix}${text}`,
			`color: ${colors.red}; font-weight: bold; font-size: 14px; line-height: 12px;`,
			`color: ${colors.red}; font-weight: bold;`,
			...rest
		);
	}

	public warn(...params: any[]): void {
		let text = '';
		let rest = params;
		if (params.length && typeof params[0] == 'string') {
			[text, ...rest] = params;
		}

		console.log(
			`%c ${emoji.warning} %c${this.prefix}%c${text}`,
			`color: ${colors.yellow}; font-weight: bold; font-size: 14px; line-height: 12px;`,
			`color: ${colors.yellow}; font-weight: normal;`,
			`color: ${colors.yellow}; font-weight: bold;`,
			...rest
		);
	}

	public image({ url, width, height }: { url: string; width: number; height: number }, ...params: any[]): void {
		const styles = {
			size: `font-size: 1px; padding: ${height} ${width};`,
			background: `background: url("${url}") no-repeat; background-size: contain;`,
		};

		this.dev(`%c...`, `${styles.size} ${styles.background}`, ...params);
	}

	public imageText({ url, text, style }: { url: string; text: string; style: string }, ...params: any[]): void {
		const styles = {
			background: `margin-left: 6px; background: url("${url}") no-repeat; background-size: contain;`,
			custom: style,
		};

		this.dev(`%c ${'  ' + this.prefix}${text}`, `${styles.background} ${styles.custom}`, ...params);
	}

	public debug(...params: any[]): void {
		let text = '';
		let rest = params;
		if (params.length && typeof params[0] == 'string') {
			[text, ...rest] = params;
		}

		this.dev(
			`%c ${emoji.interobang} %c${this.prefix}${text}`,
			`color: ${colors.orangelight}; font-weight: bold; font-size: 14px; line-height: 12px;`,
			`color: ${colors.orangelight}; font-weight: bold;`,
			...rest
		);
	}

	public profile(profile: any): void {
		this.dev(
			`%c ${emoji.gear} %c${this.prefix}%c${profile.type}  %c~  ${profile.name}  ::  %c${profile.status.toUpperCase()}${
				profile.status == 'finished' ? '  ::  %c' + profile.time.run + 'ms' : ''
			}`,
			`color: ${colors.orange}; font-size: 14px; line-height: 12px;`,
			`color: ${colors.orange};`,
			`color: ${colors.orange}; font-style: italic;`,
			`color: ${colors.orange};`,
			`color: ${colors.orange}; font-weight: bold;`,
			`color: ${colors.grey};`
		);
	}

	public dev(...params: any[]): void {
		if (this.mode === LogMode.DEVELOPMENT) {
			console.log(...params);
		}
	}
}

enum LogMode {
	PRODUCTION = 'production',
	DEVELOPMENT = 'development',
}
