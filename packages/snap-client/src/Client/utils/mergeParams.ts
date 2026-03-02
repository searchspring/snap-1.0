export function mergeParams(...args: any[]): any {
	const ret: any = {};

	args.reverse().forEach((params) => {
		Object.keys(params).forEach((key) => {
			const incoming = params[key];
			const existing = ret[key];

			if (incoming instanceof Array) {
				const base: any[] = existing !== undefined ? (existing instanceof Array ? existing : [existing]) : [];
				ret[key] = base.concat(incoming.filter((v: any) => base.indexOf(v) === -1));
			} else if (existing instanceof Array) {
				ret[key] = existing.indexOf(incoming) === -1 ? [incoming].concat(existing) : existing;
			} else {
				ret[key] = incoming;
			}
		});
	});

	return ret;
}
