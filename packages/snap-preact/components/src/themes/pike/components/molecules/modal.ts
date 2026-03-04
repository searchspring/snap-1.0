import { css } from '@emotion/react';
import type { ModalProps } from '../../../../components/Molecules/Modal';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Modal component
const modalStyleScript = (props: ModalProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// modal styles
	const modalStyles = css({
		cursor: 'pointer',
		...custom.styles.boxSizing('modal', props?.treePath, props?.name),
	});

	return modalStyles;
};

// Modal component props
export const modal: ThemeComponent<'modal', ModalProps> = {
	default: {
		modal: {
			themeStyleScript: modalStyleScript,
			overlayColor: custom.colors.overlay,
		},
	},
};
