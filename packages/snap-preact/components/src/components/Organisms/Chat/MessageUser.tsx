import { ChatController } from '@searchspring/snap-controller';
import { observer } from 'mobx-react-lite';
import { Image } from '../../Atoms/Image';
import { marked } from 'marked';

export const MessageUser = observer((props: MessageUserProps) => {
	const { controller, chatItem } = props;
	const { store } = controller;

	return (
		<div className="ss__chat__message-user">
			<ul className="ss__chat__message-user__attachments">
				{chatItem.attachments?.length
					? chatItem.attachments?.map((attachmentId: string) => {
							const attachment = store.currentChat?.attachments.get(attachmentId);
							switch (attachment?.type) {
								case 'image':
									return (
										<li className="ss__chat__message-user__attachment__image" key={attachment.id}>
											<Image style={{ height: '200px', width: '200px' }} src={attachment.base64 || attachment.thumbnailUrl || ''} alt={''}></Image>
										</li>
									);
								case 'product':
									return (
										<li className="ss__chat__message-user__attachment__product" key={attachment.id}>
											Product Attachment: {attachment.id}
										</li>
									);
								default:
									return null;
							}
					  })
					: null}
			</ul>
			<div className="ss__chat__message-user__text" dangerouslySetInnerHTML={{ __html: marked.parse(chatItem.text) as string }}></div>
		</div>
	);
});

interface MessageUserProps {
	chatItem: any;
	controller: ChatController;
}
