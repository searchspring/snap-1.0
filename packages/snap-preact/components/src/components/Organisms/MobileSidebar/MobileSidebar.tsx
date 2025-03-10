import { h } from 'preact';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import { Slideout, SlideoutProps } from '../../Molecules/Slideout';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { SearchController } from '@searchspring/snap-controller';
import { Sidebar, SidebarProps } from '../Sidebar';
import { Button, ButtonProps } from '../../Atoms/Button';
import { Lang, useA11y, useLang } from '../../../hooks';
import { MutableRef, useRef } from 'preact/hooks';
import { IconProps, IconType } from '../../Atoms/Icon';
import deepmerge from 'deepmerge';

const defaultStyles: StyleScript<MobileSidebarProps> = ({}) => {
	return css({
		'& .ss__mobile-sidebar__header': {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'baseline',

			'& .ss__mobile-sidebar__header__close-button': {
				cursor: 'pointer',
			},
		},
		'& .ss__mobile-sidebar__title': {
			justifyContent: 'space-between',
			flexDirection: 'row',
			display: 'flex',

			'& .ss__icon': {
				cursor: 'pointer',
			},
		},

		'& .ss__mobile-sidebar__slideout__button': {
			cursor: 'pointer',
		},

		'& .ss__mobile-sidebar__footer': {
			display: 'flex',
			gap: '10px',
			justifyContent: 'center',
			flexDirection: 'row',
		},
	});
};

