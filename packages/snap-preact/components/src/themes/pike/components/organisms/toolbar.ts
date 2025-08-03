import { css } from '@emotion/react';
import { ThemeComponent } from '../../../../providers';
import { ToolbarProps } from '../../../../components/Organisms/Toolbar';
import { custom } from '../../custom';

// CSS in JS style script for the Toolbar component
const toolbarStyleScript = (props: ToolbarProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || 767;

	// shared toolbar styles
	const sharedStyles = css({
		'.ss__layout': {
			gap: `${custom.spacing.x2}px`,
			margin: 0,
		},
	});

	// default toolbar styles
	const defaultStyles = css([
		sharedStyles,
		{
			margin: `0 0 ${custom.spacing.x4}px 0`,
			'.ss__pagination-info': {
				fontSize: custom.utils.convertPxToEm(16),
			},
			[`@media (max-width: ${mobileBp}px)`]: {
				'.ss__pagination-info': {
					fontSize: custom.utils.convertPxToEm(18),
				},
			},
		},
	]);

	// bottom toolbar styles
	const bottomStyles = css([
		sharedStyles,
		{
			margin: `${custom.spacing.x4}px 0 0 0`,
		},
	]);

	return props?.name == 'bottom' ? bottomStyles : defaultStyles;
};

// Toolbar component props
export const toolbar: ThemeComponent<'toolbar', ToolbarProps> = {
	default: {
		toolbar: {
			themeStyleScript: toolbarStyleScript,
		},
	},
};
