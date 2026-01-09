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
import { useState } from 'react';

const defaultStyles: StyleScript<ChatProps> = () => {
	return css({
		position: 'fixed',
		right: '20px',
		bottom: '20px',
		zIndex: 1000,
		'.ss__button': {
			border: '1px solid #ccc',
			borderRadius: 5,
			padding: '0.2em 0.5em',
		},
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
			width: '500px',
			border: '1px solid #ccc',
			display: 'flex',
			flexDirection: 'column',
			boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
			borderRadius: '8px',
			maxHeight: '90vh',
			minHeight: '50vh',
			maxWidth: 'calc(100vw - 1em - 20px - 20px)',
			boxSizing: 'border-box',
		},
		'.ss__chat__header': {
			display: 'flex',
			justifyContent: 'flex-end',
			alignItems: 'center',
			marginBottom: '1em',
			fontSize: '18px',
			fontWeight: 'bold',
			position: 'relative',
			'.ss__chat__header__buttons': {
				display: 'flex',
				gap: '10px',
				'.ss__chat__close, .ss__chat__new, .ss__chat__history': {
					padding: 0,
					border: 0,
					'&:hover': {
						backgroundColor: 'transparent',
					},
				},
			},
			'.ss__chat__header__history': {
				position: 'absolute',
				width: 300,
				minHeight: 170,
				top: 30,
				right: 0,
				background: 'white',
				zIndex: 2,
				boxShadow: '-2px 2px 4px 2px rgba(0, 0, 0, 0.2)',
				borderBottomLeftRadius: 5,
				borderBottomRightRadius: 5,
				display: 'flex',
				flexDirection: 'column',
				gap: 5,
				padding: '1em',
				boxSizing: 'border-box',
				'.ss__chat__header__history__header': {
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'baseline',
				},
				'.ss__chat__header__history__chats': {
					display: 'flex',
					flexDirection: 'column-reverse',
					'.ss__chat__header__history__chats__chat': {
						display: 'flex',
						alignItems: 'baseline',
						justifyContent: 'space-between',
						'.ss__chat__header__history__chats__chat__date': {
							fontSize: '70%',
						},
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
						padding: '1em',
						borderRadius: '1em',
						backgroundColor: 'rgba(0, 174, 239, 0.2)',
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
							padding: '1em',
							alignSelf: 'flex-end',
						},
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
					'.ss__chat__message-text__results': {
						marginTop: '12px',
						'.ss__chat__message-text__results__result': {
							'.ss__chat__result__detail-slot': {
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'stretch',
								textAlign: 'center',
								gap: 5,
							},
						},
					},
					'.ss__chat__message-text__facets': {
						display: 'flex',
						flexWrap: 'wrap',
						gap: '10px',
						margin: '10px 0 0 0',

						'.ss__chat__message-text__facets__facet': {
							display: 'flex',
							gap: '5px',
							alignItems: 'baseline',
							label: {
								fontWeight: 'bold',
							},
						},
					},
				},
				ul: {
					margin: 0,
					listStyle: 'inside',
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
				'&.ss__chat__attachment--facet': {
					paddingRight: '15px',
				},
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
	const [isViewingHistory, setIsViewingHistory] = useState(false);

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
									{store.chats.length > 1 ? (
										<Button
											className="ss__chat__history"
											icon="history"
											onClick={() => {
												setIsViewingHistory(!isViewingHistory);
											}}
										/>
									) : null}
									{store.currentChat?.chat && store.currentChat.chat.length > 1 && (
										<Button className="ss__chat__new" icon="plus-thin" onClick={() => controller.startNewChat()} />
									)}
									<Button className="ss__chat__close" icon="close-thin" onClick={() => controller.handlers.button.click()} />
								</div>
								{isViewingHistory ? (
									<div className="ss__chat__header__history">
										<div className="ss__chat__header__history__header">
											<h4>Chat History</h4>
											<Button
												icon={'trash'}
												onClick={() => {
													controller.store.reset();
													controller.search(); // TODO: combine this elsewhere
													setIsViewingHistory(false);
												}}
											/>
										</div>
										{store.chats.length > 0 ? (
											<div className="ss__chat__header__history__chats">
												{store.chats.map((chat) => (
													<div key={chat.id} className="ss__chat__header__history__chats__chat">
														<Button
															onClick={() => {
																controller.store.switchChat(chat.id);
																setIsViewingHistory(false);
															}}
															disabled={chat.id === store.currentChatId}
														>
															{chat.id === store.currentChatId ? ' Current' : `Switch`}
														</Button>
														<span className="ss__chat__header__history__chats__chat__date">{chat.createdAt.toLocaleString()}</span>
													</div>
												))}
											</div>
										) : null}
									</div>
								) : null}
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
							{!store.currentChat?.isExpired ? (
								<div className="ss__chat__footer">
									{store.error && <div className="ss__chat__error">{store.error.message}</div>}
									{store.currentChat?.actions && store.currentChat.actions.length > 0 && (
										<div className={'ss__chat__actions'}>
											{store.currentChat?.actions.map((action, index) => (
												<div key={index} className={classnames('ss__chat__actions__item')}>
													<Button
														onClick={() => {
															controller.store.inputValue = action.message;
															controller.search();
														}}
													>
														{action.message}
													</Button>
												</div>
											))}
										</div>
									)}
									{store.currentChat?.attachments.attached && store.currentChat.attachments.attached.length > 0 ? (
										<div className={'ss__chat__attachments'}>
											{store.currentChat?.attachments.attached.map((item) => (
												<Attachment key={item.id} attachment={item} controller={controller} />
											))}
										</div>
									) : null}
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
							) : (
								<div>This chat is expired. Please start a new chat.</div>
							)}
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
