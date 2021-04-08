export type Target = {
	selector: string;
	inject?: {
		action: 'before' | 'after' | 'append' | 'prepend';
		element: Element | ((target: Target, element: Element) => Element);
	};
	[any: string]: unknown;
};

export type OnTarget = (target: Target, elem: Element, originalElem?: Element) => void;

let targetedElems: Array<Element> = [];

type DomQuery = (selector: string) => Array<Element>;

export class DomTargeter {
	private targets: Array<Target> = [];
	private onTarget: OnTarget;
	private document: Document;

	constructor(targets: Array<Target>, onTarget: OnTarget, document?: Document) {
		this.document = document || window.document;

		this.targets = targets;

		this.onTarget = onTarget;

		this.retarget();
	}

	retarget(): void {
		const targetElemPairs = this.targets.flatMap((target) => {
			const elems = this.domQuery(target.selector).filter((elem) => !targetedElems.find((e) => e == elem));

			targetedElems = targetedElems.concat(elems);

			return elems.map((elem) => ({ target, elem }));
		});

		targetElemPairs.forEach(({ target, elem }) => {
			if (target.inject) {
				const injectedElem = this.inject(elem, target);
				this.onTarget(target, injectedElem, elem);
			} else {
				this.onTarget(target, elem);
			}
		});
	}

	private domQuery(selector: string) {
		return Array.from(this.document.querySelectorAll(selector));
	}

	private inject(elem: Element, target: Target): Element {
		if (!target || !target.inject) {
			throw new Error('DomTargeter::inject: Injected element unspecified');
		}

		const injectedElem = target.inject.element instanceof Function ? target.inject.element(target, elem) : target.inject.element;

		if (!injectedElem) {
			throw new Error('DomTargeter::inject: Injected element unspecified');
		}

		if (!elem.parentNode) {
			throw new Error('DomTargeter::inject: Provided element has no parent element');
		}

		switch (target?.inject?.action) {
			case 'before':
				elem.parentNode.insertBefore(injectedElem, elem);
				break;
			case 'after':
				if (elem.nextSibling) {
					elem.parentNode.insertBefore(injectedElem, elem.nextSibling);
				} else {
					elem.parentNode.appendChild(injectedElem);
				}
				break;
			case 'append':
				elem.appendChild(injectedElem);
				break;
			case 'prepend':
				if (elem.firstChild) {
					elem.insertBefore(injectedElem, elem.firstChild);
				} else {
					elem.appendChild(injectedElem);
				}
				break;
		}

		return injectedElem;
	}
}
