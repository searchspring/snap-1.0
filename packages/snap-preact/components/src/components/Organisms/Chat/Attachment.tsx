import { h } from 'preact';
import { jsx } from '@emotion/react';
import { ChatController } from '@searchspring/snap-controller';
import { ChatAttachmentFacet, ChatAttachmentImage, ChatAttachmentProduct } from '@searchspring/snap-store-mobx';
import { observer } from 'mobx-react-lite';
import { Image } from '../../Atoms/Image';

export const Attachment = observer((properties: AttachmentProps): JSX.Element => {
	const { attachment, controller } = properties;

	const { id } = attachment;

	const type = attachment.type;

	const chatStore = controller.store.currentChat;

	const isLoading = attachment.state === 'loading';
	const hasError = !!attachment.error;

	if (type == 'image') {
		const src = (attachment as ChatAttachmentImage).base64 || (attachment as ChatAttachmentImage).thumbnailUrl;

		if (hasError) {
			return (
				<>
					<div className={'ss__chat__attachment__error'}>
						<div className={'ss__chat__attachment__error-icon'}>⚠</div>
						<div className={'ss__chat__attachment__error-message'}>{attachment.error?.message || 'upload failed'}</div>
					</div>
					<div className={'ss__chat__attachment__remove'} onClick={() => chatStore?.attachments.remove(id)}>
						×
					</div>
				</>
			);
		}

		return src || isLoading ? (
			<>
				<div className={'ss__chat__attachment__content'}>
					{src && <Image className={isLoading ? 'loading' : ''} style={{ height: '50px', width: '50px' }} src={src} alt={''} />}
					{isLoading && (
						<div className={'ss__chat__attachment__loading'}>
							<div className={'ss__chat__loading__dot'}></div>
							<div className={'ss__chat__loading__dot'}></div>
							<div className={'ss__chat__loading__dot'}></div>
						</div>
					)}
				</div>
				{!isLoading && (
					<div className={'ss__chat__attachment__remove'} onClick={() => chatStore?.attachments.remove(id)}>
						×
					</div>
				)}
			</>
		) : (
			<></>
		);
	} else if (type == 'product') {
		const { name, thumbnailUrl } = attachment;
		return id ? (
			<>
				<div className={'ss__chat__attachment__content'}>
					{thumbnailUrl && <Image style={{ height: '50px', width: '50px' }} src={thumbnailUrl} alt={name} />}
				</div>
				<div className={'ss__chat__attachment__remove'} onClick={() => chatStore?.attachments.remove(id)}>
					×
				</div>
			</>
		) : (
			<></>
		);
	} else if (type == 'facet') {
		const { facetLabel, label, count } = attachment;
		return id ? (
			<>
				<div className={'ss__chat__attachment__content'}>
					Filter: {facetLabel} = {label} {count !== undefined ? `(${count})` : ''}
				</div>
				<div className={'ss__chat__attachment__remove'} onClick={() => chatStore?.attachments.remove(id)}>
					×
				</div>
			</>
		) : (
			<></>
		);
	} else {
		return <></>;
	}
});

interface AttachmentProps {
	attachment: ChatAttachmentImage | ChatAttachmentProduct | ChatAttachmentFacet;
	controller: ChatController;
}
