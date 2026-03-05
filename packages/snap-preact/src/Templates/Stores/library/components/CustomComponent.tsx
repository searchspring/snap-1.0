import { h } from 'preact';
import { CustomComponentWrapper } from './CustomComponentWrapper';
import { JSXComponent } from '../../../../../components/src/types';

export const CustomComponent = async (props: CustomComponentProps) => {
	const { type, name, componentFn } = props;
	const Component = (await componentFn()) as JSXComponent;
	return (props: any): h.JSX.Element => {
		return (
			<CustomComponentWrapper type={type} name={name}>
				<Component {...props} />
			</CustomComponentWrapper>
		);
	};
};

export interface CustomComponentProps {
	type: string;
	name: string;
	componentFn: (args?: any) => Promise<JSXComponent> | JSXComponent;
}
