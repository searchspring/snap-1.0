import { ChatController } from '@athoscommerce/snap-controller';
import { observer } from 'mobx-react-lite';
import classnames from 'classnames';
import { Image } from '../../Atoms/Image';
import { marked } from 'marked';
import { Icon } from '../../Atoms/Icon';
import { css, StyleScript } from '../../..';
import { mergeStyles } from '../../../utilities';

const defaultStyles: StyleScript<MessageUserProps> = () => {
	const colorPrimary = '#253B80';
	return css({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		marginLeft: '40px',
		'.ss__chat__message-user__request-type': {
			fontStyle: 'italic',
			color: '#999',
			fontSize: '0.8em',
			marginBottom: '4px',
			textAlign: 'right',
		},
		'.ss__chat__message-user__row': {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'flex-end',
			alignItems: 'center',
			gap: '10px',
		},
		'.ss__chat__message-user__text': {
			padding: '0.5em 1em',
			borderRadius: '12px',
			borderBottomRightRadius: '3px',
			backgroundColor: colorPrimary,
			color: '#fff',
		},
		'.ss__chat__message-user__attachments': {
			listStyleType: 'none',
			padding: 0,
			margin: 0,
			display: 'flex',
			gap: '8px',
			flexWrap: 'nowrap',
			justifyContent: 'flex-end',
			'.ss__chat__message-user__attachment__product, .ss__chat__message-user__attachment__image, .ss__chat__message-user__attachment__facet': {
				width: '40px',
				height: '40px',
				borderRadius: '50%',
				border: '2px solid #eee',
				overflow: 'hidden',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				'.ss__image': {
					aspectRatio: '1 / 1',
					width: '100%',
					height: '100%',
				},
				'.ss__icon': {
					display: 'flex',
				},
			},
			'.ss__chat__message-user__attachment__product--clickable': {
				cursor: 'pointer',
				transition: 'border-color 0.15s ease',
				'&:hover': {
					borderColor: colorPrimary,
				},
			},
		},
	});
};

function getRequestTypeLabel(chatItem: any): string | undefined {
	const requestType = chatItem.requestType;
	if (!requestType || requestType === 'general') return undefined;

	switch (requestType) {
		case 'productQuery':
			return 'Asking about product';
		case 'productComparison':
			return 'Comparing products';
		case 'productSearch':
			return 'Filtering products';
		case 'imageSearch':
			return 'Searching by image';
		case 'productSimilar':
			return 'Finding similar products';
		default:
			return undefined;
	}
}

function findProductInChat(chat: any[] | undefined, productId: string): any | null {
	if (!chat || !productId) return null;
	for (const msg of chat) {
		if ((msg.messageType === 'productQuery' || msg.messageType === 'productAnswer') && msg.sourceProduct?.id === productId) {
			return msg.sourceProduct;
		}
		const candidateLists: any[] = [];
		if (Array.isArray(msg.results)) candidateLists.push(msg.results);
		if (Array.isArray(msg.searchResults)) candidateLists.push(msg.searchResults);
		if (Array.isArray(msg.inspirationSections)) {
			msg.inspirationSections.forEach((section: any) => {
				if (Array.isArray(section.products)) candidateLists.push(section.products);
			});
		}
		if (Array.isArray(msg.recommendationResult)) {
			msg.recommendationResult.forEach((rec: any) => {
				if (Array.isArray(rec.results)) candidateLists.push(rec.results);
			});
		}
		for (const list of candidateLists) {
			const match = list.find((r: any) => r?.id === productId);
			if (match) return match;
		}
	}
	return null;
}

export const MessageUser = observer((props: MessageUserProps) => {
	const { controller, chatItem, onViewProduct } = props;
	const { store } = controller;
	const styling = mergeStyles<MessageUserProps>(props, defaultStyles);
	const requestTypeLabel = getRequestTypeLabel(chatItem);

	const handleProductAttachmentClick = (attachment: any) => {
		if (!attachment?.productId) return;
		const chat = store.currentChat?.chat;
		const existingQuery = chat?.find((m: any) => m.messageType === 'productQuery' && m.sourceProduct?.id === attachment.productId) as any;
		if (existingQuery) {
			store.currentChat?.setActiveMessage(existingQuery.id);
			onViewProduct?.(existingQuery.sourceProduct);
			return;
		}
		const product = findProductInChat(chat, attachment.productId);
		if (product) {
			controller.viewProduct(product);
			onViewProduct?.(product);
		}
	};

	return (
		<div className="ss__chat__message-user" {...styling}>
			{requestTypeLabel ? <div className="ss__chat__message-user__request-type">{requestTypeLabel}</div> : null}
			<div className="ss__chat__message-user__row">
				<ul className="ss__chat__message-user__attachments">
					{chatItem.attachments?.length
						? chatItem.attachments?.map((attachmentId: string) => {
								const attachment = store.currentChat?.attachments.get(attachmentId);
								switch (attachment?.type) {
									case 'image':
										return (
											<li className="ss__chat__message-user__attachment__image" key={attachment.id}>
												<Image style={{ height: '200px', width: '200px' }} src={attachment.thumbnailUrl || attachment.base64 || ''} alt={''}></Image>
											</li>
										);
									case 'product': {
										const canOpen = !!findProductInChat(store.currentChat?.chat, attachment.productId);
										return (
											<li
												className={classnames('ss__chat__message-user__attachment__product', {
													'ss__chat__message-user__attachment__product--clickable': canOpen,
												})}
												key={attachment.id}
												onClick={canOpen ? () => handleProductAttachmentClick(attachment) : undefined}
												title={canOpen ? `View details for ${attachment.name}` : undefined}
											>
												<Image style={{ height: '200px', width: '200px' }} src={attachment.thumbnailUrl || ''} alt={attachment.name}></Image>
											</li>
										);
									}
									case 'facet':
										return (
											<li className="ss__chat__message-user__attachment__facet" key={attachment.id}>
												<Icon title={`Filter: ${attachment.facetLabel} = ${attachment.label}`} icon="filter-funnel" size={27} />
											</li>
										);
									default:
										return null;
								}
						  })
						: null}
				</ul>
				{chatItem.text ? (
					<div className="ss__chat__message-user__text" dangerouslySetInnerHTML={{ __html: marked.parse(chatItem.text) as string }}></div>
				) : null}
			</div>
		</div>
	);
});

interface MessageUserProps {
	chatItem: any;
	controller: ChatController;
	onViewProduct?: (product: any) => void;
}
