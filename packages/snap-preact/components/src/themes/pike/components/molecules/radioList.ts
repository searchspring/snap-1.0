import { css } from '@emotion/react';
import type { RadioListProps } from '../../../../components/Molecules/RadioList';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the RadioList component
const radioListStyleScript = (props: RadioListProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		'.ss__radio-list__title, .ss__radio-list__options-wrapper .ss__radio-list__option': {
			padding: 0,
			margin: `0 0 ${custom.spacing.x2}px 0`,
		},
		'.ss__radio-list__title': {
			display: 'block',
			fontSize: '14px',
			fontWeight: custom.fonts.weight02,
			lineHeight: 1,
		},
		'.ss__radio-list__options-wrapper': {
			'.ss__radio-list__option': {
				gap: `${custom.spacing.x2}px`,
				'.ss__radio-list__option__icon, .ss__radio-list__option__label': {
					padding: 0,
				},
				'&:last-child': {
					marginBottom: 0,
				},
			},
			'.ss__radio-list__option--selected': {
				fontWeight: custom.fonts.weight01,
				color: variables?.colors?.primary || custom.colors.black,
			},
		},
	});
};

// RadioList component props
export const radioList: ThemeComponent<'radioList', RadioListProps> = {
	default: {
		props: {
			themeStyleScript: radioListStyleScript,
			hideOptionLabels: false,
		},
	},
};
