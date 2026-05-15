import { h } from 'preact';
import { render } from '@testing-library/preact';
import { ChatMessageText } from './ChatMessageText';

describe('ChatMessageText Component', () => {
	const makeController = () =>
		({
			store: {
				currentChat: { activeMessage: undefined },
			},
			track: { product: { click: () => {}, addToCart: () => {} } },
			productQuickView: () => {},
		} as any);

	it('renders', () => {
		const rendered = render(
			<ChatMessageText
				chatItem={{ id: '1', text: 'Hello world', messageType: 'general' }}
				controller={makeController()}
				scrollToBottom={() => undefined}
			/>
		);
		expect(rendered.container.querySelector('.ss__chat-message-text')).toBeInTheDocument();
	});

	it('renders the chatItem text', () => {
		const rendered = render(
			<ChatMessageText
				chatItem={{ id: '1', text: 'Hello world', messageType: 'general' }}
				controller={makeController()}
				scrollToBottom={() => undefined}
			/>
		);
		// marked wraps text in a paragraph; just check the substring exists
		expect(rendered.container.textContent).toContain('Hello world');
	});

	it('renders the side-chat toggle button for inspirationResult messages', () => {
		const rendered = render(
			<ChatMessageText
				chatItem={{ id: '1', text: 'Inspiration', messageType: 'inspirationResult' }}
				controller={makeController()}
				scrollToBottom={() => undefined}
			/>
		);
		expect(rendered.container.querySelector('.ss__chat-message-text__view-side-chat')).toBeInTheDocument();
	});
});
