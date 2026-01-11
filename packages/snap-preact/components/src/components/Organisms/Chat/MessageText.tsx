import { observer } from 'mobx-react-lite';
import { Icon } from '../../Atoms/Icon';
import { ResultsDisplay } from './ResultsDisplay';
import { marked } from 'marked';
import { ChatController } from '@searchspring/snap-controller';
// import { Button } from '../../..';

export const MessageText = observer((props: MessageTextProps) => {
	const { controller, chatItem, scrollToBottom } = props;

	const feedbackEntry = controller.store.currentChat?.feedbacks.find((fb) => fb.messageId === chatItem.id);

	return (
		<div className="ss__chat__message-text">
			<div className="ss__chat__message-text__text-wrapper">
				<div className="ss__chat__message-text__text-wrapper__text" dangerouslySetInnerHTML={{ __html: marked.parse(chatItem.text) as string }}></div>
			</div>
			{chatItem?.collectFeedback ? (
				<div className="ss__chat__message-text__text-wrapper__feedback">
					<span onClick={() => controller.feedback(chatItem, 'UP')}>
						<Icon icon="thumbs-up" color={feedbackEntry?.rating === 'UP' ? '#000' : '#aaa'} />
					</span>
					<span onClick={() => controller.feedback(chatItem, 'DOWN')}>
						<Icon icon="thumbs-down" color={feedbackEntry?.rating === 'DOWN' ? '#000' : '#aaa'} />
					</span>
				</div>
			) : null}
			{chatItem && <ResultsDisplay controller={controller} chatItem={chatItem} scrollToBottom={scrollToBottom} />}
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
}
