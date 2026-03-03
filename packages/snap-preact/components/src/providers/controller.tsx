import { h, createContext, ComponentChildren, ComponentType } from 'preact';
import { useContext } from 'preact/hooks';
import type { AbstractController } from '@athoscommerce/snap-controller';

type JSXComponent = (props: any) => h.JSX.Element | null;

const ControllerContext = createContext<null | AbstractController>(null);
const ControllerProviderCast = ControllerContext.Provider as JSXComponent;

export const ControllerProvider = ({ children, controller }: { children: ComponentChildren; controller: AbstractController }) => {
	return <ControllerProviderCast value={controller}>{children}</ControllerProviderCast>;
};

export const useController = () => useContext(ControllerContext);

export function withController<C extends ComponentType>(Component: C): C {
	return ((props: any) => {
		const Comp = Component as JSXComponent;
		return <Comp controller={useController()} {...props} />;
	}) as C;
}
