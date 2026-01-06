import { observer } from 'mobx-react-lite';
import { Icon } from '../../Atoms/Icon';
import { ResultsDisplay } from './ResultsDisplay';
import { MessageProps } from './Chat';
import { marked } from 'marked';

export const MessageText = observer((props: MessageProps) => {
	const { controller, chatItem, scrollToBottom } = props;

	return (
		<div className="ss__chat__message-text">
			<div className="ss__chat__message-text__text-wrapper">
				<div className="ss__chat__message-text__text-wrapper__text" dangerouslySetInnerHTML={{ __html: marked.parse(chatItem.text) as string }}></div>
				{chatItem.collectFeedback ? (
					<div className="ss__chat__message-text__text-wrapper__feedback">
						<span
							onClick={() => {
								controller.feedback(chatItem, 'UP');
								chatItem.feedback = 'UP';
							}}
						>
							<Icon icon="chevron-up" color={chatItem.feedback === 'UP' ? '#000' : '#aaa'} />
						</span>
						<span onClick={() => controller.feedback(chatItem, 'DOWN')}>
							<Icon icon="chevron-down" color={chatItem.feedback === 'DOWN' ? '#000' : '#aaa'} />
						</span>
					</div>
				) : null}
			</div>
			<ResultsDisplay controller={controller} chatItem={chatItem} scrollToBottom={scrollToBottom} />
		</div>
	);
});