export const MobileSidebar = observer((properties: MobileSidebarProps): JSX.Element => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<MobileSidebarProps> = {
		openButtonText: 'Filters',
		clearButtonText: 'Clear All',
		applyButtonText: 'Apply',
		titleText: 'Filter Options',
		displayAt: '',
		closeButtonIcon: 'close-thin',
		treePath: globalTreePath,
	};

	const props = mergeProps('mobileSidebar', globalTheme, defaultProps, properties);

	const {
		controller,
		hideFacets,
		hideFilterSummary,
		hidePerPage,
		hideHeader,
		hideFooter,
		hideSortBy,
		hideApplyButton,
		clearButtonIcon,
		hideCloseButton,
		closeButtonText,
		openButtonText,
		clearButtonText,
		applyButtonIcon,
		applyButtonText,
		closeButtonIcon,
		openButtonIcon,
		titleText,
		hideTitleText,
		hideCloseButtonText,
		hideOpenButtonText,
		hideClearButtonText,
		hideApplyButtonText,
		displayAt,
		hideClearButton,
		disableStyles,
		className,
		treePath,
	} = props;

	const styling = mergeStyles<MobileSidebarProps>(props, defaultStyles);

	const subProps: MobileSidebarSubProps = {
		slideout: {
			// default props
			controller,
			displayAt: (displayAt && `(max-width: ${displayAt})`) || '',
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		button: {
			// default props
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		sidebar: {
			// default props
			hideTitle: true,
			hideFacets: hideFacets,
			hidePerPage: hidePerPage,
			hideSortBy: hideSortBy,
			hideFilterSummary: hideFilterSummary,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
	};

	const closeButtonRef: MutableRef<any> = useRef();
	const openButtonRef: MutableRef<any> = useRef();

	//initialize lang
	const defaultLang = {
		openButtonText: {
			value: openButtonText,
		},
		clearButtonText: {
			value: clearButtonText,
		},
		applyButtonText: {
			value: applyButtonText,
		},
		titleText: {
			value: titleText,
		},
		closeButtonText: {
			value: closeButtonText,
			attributes: {
				'aria-label': closeButtonText || `close ${openButtonText}`,
			},
		},
	};

	//deep merge with props.lang
	const lang = deepmerge(defaultLang, props.lang || {});

	if (hideOpenButtonText) {
		delete lang.openButtonText.value;
	}
	if (hideClearButtonText) {
		delete lang.clearButtonText.value;
	}
	if (hideCloseButtonText) {
		delete lang.closeButtonText.value;
	}
	if (hideApplyButtonText) {
		delete lang.applyButtonText.value;
	}

	const mergedLang = useLang(lang as any, {
		controller,
	});

	const Content = (props: any) => {
		const { toggleActive } = props;
		return (
			<div
				className="ss__mobile-sidebar__content"
				ref={(e) =>
					useA11y(e, 0, true, () => {
						closeButtonRef.current?.base?.focus();
						closeButtonRef.current?.base?.click();
						openButtonRef.current.base.focus();
					})
				}
			>
				{!hideHeader && (
					<div className="ss__mobile-sidebar__header">
						{!hideTitleText && (
							<h4 aria-atomic="true" aria-live="polite" className="ss__mobile-sidebar__header__title" {...mergedLang.titleText?.all}></h4>
						)}

						{!hideCloseButton && (
							<Button
								className="ss__mobile-sidebar__header__close-button"
								disableStyles={true}
								onClick={() => toggleActive()}
								ref={(e: any) => {
									if (e) {
										closeButtonRef.current = e;
									}
								}}
								icon={closeButtonIcon}
								lang={{ button: lang.closeButtonText }}
								{...subProps.button}
								name={'close'}
							></Button>
						)}
					</div>
				)}

				<Sidebar className="ss__mobile-sidebar__body" controller={controller} {...subProps.sidebar} />

				{!hideFooter && (
					<div className="ss__mobile-sidebar__footer">
						{!hideApplyButton && (
							<Button
								className="ss__mobile-sidebar__footer__apply-button"
								icon={applyButtonIcon}
								onClick={() => toggleActive()}
								lang={{ button: lang.applyButtonText }}
								{...subProps.button}
								name={'apply'}
							/>
						)}
						{!hideClearButton && (
							<Button
								className="ss__mobile-sidebar__footer__clear-button"
								icon={clearButtonIcon}
								onClick={() => {
									controller?.urlManager.remove('filter').remove('page').go();
									toggleActive();
								}}
								lang={{ button: lang.clearButtonText }}
								{...subProps.button}
								name={'clear'}
							/>
						)}
					</div>
				)}
			</div>
		);
	};

	const contentRef: MutableRef<any> = useRef();

	return (
		<CacheProvider>
			<div {...styling} className={classnames('ss__mobile-sidebar', className)}>
				<Slideout
					className="ss__mobile-sidebar__slideout"
					buttonContent={
						<Button
							className="ss__mobile-sidebar__slideout__button"
							icon={openButtonIcon}
							ref={openButtonRef}
							onClick={() => {
								setTimeout(() => {
									contentRef.current?.base?.focus();
								});
							}}
							{...subProps.button}
							name={'slideout'}
							lang={{ button: lang.openButtonText }}
						></Button>
					}
					{...subProps.slideout}
				>
					<Content ref={contentRef} />
				</Slideout>
			</div>
		</CacheProvider>
	);
});

export interface MobileSidebarProps extends ComponentProps {
	controller: SearchController;
	titleText?: string;
	hideTitleText?: boolean;
	hideOpenButtonText?: boolean;
	hideClearButtonText?: boolean;
	hideApplyButtonText?: boolean;
	hideCloseButtonText?: boolean;
	openButtonText?: string;
	clearButtonText?: string;
	applyButtonIcon?: IconType | Partial<IconProps>;
	clearButtonIcon?: IconType | Partial<IconProps>;
	applyButtonText?: string;
	closeButtonIcon?: IconType | Partial<IconProps>;
	openButtonIcon?: IconType | Partial<IconProps>;
	hideHeader?: boolean;
	hideFooter?: boolean;
	hideFacets?: boolean;
	hidePerPage?: boolean;
	hideSortBy?: boolean;
	hideFilterSummary?: boolean;
	hideApplyButton?: boolean;
	hideClearButton?: boolean;
	hideCloseButton?: boolean;
	closeButtonText?: string;
	displayAt?: string;
	lang?: Partial<MobileSidebarLang>;
}

export interface MobileSidebarLang {
	openButtonText: Lang<never>;
	clearButtonText: Lang<never>;
	applyButtonText: Lang<never>;
	titleText: Lang<{
		controller: SearchController;
	}>;
	closeButtonText: Lang<never>;
}

interface MobileSidebarSubProps {
	sidebar: Partial<SidebarProps>;
	slideout: Partial<SlideoutProps>;
	button: Partial<ButtonProps>;
}
