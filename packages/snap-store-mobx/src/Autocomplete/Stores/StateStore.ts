import { observable, action, computed, makeObservable } from 'mobx';

export class StateStore {
	locks: {
		terms: Lock;
		facets: Lock;
	};
	focusedInput: HTMLInputElement = undefined;
	input = '';
	url: undefined;

	constructor() {
		this.locks = {
			terms: new Lock(false),
			facets: new Lock(false),
		};

		makeObservable(this, {
			focusedInput: observable,
			locks: observable,
			input: observable,
			reset: action,
		});
	}

	link(controller): void {
		this.url = controller?.urlManager;
	}

	reset(): void {
		this.input = '';
		this.locks.terms.reset();
		this.locks.facets.reset();
	}
}

export class Lock {
	private state: boolean;
	private startState: boolean;

	constructor(state = false) {
		this.state = this.startState = state;
	}

	reset(): void {
		this.state = this.startState;
	}

	get locked(): boolean {
		return this.state;
	}

	lock(): void {
		this.state = true;
	}

	unlock(): void {
		this.state = false;
	}
}