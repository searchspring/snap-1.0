function str_repeat(i: string, m: number): string {
	const o: string[] = [];
	for (; m > 0; o[--m] = i);
	return o.join('');
}

export function sprintf(format: string, ...args: any[]): string {
	const argv = [format, ...args];
	let i = 0;
	let a: any;
	let f = argv[i++] as string;
	let m: RegExpExecArray | null;
	let p: string;
	let c: string;
	let x: number;
	const o: string[] = [];

	while (f) {
		if ((m = /^[^\x25]+/.exec(f))) {
			o.push(m[0]);
		} else if ((m = /^\x25{2}/.exec(f))) {
			o.push('%');
		} else if ((m = /^\x25(?:(\d+)\$)?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(f))) {
			if ((a = argv[parseInt(m[1]) || i++]) == null || a == undefined) {
				throw 'Too few arguments.';
			}
			if (/[^s]/.test(m[7]) && typeof a != 'number') {
				throw 'Expecting number but found ' + typeof a;
			}
			switch (m[7]) {
				case 'b':
					a = (a as number).toString(2);
					break;
				case 'c':
					a = String.fromCharCode(a as number);
					break;
				case 'd':
					a = parseInt(a as string);
					break;
				case 'e':
					a = m[6] ? (a as number).toExponential(parseInt(m[6])) : (a as number).toExponential();
					break;
				case 'f':
					a = m[6] ? parseFloat(a as string).toFixed(parseInt(m[6])) : parseFloat(a as string);
					break;
				case 'o':
					a = (a as number).toString(8);
					break;
				case 's':
					a = (a = String(a)) && m[6] ? a.substring(0, parseInt(m[6])) : a;
					break;
				case 'u':
					a = Math.abs(a as number);
					break;
				case 'x':
					a = (a as number).toString(16);
					break;
				case 'X':
					a = (a as number).toString(16).toUpperCase();
					break;
			}
			a = /[def]/.test(m[7]) && m[2] && a > 0 ? '+' + a : a;
			c = m[3] ? (m[3] == '0' ? '0' : m[3].charAt(1)) : ' ';
			x = (m[5] ? parseInt(m[5]) : 0) - String(a).length;
			p = m[5] ? str_repeat(c, x) : '';
			o.push(m[4] ? a + p : p + a);
		} else {
			throw new Error('sprintf: Invalid format string encountered');
		}
		f = f.substring(m![0].length);
	}
	return o.join('');
}
