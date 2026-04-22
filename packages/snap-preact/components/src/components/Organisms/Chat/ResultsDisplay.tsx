import { observer } from 'mobx-react-lite';
import { css } from '@emotion/react';
import { Carousel, CarouselProps } from '../../Molecules/Carousel';
import { ChatResult } from './ChatResult';
import { ChatController } from '@athoscommerce/snap-controller';

const carouselStyleScript = () => {
	return css({
		position: 'relative',

		'.ss__carousel__prev-wrapper, .ss__carousel__next-wrapper': {
			position: 'absolute',
			top: '50%',
			transform: 'translateY(-50%)',
			zIndex: 9,

			'.ss__carousel__prev, .ss__carousel__next': {
				background: 'rgba(255, 255, 255, 0.85)',
				borderRadius: '50%',
				width: '2em',
				height: '2em',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
			},
		},
		'.ss__carousel__prev-wrapper': {
			left: 0,
		},
		'.ss__carousel__next-wrapper': {
			right: 0,
		},
	});
};

export const ResultsDisplay = observer((props: ResultsDisplayProps) => {
	const { chatItem, controller, scrollToBottom, onViewProduct } = props;
	const currentChat = controller.store.currentChat;
	const activeMessage = currentChat?.activeMessage;
	const isSideChatOpen =
		!!activeMessage &&
		['inspirationResult', 'productComparison', 'productQuery'].includes(activeMessage.messageType) &&
		currentChat?.dismissedSideChatMessageId !== activeMessage.id;

	const isNarrow = typeof window !== 'undefined' && window.innerWidth < 550;
	const isConstrained = !isNarrow && isSideChatOpen && typeof window !== 'undefined' && window.innerWidth >= 768;
	const slidesPerView = isNarrow || isConstrained ? 1.9 : 2.9;
	const carouselProps: Partial<CarouselProps> = {
		breakpoints: undefined,
		slidesPerView,
		slidesPerGroup: isNarrow || isConstrained ? 2 : 3,
		loop: false,
		pagination: false,
		centerInsufficientSlides: false,
		freeMode: true,
		styleScript: carouselStyleScript,
	};

	const handleResultClick = (e: MouseEvent, result: any) => {
		// buttons should be able to be clicked without triggering the product click
		if (e.composedPath().some((el) => el instanceof HTMLElement && el.matches('button, .ss__button, a'))) return;
		controller.viewProduct(result);
		onViewProduct?.();
	};

	if (chatItem.messageType === 'productRecommendation' && chatItem.recommendationResult?.length) {
		return (
			<>
				{chatItem.recommendationResult.map((recommendation: any, index: number) => {
					return recommendation.results?.length > 0 ? (
						<div key={index} className="ss__chat__message-text__results" style={{ width: '100%' }}>
							<Carousel {...carouselProps} hideButtons={recommendation.results.length <= slidesPerView}>
								{recommendation.results.map((result: any) => {
									return (
										<div
											key={result.id}
											className="ss__chat__message-text__results__result"
											style={{ height: '100%', width: '100%', display: 'flex', cursor: 'pointer' }}
											onClick={(e: any) => handleResultClick(e, result)}
										>
											<ChatResult result={result} controller={controller} scrollToBottom={scrollToBottom} />
										</div>
									);
								})}
							</Carousel>
						</div>
					) : null;
				})}
			</>
		);
	}

	return chatItem.results?.length > 0 ? (
		<div className="ss__chat__message-text__results" style={{ width: '100%' }}>
			<Carousel {...carouselProps} hideButtons={chatItem.results.length <= slidesPerView}>
				{chatItem.results.map((result: any) => {
					return (
						<div
							key={result.id}
							className="ss__chat__message-text__results__result"
							style={{ height: '100%', width: '100%', display: 'flex', cursor: 'pointer' }}
							onClick={(e: any) => handleResultClick(e, result)}
						>
							<ChatResult result={result} controller={controller} scrollToBottom={scrollToBottom} />
						</div>
					);
				})}
			</Carousel>
		</div>
	) : null;
});

export interface ResultsDisplayProps {
	chatItem: any;
	controller: ChatController;
	scrollToBottom: () => void;
	onViewProduct?: () => void;
}
