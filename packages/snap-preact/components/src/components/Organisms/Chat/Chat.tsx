import { h } from 'preact';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';
import { observer } from 'mobx-react-lite';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { Colour, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import type { ChatController } from '@athoscommerce/snap-controller';
import { Button } from '../../Atoms/Button';
import { useRef, useEffect, useMemo, useState } from 'preact/hooks';

import { MessageUser } from './MessageUser';
import { MessageText } from './MessageText';
import { SuggestedQuestions } from './SuggestedQuestions';
import { ChatAttachmentContext, ChatAttachmentContextItem } from './ChatAttachmentContext';
import { Image } from '../../Atoms/Image';
import { ChatLoadingIndicator } from '../../Atoms/ChatLoadingIndicator';
import { ValueFacet, RangeFacet, FacetValue, FacetRangeValue } from '@athoscommerce/snap-store-mobx';

import { Dropdown, FacetSlider, Icon, Overlay, useMediaQuery } from '../../..';
import { ChatInspirationResultMessage } from '../../Molecules/ChatInspirationResultMessage';
import { ChatProductComparisonMessage } from '../../Molecules/ChatProductComparisonMessage/ChatProductComparisonMessage';
import { ChatProductQueryMessage, ChatProductQueryMessageItem } from '../../Molecules/ChatProductQueryMessage/ChatProductQueryMessage';
import {
	ChatResponseInspirationResultData,
	ChatResponseProductComparisonData,
	ChatResponseActionsData,
} from '@athoscommerce/snap-client/dist/cjs/Client/transforms/chatResponse';

const defaultStyles: StyleScript<{
	mobile: boolean;
	offset?: string | number;
	hasSideChat?: boolean;
	footerHeight: number;
	primaryColorBg: string;
	primaryColorFg: string;
	primaryAccentColorBg: string;
	primaryAccentColorFg: string;
	secondaryAccentColorBg: string;
	secondaryAccentColorFg: string;
	position: 'left' | 'right';
}> = ({
	mobile,
	offset,
	hasSideChat,
	footerHeight,
	primaryColorBg,
	primaryColorFg,
	primaryAccentColorBg,
	primaryAccentColorFg,
	secondaryAccentColorBg,
	secondaryAccentColorFg,
	position,
}) => {
	const isRight = position === 'right';
	// horizontal anchor for the root + bubble + suggested questions
	const horizontalAnchor = isRight ? 'right' : 'left';
	const colorPrimary = primaryColorBg;
	const colorPrimaryText = primaryColorFg;
	const colorPrimaryHover = new Colour(primaryColorBg).darkenHex();
	const colorPrimaryAccent = primaryAccentColorBg;
	const colorPrimaryAccentText = primaryAccentColorFg;
	const colorPrimaryAccentHover = new Colour(primaryAccentColorBg).darkenHex();
	const colorSecondaryAccent = secondaryAccentColorBg;
	const colorSecondaryAccentText = secondaryAccentColorFg;
	const colorSecondaryAccentHover = new Colour(secondaryAccentColorBg).darkenHex();
	const offsetValue = offset !== undefined ? (typeof offset === 'number' ? `${offset}px` : offset) : undefined;
	return css({
		position: 'fixed',
		[horizontalAnchor]: '20px',
		bottom: '20px',
		zIndex: 1002,
		color: '#333',

		'@keyframes ss-chat-slide-up': {
			from: { transform: 'translateY(100%)' },
			to: { transform: 'translateY(0)' },
		},

		'.ss__chat__primary': {
			...(mobile
				? { width: '100%', height: '100%' }
				: hasSideChat
				? { flex: '1 1 0', minWidth: 0, maxWidth: 600, height: '70vh' }
				: { width: 600, maxWidth: 'calc(100vw - 60px)', height: '70vh' }),
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-end',
			overflow: 'hidden',
			order: isRight ? 2 : 1,
			'.ss__chat__header__title': {
				gap: '22px',
			},
			'.ss__chat__messages': {
				padding: '1em',
			},
		},
		'.ss__chat__secondary': {
			...(mobile
				? {
						width: '100%',
						maxWidth: '100%',
						height: `calc(100% - 70px${footerHeight > 0 ? ` - ${footerHeight}px` : ''})`,
						maxHeight: `calc(100% - 70px${footerHeight > 0 ? ` - ${footerHeight}px` : ''})`,
				  }
				: { flex: '1 1 0', minWidth: 0, maxWidth: 600, height: '70vh', maxHeight: '70vh' }),
			display: 'flex',
			flexDirection: 'column',
			overflow: 'hidden',
			order: isRight ? 1 : 2,
			...(mobile
				? {
						position: 'absolute',
						bottom: footerHeight > 0 ? footerHeight : 0,
						left: 0,
						right: 0,
						zIndex: 10,
						borderTopLeftRadius: '12px',
						borderTopRightRadius: '12px',
						overflow: 'hidden',
						overscrollBehavior: 'contain',
						boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.15)',
						background: '#fff',
						willChange: 'transform',
						animation: 'ss-chat-slide-up 0.3s ease-out',
				  }
				: {}),
			'.ss__chat__secondary__drag-handle': {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '10px 0 2px',
				background: colorPrimary,
				touchAction: 'none',
				cursor: 'grab',
				'.ss__chat__secondary__drag-handle__indicator': {
					width: '36px',
					height: '4px',
					borderRadius: '2px',
					background: 'rgba(255, 255, 255, 0.4)',
				},
			},
			...(mobile
				? {
						'.ss__chat__header': {
							touchAction: 'none',
							cursor: 'grab',
						},
				  }
				: {}),
			'.ss__chat__header__title': {
				flexDirection: 'column',
				gap: '2px',
				'.ss__chat__header__title__primary': {
					fontWeight: 'bold',
				},
				'.ss__chat__header__title__secondary': {
					fontSize: '80%',
					opacity: 0.85,
				},
			},
			'.ss__chat__messages': {
				background: '#fff!important',
			},
		},

		'.ss__button': {
			border: 'none',
			background: 'none',
			color: 'inherit',
			'&:not(.ss__button--disabled):hover': {
				background: new Colour(colorPrimary).lightenHex(0.85),
			},
			svg: {
				fill: colorPrimary,
				stroke: colorPrimary,
			},
		},
		'.ss__chat__bubble': {
			position: mobile ? 'fixed' : 'absolute',
			bottom: mobile ? '20px' : 0,
			[horizontalAnchor]: mobile ? '20px' : 0,
			width: '60px',
			height: '60px',
			borderRadius: '50%',
			background: colorPrimary,
			color: colorPrimaryText,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			cursor: 'pointer',
			fontSize: '24px',
			boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
			zIndex: 10,
			'&:hover': {
				background: colorPrimaryHover,
				transform: 'scale(1.05)',
			},
			'.ss__icon': {
				height: '33px',
				width: '33px',
				fill: colorPrimaryText,
				stroke: colorPrimaryText,
			},
		},
		'.ss__chat__suggested-questions': {
			position: mobile ? 'fixed' : 'absolute',
			bottom: mobile ? '90px' : '70px',
			[horizontalAnchor]: mobile ? '20px' : 0,
			display: 'flex',
			flexDirection: 'column',
			gap: '8px',
			width: '250px',
			zIndex: 10,
			'.ss__chat__suggested-questions__item': {
				background: '#fff',
				borderRadius: '12px',
				padding: '12px 16px',
				fontSize: '14px',
				color: '#333',
				boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
				cursor: 'pointer',
				lineHeight: 1.4,
				'&:hover': {
					boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
				},
			},
		},
		'&.ss__chat--minimized': {
			width: '60px',
			height: '60px',
			minHeight: '60px',
		},
		'&.ss__chat--open': {
			display: 'flex',
			flexDirection: mobile ? 'column' : 'row',
			gap: mobile ? 0 : '12px',
			...(mobile
				? {
						top: offsetValue || 0,
						left: 0,
						right: 0,
						bottom: 0,
						width: '100%',
						height: offsetValue ? `calc(100% - ${offsetValue})` : '100%',
				  }
				: {
						// Hug the content width — two 600px panels + 12px gap — so the
						// container stays anchored to its side instead of stretching to
						// the opposite viewport edge when the side chat opens.
						width: hasSideChat ? 'min(calc(100vw - 60px), 1212px)' : 'auto',
						maxWidth: 'calc(100vw - 60px)',
						maxHeight: 'calc(100vh - 40px)',
				  }),
			'.ss__chat__bubble': {
				display: 'none',
			},
		},
		'.ss__chat__header': {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			fontSize: '16px',
			position: 'relative',
			padding: '10px 15px',
			color: colorPrimaryText,
			background: colorPrimary,
			borderTopLeftRadius: mobile ? 0 : '12px',
			borderTopRightRadius: mobile ? 0 : '12px',

			'.ss__chat__header__title': {
				display: 'flex',
				'.ss__chat__header__title__logo': {
					height: '44px',
					width: 'auto',
				},
				'.ss__chat__header__title__text': {
					display: 'flex',
					flexDirection: 'column',
					'.ss__chat__header__title__text__primary': {
						fontWeight: 'bold',
					},
					'.ss__chat__header__title__text__secondary': {
						fontSize: '80%',
					},
				},
			},

			'.ss__chat__header__buttons': {
				display: 'flex',
				gap: '10px',
				'.ss__button': {
					display: 'flex',
					flexDirection: 'row-reverse',
					padding: '5px',
					border: 0,
					fontSize: '70%',
					'&:hover': {
						backgroundColor: 'transparent',
					},
					svg: {
						fill: colorPrimaryText,
						stroke: colorPrimaryText,
					},
				},
			},
			'.ss__chat__header__dropdown-history': {
				'&.ss__dropdown--open': {
					'.ss__dropdown__button': {
						backgroundColor: '#dddddd33',
						borderRadius: '6px',
					},
				},
				'.ss__dropdown__button': {
					display: 'flex',
					alignItems: 'center',
				},
			},
			'.ss__chat__history': {
				color: '#333',
				position: 'absolute',
				width: 300,
				minHeight: 170,
				top: 6,
				right: 0,
				background: 'white',
				zIndex: 2,
				boxShadow: '0px 3px 6px 0px rgba(0, 0, 0, 0.2)',
				borderRadius: '6px',
				display: 'flex',
				flexDirection: 'column',
				gap: 5,
				padding: '10px',
				boxSizing: 'border-box',
				'.ss__chat__history__header': {
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					h4: {
						margin: 0,
						fontSize: '14px',
					},
					'.ss__chat__history__header__buttons': {
						'.ss__button': {
							fontSize: '14px',
							color: '#333',
							'&:hover': {
								background: 'none',
								color: '#000',
							},
						},
					},
				},
				'.ss__chat__history__chats': {
					display: 'flex',
					flexDirection: 'column-reverse',
					gap: 5,
					maxHeight: '300px',
					overflowY: 'auto',
					'.ss__chat__history__chats__chat': {
						'.ss__button': {
							borderRadius: '12px',
							width: '100%',
							border: '1px solid #eee',
							fontSize: '12px',
							display: 'flex',
							flexDirection: 'column',
							boxSizing: 'border-box',
							'.ss__chat__history__chat__button__text': {
								fontWeight: 'bold',
							},
							'.ss__chat__history__chat__button__date': {},
						},
					},
				},
			},
		},
		'.ss__chat__session-feedback': {
			display: 'flex',
			alignItems: 'center',
			gap: '10px',
			padding: '8px 15px',
			background: new Colour(colorPrimary).darkenHex(0.1),
			color: colorPrimaryText,
			fontSize: '14px',
			'.ss__chat__session-feedback__icon': {
				flex: '0 0 auto',
				display: 'flex',
				alignItems: 'center',
				svg: {
					fill: colorPrimaryText,
					stroke: colorPrimaryText,
				},
			},
			'.ss__chat__session-feedback__label': {
				flex: '1 1 auto',
				whiteSpace: 'nowrap',
			},
			'.ss__chat__session-feedback__actions': {
				display: 'flex',
				gap: '6px',
				alignItems: 'center',
				'> span': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					cursor: 'pointer',
					opacity: 0.85,
					padding: '4px',
					borderRadius: '4px',
					border: '1px solid transparent',
					transition: 'opacity 0.15s ease, border-color 0.15s ease',
					'&:hover': {
						opacity: 1,
					},
				},
				svg: {
					fill: colorPrimaryText,
					stroke: colorPrimaryText,
				},
				'&.ss__chat__session-feedback__actions--rated > span': {
					opacity: 1,
					cursor: 'default',
					'&:hover': {
						borderColor: 'transparent',
					},
				},
			},
			'.ss__chat__session-feedback__close': {
				flex: '0 0 auto',
				display: 'flex',
				alignItems: 'center',
				cursor: 'pointer',
				opacity: 0.85,
				transition: 'opacity 0.15s ease',
				'&:hover': {
					opacity: 1,
				},
				svg: {
					fill: colorPrimaryText,
					stroke: colorPrimaryText,
				},
			},
		},
		'.ss__chat__content': {
			background: '#fff',
			maxHeight: mobile ? undefined : '90vh',
			overflow: 'hidden',
			display: 'flex',
			flexDirection: 'column',
			border: `1px solid ${colorPrimary}`,
			borderTop: 'none',
			marginTop: '-1px',
			borderBottomRightRadius: mobile ? 0 : '12px',
			borderBottomLeftRadius: mobile ? 0 : '12px',
			flexGrow: 1,
			position: 'relative',
			'.ss__chat__content__header': {
				// In overlay mode (only applied when messages overflow), the comparisons
				// tray floats over the messages so toggling it doesn't shift the layout
				// or push the latest message out of view. When messages don't overflow,
				// the tray stays in flow so older messages remain reachable above it.
				'&.ss__chat__content__header--overlay': {
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					zIndex: 20,
				},
				// '.ss__chat__attachments': {
				// 	'.ss__chat__attachment': {
				// 		borderRadius: 0,
				// 		borderLeft: 0,
				// 		borderRight: 0,
				// 	},
				// },
				'.ss__chat__content__header__comparisons': {
					display: 'flex',
					flexDirection: 'column',
					gap: '1em',
					background: new Colour(colorPrimary).lightenHex(0.95),
					padding: '1em',

					'.ss__chat__content__header__comparisons__header': {
						display: 'flex',
						justifyContent: 'space-between',

						'.ss__chat__content__header__comparisons__header__title': {
							fontWeight: 'bold',
							fontSize: '1.2em',
							display: 'flex',
							alignItems: 'center',
							gap: '0.5em',
							'.ss__chat__content__header__comparisons__header__title__icon': {
								background: colorPrimary,
								borderRadius: '50%',
								padding: '5px',
								fill: colorPrimaryText,
								height: '25px',
								width: '25px',
							},
						},
						'.ss__chat__content__header__comparisons__header__actions': {
							'.ss__button': {
								border: 'none',
								background: 'none',
							},
						},
					},
					'.ss__chat__content__header__comparisons__content': {
						display: 'flex',
						gap: '1em',
						alignItems: 'stretch',

						'.ss__chat__content__header__comparisons__content__items': {
							display: 'flex',
							flex: '1 1 calc(100% - 100px)',
							justifyContent: 'space-between',
							gap: '0.5em',
						},

						'.ss__chat__content__header__comparisons__content__comparison': {
							background: '#fff',
							padding: '0.5em',
							borderRadius: '1em',
							display: 'flex',
							flexDirection: 'column',
							gap: '0.5em',
							flex: '0 1 25%',
							position: 'relative',

							'&.ss__chat__content__header__comparisons__content__comparison--placeholder': {
								border: '2px dashed #ddd',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								'.ss__chat__content__header__comparisons__content__comparison--placeholder__text': {
									color: '#999',
									fontStyle: 'italic',
								},
							},

							'.ss__chat__content__header__comparisons__content__comparison__remove': {
								position: 'absolute',
								top: '-3px',
								right: '-3px',
								cursor: 'pointer',
								background: 'red',
								borderRadius: '50%',
								padding: '0.4em',
								height: 20,
								width: 20,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								svg: {
									fill: '#fff',
									stroke: '#fff',
								},
							},
						},

						'.ss__chat__content__header__comparisons__action': {
							display: 'flex',
							alignItems: 'center',
							marginLeft: 'auto',
							flex: '1 1 auto',

							'&.ss__chat__content__header__comparisons__action--hidden': {
								visibility: 'hidden',
							},

							'.ss__button': {
								flexDirection: 'row-reverse',
								borderRadius: '1em',
								padding: '0.5em 1em',
								background: colorPrimary,
								color: colorPrimaryText,
								textAlign: 'center',
								svg: {
									fill: colorPrimaryText,
									stroke: colorPrimaryText,
								},
							},
						},
					},
				},
			},
			'.ss__chat__messages': {
				flex: '1 1 auto',
				overflowY: 'auto',
				overscrollBehavior: 'contain',
				margin: 0,
				maxHeight: '100%',
				background: '#f9fafc',

				'.ss__chat__messages__end': {
					height: '1px',
				},
				'.ss__chat__new-messages': {
					position: 'sticky',
					bottom: '10px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '6px',
					margin: '0 auto',
					width: 'fit-content',
					padding: '6px 16px',
					background: colorPrimary,
					color: colorPrimaryText,
					borderRadius: '999px',
					fontSize: '13px',
					fontWeight: 500,
					cursor: 'pointer',
					boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
					zIndex: 5,
					'&:hover': {
						background: colorPrimaryHover,
					},
					svg: {
						fill: colorPrimaryText,
						stroke: colorPrimaryText,
					},
				},
				'.ss__chat__message': {
					marginBottom: '30px',
					ul: {
						margin: 0,
						listStyle: 'inside',
					},
					p: {
						margin: 0,
					},
					thead: {
						backgroundColor: '#eee',
					},
					'tbody tr:nth-child(even)': {
						backgroundColor: '#f5f5f5',
					},
					'table th, table td': {
						padding: '0.2em 0.5em',
					},
					'table + h3': {
						margin: '1em 0 0 0',
						fontSize: '1.3em',
					},
				},
				'.ss__chat__welcome': {
					display: 'flex',
					flexDirection: 'column',
					minHeight: '100%',
					'.ss__chat__welcome__message': {
						fontSize: '15px',
						lineHeight: 1.5,
						color: '#333',
						padding: '2em',
						textAlign: 'center',
					},
					'.ss__chat__suggestions': {
						marginTop: 'auto',
					},
				},
			},
			'.ss__chat__actions': {
				display: 'flex',
				flexDirection: 'column',
				gap: '6px',
				overflow: 'hidden',
				'.ss__chat__actions__wrap': {
					display: 'flex',
					flexDirection: 'column',
					gap: '6px',
					padding: '8px 10px',
					background: new Colour(colorPrimary).lightenHex(0.95),
					border: `1px solid ${new Colour(colorPrimary).lightenHex(0.85)}`,
					borderRadius: '8px',
				},
				'.ss__chat__actions--title': {
					fontSize: '14px',
					color: '#333',
				},
				'.ss__chat__actions--facets, .ss__chat__actions--suggested': {
					display: 'flex',
					flexDirection: 'row',
					gap: '6px',
					'.ss__button': {
						flex: '0 0 auto',
						background: '#fff',
						border: '1px solid #ddd',
						borderRadius: '999px',
						padding: '3px 10px',
						fontSize: '14px',
						color: '#333',
						'&:hover': {
							background: new Colour(colorPrimary).lightenHex(0.97),
						},
					},
				},
				'.ss__chat__actions--facets': {
					overflowX: 'auto',
					overflowY: 'hidden',
					scrollbarWidth: 'none' as const,
					'&::-webkit-scrollbar': {
						display: 'none',
					},
				},
				'.ss__chat__actions--suggested': {
					overflowX: 'scroll',
				},
				'.ss__chat__actions__facet': {},
				'.ss__chat__actions__facets-dropdown': {
					'.ss__dropdown__content': {
						bottom: '0',
						top: 'auto',
						left: '-15px',
						width: mobile ? '100vw' : '600px',
						zIndex: 100,
						background: 'white',
						borderTop: '1px solid #ddd',
					},
				},
			},
			'.ss__chat__facets': {
				'.ss__chat__facets__header': {
					display: 'flex',
					flexDirection: mobile ? 'column' : 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '10px',
					'.ss__chat__facets__header__title': {
						width: mobile ? '100%' : undefined,
						fontSize: '18px',
						fontWeight: 'bold',
						color: '#333',
						order: mobile ? 1 : 0,
						marginTop: mobile ? '10px' : 0,
					},
					'.ss__chat__facets__close': {
						order: mobile ? 0 : 1,
						display: 'flex',
						justifyContent: mobile ? 'center' : 'flex-end',
						'.ss__chat__facets__close__button': {
							width: mobile ? '100px' : '20px',
							borderRadius: mobile ? '4px' : undefined,
							background: mobile ? '#ccc' : 'none',
							padding: '5px',
							flexGrow: 0,
							border: 'none',
							'.ss__icon': {
								display: mobile ? 'none' : 'inline',
							},
						},
					},
				},
				'.ss__chat__facets__wrapper': {
					padding: '10px',
					display: 'flex',
					flexDirection: 'column',
					gap: '10px',
					'.ss__chat__facets__facet': {
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
						'.ss__chat__facets__facet__label': {
							fontWeight: 'bold',
							fontSize: '14px',
							marginRight: '10px',
						},
						'.ss__chat__facets__facet__options': {
							display: 'flex',
							gap: '5px',
							overflowX: 'scroll',
							'.ss__chat__facets__facet__options__option': {
								flexGrow: 0,
							},
						},
					},
				},
			},
			'.ss__chat__actions__facets-header': {
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			},
			'.ss__chat__actions__facets-apply': {
				display: 'flex',
				justifyContent: 'flex-end',
				padding: '0 2px',
				// reserve the slot so toggling the button's visibility doesn't reflow the header
				visibility: 'hidden',
				'&.ss__chat__actions__facets-apply--active': {
					visibility: 'visible',
				},
				'.ss__button': {
					background: colorPrimary,
					color: colorPrimaryText,
					border: 'none',
					borderRadius: '999px',
					padding: '2px 10px',
					fontSize: '12px',
					lineHeight: '1.4',
					cursor: 'pointer',
					'&:not(.ss__button--disabled):hover': {
						background: colorPrimaryHover,
					},
					'&.ss__button--disabled': {
						opacity: 0.5,
						cursor: 'not-allowed',
					},
				},
			},
			'@keyframes ss-chat-dot-pulse': {
				'0%, 80%, 100%': {
					transform: 'scale(0.6)',
					opacity: 0.5,
				},
				'40%': {
					transform: 'scale(1)',
					opacity: 1,
				},
			},
			'.ss__chat__attachment-context': {
				display: 'flex',
				flexDirection: 'column',
				gap: '6px',
				padding: '8px 10px',
				background: new Colour(colorPrimary).lightenHex(0.95),
				border: `1px solid ${new Colour(colorPrimary).lightenHex(0.85)}`,
				borderRadius: '8px',
				'.ss__chat__attachment-context__label': {
					fontSize: '14px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					gap: '8px',
					'.ss__chat__attachment-context__label__close': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						cursor: 'pointer',
						flex: '0 0 auto',
					},
				},
				'.ss__chat__attachment-context__items': {
					display: 'flex',
					flexWrap: 'wrap',
					gap: '6px',
				},
				'.ss__chat__attachment-context__item': {
					display: 'flex',
					alignItems: 'center',
					gap: '6px',
					padding: '3px 8px 3px 3px',
					background: '#fff',
					border: '1px solid #ddd',
					borderRadius: '999px',
					maxWidth: 'calc(50% - 3px)',
					position: 'relative',
					'.ss__chat__attachment-context__item__content': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flex: '0 0 auto',
						'.ss__image': {
							width: '30px',
							height: '30px',
							margin: 0,
							img: {
								width: '30px',
								height: '30px',
								borderRadius: '50%',
								objectFit: 'cover',
							},
						},
					},
					'.ss__chat__attachment-context__item__name': {
						fontSize: '14px',
						color: '#333',
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						flex: '1 1 auto',
						minWidth: 0,
					},
					'.ss__chat__attachment-context__item__remove': {
						width: '18px',
						height: '18px',
						minWidth: 'auto',
						margin: 0,
						padding: 0,
						background: 'none',
						border: 'none',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						cursor: 'pointer',
						flex: '0 0 auto',
						svg: {
							fill: '#6A7282',
							stroke: '#6A7282',
						},
						'&:hover': {
							svg: {
								fill: '#000',
								stroke: '#000',
							},
						},
					},
					'.ss__chat__attachment-context__item__loading': {
						display: 'flex',
						gap: '3px',
						margin: 0,
						'.ss__chat__loading__dot': {
							width: '5px',
							height: '5px',
							borderRadius: '50%',
							backgroundColor: '#ccc',
							animation: 'ss-chat-dot-pulse 1.4s infinite ease-in-out both',
							'&:nth-of-type(1)': {
								animationDelay: '-0.32s',
							},
							'&:nth-of-type(2)': {
								animationDelay: '-0.16s',
							},
						},
					},
					'&.error': {
						border: '1px solid #dc3545',
						background: '#fff5f5',
						'.ss__chat__attachment-context__item__error-icon': {
							fontSize: '14px',
							color: '#dc3545',
							margin: '0 4px',
							flex: '0 0 auto',
						},
						'.ss__chat__attachment-context__item__error-message': {
							fontSize: '12px',
							color: '#dc3545',
							whiteSpace: 'normal',
							wordBreak: 'break-word',
							flex: '1 1 auto',
							minWidth: 0,
						},
						'.ss__button': {
							svg: {
								fill: '#dc3545',
								stroke: '#dc3545',
							},
						},
					},
					img: {
						'&.loading': {
							opacity: 0.3,
						},
					},
				},
			},
			'.ss__chat__content__footer': {
				padding: '1em',
				display: 'flex',
				flexDirection: 'column',
				gap: '8px',
				flexShrink: 0,
				position: 'relative' as const,
				...(mobile
					? {
							zIndex: 11,
							background: '#fff',
					  }
					: {}),
				'.ss__chat__content__footer__drop-overlay': {
					position: 'absolute' as const,
					inset: 0,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '8px',
					borderRadius: '6px',
					border: `2px dashed ${colorPrimary}`,
					backgroundColor: new Colour(colorPrimary).lightenHex(0.9),
					color: colorPrimary,
					fontWeight: 'bold',
					pointerEvents: 'none' as const,
					zIndex: 12,
					svg: {
						fill: colorPrimary,
						stroke: colorPrimary,
					},
				},
			},
			'.ss__chat__topic-drift': {
				display: 'flex',
				alignItems: 'center',
				gap: '12px',
				padding: '12px 16px',
				border: `1px solid ${new Colour(colorPrimary).lightenHex(0.6)}`,
				borderRadius: '8px',
				backgroundColor: '#fff',
				'.ss__chat__topic-drift__icon--info': {
					flex: '0 0 auto',
					fill: colorPrimary,
					stroke: colorPrimary,
					svg: {
						fill: colorPrimary,
						stroke: colorPrimary,
					},
				},
				'.ss__chat__topic-drift__text': {
					flex: '1 1 0%',
					display: 'flex',
					flexDirection: 'column',
					gap: '2px',
					'span:first-of-type': {
						fontWeight: 'bold',
						color: colorPrimary,
						fontSize: '14px',
					},
					'span:last-of-type': {
						color: '#6A7282',
						fontSize: '13px',
					},
				},
				'.ss__chat__topic-drift__button': {
					flex: '0 0 auto',
					backgroundColor: colorPrimary,
					color: colorPrimaryText,
					borderRadius: '6px',
					padding: '8px 14px',
					fontSize: '13px',
					fontWeight: 500,
					cursor: 'pointer',
					whiteSpace: 'nowrap',
					'&:not(.ss__button--disabled):hover': {
						background: colorPrimaryHover,
					},
				},
				'.ss__chat__topic-drift__icon--close': {
					flex: '0 0 auto',
					cursor: 'pointer',
					fill: '#6A7282',
					stroke: '#6A7282',
					svg: {
						fill: '#6A7282',
						stroke: '#6A7282',
					},
				},
			},
			'.ss__chat__input': {
				display: 'flex',
				justifyContent: 'space-between',
				gap: '8px',
				flexShrink: 0,
				'.ss__chat__input__input': {
					flex: '1 1 0%',
					minWidth: 0,
					border: '1px solid #ccc',
					borderRadius: '2em',
					display: 'flex',
					justifyContent: 'space-between',
					overflow: 'auto',
					'input[type="text"]': {
						padding: '0.5em 0',
						margin: '0 0 0 1em',
						flex: '1 0 auto',
						border: 'none',
						'&::placeholder': {
							color: '#999',
							opacity: 0.7,
						},
						'&:focus': {
							outline: 'none',
							borderColor: colorPrimary,
						},
					},
					'.ss__button': {
						margin: '0 0.5em 0 0',
						'&:hover': {
							backgroundColor: 'transparent',
						},
					},
					'input[type="file"]': {
						display: 'none',
					},
				},
				'.ss__chat__input__actions': {
					'.ss__button': {
						backgroundColor: colorPrimary,
						color: colorPrimaryText,
						borderRadius: '50%',
						height: '3em',
						width: '3em',
						cursor: 'pointer',
						justifyContent: 'center',
						boxSizing: 'border-box',
						'&:disabled': {
							opacity: 0.5,
							cursor: 'not-allowed',
						},
						svg: {
							fill: colorPrimaryText,
							stroke: colorPrimaryText,
						},
					},
				},
			},
			'.ss__chat__disclaimer': {
				fontSize: '10px',
				color: '#6A7282',
				textAlign: 'center',
				flexShrink: 0,
			},
			'.ss__chat__result__image__icons__icon--cart': {
				backgroundColor: `${colorPrimaryAccent} !important`,
				svg: {
					fill: `${colorPrimaryAccentText} !important`,
					stroke: `${colorPrimaryAccentText} !important`,
				},
			},
			'.ss__chat-product-query-message__header__product__actions__add-to-cart .ss__button': {
				background: `${colorPrimaryAccent} !important`,
				color: `${colorPrimaryAccentText} !important`,
				'&:not(.ss__button--disabled):hover': {
					background: `${colorPrimaryAccentHover} !important`,
				},
			},
			// Secondary accent — applied to the productQuery button (ChatResult inquire icon)
			// and the "Show similar" button (ChatProductQueryMessage). Both elements live in
			// child components but their styling overrides are intentionally scoped here so
			// the Chat-level theme can drive them.
			'.ss__chat__result__image__icons__icon--inquire': {
				backgroundColor: `${colorSecondaryAccent} !important`,
				svg: {
					fill: `${colorSecondaryAccentText} !important`,
					stroke: `${colorSecondaryAccentText} !important`,
				},
			},
			'.ss__chat-product-query-message__header__product__actions__show-similar .ss__button, .ss__chat-product-query-message__header__product__actions__discuss-product .ss__button':
				{
					background: `${colorSecondaryAccent} !important`,
					color: `${colorSecondaryAccentText} !important`,
					border: `1px solid ${colorSecondaryAccentText} !important`,
					'&:not(.ss__button--disabled):hover': {
						background: `${colorSecondaryAccentHover} !important`,
					},
				},
			'.ss__chat__expired': {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '12px',
				padding: '16px',
				textAlign: 'center',
				color: '#6A7282',
				'.ss__chat__expired__message': {
					fontSize: '14px',
				},
				'.ss__chat__expired__button': {
					alignSelf: 'center',
				},
			},
		},
	});
};

