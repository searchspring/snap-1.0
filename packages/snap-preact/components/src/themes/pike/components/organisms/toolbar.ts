import { css } from '@emotion/react';
import { ThemeComponent } from '../../../../providers';
import { ToolbarProps } from '../../../../components/Organisms/Toolbar';
import { custom } from '../../custom';

// static variables
const activeColors = custom.utils.activeColors();
const activeColor = activeColors[0];
const fontColor = activeColors[1];

// CSS in JS style script for the Toolbar component
const toolbarStyleScript = (props: ToolbarProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;

	// toolbar styles
	const toolbarStyles = css({
		...custom.styles.boxSizing('toolbar', props?.treePath, props?.name),
		'.ss__button--sidebar-toggle-button-wrapper .ss__button': {
			'.ss__button__content': {
				textAlign: 'left',
			},
			'.ss__icon--filters': {
				fill: activeColor,
				stroke: fontColor,
			},
		},
		'.ss__layout': {
			'&, .ss__layout__row': {
				gap: `${custom.spacing.x2}px`,
			},
		},
		'.ss__pagination-info': {
			fontSize: props?.name == 'bottom' ? '14px' : '',
		},
		[`@media (max-width: ${mobileBp}px)`]: {
			'.ss__pagination-info': {
				fontSize: props?.name == 'bottom' ? '16px' : '18px',
			},
		},
	});

	return toolbarStyles;
};

// Toolbar component props
export const toolbar: ThemeComponent<'toolbar', ToolbarProps> = {
	default: {
		toolbar: {
			themeStyleScript: toolbarStyleScript,
		},
		'toolbar filterSummary': {
			title: `Current Filters:`,
		},
		'toolbar mobileSidebar filterSummary': {
			title: `Current Filters`,
		},
	},
};
