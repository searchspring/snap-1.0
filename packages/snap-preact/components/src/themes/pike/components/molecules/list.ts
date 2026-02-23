import { css } from '@emotion/react';
import type { ListProps } from '../../../../components/Molecules/List';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const checkboxSpacing = custom.sizes.icon16 + custom.spacing.x2;

// CSS in JS style script for the List component
const listStyleScript = (props: ListProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// list styles
	const listStyles = css({
		...custom.styles.boxSizing('list', props?.treePath, props?.name),
		'&, .ss__list__options, .ss__list__title': {
			display: 'block',
		},
		'&.ss__list--disabled': {
			...custom.styles.disabled(),
			'*': {
				cursor: 'not-allowed !important',
			},
		},
		'.ss__list__title, .ss__list__options': {
			width: '100%',
		},
		'.ss__list__title, .ss__list__options .ss__list__option': {
			padding: 0,
			margin: `0 0 ${custom.spacing.x1}px 0`,
		},
		'.ss__list__title': {
			...custom.styles.headerText(variables?.colors?.secondary, '14px'),
		},
		'.ss__list__options': {
			'.ss__list__option': {
				position: 'relative',
				color: variables?.colors?.text,
				gap: `${custom.spacing.x2}px`,
				padding: props?.hideOptionCheckboxes ? `` : `0 0 0 ${checkboxSpacing}px`,
				'&:last-of-type': {
					marginBottom: 0,
				},
				'.ss__list__option__label, .ss__list__option__icon': {
					padding: 0,
				},
				'.ss__checkbox': {
					position: 'absolute',
					top: '1.5px',
					left: 0,
				},
				'.ss__list__option__icon': {
					position: 'relative',
					top: '-1px',
				},
			},
			'.ss__list__option--selected': {
				...custom.styles.activeText(variables?.colors?.primary),
			},
		},
	});

	return listStyles;
};

// List component props
export const list: ThemeComponent<'list', ListProps> = {
	default: {
		list: {
			themeStyleScript: listStyleScript,
		},
	},
};
