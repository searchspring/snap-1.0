import { Fragment, h } from 'preact';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';
import { observer } from 'mobx-react-lite';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import type { ChatController } from '@searchspring/snap-controller';
import { Button } from '../../Atoms/Button';
import { useRef, useEffect } from 'preact/hooks';
import { Slideout } from '../../Molecules/Slideout';
import { Quickview } from './Quickview';
import { MessageUser } from './MessageUser';
import { MessageText } from './MessageText';
import { Attachment } from './Attachment';

const defaultStyles: StyleScript<ChatProps> = () => {
	return css({
		position: 'fixed',
		right: '20px',
		bottom: '20px',
		zIndex: 1000,
		'&.ss__chat--minimized': {
			'.ss__chat__bubble': {
				width: '60px',
				height: '60px',
				borderRadius: '50%',
				background: '#0066cc',
				color: 'white',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				cursor: 'pointer',
				fontSize: '24px',
				boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
				'&:hover': {
					background: '#0052a3',
				},
			},
		},
		'&.ss__chat--open': {
			background: 'white',
			padding: '1em',
			minWidth: '500px',
			width: '500px',
			border: '1px solid #ccc',
			display: 'flex',
			flexDirection: 'column',
			boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
			borderRadius: '8px',
			maxHeight: '90vh',
		},
		'.ss__chat__header': {
			display: 'flex',
			justifyContent: 'flex-end',
			alignItems: 'center',
			marginBottom: '1em',
			fontSize: '18px',
			fontWeight: 'bold',
			'.ss__chat__header__buttons': {
				display: 'flex',
				gap: '10px',
				'.ss__chat__close': {
					padding: 0,
					border: 0,
					'&:hover': {
						backgroundColor: 'transparent',
					},
				},
				'.ss__chat__new': {
					padding: 0,
					border: 0,
					'&:hover': {
						backgroundColor: 'transparent',
					},
				},
			},
		},
		'.ss__chat__messages': {
			flex: '1 1 auto',
			overflowY: 'auto',
			margin: 0,
			padding: 0,
			maxHeight: 'calc(90vh - 200px)',
			'.ss__chat__messages__end': {
				height: '1px',
			},
			'.ss__chat__message': {
				marginBottom: '30px',
				'.ss__chat__message-user': {
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-end',
					marginLeft: '40px',
					'.ss__chat__message-user__text': {
						padding: '8px',
						borderRadius: '4px',
						backgroundColor: '#d1e7dd',
						alignSelf: 'flex-end',
					},
					'.ss__chat__message-user__attachments': {
						listStyleType: 'none',
						padding: 0,
						margin: 0,
						display: 'flex',
						gap: '8px',
						flexWrap: 'wrap',
						justifyContent: 'flex-end',
						'.ss__chat__message-user__attachment__image': {},
					},
				},

				'.ss__chat__message-text': {
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-start',
					'.ss__chat__message-text__text-wrapper': {
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'flex-start',
						'.ss__chat__message-text__text-wrapper__text': {
							padding: '8px',
							borderRadius: '4px',
							backgroundColor: '#f8d7da',
							alignSelf: 'flex-end',
						},
						'.ss__chat__message-text__text-wrapper__feedback': {
							display: 'flex',
							alignItems: 'flex-end',
							gap: '10px',
							margin: '0 10px',
							svg: {
								cursor: 'pointer',
							},
						},
					},
					'.ss__chat__message-text__results': {
						marginTop: '12px',
					},
				},
				ul: {
					margin: 0,
				},
				p: {
					margin: 0,
				},
			},
		},
		'.ss__chat__actions': {},
		'.ss__chat__loading': {
			padding: '12px 0',
			display: 'flex',
			alignItems: 'center',
			gap: '8px',
			color: '#666',
			fontSize: '14px',
			'.ss__chat__loading__dots': {
				display: 'flex',
				gap: '4px',
				'.ss__chat__loading__dot': {
					width: '6px',
					height: '6px',
					borderRadius: '50%',
					backgroundColor: '#999',
					animation: 'ss-chat-dot-pulse 1.4s infinite ease-in-out both',
					'&:nth-of-type(1)': {
						animationDelay: '-0.32s',
					},
					'&:nth-of-type(2)': {
						animationDelay: '-0.16s',
					},
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
		'.ss__chat__attachments': {
			display: 'flex',
			gap: '8px',
			margin: '8px 0',
			flexWrap: 'wrap',
			'.ss__chat__attachment': {
				position: 'relative',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				border: '1px solid #ddd',
				borderRadius: '4px',
				padding: '4px',
				backgroundColor: '#f9f9f9',
				'&.error': {
					border: '1px solid #dc3545',
					backgroundColor: '#fff5f5',
				},
				'.ss__chat__attachment__content': {
					position: 'relative',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				},
				'.ss__chat__attachment__error': {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '4px',
					padding: '8px',
					'.ss__chat__attachment__error-icon': {
						fontSize: '24px',
						color: '#dc3545',
					},
					'.ss__chat__attachment__error-message': {
						fontSize: '11px',
						color: '#dc3545',
						textAlign: 'center',
						maxWidth: '50px',
						lineHeight: 1.2,
					},
				},
				'.ss__chat__attachment__loading': {
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					display: 'flex',
					gap: '4px',
					'.ss__chat__loading__dot': {
						width: '8px',
						height: '8px',
						borderRadius: '50%',
						backgroundColor: '#0066cc',
						animation: 'ss-chat-dot-pulse 1.4s infinite ease-in-out both',
						'&:nth-of-type(1)': {
							animationDelay: '-0.32s',
						},
						'&:nth-of-type(2)': {
							animationDelay: '-0.16s',
						},
					},
				},
				img: {
					borderRadius: '4px',
					'&.loading': {
						opacity: 0.3,
					},
				},
				'.ss__chat__attachment__remove': {
					position: 'absolute',
					top: '-6px',
					right: '-6px',
					width: '20px',
					height: '20px',
					borderRadius: '50%',
					backgroundColor: '#dc3545',
					color: 'white',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					cursor: 'pointer',
					fontSize: '12px',
					fontWeight: 'bold',
					lineHeight: 1,
					padding: 0,
					minWidth: 'auto',
					boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
					'&:hover': {
						backgroundColor: '#bb2d3b',
					},
				},
			},
		},
		'.ss__chat__footer': {
			borderTop: '1px solid #ddd',

			'.ss__chat__suggestions': {
				display: 'flex',
				justifyContent: 'flex-start',
				gap: '5px',
				flexWrap: 'wrap',
				margin: '10px 0',
			},
		},
		'.ss__chat__input': {
			display: 'flex',
			gap: '8px',
			alignItems: 'center',
			paddingTop: '10px',
			'input[type="text"]': {
				flex: '1 1 auto',
				boxSizing: 'border-box',
				padding: '10px',
				border: '1px solid #ccc',
				borderRadius: '4px',
				fontSize: '14px',
				'&::placeholder': {
					color: '#999',
					opacity: 0.7,
				},
				'&:focus': {
					outline: 'none',
					borderColor: '#0066cc',
				},
			},
			'input[type="file"]': {
				display: 'none',
			},
			'.ss__chat__upload-button': {
				padding: '7px 12px',
				cursor: 'pointer',
				border: '1px solid #ccc',
				borderRadius: '4px',
				backgroundColor: '#f5f5f5',
				fontSize: '16px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				minWidth: 'auto',
				'&:hover': {
					backgroundColor: '#e8e8e8',
				},
			},
			'.ss__chat__send-button': {
				height: '40px',
				padding: '0 12px',
				backgroundColor: '#0066cc',
				color: 'white',
				border: 'none',
				borderRadius: '4px',
				cursor: 'pointer',
				fontSize: '14px',
				'&:hover': {
					backgroundColor: '#0052a3',
				},
				'&:disabled': {
					backgroundColor: '#cccccc',
					cursor: 'not-allowed',
				},
			},
		},
	});
};

export const Chat = observer((properties: ChatProps): JSX.Element => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatProps> = {
		treePath: globalTreePath,
	};

	let props = mergeProps('facets', globalTheme, defaultProps, properties);

	const { className, internalClassName, controller } = props;
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

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	// Auto-scroll to bottom when new messages are added or chat state changes
	useEffect(() => {
		// if (store.open && messagesContainerRef.current) {
		// 	messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
		// }

		if (store.open) {
			scrollToBottom();
		}
	}, [store.currentChat?.chat.length, store.loading, store.open]);

	// const subProps: ChatSubProps = {};

	const styling = mergeStyles<ChatProps>(props, defaultStyles);

	return (
		<CacheProvider>
			<Fragment>
				<div
					className={classnames(
						'ss__chat',
						{
							'ss__chat--open': store.open,
							'ss__chat--minimized': !store.open,
						},
						className,
						internalClassName
					)}
					{...styling}
				>
					{!store.open ? (
						<div className={'ss__chat__bubble'} onClick={() => controller.handlers.button.click()}>
							...
						</div>
					) : (
						<Fragment>
							<div className={'ss__chat__header'}>
								<div className="ss__chat__header__buttons">
									{store.currentChat?.chat && store.currentChat.chat.length > 1 && (
										<Button className="ss__chat__new" icon="plus-thin" onClick={() => controller.startNewChat()} />
									)}
									<Button className="ss__chat__close" icon="close-thin" onClick={() => controller.handlers.button.click()} />
								</div>
							</div>
							<div className={'ss__chat__messages'} ref={messagesContainerRef}>
								{store.currentChat?.chat.map((chatItem, index) => (
									<div key={index} className="ss__chat__message">
										{{
											user: <MessageUser chatItem={chatItem} controller={controller} />,
											text: <MessageText chatItem={chatItem} controller={controller} scrollToBottom={scrollToBottom} />,
											content: <MessageText chatItem={chatItem} controller={controller} scrollToBottom={scrollToBottom} />,
											productSearchResult: <MessageText chatItem={chatItem} controller={controller} scrollToBottom={scrollToBottom} />,
											inspirationResult: <MessageText chatItem={chatItem} controller={controller} scrollToBottom={scrollToBottom} />,
											productAnswer: <MessageText chatItem={chatItem} controller={controller} scrollToBottom={scrollToBottom} />,
											productComparison: <MessageText chatItem={chatItem} controller={controller} scrollToBottom={scrollToBottom} />,
										}[chatItem.messageType] || <Fragment></Fragment>}
									</div>
								))}
								<div className="ss__chat__messages__end" ref={messagesEndRef} />
							</div>
							{store.loading ? (
								<div className={'ss__chat__loading'}>
									<div className={'ss__chat__loading__dots'}>
										<div className={'ss__chat__loading__dot'}></div>
										<div className={'ss__chat__loading__dot'}></div>
										<div className={'ss__chat__loading__dot'}></div>
									</div>
								</div>
							) : null}
							<div className="ss__chat__footer">
								{store.currentChat?.attachments.attached && store.currentChat.attachments.attached.length > 0 && (
									<div className={'ss__chat__suggestions'}>
										{store.currentChat?.questions.map((item) => (
											<div key={item.id} className={classnames('ss__chat__suggestions__item')}>
												<Button
													onClick={() => {
														controller.store.inputValue = item.text;
														controller.search();
													}}
												>
													{item.text}
												</Button>
											</div>
										))}
									</div>
								)}
								<div className={'ss__chat__attachments'}>
									{store.currentChat?.attachments.attached.map((item) => (
										<div key={item.id} className={classnames('ss__chat__attachment', { error: !!item.error })}>
											<Attachment attachment={item} controller={controller} />
										</div>
									))}
								</div>
								<div className={'ss__chat__input'}>
									<input
										type="text"
										name="ss-chat-input"
										placeholder="Type your message..."
										onKeyUp={(e) => controller.handlers.input.input(e as any)}
										onKeyDown={(e) => controller.handlers.input.enterKey(e as any)}
										value={controller.store.inputValue}
									/>
									<Button
										className={'ss__chat__upload-button'}
										disabled={store.currentChat?.attachments.attached.some((attachment) => attachment.state === 'loading')}
										onClick={() => fileInputRef.current?.click()}
									>
										+
									</Button>
									<Button className="ss__chat__send-button" disabled={store.blocked} onClick={() => controller.search()}>
										Send
									</Button>
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
										id="ss-image-upload"
										className="ss__autocomplete__visual-modal__content__body__file-input"
									/>
								</div>
							</div>
						</Fragment>
					)}
				</div>
				<Slideout buttonSelector={'.ss__chat__result__detail-slot__more-info-button'} width="450px">
					<Quickview result={store.quickViewResult} controller={controller} />
				</Slideout>
			</Fragment>
		</CacheProvider>
	);
});

export interface ChatProps extends ComponentProps {
	controller: ChatController;
}

export interface MessageProps {
	chatItem: any;
	controller: ChatController;
	scrollToBottom: () => void;
}
