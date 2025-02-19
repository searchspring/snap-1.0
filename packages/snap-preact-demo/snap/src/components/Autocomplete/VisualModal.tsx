import { Fragment, h } from 'preact';
import { useRef, useState } from 'preact/hooks';
import { jsx, css } from '@emotion/react';
import { useClickOutside } from '@searchspring/snap-preact/components';
import classnames from 'classnames';

type VisualModalProps = {
	controller: AutocompleteController;
	visible: boolean;
	toggleVisible: (visible: boolean) => void;
};

const CSS = {
	visualModal: () =>
		css({
			position: 'absolute',
			border: '1px solid #ebebeb',
			background: '#ffffff',
			top: '41px',
			right: '-41px',
			zIndex: 10003,
			'.ss__autocomplete__visual-modal__content__header': {
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				padding: '10px',
				'.ss__autocomplete__visual-modal__content__header__close': {
					cursor: 'pointer',
				},
			},
			'.ss__autocomplete__visual-modal__content__body': {
				position: 'relative',
				padding: '10px',
			},
			'.ss__autocomplete__visual-modal__content__body__upload': {
				position: 'relative',
				width: '200px',
				height: '240px',
				background: '#f8f8f8',
				border: '1px solid #ebebeb',
				borderRadius: '3px',
				boxSizing: 'border-box',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				textTransform: 'uppercase',
				color: '#ccc',
				'.ss__autocomplete__visual-modal__content__body__upload__icon': {
					fontSize: '100px',
					color: '#ebebeb',
				},
				'.ss__autocomplete__visual-modal__content__body__upload__button': {
					padding: '5px 25px',
					background: '#392f5a',
					cursor: 'pointer',
					color: '#fff',
					fontSize: '12px',
					textAlign: 'center',
					borderRadius: '3px',
				},
				'&.ss__autocomplete__visual-modal__content__body__upload--dragon': {
					border: '1px dashed #7061a9',
					background: '#f8f8f8',
				},
				'&.ss__autocomplete__visual-modal__content__body__upload--uploaded': {
					border: 'none',
					background: 'none',
					'.ss__autocomplete__visual-modal__content__body__upload__icon, .ss__autocomplete__visual-modal__content__body__upload__button, .ss__autocomplete__visual-modal__content__body__upload__text':
						{
							display: 'none',
						},
				},
				'&:hover .ss__autocomplete__visual-modal__content__body__image__remove': {
					opacity: 0.5,
				},
			},
			'.ss__autocomplete__visual-modal__content__body__image': {
				maxHeight: '100%',
				maxWidth: '100%',
			},
			'.ss__autocomplete__visual-modal__content__body__image__remove': {
				cursor: 'pointer',
				transition: '0.3s',
				position: 'absolute',
				width: '100%',
				height: '100%',
				fontSize: '60px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				color: '#fff',
				borderRadius: '3px',
				backgroundColor: '#000',
				opacity: 0,
			},
			'.ss__autocomplete__visual-modal__content__body__file-input': {
				display: 'none',
			},
			'.ss__autocomplete__visual-modal__content__body__search': {
				width: '100%',
				marginTop: '10px',
				padding: '10px',
				background: '#7061a9',
				borderRadius: '3px',
				color: '#fff',
				border: 'none',
				cursor: 'pointer',
				'&:hover': {
					background: '#392f5a',
				},
				'&:disabled': {
					opacity: 0.3,
					cursor: 'not-allowed',
				},
			},
		}),
};

export const VisualModal = (props: VisualModalProps) => {
	const { controller, visible, toggleVisible } = props;
	const [file, setFile] = useState<null | string>(null);
	const [dragOn, setDragOn] = useState(false);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const storeImage = async (file: File) => {
		const base64Image = await convertToBase64(file);
		if (base64Image) setFile(base64Image);
	};

	const upload = async (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
		if (!file) return;

		let input: string | Element | null = controller.config.selector;
		if (typeof input === 'string') {
			input = document.querySelector(input);
		}

		input.setAttribute('name', 'vq');
		e.stopPropagation();
		e.preventDefault();

		const [_, base64] = file.split(';base64,');
		const base64Id = base64.slice(0, 12);

		// store base64Image to sessionStorage 'ssImageSearch'
		sessionStorage.setItem('ssImageSearch', file);

		// @ts-ignore - form is not a valid property on EventTarget
		const form = e.target.form;
		form.vq.value = base64Id;
		form.submit();
	};

	const removeFile = () => {
		setFile(null);
		fileInputRef.current.value = '';
	};

	const innerRef = useClickOutside(() => toggleVisible(false));

	const handleDrop = (e) => {
		e.preventDefault();
		setDragOn(false);
		storeImage(e.dataTransfer.files[0]);
	};

	return (
		visible && (
			<div ref={innerRef as React.LegacyRef<HTMLDivElement>} css={[CSS.visualModal()]} className="ss__autocomplete__visual-modal">
				<div className="ss__autocomplete__visual-modal__content">
					{/* <div className="ss__autocomplete__visual-modal__content__header">
						<h4></h4>
						<div className="ss__autocomplete__visual-modal__content__header__close" onClick={() => close()}>
							<i className="fas fa-times"></i>
						</div>
					</div> */}

					<div className="ss__autocomplete__visual-modal__content__body">
						<input
							ref={fileInputRef}
							onChange={(e) => {
								storeImage(e.target.files[0]);
							}}
							type="file"
							id="ss-image-upload"
							className="ss__autocomplete__visual-modal__content__body__file-input"
						/>

						<div
							className={classnames('ss__autocomplete__visual-modal__content__body__upload', {
								'ss__autocomplete__visual-modal__content__body__upload--dragon': dragOn,
								'ss__autocomplete__visual-modal__content__body__upload--uploaded': file,
							})}
							onDragOver={(e) => {
								e.preventDefault();
								e.stopPropagation();
								setDragOn(true);
							}}
							onDragLeave={() => setDragOn(false)}
							onDrop={(e) => handleDrop(e)}
							onDragEnter={() => setDragOn(true)}
						>
							<span className="ss__autocomplete__visual-modal__content__body__upload__text">Image Search</span>
							<i className="ss__autocomplete__visual-modal__content__body__upload__icon far fa-image"></i>

							<label htmlFor="ss-image-upload" className="ss__autocomplete__visual-modal__content__body__upload__button">
								Upload
							</label>

							{file && (
								<Fragment>
									<img className="ss__autocomplete__visual-modal__content__body__image" src={file} />
									<div className="ss__autocomplete__visual-modal__content__body__image__remove" onClick={() => removeFile()}>
										<i className="fas fa-times"></i>
									</div>
								</Fragment>
							)}
						</div>

						<input
							type="submit"
							className="ss__autocomplete__visual-modal__content__body__search"
							disabled={!file}
							onClick={(e) => upload(e)}
							value="Search"
						/>
					</div>
				</div>
			</div>
		)
	);
};

function convertToBase64(file): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = (error) => reject(error);
	});
}
