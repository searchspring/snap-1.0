import { ChatController } from '@searchspring/snap-controller';
import { Product } from '@searchspring/snap-store-mobx';
import { observer } from 'mobx-react-lite';
import { Image, ImageProps } from '../../Atoms/Image';
import { Button, ButtonProps } from '../../Atoms/Button';
import { mergeProps, mergeStyles } from '../../../utilities';
import { css, Theme, useTheme, useTreePath } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';

const defaultStyles: StyleScript<ChatResultProps> = () => {
	return css({});
};

export const ChatResult = observer((properties: ChatResultProps): JSX.Element => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatResultProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('chatResult', globalTheme, defaultProps, properties);

	const { controller, result, scrollToBottom } = props;

	const shouldCompare = controller.store.currentChat?.attachments.items.some(
		(attachment) => attachment.type === 'product' && attachment.state === 'active' && (attachment as any).productId !== result.id
	);

	const subProps: ChatResultSubProps = {
		button: {
			// component theme overrides
			theme: props.theme,
			// treePath,
		},
		image: {
			lazy: false,
			onLoad: scrollToBottom,
			// component theme overrides
			theme: props.theme,
			// treePath,
		},
	};

	const styling = mergeStyles<ChatResultProps>(properties, defaultStyles);

	return (
		<div className="ss__chat__result" {...styling}>
			<Image
				onClick={() => {
					console.log('got here');
					controller.viewProduct(result);
				}}
				className={'ss__chat__result__detail-slot__image'}
				alt={result.mappings.core?.name || ''}
				src={result.mappings.core?.imageUrl || ''}
				{...subProps.image}
			/>
			<div className="ss__chat__result__detail-slot">
				<Button
					className={'ss__chat__result__detail-slot__more-info-button'}
					onClick={() => {
						controller.viewProduct(result);
					}}
					icon={'info'}
					name={'More Info'}
				/>
				<Button
					onClick={() => {
						controller.discussProduct(result, { requestType: shouldCompare ? 'productComparison' : 'productQuery' });
					}}
					icon={'chat'}
					name={shouldCompare ? 'Compare' : 'Discuss'}
				/>
				<Button
					onClick={() => {
						controller.discussProduct(result, { requestType: 'productSimilar' });
					}}
					icon={'similar'}
					name={'Show Similar'}
				/>
			</div>
		</div>
	);
});

interface ChatResultSubProps {
	button: Partial<ButtonProps>;
	image: Partial<ImageProps>;
}
interface ChatResultProps extends ComponentProps {
	result: Product;
	controller: ChatController;
	scrollToBottom: () => void;
}
