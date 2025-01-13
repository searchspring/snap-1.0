import { h } from 'preact';
import { jsx, css } from '@emotion/react';
import type { Snap, SnapTemplates } from '@searchspring/snap-preact';
import { Toggle } from './Toggle';

type AutocompleteToolsProps = {
	controller?: AutocompleteController;
	snap?: Snap | SnapTemplates;
};

const CSS = {
	tools: () =>
		css({
			position: 'absolute',
			top: '0',
			right: '30px',
		}),
};

export const AutocompleteTools = ({ controller }: AutocompleteToolsProps) => {
	const aiEnabled = new URL(window.location.href).searchParams.get('aiq');

	const setInputName = (enabled) => {
		let input: string | Element | null = controller.config.selector;
		if (typeof input === 'string') {
			input = document.querySelector(input);
		}

		input.setAttribute('name', enabled ? 'aiq' : 'q');
	};

	setInputName(aiEnabled);

	return (
		<div css={[CSS.tools()]} className="ss__autocomplete__tools">
			<Toggle
				toggled={!!aiEnabled}
				round
				size={'33px'}
				onClick={(e, enabled) => {
					setInputName(enabled);
				}}
			/>
		</div>
	);
};
