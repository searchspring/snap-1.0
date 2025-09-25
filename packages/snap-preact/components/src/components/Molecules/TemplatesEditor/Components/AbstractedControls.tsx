import { css } from '@emotion/react';
import { observer } from 'mobx-react-lite';
import { RootNodeProperties } from '../../../../types';
import { TemplateEditorStore } from '../../../../../../src/Templates/Stores/TemplateEditor/TemplateEditorStore';
import { AbstractionGroup } from '../../../../../../src/types';
import { Control } from './Control';
import { Reset } from '../Assets';

type AbstractedControlsProps<Params> = {
	title?: string;
	feature: string;
	editorStore: TemplateEditorStore;
	data?: Params;
	enableGroupReset?: boolean;
};

const CSS = {
	AbstractedControls: ({}: Partial<AbstractedControlsProps<unknown>>) => css({}),
};

export const AbstractedControls = observer(<Params,>(properties: AbstractedControlsProps<Params>) => {
	const styling: RootNodeProperties = {
		css: [CSS.AbstractedControls({ ...properties })],
	};

	const { title, enableGroupReset, feature, editorStore, data } = properties;
	const [section, feat] = feature.split('/');
	const controlSection = editorStore.uiAbstractions[section as keyof typeof editorStore.uiAbstractions];
	const controlGroups = controlSection?.[feat as keyof typeof controlSection] as AbstractionGroup<Params>[] | undefined;

	if (!controlGroups) {
		console.warn(`No controls found for feature: ${feature}`, controlSection, controlGroups);
		return null;
	}

	const showGroupReset = enableGroupReset && controlGroups.some((group) => group.controls.some((control) => control.shouldShowReset(data)));

	const resetAll = () => {
		controlGroups.forEach((group) => {
			group.controls.forEach((control) => {
				if (control.shouldShowReset(data)) {
					control.onReset(data);
				}
			});
		});
	};

	return (
		<div className="ss__template-editor__abstracted-controls" {...styling}>
			{title && (
				<div className="control-title">
					<h3>{title}</h3>
					{showGroupReset && (
						<span className="reset">
							<button
								title="Reset"
								onClick={() => {
									resetAll();
								}}
							>
								<Reset />
							</button>
						</span>
					)}
				</div>
			)}
			{controlGroups.map((group) => {
				const showGroupReset = group.showReset && group.controls.some((control) => control.shouldShowReset(data));

				const resetGroup = () => {
					group.controls.forEach((control) => {
						if (control.shouldShowReset(data)) {
							control.onReset(data);
						} else {
						}
					});
				};

				return (
					<div className="group" key={group.title}>
						{group.title && (
							<div className="group-title">
								<h4 title={group.description}>{group.title}</h4>
								{showGroupReset && (
									<span className="reset">
										{showGroupReset ? (
											<button
												title="Reset"
												onClick={() => {
													resetGroup();
												}}
											>
												<Reset />
											</button>
										) : null}
									</span>
								)}
							</div>
						)}
						{group.controls.map((control, index) => {
							return (
								<Control
									key={index}
									type={control.type}
									label={control.label}
									description={control.description}
									showReset={control.shouldShowReset(data)}
									onChange={(value) => control.onValueChange(value, data)}
									onReset={() => control.onReset(data)}
									display={control.getDisplayState ? control.getDisplayState(data) : 'visible'}
									value={control.getValue(data)}
									options={control.getOptions ? control.getOptions(data) : []}
								/>
							);
						})}
					</div>
				);
			})}
		</div>
	);
});
