import { observer } from 'mobx-react-lite';
import { useState, useEffect } from 'preact/hooks';
import { ControlDisplayState, ControlOptions, ControlValues, ControlValueTypes } from '../../../../../../src/types';
import { Reset } from '../Assets';
import { DomSelectorControl } from './DomSelectorControl';

type ControlProps = {
	type: ControlValueTypes;
	label: string;
	description?: string;
	onReset: () => void;
	display: ControlDisplayState;
	showReset: boolean;
	value: ControlValues;
	options?: ControlOptions;
	onChange: (value: ControlValues) => void;

	// dom selector specific props (passed through to DomSelectorControl)
	activeDomSelector?: string;
	setActiveDomSelector?: (selector: string) => void;
	selectorId?: string;
	elementSelector?: string;
	control?: any;
	data?: any;
};

export const Control = observer((props: ControlProps) => {
	const {
		type,
		label,
		description,
		onReset,
		display,
		showReset,
		value,
		options,
		onChange,
		activeDomSelector,
		setActiveDomSelector,
		selectorId,
		elementSelector,
		control,
		data,
	} = props;

	const [inputValue, setInputValue] = useState(value);

	useEffect(() => {
		setInputValue(value);
	}, [value]);

	return display === 'hidden' ? null : (
		<div className={`control ${type} ${display}`}>
			<div className="option checkbox">
				<label>{label}</label>
				<div className="reset">
					{showReset ? (
						<button
							title="Reset"
							onClick={() => {
								onReset();
							}}
						>
							<Reset />
						</button>
					) : null}
				</div>
				<div className="value" title={description}>
					{(() => {
						switch (type) {
							case 'text': {
								return <input type="text" value={value as string} onChange={(e) => onChange(e.target.value)} disabled={display === 'disabled'} />;
							}
							case 'number': {
								return (
									<input type="number" value={value as number} onChange={(e) => onChange(Number(e.target.value))} disabled={display === 'disabled'} />
								);
							}
							case 'checkbox': {
								return (
									<input type="checkbox" checked={value as boolean} onChange={(e) => onChange(e.target.checked)} disabled={display === 'disabled'} />
								);
							}
							case 'dropdown': {
								return (
									<select onChange={(e) => onChange(e.target.value)} disabled={display === 'disabled'} value={value as string | number}>
										{options?.map((group, groupIndex) =>
											group.group ? (
												<optgroup label={group.group} key={groupIndex}>
													{group.options.map((option, optionIndex) => (
														<option value={option.value as string | number} key={`${groupIndex}-${optionIndex}`}>
															{option.label || option.value}
														</option>
													))}
												</optgroup>
											) : (
												group.options.map((option, optionIndex) => (
													<option value={option.value as string | number} key={`${groupIndex}-${optionIndex}`}>
														{option.label || option.value}
													</option>
												))
											)
										)}
									</select>
								);
							}
							case 'color': {
								return (
									<>
										<input
											type="color"
											value={value as string}
											onChange={(e) => {
												setInputValue(e.target.value);
												onChange(e.target.value);
											}}
											disabled={display === 'disabled'}
										/>
										{/* <span className="color-value">{ value as string }</span> */}
										<input
											type="text"
											className={isValidHexColor(inputValue as string) ? '' : 'invalid'}
											value={inputValue as string}
											onChange={(e) => {
												setInputValue(e.target.value);
												isValidHexColor(e.target.value) && onChange(e.target.value);
											}}
											disabled={display === 'disabled'}
										/>
									</>
								);
							}
							case 'dom-selector': {
								return (
									<DomSelectorControl
										value={value}
										onChange={onChange}
										display={display}
										activeDomSelector={activeDomSelector}
										setActiveDomSelector={setActiveDomSelector}
										selectorId={selectorId}
										elementSelector={elementSelector}
										control={control}
										data={data}
									/>
								);
							}
							default: {
								return null;
							}
						}
					})()}
				</div>
			</div>
		</div>
	);
});

// function to validate hex color values of the type: #333333
const isValidHexColor = (color: string): boolean => {
	if (!/^#[0-9A-F]{6}$/i.test(color)) {
		return false;
	}
	return true;
};
