import { h, Fragment } from 'preact';
import { observer } from 'mobx-react';
import { jsx, css } from '@emotion/react';

import { withController } from '@searchspring/snap-preact/components';

type GenAIProps = {
	controller?: SearchController;
	message?: string;
};

const CSS = {
	genAI: () =>
		css({
			display: 'flex',
			width: '100%',
			alignItems: 'center',
			marginBottom: '20px',
			'.ss-genai-image-search': {
				display: 'flex',
				justifyContent: 'center',
				width: '120px',
				height: '120px',
				'.ss-genai-image-outer-ring': {
					position: 'absolute',
					width: '100%',
					height: '100%',
					border: '30px solid #fff',
					borderRadius: '100%',
				},
				'.ss-genai-image-ring': {
					border: '12px solid #392f5a',
					borderRadius: '100%',
					width: '100%',
					height: '100%',
					position: 'absolute',
					boxSizing: 'border-box',
				},
				'.ss-genai-image': {
					border: '2px solid rgb(213 209 238)',
					boxSizing: 'border-box',
					borderRadius: '3px',
					maxWidth: '120px',
					maxHeight: '120px',
				},
			},
			'.ss-genai-line': {
				width: '30px',
				height: '5px',
				background: '#3a23ad',
			},
			'.ss-genai-header': {
				display: 'flex',
				padding: '10px',
				gap: '10px',
				borderRadius: '4px',
				border: '1px solid #3a23ad',
				backgroundColor: '#3a23ad0d',
				flex: 1,

				'.ss-genai-header__left': {
					margin: '6px 0 0 0',
				},

				'.ss-genai-header__title': {
					margin: '4px 0 20px 0',
				},

				'.ss-genai-header__subtitle': {
					margin: '0 30px 20px 0',
				},
			},
		}),
};

export const GenAI = withController(
	observer(({ controller, message }: GenAIProps) => {
		const displayMessage = message || controller.store?.search?.message;
		const vq = new URL(window.location.href).searchParams.get('vq');
		let searchedImage;

		if (vq) {
			const base64Image = sessionStorage.getItem('ssImageSearch');
			if (base64Image) {
				const [_, base64] = base64Image.split(';base64,');
				const base64Id = base64.slice(0, 12);
				if (vq === base64Id) {
					searchedImage = base64Image;
				}
			}
		}

		return (
			displayMessage &&
			vq && (
				<div css={[CSS.genAI()]} className="ss-genai">
					<div className="ss-genai-header">
						{searchedImage && (
							<Fragment>
								<div className="ss-genai-image-search">
									{/* <div className="ss-genai-image-outer-ring"></div> */}
									{/* <div className="ss-genai-image-ring"></div> */}
									<img className="ss-genai-image" src={searchedImage} alt="uploaded image" />
								</div>
							</Fragment>
						)}
						<div className="ss-genai-header__left">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<g clip-path="url(#clip0_576_8456)">
									<path
										d="M16 18C16.5304 18 17.0391 18.2107 17.4142 18.5858C17.7893 18.9609 18 19.4696 18 20C18 19.4696 18.2107 18.9609 18.5858 18.5858C18.9609 18.2107 19.4696 18 20 18C19.4696 18 18.9609 17.7893 18.5858 17.4142C18.2107 17.0391 18 16.5304 18 16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18ZM9 18C9 16.4087 9.63214 14.8826 10.7574 13.7574C11.8826 12.6321 13.4087 12 15 12C13.4087 12 11.8826 11.3679 10.7574 10.2426C9.63214 9.11742 9 7.5913 9 6C9 7.5913 8.36786 9.11742 7.24264 10.2426C6.11742 11.3679 4.5913 12 3 12C4.5913 12 6.11742 12.6321 7.24264 13.7574C8.36786 14.8826 9 16.4087 9 18Z"
										stroke="#3A23AD"
										stroke-width="1"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M17.4142 6.58579C17.0391 6.21071 16.5304 6 16 6C16.5304 6 17.0391 5.78929 17.4142 5.41421C17.7893 5.03914 18 4.53043 18 4C18 4.53043 18.2107 5.03914 18.5858 5.41421C18.9609 5.78929 19.4696 6 20 6C19.4696 6 18.9609 6.21071 18.5858 6.58579C18.2107 6.96086 18 7.46957 18 8C18 7.46957 17.7893 6.96086 17.4142 6.58579Z"
										stroke="#00CEE1"
										stroke-width="1"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</g>
								<defs>
									<clipPath id="clip0_576_8456">
										<rect width="24" height="24" fill="white" />
									</clipPath>
								</defs>
								<script id="snapfu-scraper" />
							</svg>
						</div>
						<div className="ss-genai-header__content">
							<h5 className="ss-genai-header__title">Visual Search</h5>
							<p className="ss-genai-header__subtitle">{displayMessage}</p>
						</div>
					</div>
				</div>
			)
		);
	})
);
