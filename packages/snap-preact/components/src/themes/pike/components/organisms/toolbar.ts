import { css } from '@emotion/react';
import { ThemeComponent } from '../../../../providers';
import { ToolbarProps } from '../../../../components/Organisms/Toolbar';
import { custom } from '../../custom';

// CSS in JS style script for the Toolbar component
const toolbarStyleScript = (props: ToolbarProps) => {
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || 767;

	return css({
		'.ss__layout': {
			gap: `${custom.spacing.x2}px`,
			margin: 0,
		},
		'&[class*="bottom"]': {
			'.ss__pagination-info': {
				fontSize: custom.utils.convertPxToEm(14),
			},
		},
		'.ss__pagination-info': {
			fontSize: custom.utils.convertPxToEm(16),
		},
		[`@media (max-width: ${mobileBp}px)`]: {
			'.ss__pagination-info': {
				fontSize: custom.utils.convertPxToEm(18),
			},
		},
	});
};

// Toolbar component props
export const toolbar: ThemeComponent<'toolbar', ToolbarProps> = {
	default: {
		toolbar: {
			themeStyleScript: toolbarStyleScript,
		},
		'toolbar filterSummary': {
			title: `Current Filters:`,
			className: 'ss__filter-summary--aligned',
		},
	},
};
