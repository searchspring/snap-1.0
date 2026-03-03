import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { ComponentMap } from '../types';

type JSXComponent = ((props: any) => h.JSX.Element | null) | undefined;

export const useComponent = (map: ComponentMap, name: string): JSXComponent => {
	const [importedComponent, setImportedComponent] = useState<JSXComponent>(undefined);

	useEffect(() => {
		const importFn = map[name];
		if (importFn && typeof importFn === 'function') {
			const componentFn = importFn();
			if (componentFn instanceof Promise) {
				componentFn.then((component) => {
					setImportedComponent(() => component as JSXComponent);
				});
			} else {
				setImportedComponent(() => componentFn as JSXComponent);
			}
		}
	}, []);

	return importedComponent;
};
