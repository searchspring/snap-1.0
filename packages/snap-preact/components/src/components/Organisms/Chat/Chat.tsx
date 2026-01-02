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
import { useRef } from 'preact/hooks';
import { Image } from '../../Atoms/Image';
import type { ImageAttachment } from '@searchspring/snap-store-mobx';
const defaultStyles: StyleScript<ChatProps> = () => {
	return css({
		position: 'fixed',
		background: 'white',
		padding: '1em',
		right: 0,
		bottom: '20px',
		minWidth: '500px',
		width: '500px',
		border: '1px solid #ccc',
		zIndex: 1000,
		display: 'flex',
		flexDirection: 'column',
		'& .ss__chat__header': {},
		'& .ss__chat__messages': {
			flex: '1 1 auto',
			overflowY: 'auto',
			marginBottom: '1em',
			border: '1px solid #eee',
			padding: '10px',
			maxHeight: '400px',
			'& .ss__chat__message': {
				marginBottom: '10px',
				padding: '8px',
				borderRadius: '4px',
				'&--user': {
					backgroundColor: '#d1e7dd',
					alignSelf: 'flex-end',
				},
				'&--bot': {
					backgroundColor: '#f8d7da',
					alignSelf: 'flex-start',
				},
			},
		},
		'& .ss__chat__actions': {},
		'& .ss__chat__input': {
			display: 'flex',
			'.ss__button': {},
			'& input': {
				flex: '1 0 auto',
				boxSizing: 'border-box',
				padding: '10px',
				border: 'none',
				borderTop: '1px solid #ccc',
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

	// const subProps: ChatSubProps = {};

	const styling = mergeStyles<ChatProps>(props, defaultStyles);

	return true ? (
		<CacheProvider>
			<div className={classnames('ss__chat', className, internalClassName)} {...styling}>
				<div className={'ss__chat__header'}>Conversation</div>
				<div className={'ss__chat__messages'}>
					{controller.store.chat.map((chatItem, index) => (
						<div
							key={index}
							className={classnames('ss__chat__message', {
								['ss__chat__message--user']: chatItem.messageType === 'user',
								['ss__chat__message--bot']: chatItem.messageType !== 'user',
								// ['ss__chat__message--productData']: chatItem.type === 'productData',
							})}
						>
							{{
								user: <Message chatItem={chatItem} controller={controller} />,
								text: <Message chatItem={chatItem} controller={controller} />,
								productSearchResult: <Message chatItem={chatItem} controller={controller} />,
							}[chatItem.messageType] || <Fragment></Fragment>}

							{/* {chatItem.type}: {chatItem.payload.value}
							{chatItem.attachments && chatItem.attachments.length > 0 ? (
								<div>
									Attachments:
									<ul>
										{chatItem.attachments.map((attachmentId: string) => {
											const attachment = store.attachments.get(attachmentId);
											switch (attachment?.type) {
												case 'image':
													return (
														<li key={attachment.id}>
															<Image style={{ height: '50px', width: '50px' }} src={attachment.base64 ||attachment.thumbnailUrl} alt={''}></Image>
														</li>
													);
											}
										})}
									</ul>
								</div>
							) : null} */}
						</div>
					))}
				</div>
				{store.loading ? <div>Loading...</div> : null}
				{/* <div className={'ss__chat__actions'}>
					{controller.store.genericOptions.map((option, index) => (
						<Button
							key={index}
							onClick={() => {
								if (option.type === 'message' && option.chat) {
									controller.store.inputValue = option.chat;
									controller.search();
								} else if (option.type === 'clearChat') {
									controller.store.chat = [];
								}
							}}
						>
							{option.name}
						</Button>
					))}
				</div> */}
				<div className={'ss__chat__attachments'}>
					{store.attachments.attached.map((item) => (
						<div key={item.id} className={'ss__chat__attachment'}>
							{{
								image: <AttachmentImage attachment={item} controller={controller} />,
							}[item.type] || <Fragment></Fragment>}
						</div>
					))}
				</div>
				<div className={'ss__chat__input'}>
					{/* <input type="text" placeholder="Type your message..." onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => handleOnChange(e as any)} /> */}
					<input
						type="text"
						placeholder="Type your message..."
						onKeyUp={(e) => controller.handlers.input.input(e as any)}
						onKeyDown={(e) => controller.handlers.input.enterKey(e as any)}
						value={controller.store.inputValue}
					/>
					<Button disabled={store.blocked} onClick={() => controller.search()}>
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
		</CacheProvider>
	) : (
		<Fragment></Fragment>
	);
});

const AttachmentImage = observer((props: { attachment: ImageAttachment; controller: ChatController }) => {
	const { attachment, controller } = props;
	const chatStore = controller.store;

	const src = attachment.base64 || attachment.thumbnailUrl;
	return src ? (
		<div>
			<Image style={{ height: '50px', width: '50px' }} src={src} alt={''}></Image>
			<Button onClick={() => chatStore.attachments.remove(attachment.id)}>X</Button>
		</div>
	) : null;
});

const Message = observer((props: { chatItem: any; controller: ChatController }) => {
	const { controller, chatItem } = props;
	const { store } = controller;

	return (
		<div>
			<span>{chatItem.text}</span>

			<ul>
				{chatItem.attachments?.length
					? chatItem.attachments?.map((attachmentId: string) => {
							const attachment = store.attachments.get(attachmentId);
							switch (attachment?.type) {
								case 'image':
									return (
										<li key={attachment.id}>
											<Image style={{ height: '50px', width: '50px' }} src={attachment.base64 || attachment.thumbnailUrl || ''} alt={''}></Image>
										</li>
									);
							}
					  })
					: null}
			</ul>
		</div>
	);
});

// interface ChatSubProps {
// 	[thing: string]: any;
// }
export interface ChatProps extends ComponentProps {
	controller: ChatController;
}
