import type { SkeletonProps } from '../../../../components/Atoms/Skeleton';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// Skeleton component props
export const skeleton: ThemeComponent<'skeleton', SkeletonProps> = {
	default: {
		skeleton: {
			backgroundColor: custom.colors.gray02,
			animatedColor: custom.colors.gray01,
		},
	},
};
