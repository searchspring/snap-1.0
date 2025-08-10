import { css } from '@emotion/react';
import type { ModalProps } from '../../../../components/Molecules/Modal';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Modal component
const modalStyleScript = (props: Partial<ModalProps>) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// Modal component props
export const modal: ThemeComponent<'modal', ModalProps> = {
	default: {
		modal: {
			themeStyleScript: modalStyleScript,
		},
	},
};
