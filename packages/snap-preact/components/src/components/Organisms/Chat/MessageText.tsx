import { observer } from 'mobx-react-lite';
import classnames from 'classnames';
import { ResultsDisplay } from './ResultsDisplay';
import { marked } from 'marked';
import { ChatController } from '@athoscommerce/snap-controller';
import { css, StyleScript } from '../../..';
import { mergeStyles } from '../../../utilities';
import { Button } from '../../Atoms/Button';

const defaultStyles: StyleScript<MessageTextProps> = ({ primaryColor, primaryColorText }) => {
	const colorPrimary = primaryColor || '#253B80';
	const colorPrimaryText = primaryColorText || '#fff';
	return css({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		gap: '5px',
		background: '#fff',
		padding: '1em',
		borderRadius: '1em',
		borderBottomLeftRadius: '3px',

		'.ss__chat__message-text__text-wrapper': {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'center',
			gap: '8px',
			'.ss__chat__message-text__text-wrapper__text': {
				alignSelf: 'flex-end',
			},
			'.ss__chat__message-text__view-side-chat': {
				marginLeft: 'auto',
				flex: '0 0 auto',
				width: '2em',
				height: '2em',
				padding: 0,
				borderRadius: '50%',
				border: `1px solid ${colorPrimary}`,
				background: '#fff',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				cursor: 'pointer',
				svg: {
					fill: colorPrimary,
					stroke: colorPrimary,
				},
				'&.ss__chat__message-text__view-side-chat--active': {
					background: colorPrimary,
					svg: {
						fill: colorPrimaryText,
						stroke: colorPrimaryText,
					},
				},
			},
		},
		'.ss__chat__message-text__show-details': {
			alignSelf: 'flex-start',
			border: `1px solid ${colorPrimary}`,
			background: '#fff',
			color: colorPrimary,
			borderRadius: '999px',
			padding: '6px 16px',
			fontSize: '14px',
			fontWeight: 500,
			cursor: 'pointer',
			display: 'flex',
			alignItems: 'center',
			gap: '6px',
			marginTop: '4px',
			'&:not(.ss__button--disabled):hover': {
				background: colorPrimary,
				color: colorPrimaryText,
				svg: {
					fill: colorPrimaryText,
					stroke: colorPrimaryText,
				},
			},
			svg: {
				fill: colorPrimary,
				stroke: colorPrimary,
			},
		},
		'.ss__chat__message-text__results': {
			marginTop: '12px',
			'.swiper-container': {
				alignItems: 'center',
				gap: '5px',
				'.swiper-wrapper': {},
				'.swiper-scrollbar': {
					position: 'static',
					width: '95%',
					height: '6px',
					borderRadius: '6px',
					'.swiper-scrollbar-drag': {
						borderRadius: '6px',
					},
				},
				'.swiper-pagination-lock': {
					display: 'none !important',
				},
			},
			'.ss__carousel__next-wrapper, .ss__carousel__prev-wrapper': {
				svg: {
					fill: colorPrimary,
					stroke: colorPrimary,
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
	});
};

export const MessageText = observer((props: MessageTextProps) => {
	const { controller, chatItem, scrollToBottom, onProductQuickView, showDetailsButton } = props;

	const styling = mergeStyles<MessageTextProps>(props, defaultStyles);

	const text =
		chatItem.overallSummary || chatItem.text || chatItem.comparisonData?.summary || chatItem.errorMessage || chatItem.messageForDrift || '';
	const currentChat = controller.store.currentChat;
	const sideChatLabels: Record<string, { open: string; close: string }> = {
		inspirationResult: { open: 'View inspiration', close: 'Close inspiration' },
		productComparison: { open: 'View comparison', close: 'Close comparison' },
	};
	const sideChatLabel = sideChatLabels[chatItem?.messageType as string];
	const hasSideChatView = !!sideChatLabel && !!chatItem?.id;
	const isSideChatActive = hasSideChatView && !!props.sideChatOpen && currentChat?.activeMessage?.id === chatItem.id;

	// Show the prominent "Show Details" button when requested (e.g. mobile subsequent comparisons)
	const shouldShowDetailsButton = showDetailsButton && chatItem?.messageType === 'productComparison' && !isSideChatActive;

	return (
		<div className="ss__chat__message-text" {...styling}>
			{text && (
				<div className="ss__chat__message-text__text-wrapper">
					<div className="ss__chat__message-text__text-wrapper__text" dangerouslySetInnerHTML={{ __html: marked.parse(text) as string }}></div>
					{hasSideChatView ? (
						<Button
							className={classnames('ss__chat__message-text__view-side-chat', {
								'ss__chat__message-text__view-side-chat--active': isSideChatActive,
							})}
							icon={{
								icon: isSideChatActive ? 'close-thin' : 'angle-right',
								title: isSideChatActive ? sideChatLabel.close : sideChatLabel.open,
							}}
							onClick={() => {
								if (isSideChatActive) {
									currentChat?.dismissSideChat();
								} else {
									currentChat?.setActiveMessage(chatItem.id);
								}
							}}
						/>
					) : null}
				</div>
			)}
			{shouldShowDetailsButton && (
				<Button
					className="ss__chat__message-text__show-details"
					icon={{ icon: 'angle-right', title: 'Show Details' }}
					onClick={() => {
						currentChat?.setActiveMessage(chatItem.id);
					}}
				>
					Show Details
				</Button>
			)}
			{chatItem && (
				<ResultsDisplay controller={controller} chatItem={chatItem} scrollToBottom={scrollToBottom} onProductQuickView={onProductQuickView} />
			)}
			{/* <FacetsDisplay controller={controller} chatItem={chatItem} scrollToBottom={scrollToBottom} /> */}
		</div>
	);
});

// const FacetsDisplay = observer((props: MessageProps) => {
// 	const { chatItem, controller } = props;
// 	const { facets } = chatItem;

// 	if (!facets || facets.length === 0) {
// 		return null;
// 	}

// 	return (
// 		<div className="ss__chat__message-text__facets">
// 			{facets.map((facet: any) => (
// 				<span key={facet.key} className="ss__chat__message-text__facets__facet">
// 					<label>{facet.label}:</label>
// 					{facet.options.map((option: any) => (
// 						<Button
// 							key={option.key}
// 							onClick={() => {
// 								controller.store.sendFacet({
// 									key: facet.key,
// 									facetLabel: facet.label,
// 									value: option.key,
// 									label: option.label,
// 									count: option.count,
// 								});
// 							}}
// 						>
// 							{option.label}
// 						</Button>
// 					))}
// 				</span>
// 			))}
// 		</div>
// 	);
// });

export interface MessageTextProps {
	chatItem: any;
	controller: ChatController;
	scrollToBottom: () => void;
	onProductQuickView?: () => void;
	showDetailsButton?: boolean;
	sideChatOpen?: boolean;
	primaryColor?: string;
	primaryColorText?: string;
}
