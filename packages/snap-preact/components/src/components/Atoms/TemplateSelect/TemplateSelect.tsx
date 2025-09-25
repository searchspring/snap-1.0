import { h, Fragment } from 'preact';
import { observer } from 'mobx-react-lite';
import { Controllers } from '@searchspring/snap-controller';
import { ThemeProvider, ControllerProvider, SnapProvider, Theme } from '../../../providers';
import type { SnapTemplates } from '../../../../../src';
import type { TemplatesStore, TemplateThemeTypes } from '../../../../../src/Templates/Stores/TemplateStore';
import type { ResultComponent as ResultComponentType } from '../../../';
import { TargetStore } from '../../../../../src/Templates/Stores/TargetStore';

export const TemplateSelect = observer((properties: TemplateSelectProps): JSX.Element => {
	const { snap, templatesStore, target, controller, ...otherProps } = properties;
	const { loading } = templatesStore;
	if (!target) {
		controller.log.error(`Target was not provided!`);
		return <Fragment />;
	}
	const Component = templatesStore.library.getComponent(target.type, target.component);

	let ResultComponent: ResultComponentType | undefined = undefined;
	if (target.resultComponent) {
		ResultComponent = templatesStore.library.components.result[target.resultComponent];
		if (!loading && !ResultComponent && !templatesStore.settings?.editMode) {
			const error = `Result component "${target.resultComponent}" not found in library for target "${target.selector}"`;
			controller.log.error(error);
		}
	}
	const themeLocation = templatesStore?.themes?.[target.theme.location as TemplateThemeTypes];
	const themeStore = themeLocation && themeLocation[target.theme.name];
	const theme = themeStore?.theme;

	if (!loading && !theme && !templatesStore.settings?.editMode) {
		const error = `Theme "${target.theme.name}" not found in library for target "${target.selector}"`;
		controller.log.error(error);
	}

	let componentProp = {};
	if (target.resultComponent && ResultComponent) {
		componentProp = {
			resultComponent: ResultComponent,
		};
	}

	// ensuring that theme and component are ready to render
	return !loading && theme && Component ? (
		<SnapProvider snap={snap}>
			<ThemeProvider theme={theme}>
				<ControllerProvider controller={controller}>
					<div className={`ss__template-select ss__theme__${theme.name}`}>
						<Component controller={controller} {...componentProp} {...otherProps} />
					</div>
				</ControllerProvider>
			</ThemeProvider>
		</SnapProvider>
	) : (
		<Fragment />
	);
});
export interface TemplateSelectProps {
	target: TargetStore;
	templatesStore: TemplatesStore;
	controller: Controllers;
	snap: SnapTemplates;
	theme?: Theme;
}
