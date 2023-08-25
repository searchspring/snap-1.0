import { css, IconProps } from '../../../../../index';
import { BocachicaVariables } from '../../../index';

// CSS in JS style script for the Icon component
const iconStyleScript = ({ color, height, width, size, theme }: IconProps) => {
	const variables = theme?.variables as BocachicaVariables;

	return css({
		fill: color || variables?.color?.primary,
		width: width || size,
		height: height || size,
		position: 'relative',
	});
};

// Icon component props
// https://searchspring.github.io/snap/packages/snap-preact-components/docs/?path=/docs/atoms-icon--custom
export const icon: IconProps = {
	styleScript: iconStyleScript,
};
