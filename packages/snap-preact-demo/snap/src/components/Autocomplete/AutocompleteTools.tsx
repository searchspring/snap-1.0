import { h } from 'preact';
import { useState } from 'preact/hooks';
import { jsx, css } from '@emotion/react';
import type { Snap, SnapTemplates } from '@searchspring/snap-preact';
import { Toggle } from './Toggle';
import { VisualModal } from './VisualModal';

type AutocompleteToolsProps = {
	controller?: AutocompleteController;
	snap?: Snap | SnapTemplates;
};

const CSS = {
	tools: () =>
		css({
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			position: 'absolute',
			top: '0',
			right: '40px',
			'.ss__autocomplete__tools__upload': {
				cursor: 'pointer',
				'.fa-image': {
					fontSize: '27px',
				},
			},
		}),
};

export const AutocompleteTools = ({ controller }: AutocompleteToolsProps) => {
	const [modalOpen, setModalOpen] = useState(false);
	const aiEnabled = new URL(window.location.href).searchParams.get('aiq');

	const toggleAiSearch = (enabled) => {
		let input: string | Element | null = controller.config.selector;
		if (typeof input === 'string') {
			input = document.querySelector(input);
		}

		// disable autocomplete
		if (enabled) {
			controller.unbind();
			controller.setFocused();
		} else {
			controller.bind();
		}

		input.setAttribute('name', enabled ? 'aiq' : 'q');
		input.setAttribute('placeholder', enabled ? 'What can I help you find today?' : 'Search for Brand, Color, Size...');
	};

	toggleAiSearch(aiEnabled);

	const toggleVisualSearch = () => {
		if (!modalOpen) {
			controller.setFocused();
		}
		setModalOpen(!modalOpen);
	};

	return (
		<div css={[CSS.tools()]} className="ss__autocomplete__tools">
			<Toggle
				toggled={!!aiEnabled}
				round
				size={'33px'}
				onClick={(e, enabled) => {
					toggleAiSearch(enabled);
				}}
			/>
			<div className="ss__autocomplete__tools__upload" onClick={() => toggleVisualSearch()}>
				<i className="far fa-image"></i>
			</div>
			<VisualModal controller={controller} visible={modalOpen} toggleVisible={setModalOpen} />
		</div>
	);
};