export const Chat = observer((properties: ChatProps): JSX.Element => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const isMobile = useMediaQuery('(max-width: 767px)');

	const defaultProps: Partial<ChatProps> = {
		treePath: globalTreePath,
		logo: 'https://cdn.athoscommerce.net/snap/images/Athos%20Commerce_Icon_white.svg',
		title: 'Athos Conversational Assistant',
		subtitle: 'Your Guided Discovery Expert',
		multiselectFacets: true,
		disableBubbleSuggestedQuestions: false,
		primaryColorBg: '#253B80',
		primaryColorFg: '#fff',
		primaryAccentColorBg: '#feeeae',
		primaryAccentColorFg: '#000000',
		secondaryAccentColorBg: '#000000',
		secondaryAccentColorFg: '#ffffff',
		position: 'right',
	};

	let props = mergeProps('facets', globalTheme, defaultProps, properties);

	const {
		className,
		internalClassName,
		controller,
		logo,
		title,
		subtitle,
		offset,
		multiselectFacets,
		disableBubbleSuggestedQuestions,
		primaryColorBg,
		primaryColorFg,
		primaryAccentColorBg,
		primaryAccentColorFg,
		secondaryAccentColorBg,
		secondaryAccentColorFg,
		position,
	} = props;
	const colorPrimary = primaryColorBg!;
	const colorPrimaryText = primaryColorFg!;
	const colorPrimaryAccent = primaryAccentColorBg!;
	const colorPrimaryAccentText = primaryAccentColorFg!;
	const colorSecondaryAccent = secondaryAccentColorBg!;
	const colorSecondaryAccentText = secondaryAccentColorFg!;
	const chatPosition: 'left' | 'right' = position === 'right' ? 'right' : 'left';
	const { store } = controller;

	const themeDefaults: Theme = {
		components: {},
	};

	// merge deeply the themeDefaults with the theme props and the displaySettings theme props (do not merge arrays, but replace them)
	const theme = deepmerge(themeDefaults, props?.theme || {}, { arrayMerge: (destinationArray, sourceArray) => sourceArray });

	props = {
		...props,
		theme,
	};

	const fileInputRef = useRef<HTMLInputElement>(null);
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const messagesContainerRef = useRef<HTMLDivElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const footerRef = useRef<HTMLDivElement>(null);
	const chatRef = useRef<HTMLDivElement>(null);

	// Swipe-to-dismiss state for mobile secondary panel
	const secondaryRef = useRef<HTMLDivElement>(null);
	const swipeStartY = useRef(0);
	const swipeStartTime = useRef(0);
	const swipeActive = useRef(false);
	const swipeOffsetRef = useRef(0);
	const [swipeOffset, setSwipeOffsetRaw] = useState(0);
	const [swipeAnimating, setSwipeAnimating] = useState(false);
	const [mobileProductInfoOpen, setMobileProductInfoOpen] = useState(false);
	const [footerHeight, setFooterHeight] = useState(0);
	const [showNewMessages, setShowNewMessages] = useState(false);
	const [messagesOverflow, setMessagesOverflow] = useState(false);
	const isNearBottomRef = useRef(true);

	// Drag-and-drop image upload onto the footer. `dragenter`/`dragleave` fire on every
	// child crossing, so use a counter to know when the pointer has truly left the footer.
	const [isDraggingFile, setIsDraggingFile] = useState(false);
	const dragCounterRef = useRef(0);

	const updateSwipeOffset = (value: number) => {
		swipeOffsetRef.current = value;
		setSwipeOffsetRaw(value);
	};

	const scrollToBottom = () => {
		// Scroll the messages container directly (instead of scrollIntoView on the
		// bottom anchor) so the browser never walks up the ancestor chain. On small
		// viewports a smooth scrollIntoView could otherwise animate the document/
		// visual viewport and visually push the fixed-position chat off-screen.
		const container = messagesContainerRef.current;
		if (container) {
			container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
		}
	};

	// Conditional scroll: only scrolls if the user is already near the bottom.
	// Passed to child components (e.g. image onLoad) so they don't yank the user
	// back to the bottom when they have scrolled up to read older messages.
	const scrollToBottomIfNear = () => {
		if (isNearBottomRef.current) {
			scrollToBottom();
		}
	};

	// productQuery messages are filtered out of the main chat render (they only drive the side-chat panel),
	// so don't auto-scroll when one is added — otherwise clicking a product in the side chat scrolls the main thread.
	const visibleChatLength = (store.currentChat?.chat || []).filter((m) => m.messageType !== 'productQuery').length;

	// Scroll to bottom when chat opens
	useEffect(() => {
		if (store.open) {
			scrollToBottom();
			setShowNewMessages(false);
			isNearBottomRef.current = true;
		}
	}, [store.open]);

	// Handle new messages — auto-scroll for user messages, show popup for response messages when scrolled up
	useEffect(() => {
		if (!store.open) return;
		const chat = store.currentChat?.chat || [];
		const visibleChat = chat.filter((m) => m.messageType !== 'productQuery');
		const lastMessage = visibleChat[visibleChat.length - 1];
		if (!lastMessage) return;

		if (lastMessage.messageType === 'user') {
			scrollToBottom();
			setShowNewMessages(false);
		} else {
			if (isNearBottomRef.current) {
				scrollToBottom();
				setShowNewMessages(false);
			} else {
				setShowNewMessages(true);
			}
		}
	}, [visibleChatLength]);

	// Scroll to show loading indicator when user sends a message
	useEffect(() => {
		if (store.open && store.loading) {
			scrollToBottom();
		}
	}, [store.loading]);

	// Track scroll position to dismiss the "New messages" popup when user scrolls to bottom
	useEffect(() => {
		const container = messagesContainerRef.current;
		if (!container) return;
		const handleScroll = () => {
			const threshold = 100;
			const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < threshold;
			isNearBottomRef.current = isNearBottom;
			if (isNearBottom) {
				setShowNewMessages(false);
			}
		};
		container.addEventListener('scroll', handleScroll);
		return () => container.removeEventListener('scroll', handleScroll);
	}, [store.open]);

	// Track whether the messages container is overflowing so the comparisons header
	// can switch between in-flow (short conversations — top content stays reachable)
	// and overlay (overflowing — avoid layout shift when toggling the tray).
	// Hysteresis: when already in overlay, only return to in-flow if the content
	// would still fit *with* the header re-inserted — otherwise the two states
	// fight each other and the layout flickers.
	useEffect(() => {
		const container = messagesContainerRef.current;
		if (!container || typeof ResizeObserver === 'undefined') return;
		const update = () => {
			setMessagesOverflow((prev) => {
				const headerHeight = headerRef.current?.offsetHeight || 0;
				if (prev) {
					// Currently overlay: header isn't taking flow space. Only switch
					// back to in-flow if the content would fit with the header added.
					return container.scrollHeight > container.clientHeight - headerHeight + 1;
				}
				// Currently in-flow: header already takes space — straightforward check.
				return container.scrollHeight > container.clientHeight + 1;
			});
		};
		update();
		const observer = new ResizeObserver(update);
		observer.observe(container);
		if (headerRef.current) observer.observe(headerRef.current);
		return () => observer.disconnect();
	}, [store.open, visibleChatLength]);

	// Re-focus the chat input on desktop after a search completes.
	// The input is disabled while loading, which causes the browser to drop focus.
	// On mobile we intentionally skip this so the virtual keyboard dismisses.
	useEffect(() => {
		if (!store.loading && !isMobile && store.open) {
			controller.focusInput();
		}
	}, [store.loading]);

	// const subProps: ChatSubProps = {};

	const activeMessage = store.currentChat?.activeMessage;

	// On mobile, only auto-open the secondary panel for the first productComparison
	// message in the chat session. Subsequent comparison results show a "Show Details"
	// button instead (handled in MessageText via sideChatLabel toggle).
	const isFirstMobileComparison = (() => {
		if (!isMobile || activeMessage?.messageType !== 'productComparison') return true;
		// If the user explicitly activated a comparison (via "Show Details" or the
		// view-side-chat button), always allow it regardless of position in the chat
		if (store.currentChat?.activeMessageId) return true;
		const comparisonMessages = (store.currentChat?.chat || []).filter((m) => m.messageType === 'productComparison');
		return comparisonMessages.length <= 1;
	})();

	const sideChatTypes = isMobile
		? ['inspirationResult', ...(isFirstMobileComparison ? ['productComparison'] : []), ...(mobileProductInfoOpen ? ['productQuery'] : [])]
		: ['inspirationResult', 'productComparison', 'productQuery'];
	const shouldShowSideChat =
		activeMessage && sideChatTypes.includes(activeMessage?.messageType) && store.currentChat?.dismissedSideChatMessageId !== activeMessage.id;

	const styling = mergeStyles<{
		mobile: boolean;
		offset?: string | number;
		hasSideChat?: boolean;
		footerHeight: number;
		primaryColorBg: string;
		primaryColorFg: string;
		primaryAccentColorBg: string;
		primaryAccentColorFg: string;
		secondaryAccentColorBg: string;
		secondaryAccentColorFg: string;
		position: 'left' | 'right';
	}>(
		{
			mobile: isMobile,
			offset,
			hasSideChat: !!shouldShowSideChat,
			footerHeight,
			primaryColorBg: colorPrimary,
			primaryColorFg: colorPrimaryText,
			primaryAccentColorBg: colorPrimaryAccent,
			primaryAccentColorFg: colorPrimaryAccentText,
			secondaryAccentColorBg: colorSecondaryAccent,
			secondaryAccentColorFg: colorSecondaryAccentText,
			position: chatPosition,
		},
		defaultStyles
	);

	// Lock body scroll while chat is open so touch/wheel scrolls don't leak to the page behind
	useEffect(() => {
		if (!store.open) return;
		const body = document.body;
		const previousOverflow = body.style.overflow;
		const previousOverscroll = body.style.overscrollBehavior;
		body.style.overflow = 'hidden';
		body.style.overscrollBehavior = 'contain';
		return () => {
			body.style.overflow = previousOverflow;
			body.style.overscrollBehavior = previousOverscroll;
		};
	}, [store.open]);

	// Track the primary footer height so the mobile secondary panel can sit above it
	useEffect(() => {
		const el = footerRef.current;
		if (!el) return;
		const observer = new ResizeObserver((entries) => {
			for (const entry of entries) {
				setFooterHeight(entry.borderBoxSize?.[0]?.blockSize ?? entry.target.getBoundingClientRect().height);
			}
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, [store.open, store.currentChat?.isExpired]);

	const HistoryButton = (props: { disabled?: boolean; open?: boolean }) => (
		<Button
			className="ss__chat__header__button--history"
			disabled={props.disabled}
			icon={{
				icon: 'history',
				title: 'Chat History',
			}}
		/>
	);

	const HistoryPopup = (props: { toggleOpen?: () => void }) => (
		<div className="ss__chat__history">
			<div className="ss__chat__history__header">
				<h4>History</h4>
				<div className="ss__chat__history__header__buttons">
					<Button
						content="clear"
						onClick={() => {
							controller.store.clearHistory();
							props.toggleOpen && props.toggleOpen();
						}}
					/>
				</div>
			</div>
			{store.chats.length > 0 ? (
				<div className="ss__chat__history__chats">
					{store.chats.map((chat) => (
						<div key={chat.id} className="ss__chat__history__chats__chat">
							<Button
								className="ss__chat__history__chat__button"
								onClick={() => {
									controller.store.switchChat(chat.id);
								}}
								disabled={chat.id === store.currentChatId}
							>
								<div className="ss__chat__history__chat__button__text">
									{(() => {
										const lastUserMessage = [...chat.chat].reverse().find((message) => message.messageType === 'user');
										if (!lastUserMessage) return 'New Chat';
										const text = lastUserMessage.text;
										return text.length > 50 ? `${text.slice(0, 50)}...` : text;
									})()}
								</div>
								<div className="ss__chat__history__chat__button__date">{chat.createdAt.toLocaleString()}</div>
							</Button>
						</div>
					))}
				</div>
			) : null}
		</div>
	);

	const FacetButton = (props: { label: string; open?: boolean }) => <Button icon={props.open ? 'angle-down' : 'angle-up'}>{props.label}</Button>;

	const getFacetButtonLabel = (facet: ValueFacet | RangeFacet): string => {
		const base = facet.label || facet.field;

		// Slider facets show the active low-high range in the button when narrowed.
		if (facet.type === 'range') {
			const rangeFacet = facet as RangeFacet;
			const active = rangeFacet.active;
			const range = rangeFacet.range;
			if (active && range && (active.low !== range.low || active.high !== range.high)) {
				return `${base} (${active.low ?? '*'}-${active.high ?? '*'})`;
			}
			return base;
		}

		const applied = new Set<string>();

		// Count values marked as filtered (already applied on the server)
		((facet as ValueFacet).values || []).forEach((value) => {
			if (value?.filtered) {
				if ('low' in value && 'high' in value) {
					applied.add(`${(value as FacetRangeValue).low ?? '*'}:${(value as FacetRangeValue).high ?? '*'}`);
				} else {
					applied.add((value as FacetValue).value);
				}
			}
		});

		// Count pending facet attachments (newly selected, not yet sent)
		(controller.store.currentChat?.attachments.items || [])
			.filter((item: any) => item.type === 'facet' && item.key === facet.field && (item.state === 'active' || item.state === 'attached'))
			.forEach((item: any) => applied.add(item.value));

		return applied.size > 0 ? `${base} (${applied.size})` : base;
	};

	// Slider dropdown grows to fill the remaining chat width from its anchor,
	// so the price range slider isn't cramped inside a 150px-wide dropdown.
	const SliderFacetDropdown = (props: { facet: RangeFacet; label: string }) => {
		const anchorRef = useRef<HTMLDivElement>(null);
		const [width, setWidth] = useState<number | null>(null);

		useEffect(() => {
			const compute = () => {
				if (!anchorRef.current || !chatRef.current) return;
				const anchor = anchorRef.current.getBoundingClientRect();
				const chat = chatRef.current.getBoundingClientRect();
				const remaining = chat.right - anchor.left - 16;
				setWidth(Math.max(220, remaining));
			};
			compute();
			const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(compute) : null;
			if (ro && chatRef.current) ro.observe(chatRef.current);
			window.addEventListener('resize', compute);
			return () => {
				if (ro) ro.disconnect();
				window.removeEventListener('resize', compute);
			};
		}, []);

		return (
			<div ref={anchorRef} className="ss__chat__actions__facet ss__chat__actions__facet--range">
				<Dropdown
					usePortal
					dropUp
					button={<FacetButton label={props.label} />}
					style={{
						'.ss__dropdown__content': {
							width: width ? `${width}px` : 'auto',
							background: 'white',
							boxShadow: '0px 3px 6px 0px rgba(0, 0, 0, 0.2)',
							borderRadius: '6px',
						},
					}}
				>
					<div className="ss__chat__actions__facet__options">
						<div className="ss__chat__actions__facet__slider" style={{ padding: '12px 16px' }}>
							<FacetSlider facet={props.facet} />
						</div>
					</div>
				</Dropdown>
			</div>
		);
	};

	// TODO: if starting a new chat and it's expired, this button would then disappear
	if (!controller.store.chatEnabled) {
		return <></>;
	}

	// Reset swipe state when secondary panel opens/closes or active message changes
	useEffect(() => {
		updateSwipeOffset(0);
		setSwipeAnimating(false);
		swipeActive.current = false;
	}, [shouldShowSideChat, activeMessage?.id]);

	const onSwipeStart = (e: any) => {
		swipeStartY.current = e.touches[0].clientY;
		swipeStartTime.current = Date.now();
		swipeActive.current = false; // only activate after dead-zone threshold
		setSwipeAnimating(false);
	};

	const onSwipeMove = (e: any) => {
		const diff = e.touches[0].clientY - swipeStartY.current;
		// Require a minimum drag distance before activating the swipe,
		// so taps on buttons (e.g. close) still fire their click events.
		if (!swipeActive.current) {
			if (Math.abs(diff) < 8) return; // still within dead-zone
			swipeActive.current = true;
		}
		if (diff > 0) {
			e.preventDefault();
			updateSwipeOffset(diff);
		} else {
			updateSwipeOffset(0);
		}
	};

	const onSwipeEnd = () => {
		if (!swipeActive.current) return;
		swipeActive.current = false;

		const offset = swipeOffsetRef.current;
		const height = secondaryRef.current?.offsetHeight || 400;
		const elapsed = Date.now() - swipeStartTime.current;
		const velocity = offset / (elapsed || 1); // px per ms

		// Dismiss if dragged past 25% threshold OR a quick flick (>0.5 px/ms with >50px travel)
		const shouldDismiss = offset > height * 0.25 || (velocity > 0.5 && offset > 50);

		if (shouldDismiss) {
			// Animate out then dismiss
			setSwipeAnimating(true);
			updateSwipeOffset(height);
			setTimeout(() => {
				const attachments = store.currentChat?.attachments.attached || [];
				const productAttachments = attachments.filter(
					(item: any) => item.type === 'product' && item.requestType !== 'productSimilar' && item.requestType !== 'productComparison'
				);
				productAttachments.forEach((item) => store.currentChat?.attachments.remove(item.id));
				setMobileProductInfoOpen(false);
				store.currentChat?.dismissSideChat();
				updateSwipeOffset(0);
				setSwipeAnimating(false);
			}, 300);
		} else {
			// Snap back
			setSwipeAnimating(true);
			updateSwipeOffset(0);
			setTimeout(() => setSwipeAnimating(false), 300);
		}
	};

	const requestType = store.currentChat?.requestType;
	const loadingVerbs = useMemo(() => {
		switch (requestType) {
			case 'productQuery':
				return ['Thinking', 'Searching', 'Analyzing', 'Gathering details'];
			case 'productSearch':
				return ['Searching', 'Browsing catalog', 'Finding products', 'Curating results'];
			case 'productComparison':
				return ['Comparing', 'Analyzing', 'Evaluating', 'Weighing options'];
			case 'imageSearch':
				return ['Analyzing image', 'Identifying', 'Searching', 'Matching'];
			case 'productSimilar':
				return ['Finding similar items', 'Searching', 'Matching', 'Curating'];
			case 'inspirationRequest':
				return ['Brainstorming', 'Imagining', 'Curating', 'Inspiring'];
			case 'general':
			default:
				return undefined;
		}
	}, [requestType]);

	return (
		<CacheProvider>
			<>
				<div
					ref={chatRef}
					className={classnames(
						'ss__chat',
						{
							'ss__chat--open': store.open,
							'ss__chat--minimized': !store.open,
							'ss__chat--mobile': isMobile,
						},
						className,
						internalClassName
					)}
					{...styling}
				>
					{!disableBubbleSuggestedQuestions && !store.open && !store.currentChat && store.suggestedQuestions?.length > 0 && (
						<div className="ss__chat__suggested-questions">
							{store.suggestedQuestions.map((question, index) => (
								<div
									key={index}
									className="ss__chat__suggested-questions__item"
									onClick={() => {
										controller.openChat(question);
									}}
								>
									{question}
								</div>
							))}
						</div>
					)}
					<div className={'ss__chat__bubble'} onClick={() => controller.handlers.button.click()}>
						<Icon icon="chat" title="Open Chat" />
					</div>
					{store.open && shouldShowSideChat && activeMessage ? (
						<div
							ref={secondaryRef}
							className={classnames('ss__chat__secondary')}
							style={
								isMobile
									? {
											// Touch swipe animations need to be inline to prevent visual jumps
											transform: swipeOffset > 0 ? `translateY(${swipeOffset}px)` : undefined,
											transition: swipeAnimating ? 'transform 0.3s ease-out' : 'none',
									  }
									: undefined
							}
						>
							{isMobile && (
								<div className="ss__chat__secondary__drag-handle" onTouchStart={onSwipeStart} onTouchMove={onSwipeMove} onTouchEnd={onSwipeEnd}>
									<div className="ss__chat__secondary__drag-handle__indicator" />
								</div>
							)}
							<div
								className={'ss__chat__header'}
								onTouchStart={isMobile ? onSwipeStart : undefined}
								onTouchMove={isMobile ? onSwipeMove : undefined}
								onTouchEnd={isMobile ? onSwipeEnd : undefined}
							>
								<div className="ss__chat__header__title">
									<div className="ss__chat__header__title__primary">
										{(
											{
												inspirationResult: 'Inspiration Scenarios',
												productComparison: 'Product Comparison',
												productQuery: 'Product Information',
											} as any
										)[activeMessage.messageType] || null}
									</div>
									<div className="ss__chat__header__title__secondary">
										{(
											{
												inspirationResult: 'Choose a style direction to explore',
												productComparison: `Comparing ${(activeMessage as ChatResponseProductComparisonData)?.searchResults?.length || ''} products`,
												productQuery: 'Complete product details',
											} as any
										)[activeMessage.messageType] || null}
									</div>
								</div>
								<div className="ss__chat__header__buttons">
									<Button
										className="ss__chat__header__button--close"
										icon={{ icon: 'close2', title: 'Close Chat' }}
										onClick={() => {
											// clear any product attachments tied to the side chat (discuss product flow)
											// so the attachments bar disappears alongside the secondary panel
											// but preserve productComparison attachments so the user can continue comparing
											const productAttachmentsToRemove = (store.currentChat?.attachments.attached || []).filter(
												(item) =>
													item.type === 'product' &&
													(item as any).requestType !== 'productSimilar' &&
													(item as any).requestType !== 'productComparison'
											);
											productAttachmentsToRemove.forEach((item) => store.currentChat?.attachments.remove(item.id));
											setMobileProductInfoOpen(false);
											store.currentChat?.dismissSideChat();
										}}
									/>
								</div>
							</div>
							<div className="ss__chat__content">
								<div className={'ss__chat__messages'}>
									{/* TODO add ref? */}
									{(
										{
											inspirationResult: (
												<ChatInspirationResultMessage
													chatItem={activeMessage as ChatResponseInspirationResultData}
													controller={controller}
													onProductQuickView={isMobile ? () => setMobileProductInfoOpen(true) : undefined}
												/>
											),
											productComparison: (
												<ChatProductComparisonMessage chatItem={activeMessage as ChatResponseProductComparisonData} controller={controller} />
											),
											productQuery: (
												<ChatProductQueryMessage
													chatItem={activeMessage as unknown as ChatProductQueryMessageItem}
													controller={controller}
													displayFields={controller.config.settings?.quickview?.displayFields}
													primaryColor={colorPrimary}
													primaryColorText={colorPrimaryText}
												/>
											),
										} as any
									)[activeMessage.messageType] || null}
								</div>
							</div>
						</div>
					) : null}
					{store.open ? (
						<div className={'ss__chat__primary'}>
							<div className={'ss__chat__header'}>
								<div className="ss__chat__header__title">
									{logo ? <img className="ss__chat__header__title__logo" src={logo} /> : null}
									<div className="ss__chat__header__title__text">
										{title ? <div className="ss__chat__header__title__text__primary">{title}</div> : null}
										{subtitle ? <div className="ss__chat__header__title__text__secondary">{subtitle}</div> : null}
									</div>
								</div>
								<div className="ss__chat__header__buttons">
									{/* <Button
										className="ss__chat__header__button--new"
										icon={{ icon: 'inspire', title: 'Inspire' }}
										onClick={() => {
											controller.inspirationRequest();
										}}
										content={'Inspire'}
									/> */}
									<Button
										// disabled={store.currentChat?.chat && store.currentChat.chat.length <= 1}
										className="ss__chat__header__button--new"
										icon={{ icon: controller.store.initChatLoading ? 'spinner' : 'plus2', title: 'New Chat' }}
										onClick={() => controller.store.createChat()}
									/>
									{store.chats.length > 1 && (
										<Dropdown
											disabled={store.chats.length == 1 && store.currentChat && store.currentChat.chat.length <= 1}
											className="ss__chat__header__dropdown-history"
											button={<HistoryButton />}
										>
											<HistoryPopup />
										</Dropdown>
									)}
									<Button
										className="ss__chat__header__button--close"
										icon={{ icon: 'close2', title: 'Close Chat' }}
										onClick={() => controller.handlers.button.click()}
									/>
								</div>
							</div>
							{(() => {
								const feedbackAfterMessages = controller.config.settings?.feedbackAfterMessages;
								const systemMessages = (store.currentChat?.chat || []).filter(
									(msg) => msg.messageType !== 'user' && msg.messageType !== 'productQuery'
								);
								const currentRating = store.currentChat?.sessionFeedback?.rating;
								const hasRated = !!currentRating;
								const shouldShowFeedback =
									feedbackAfterMessages &&
									systemMessages.length >= feedbackAfterMessages &&
									!store.currentChat?.feedbackDismissed &&
									(!hasRated || store.currentChat?.feedbackJustGiven);

								return shouldShowFeedback ? (
									<div className="ss__chat__session-feedback">
										<div className="ss__chat__session-feedback__icon">
											<Icon icon="chat" size="16px" />
										</div>
										<span className="ss__chat__session-feedback__label">
											{hasRated ? 'Thank you for your feedback' : "How's your experience so far?"}
										</span>
										<div className={`ss__chat__session-feedback__actions${hasRated ? ' ss__chat__session-feedback__actions--rated' : ''}`}>
											{(!hasRated || currentRating === 'UP') && (
												<span onClick={() => !hasRated && controller.handleFeedback('UP')}>
													<Icon icon={'thumbs-up'} size="16px" title={'Thumbs Up'} />
												</span>
											)}
											{(!hasRated || currentRating === 'DOWN') && (
												<span onClick={() => !hasRated && controller.handleFeedback('DOWN')}>
													<Icon icon={'thumbs-down'} size="16px" title={'Thumbs Down'} />
												</span>
											)}
										</div>
										{!hasRated && (
											<span
												className="ss__chat__session-feedback__close"
												onClick={() => {
													if (store.currentChat) {
														store.currentChat.feedbackDismissed = true;
														store.currentChat.save();
													}
												}}
											>
												<Icon icon="close-thin" size="14px" />
											</span>
										)}
									</div>
								) : null;
							})()}
							<div className="ss__chat__content">
								<div
									ref={headerRef}
									className={classnames('ss__chat__content__header', {
										'ss__chat__content__header--overlay': messagesOverflow,
									})}
								>
									{/* <div className="ss__chat__attachments">
									{store.currentChat?.attachments.attached
										.filter((item) => item.state === 'active')
										.map((item) => (
											<Attachment key={item.id} attachment={item} controller={controller} />
										))}
								</div> */}
									{store.currentChat?.comparisons.compared && store.currentChat.comparisons.compared.length > 0 && (
										<div className={'ss__chat__content__header__comparisons'}>
											<div className={'ss__chat__content__header__comparisons__header'}>
												<div className={'ss__chat__content__header__comparisons__header__title'}>
													<Icon className={'ss__chat__content__header__comparisons__header__title__icon'} icon={'clipboard'} />
													<span className={'ss__chat__content__header__comparisons__header__title__text'}>
														Compare Products ({store.currentChat?.comparisons.compared.length}/{store.currentChat?.comparisons.maxItems})
													</span>
												</div>
												<div className={'ss__chat__content__header__comparisons__header__actions'}>
													<Button onClick={() => store.currentChat?.comparisons.reset()}>clear</Button>
												</div>
											</div>
											<div className={'ss__chat__content__header__comparisons__content'}>
												<div className={'ss__chat__content__header__comparisons__content__items'}>
													{Array.from({ length: store.currentChat?.comparisons.maxItems }).map((_, index) => {
														const comparisonItem = store.currentChat?.comparisons.compared[index];
														return (
															<div
																className={classnames('ss__chat__content__header__comparisons__content__comparison', {
																	'ss__chat__content__header__comparisons__content__comparison--placeholder': !comparisonItem,
																})}
																key={index}
															>
																{comparisonItem ? (
																	<>
																		<Image
																			// onClick={() => {
																			// 	controller?.productQuickView(product as any);
																			// }}
																			alt={(comparisonItem?.result?.display || comparisonItem?.result)?.mappings?.core?.name || ''}
																			src={(comparisonItem?.result?.display || comparisonItem?.result)?.mappings?.core?.imageUrl || ''}
																		/>
																		<div
																			className="ss__chat__content__header__comparisons__content__comparison__remove"
																			onClick={() => {
																				store.currentChat?.comparisons.remove(comparisonItem.result.id);
																			}}
																		>
																			<Icon icon={'close-thin'} size={'12px'} />
																		</div>
																	</>
																) : (
																	<>
																		<Icon icon={'plus-thin'} />
																		<div className={'ss__chat__content__header__comparisons__content__comparison--placeholder__text'}>Add</div>
																	</>
																)}
															</div>
														);
													})}
												</div>
												<div
													className={classnames('ss__chat__content__header__comparisons__action', {
														'ss__chat__content__header__comparisons__action--hidden': (store.currentChat?.comparisons.compared.length || 0) < 2,
													})}
												>
													<Button onClick={() => controller.search()} icon={{ icon: 'compare', title: 'Compare' }}>
														Compare
													</Button>
												</div>
											</div>
										</div>
									)}
								</div>
								<div
									className={'ss__chat__messages'}
									ref={messagesContainerRef}
									style={visibleChatLength ? { scrollbarGutter: 'stable' } : undefined}
								>
									{(!store.currentChat?.chat || store.currentChat.chat.length === 0) && store.welcomeMessage && !store.currentChat?.isExpired && (
										<div className="ss__chat__welcome">
											<div className="ss__chat__welcome__message">{store.welcomeMessage}</div>
											<SuggestedQuestions questions={store.suggestedQuestions} controller={controller} />
										</div>
									)}
									{store.currentChat?.chat
										.filter((chatItem) => chatItem.messageType !== 'productQuery')
										.map((chatItem, index) => (
											<div key={index} className={`ss__chat__message ss__chat__message--${chatItem.messageType}`}>
												{{
													user: (
														<MessageUser
															chatItem={chatItem}
															controller={controller}
															onProductQuickView={isMobile ? () => setMobileProductInfoOpen(true) : undefined}
															primaryColor={colorPrimary}
															primaryColorText={colorPrimaryText}
														/>
													),
													text: (
														<MessageText
															chatItem={chatItem}
															controller={controller}
															scrollToBottom={scrollToBottomIfNear}
															onProductQuickView={isMobile ? () => setMobileProductInfoOpen(true) : undefined}
															sideChatOpen={!!shouldShowSideChat}
															primaryColor={colorPrimary}
															primaryColorText={colorPrimaryText}
														/>
													),
													content: (
														<MessageText
															chatItem={chatItem}
															controller={controller}
															scrollToBottom={scrollToBottomIfNear}
															onProductQuickView={isMobile ? () => setMobileProductInfoOpen(true) : undefined}
															sideChatOpen={!!shouldShowSideChat}
															primaryColor={colorPrimary}
															primaryColorText={colorPrimaryText}
														/>
													),
													productSearchResult: (
														<MessageText
															chatItem={chatItem}
															controller={controller}
															scrollToBottom={scrollToBottomIfNear}
															onProductQuickView={isMobile ? () => setMobileProductInfoOpen(true) : undefined}
															sideChatOpen={!!shouldShowSideChat}
															primaryColor={colorPrimary}
															primaryColorText={colorPrimaryText}
														/>
													),
													inspirationResult: (
														<MessageText
															chatItem={chatItem}
															controller={controller}
															scrollToBottom={scrollToBottomIfNear}
															onProductQuickView={isMobile ? () => setMobileProductInfoOpen(true) : undefined}
															sideChatOpen={!!shouldShowSideChat}
															primaryColor={colorPrimary}
															primaryColorText={colorPrimaryText}
														/>
													),
													productAnswer: (
														<MessageText
															chatItem={chatItem}
															controller={controller}
															scrollToBottom={scrollToBottomIfNear}
															onProductQuickView={isMobile ? () => setMobileProductInfoOpen(true) : undefined}
															sideChatOpen={!!shouldShowSideChat}
															primaryColor={colorPrimary}
															primaryColorText={colorPrimaryText}
														/>
													),
													productComparison: (() => {
														// On mobile, only the first productComparison in the session
														// auto-opens the secondary panel. Subsequent ones get a
														// prominent "Show Details" button instead.
														const comparisonMessages = (store.currentChat?.chat || []).filter((m) => m.messageType === 'productComparison');
														const isFirst = comparisonMessages.length > 0 && comparisonMessages[0].id === chatItem.id;
														return (
															<MessageText
																chatItem={chatItem}
																controller={controller}
																scrollToBottom={scrollToBottomIfNear}
																onProductQuickView={isMobile ? () => setMobileProductInfoOpen(true) : undefined}
																showDetailsButton={isMobile && !isFirst}
																sideChatOpen={!!shouldShowSideChat}
																primaryColor={colorPrimary}
																primaryColorText={colorPrimaryText}
															/>
														);
													})(),
													productRecommendation: (
														<MessageText
															chatItem={chatItem}
															controller={controller}
															scrollToBottom={scrollToBottomIfNear}
															onProductQuickView={isMobile ? () => setMobileProductInfoOpen(true) : undefined}
															sideChatOpen={!!shouldShowSideChat}
															primaryColor={colorPrimary}
															primaryColorText={colorPrimaryText}
														/>
													),
													actions: <SuggestedQuestions actions={(chatItem as unknown as ChatResponseActionsData).actions} controller={controller} />,
													errorResponse: (
														<MessageText
															chatItem={chatItem}
															controller={controller}
															scrollToBottom={scrollToBottomIfNear}
															sideChatOpen={!!shouldShowSideChat}
															primaryColor={colorPrimary}
															primaryColorText={colorPrimaryText}
														/>
													),
													topicDrift: (
														<MessageText
															chatItem={chatItem}
															controller={controller}
															scrollToBottom={scrollToBottomIfNear}
															sideChatOpen={!!shouldShowSideChat}
															primaryColor={colorPrimary}
															primaryColorText={colorPrimaryText}
														/>
													),
													productQuery: null,
												}[chatItem.messageType] || null}
											</div>
										))}
									<div className="ss__chat__messages__end" ref={messagesEndRef} />
									{showNewMessages && messagesOverflow && (
										<div
											className="ss__chat__new-messages"
											onClick={() => {
												scrollToBottom();
												setShowNewMessages(false);
											}}
										>
											<Icon icon="angle-down" size="12px" />
											<span>New messages</span>
										</div>
									)}
								</div>
								<ChatLoadingIndicator loading={store.loading} verbs={loadingVerbs} />
								{!store.currentChat?.isExpired ? (
									(() => {
										const dropEnabled =
											store.features.imageSearch.enabled && !store.loading && !store.blocked && !store.currentChat?.sessionLimitReached;
										const hasFiles = (e: DragEvent) => Array.from(e.dataTransfer?.types || []).includes('Files');
										return (
											<div
												className="ss__chat__content__footer"
												ref={footerRef}
												onDragEnter={(e) => {
													if (!dropEnabled || !hasFiles(e as unknown as DragEvent)) return;
													e.preventDefault();
													dragCounterRef.current += 1;
													setIsDraggingFile(true);
												}}
												onDragOver={(e) => {
													if (!dropEnabled || !hasFiles(e as unknown as DragEvent)) return;
													// Required to allow the drop event to fire
													e.preventDefault();
													if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
												}}
												onDragLeave={(e) => {
													if (!dropEnabled || !hasFiles(e as unknown as DragEvent)) return;
													dragCounterRef.current = Math.max(0, dragCounterRef.current - 1);
													if (dragCounterRef.current === 0) setIsDraggingFile(false);
												}}
												onDrop={async (e) => {
													if (!dropEnabled || !hasFiles(e as unknown as DragEvent)) return;
													e.preventDefault();
													dragCounterRef.current = 0;
													setIsDraggingFile(false);
													const dropped = Array.from((e as unknown as DragEvent).dataTransfer?.files || []);
													const images = dropped.filter((f) => f.type.startsWith('image/'));
													if (images.length === 0) return;
													// Reconstruct a FileList — controller.upload expects FileList | null
													const dt = new DataTransfer();
													images.forEach((f) => dt.items.add(f));
													await controller.upload(dt.files);
												}}
											>
												{store.error && <div className="ss__chat__error">{store.error.message}</div>}
												{store.currentChat?.sessionLimitReached && (
													<div className={'ss__chat__topic-drift'}>
														<Icon icon="info" size="18px" className={'ss__chat__topic-drift__icon--info'} />
														<div className={'ss__chat__topic-drift__text'}>
															<span>Session limit reached</span>
															<span>This chat has reached its maximum number of interactions. Start a new session to continue.</span>
														</div>
														<Button
															className={'ss__chat__topic-drift__button'}
															onClick={() => {
																controller.store.createChat();
															}}
														>
															New Session
														</Button>
													</div>
												)}
												{store.facets && store.facets.length > 0 && (
													<div className={'ss__chat__actions'}>
														<div className="ss__chat__actions__wrap">
															<div className="ss__chat__actions__facets-header">
																<div className="ss__chat__actions--title">Filter by:</div>
																{multiselectFacets && store.hasPendingFacetChanges && (
																	<div className={'ss__chat__actions__facets-apply ss__chat__actions__facets-apply--active'}>
																		<Button
																			onClick={() => {
																				controller.search();
																			}}
																		>
																			Apply
																		</Button>
																	</div>
																)}
															</div>
															<div className="ss__chat__actions--facets">
																{store.facets.slice(0, 10).map((facet: ValueFacet | RangeFacet, idx: number) => {
																	// range/slider facets render via FacetSlider; everything else needs at least one value to be useful
																	if (facet.type !== 'range' && !(facet as ValueFacet).values?.length) return null;
																	if (facet.type === 'range') {
																		return <SliderFacetDropdown key={idx} facet={facet as RangeFacet} label={getFacetButtonLabel(facet)} />;
																	}
																	return (
																		<div className={`ss__chat__actions__facet ss__chat__actions__facet--${facet.type}`} key={idx}>
																			<Dropdown
																				key={facet.field}
																				usePortal
																				dropUp
																				button={<FacetButton label={getFacetButtonLabel(facet)} />}
																				style={{
																					'.ss__dropdown__content': {
																						width: '150px',
																						maxHeight: '200px',
																						overflowY: 'auto',
																						background: 'white',
																						boxShadow: '0px 3px 6px 0px rgba(0, 0, 0, 0.2)',
																						borderRadius: '6px',
																						...(multiselectFacets
																							? {
																									'.ss__chat__actions__facet__option--checkbox': {
																										display: 'flex',
																										alignItems: 'center',
																										gap: '8px',
																										padding: '6px 10px',
																										cursor: 'pointer',
																										width: '100%',
																										boxSizing: 'border-box' as const,
																										background: '#fff',
																										border: 'none',
																										borderBottom: '1px solid #f0f0f0',
																										'&:hover': {
																											background: new Colour(colorPrimary).lightenHex(0.95),
																										},
																										'&:last-child': {
																											borderBottom: 'none',
																										},
																										'.ss__chat__actions__facet__option__checkbox': {
																											width: '16px',
																											height: '16px',
																											borderRadius: '3px',
																											border: '2px solid #ccc',
																											display: 'flex',
																											alignItems: 'center',
																											justifyContent: 'center',
																											flexShrink: 0,
																											'&.ss__chat__actions__facet__option__checkbox--checked': {
																												background: colorPrimary,
																												borderColor: colorPrimary,
																												color: colorPrimaryText,
																												svg: {
																													fill: colorPrimaryText,
																													stroke: colorPrimaryText,
																												},
																											},
																										},
																										'.ss__chat__actions__facet__option__label': {
																											fontSize: '14px',
																											color: '#333',
																											flex: '1 1 auto',
																											textAlign: 'left' as const,
																										},
																									},
																							  }
																							: {
																									'.ss__button': {
																										width: '100%',
																										border: 'none',
																										borderRadius: 0,
																										boxSizing: 'border-box',
																										background: '#fff',
																										'&:hover': {
																											background: new Colour(colorPrimary).lightenHex(0.95),
																										},
																									},
																							  }),
																					},
																				}}
																			>
																				<div className="ss__chat__actions__facet__options">
																					{facet.type === 'range-buckets'
																						? (facet as ValueFacet).values.map((option) => {
																								const rangeOption = option as FacetRangeValue;
																								const optionValue = `${rangeOption.low ?? '*'}:${rangeOption.high ?? '*'}`;
																								if (multiselectFacets) {
																									const isSelected = controller.store.isFacetSelected(facet.field, optionValue);
																									return (
																										<div
																											key={optionValue}
																											className="ss__chat__actions__facet__option--checkbox"
																											onClick={() => {
																												if (isSelected) {
																													controller.store.removeFacet(facet.field, optionValue);
																												} else {
																													controller.store.addFacet({
																														key: facet.field,
																														value: optionValue,
																													});
																												}
																											}}
																										>
																											<div
																												className={classnames('ss__chat__actions__facet__option__checkbox', {
																													'ss__chat__actions__facet__option__checkbox--checked': isSelected,
																												})}
																											>
																												{isSelected && <Icon icon="check-thin" size="10px" />}
																											</div>
																											<span className="ss__chat__actions__facet__option__label">{rangeOption.label}</span>
																										</div>
																									);
																								}
																								return (
																									<Button
																										key={optionValue}
																										onClick={() => {
																											controller.store.addFacet({
																												key: facet.field,
																												value: optionValue,
																											});
																											controller.search();
																										}}
																									>
																										{rangeOption.label}
																									</Button>
																								);
																						  })
																						: (facet as ValueFacet).values.map((option) => {
																								const valueOption = option as FacetValue;
																								const optionValue = valueOption.value || valueOption.label;
																								if (multiselectFacets) {
																									const isSelected = controller.store.isFacetSelected(facet.field, optionValue);
																									return (
																										<div
																											key={optionValue}
																											className="ss__chat__actions__facet__option--checkbox"
																											onClick={() => {
																												if (isSelected) {
																													controller.store.removeFacet(facet.field, optionValue);
																												} else {
																													controller.store.addFacet({
																														key: facet.field,
																														value: optionValue,
																													});
																												}
																											}}
																										>
																											<div
																												className={classnames('ss__chat__actions__facet__option__checkbox', {
																													'ss__chat__actions__facet__option__checkbox--checked': isSelected,
																												})}
																											>
																												{isSelected && <Icon icon="check-thin" size="10px" />}
																											</div>
																											<span className="ss__chat__actions__facet__option__label">{valueOption.label}</span>
																										</div>
																									);
																								}
																								return (
																									<Button
																										key={optionValue}
																										onClick={() => {
																											controller.store.addFacet({
																												key: facet.field,
																												value: optionValue,
																											});
																											controller.search();
																										}}
																									>
																										{valueOption.label}
																									</Button>
																								);
																						  })}
																				</div>
																			</Dropdown>
																		</div>
																	);
																})}
															</div>
														</div>
													</div>
												)}
												{(() => {
													const activeComparisonSearchResults =
														shouldShowSideChat && activeMessage?.messageType === 'productComparison'
															? (activeMessage as ChatResponseProductComparisonData).searchResults || []
															: null;

													const showCommittedComparisons =
														!activeComparisonSearchResults &&
														store.currentChat?.comparisons.committed &&
														store.currentChat.comparisons.committed.length > 0 &&
														(activeMessage?.messageType === 'user' ||
															activeMessage?.messageType === 'productComparison' ||
															activeMessage?.messageType === 'productQuery');

													const visibleAttachments =
														store.currentChat?.attachments.attached.filter(
															(item) => item.state === 'attached' || item.state === 'active' || item.state === 'loading' || item.state === 'error'
														) || [];

													const productAttachments = visibleAttachments.filter(
														(item) =>
															item.type === 'product' &&
															(item as any).requestType !== 'productSimilar' &&
															(item as any).requestType !== 'productComparison'
													);
													const imageAttachments = visibleAttachments.filter((item) => item.type === 'image');

													const comparisonItems: ChatAttachmentContextItem[] = activeComparisonSearchResults
														? activeComparisonSearchResults.map((result: any) => {
																const d = result?.display || result;
																return {
																	id: result?.id,
																	name: d?.mappings?.core?.name || '',
																	imageUrl: d?.mappings?.core?.thumbnailImageUrl || d?.mappings?.core?.imageUrl || '',
																	onClick: isMobile
																		? () => {
																				controller.productQuickView(result);
																				setMobileProductInfoOpen(true);
																		  }
																		: undefined,
																};
														  })
														: showCommittedComparisons
														? (store.currentChat?.comparisons.committed || []).map((comparisonItem: any) => {
																const d = comparisonItem?.result?.display || comparisonItem?.result;
																return {
																	id: comparisonItem.result?.id,
																	name: d?.mappings?.core?.name || '',
																	imageUrl: d?.mappings?.core?.thumbnailImageUrl || d?.mappings?.core?.imageUrl || '',
																	onClick: isMobile
																		? () => {
																				controller.productQuickView(comparisonItem.result);
																				setMobileProductInfoOpen(true);
																		  }
																		: undefined,
																};
														  })
														: [];

													const productItems: ChatAttachmentContextItem[] = productAttachments.map((item: any) => ({
														id: item.id,
														name: item.name || '',
														imageUrl: item.thumbnailUrl || '',
														onClick: isMobile
															? () => {
																	setMobileProductInfoOpen(true);
															  }
															: () => {
																	store.currentChat?.setActiveMessage(store.currentChat?.activeMessage?.id || '');
															  },
														onRemove: () => {
															store.currentChat?.attachments.remove(item.id);
															setMobileProductInfoOpen(false);
															store.currentChat?.dismissSideChat();
														},
													}));

													const imageItems: ChatAttachmentContextItem[] = imageAttachments.map((item: any) => ({
														id: item.id,
														name: item.fileName || 'Image',
														imageUrl: item.base64 || item.thumbnailUrl || '',
														isLoading: item.state === 'loading',
														hasError: !!item.error,
														errorMessage: item.error?.message,
														onRemove: () => store.currentChat?.attachments.remove(item.id),
													}));

													const productTitle =
														productItems.length > 1 ? 'Compare these products' : 'Ask about this product' + (isMobile ? '' : ' (click for details)');
													const hasImageError = imageItems.some((item) => item.hasError);
													const imageTitle = imageItems.length > 0 && !hasImageError ? 'Find products similar to this image:' : '';

													return (
														<>
															{comparisonItems.length > 0 && (
																<ChatAttachmentContext
																	title={'Compare these products'}
																	items={comparisonItems}
																	onClose={() => {
																		store.currentChat?.comparisons.resetCommitted();
																		store.currentChat?.dismissSideChat();
																	}}
																/>
															)}
															{productItems.length > 0 && (
																<ChatAttachmentContext
																	title={productTitle}
																	items={productItems}
																	onClose={() => {
																		productAttachments.forEach((item: any) => store.currentChat?.attachments.remove(item.id));
																		setMobileProductInfoOpen(false);
																		store.currentChat?.dismissSideChat();
																	}}
																/>
															)}
															{imageItems.length > 0 && <ChatAttachmentContext title={imageTitle} items={imageItems} />}
														</>
													);
												})()}

												{(() => {
													const drift = store.currentChat?.topicDrift;
													if (!drift) return null;
													// recommendedAction is the prescription; driftType is the diagnosis.
													// Hide the banner when the backend says to keep flowing, or when no drift was detected.
													if (drift.recommendedAction === 'CONTINUE' || drift.driftType === 'NO_DRIFT') return null;

													const isScopeRedirect = drift.recommendedAction === 'SCOPE_REDIRECT';
													const primaryText = isScopeRedirect ? "I'm here to help with shopping" : 'Looking for something new?';
													const secondaryText = isScopeRedirect
														? 'Try asking about products, comparisons, or recommendations'
														: 'Start a fresh session for better assistance, or keep going in this one?';
													const buttonText = isScopeRedirect ? '' : 'New Session';

													return (
														<div className={'ss__chat__topic-drift'}>
															<Icon icon="info" size="18px" className={'ss__chat__topic-drift__icon--info'} />
															<div className={'ss__chat__topic-drift__text'}>
																<span>{primaryText}</span>
																<span>{secondaryText}</span>
															</div>
															{buttonText && (
																<Button
																	className={'ss__chat__topic-drift__button'}
																	onClick={() => {
																		if (isScopeRedirect) {
																			store.currentChat?.dismissTopicDrift();
																			return;
																		}
																		const messageText = store.currentChat?.handleTopicDrift();
																		if (messageText) {
																			controller.store.createChat();
																			controller.search({ data: { message: messageText } } as any);
																		}
																	}}
																>
																	{buttonText}
																</Button>
															)}
															<span
																onClick={() => {
																	store.currentChat?.dismissTopicDrift();
																}}
															>
																<Icon icon="close-thin" size="14px" className={'ss__chat__topic-drift__icon--close'} />
															</span>
														</div>
													);
												})()}
												<div className={'ss__chat__input'}>
													<div className={'ss__chat__input__input'}>
														<input
															type="text"
															name="ss-chat-input"
															disabled={store.loading || store.blocked || store.currentChat?.sessionLimitReached}
															placeholder={(() => {
																const comparedCount = store.currentChat?.comparisons.compared.length || 0;
																const committedCount = store.currentChat?.comparisons.committed.length || 0;
																const attached =
																	store.currentChat?.attachments.attached.filter((item) => item.state === 'attached' || item.state === 'active') ||
																	[];
																const attachedProducts = attached.filter((item) => item.type === 'product');
																const attachedImages = attached.filter((item) => item.type === 'image' && !item.error);

																if (attachedProducts.length === 1) {
																	return 'Ask about this product...';
																}
																if (comparedCount > 1 || attachedProducts.length > 1) {
																	return 'What would you like to compare?';
																}
																if (committedCount > 0) {
																	return 'Ask about the compared products...';
																}

																if (attachedImages.length > 0) {
																	return 'Ask about this image...';
																}
																if (comparedCount === 1) {
																	return 'Add another product to compare...';
																}
																return 'Type your message...';
															})()}
															onInput={(e) => controller.handlers.input.input(e as any)}
															onKeyDown={(e) => {
																controller.handlers.input.enterKey(e as any);
																if ((e as any).keyCode === 13 && isMobile && mobileProductInfoOpen) {
																	setMobileProductInfoOpen(false);
																}
															}}
															value={controller.store.inputValue}
														/>
														{store.features.imageSearch.enabled && (
															<>
																<Button
																	className={'ss__chat__upload-button'}
																	disabled={store.loading || store.blocked || store.currentChat?.sessionLimitReached}
																	onClick={() => fileInputRef.current?.click()}
																	icon={{ icon: 'image', title: 'Upload Image' }}
																/>
																<input
																	ref={fileInputRef}
																	onChange={async (e) => {
																		await controller.upload(e.target.files);
																		// reset value
																		e.target.value = '';
																	}}
																	multiple={true}
																	type="file"
																	accept="image/*"
																	className="ss__chat__input__input__file"
																/>
															</>
														)}
													</div>
													<div className={'ss__chat__input__actions'}>
														{(() => {
															const hasImageAttachment = (store.currentChat?.attachments.attached || []).some(
																(item) => item.type === 'image' && !item.error
															);
															const messageEmpty = !controller.store.inputValue.trim();
															const sendDisabled =
																store.blocked || store.currentChat?.sessionLimitReached || (hasImageAttachment && messageEmpty) || messageEmpty;
															return (
																<Button
																	className="ss__chat__send-button"
																	icon={{ icon: 'send', title: 'Send Message' }}
																	disabled={sendDisabled}
																	onClick={() => {
																		if (sendDisabled) return;
																		controller.search();
																		if (isMobile && mobileProductInfoOpen) {
																			setMobileProductInfoOpen(false);
																		}
																	}}
																/>
															);
														})()}
													</div>
												</div>
												<div className={'ss__chat__disclaimer'}>
													<i>
														Powered by Athos Commerce. AI-powered assistant. It sometimes make mistakes. Avoid sharing personal data.{' '}
														<a href="https://athoscommerce.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">
															Privacy Policy
														</a>
													</i>
												</div>
												{isDraggingFile && (
													<div className="ss__chat__content__footer__drop-overlay">
														<Icon icon="image" size="24px" />
														<span>Drop image to upload</span>
													</div>
												)}
											</div>
										);
									})()
								) : (
									<div className={'ss__chat__expired'}>
										<div className={'ss__chat__expired__message'}>This chat is expired. Please start a new chat.</div>
										<Button
											className={'ss__chat__expired__button'}
											onClick={() => {
												controller.store.createChat();
											}}
										>
											New Session
										</Button>
									</div>
								)}
							</div>
						</div>
					) : null}
				</div>
				<Overlay style={{ zIndex: 1001 }} color="transparent" active={store.open} onClick={() => controller.handlers.button.click()} />
			</>
		</CacheProvider>
	);
});

export interface ChatProps extends ComponentProps {
	controller: ChatController;
	logo?: string;
	title?: string;
	subtitle?: string;
	offset?: string | number;
	multiselectFacets?: boolean;
	disableBubbleSuggestedQuestions?: boolean;
	primaryColorBg?: string;
	primaryColorFg?: string;
	primaryAccentColorBg?: string;
	primaryAccentColorFg?: string;
	secondaryAccentColorBg?: string;
	secondaryAccentColorFg?: string;
	position?: 'left' | 'right';
}
