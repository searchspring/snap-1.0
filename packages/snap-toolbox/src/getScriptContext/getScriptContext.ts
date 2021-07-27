type ContextVariables = {
	[variable: string]: any;
};

export function getScriptContext(script: Element, evaluate?: string[]): ContextVariables {
	if (!script || typeof script !== 'object' || script.constructor.name != 'HTMLScriptElement') {
		throw new Error('script tag must be provided');
	}

	// check script type
	if (!script.getAttribute('type').match(/^searchspring/)) {
		throw new Error('script type attribute must start with "searchspring"');
	}

	if ((evaluate && !Array.isArray(evaluate)) || (evaluate && !evaluate.reduce((accu, name) => accu && typeof name === 'string', true))) {
		throw new Error('scriptContext second parameter must be an array of strings');
	}

	const variables = {};

	// grab all element attributes and put into variables
	script.getAttributeNames().map((attr) => {
		variables[attr] = script.getAttribute(attr);
	});

	// evaluate text and put into variables
	evaluate?.forEach((name) => {
		const fn = new Function(`
			var ${evaluate.join(', ')};
			${script.innerHTML}
			return ${name};
		`);

		variables[name] = fn();
	});

	return variables;
}