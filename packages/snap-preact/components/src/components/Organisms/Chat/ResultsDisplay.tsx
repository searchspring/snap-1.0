import { observer } from 'mobx-react-lite';
import { Carousel, CarouselProps } from '../../Molecules/Carousel';
import { ChatResult } from './ChatResult';
import { ChatController } from '@searchspring/snap-controller';

export const ResultsDisplay = observer((props: ResultsDisplayProps) => {
	const { chatItem, controller, scrollToBottom } = props;
	const carouselProps: Partial<CarouselProps> = {
		breakpoints: undefined,
		slidesPerView: 3,
		slidesPerGroup: 1,
		loop: Boolean(chatItem.results?.length > 3),
	};

	return chatItem.results?.length > 0 ? (
		<div className="ss__chat__message-text__results" style={{ width: '100%' }}>
			<Carousel {...carouselProps}>
				{chatItem.results.map((result: any) => (
					<div key={result.id} className="ss__chat__message-text__results__result">
						<ChatResult result={result} controller={controller} scrollToBottom={scrollToBottom} />
					</div>
				))}
			</Carousel>
		</div>
	) : null;
});

export interface ResultsDisplayProps {
	chatItem: any;
	controller: ChatController;
	scrollToBottom: () => void;
}
