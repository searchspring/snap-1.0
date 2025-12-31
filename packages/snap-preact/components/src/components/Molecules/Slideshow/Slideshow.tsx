import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import { mergeProps, mergeStyles, defined } from '../../../utilities';
import { Image, ImageProps } from '../../Atoms/Image';
import { Button, ButtonProps } from '../../Atoms/Button';

const defaultStyles: StyleScript<SlideshowProps> = ({ slidesToShow = 1, gap = 16, overlayNavigation = false }) => {
	return css({
		position: 'relative',
		overflow: 'hidden',

		'.ss__slideshow__container': {
			position: 'relative',
			//arrows are 30px wide each by default
			width: `calc(100% - ${overlayNavigation ? 0 : 60}px)`,
			margin: 'auto',
			overflow: 'hidden',
			touchAction: 'pan-y pinch-zoom',
		},

		'.ss__slideshow__track': {
			display: 'flex',
			width: `100%`,
			transition: 'transform 0.3s ease-in-out',

			// Disable transition during dragging
			'&.ss__slideshow__track--dragging': {
				transition: 'none',
			},
		},

		'.ss__slideshow__slide': {
			maxWidth: `calc((100% - ${slidesToShow * gap}px) / ${slidesToShow})`,
			minWidth: `calc((100% - ${slidesToShow * gap}px) / ${slidesToShow})`,
			marginLeft: `calc(${gap}px / 2)`,
			marginRight: `calc(${gap}px / 2)`,
			position: 'relative',
			// Prevent text selection during drag
			userSelect: 'none',

			img: {
				width: '100%',
				height: '100%',
				objectFit: 'cover',
				display: 'block',
				// Prevent image dragging
				pointerEvents: 'none',
			},
		},

		'.ss__slideshow__slide--content': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',

			'> *': {
				width: '100%',
			},
		},

		'.ss__slideshow__slide--clickable': {
			cursor: 'pointer',

			'&:hover img': {
				opacity: 0.9,
				transition: 'opacity 0.2s ease',
			},

			'&:focus': {
				outline: '2px solid #005fcc',
				outlineOffset: '2px',
			},
		},

		'.ss__slideshow__navigation': {
			position: 'absolute',
			top: '50%',
			transform: 'translateY(-50%)',
			zIndex: 10,

			'.ss__button': {
				// background: 'rgba(255, 255, 255, 0.9)',
				border: 'none',
				borderRadius: '50%',
				width: '10px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				cursor: 'pointer',
				transition: 'background 0.2s ease',

				'&:hover': {
					background: 'rgba(255, 255, 255, 1)',
				},

				'&:disabled': {
					opacity: 0.5,
					cursor: 'not-allowed',
				},

				'&:focus': {
					outline: '2px solid #005fcc',
					outlineOffset: '2px',
				},
			},

			'&--prev': {
				left: `${overlayNavigation ? 10 : 0}px`,
			},

			'&--next': {
				right: `${overlayNavigation ? 10 : 0}px`,
			},
		},

		'.ss__slideshow__pagination': {
			position: 'relative',
			margin: 'auto',
			width: '100%',
			textAlign: 'center',

			'.ss__slideshow__dot': {
				width: '10px',
				height: '10px',
				borderRadius: '50%',
				background: 'rgba(255, 255, 255, 0.5)',
				border: 'none',
				cursor: 'pointer',
				transition: 'background 0.2s ease',

				'&.ss__active': {
					background: 'rgba(255, 255, 255, 1)',
				},
				'&:focus-visible': {
					outline: '-webkit-focus-ring-color auto 1px !important',
				},
			},
		},

		'.ss__slideshow__sr-only': {
			position: 'absolute',
			width: '1px',
			height: '1px',
			padding: 0,
			margin: '-1px',
			overflow: 'hidden',
			clip: 'rect(0, 0, 0, 0)',
			whiteSpace: 'nowrap',
			border: 0,
		},
	});
};

export function Slideshow(properties: SlideshowProps): JSX.Element {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<SlideshowProps> = {
		treePath: globalTreePath,
		fallbackImage: '//cdn.searchspring.net/ajax_search/img/default_image.png',
		autoPlay: false,
		autoPlayInterval: 3000,
		showNavigation: true,
		showPagination: true,
		slidesToShow: 4,
		slidesToMove: 1,
		gap: 10,
		ariaLabel: 'slideshow',
		touchDragging: true,
		dragThreshold: 50,
	};

	const props = mergeProps('slideshow', globalTheme, defaultProps, properties);

	const {
		className,
		images,
		fallbackImage,
		autoPlay,
		autoPlayInterval,
		showNavigation,
		showPagination,
		loop,
		slidesToShow,
		alt,
		ariaLabel,
		ariaLabelledBy,
		disableStyles,
		treePath,
		overlayNavigation,
		dragThreshold,
	} = props;

	let touchDragging = props.touchDragging;

	const subProps: SlideshowSubProps = {
		Image: {
			// default props
			fallback: fallbackImage,
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
			treePath,
		},
		NextButton: {
			// default props
			backgroundColor: overlayNavigation ? 'rgba(255, 255, 255, 0.9)' : undefined,
			name: 'nextButton',
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
			treePath,
		},
		PrevButton: {
			// default props
			backgroundColor: overlayNavigation ? 'rgba(255, 255, 255, 0.9)' : undefined,
			name: 'prevButton',
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
			treePath,
		},
		PauseButton: {
			// default props
			name: 'pauseButton',
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
			treePath,
		},
		PaginationButton: {
			// default props
			name: 'paginationButton',
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
			treePath,
		},
	};

	//fallback in case 0 slidesToMove is passed
	let slidesToMove = props.slidesToMove;
	if (!slidesToMove) {
		slidesToMove = 1;
	}

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(autoPlay);
	const [announceText, setAnnounceText] = useState('');
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const slideshowRef = useRef<HTMLDivElement>(null);
	const trackRef = useRef<HTMLDivElement>(null);

	// Touch/Drag state
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [currentX, setCurrentX] = useState(0);
	const [dragOffset, setDragOffset] = useState(0);

	// Normalize images to SlideshowImage format
	const normalizedImages: SlideshowImage[] = images.map((img, index) => {
		if (typeof img === 'string') {
			// String URL
			return { src: img };
		} else if (img && typeof img === 'object' && 'props' in img && 'type' in img) {
			// This is a JSX element (has props and type properties)
			return {
				content: img as JSX.Element,
				alt: `Slide ${index + 1}`,
			};
		} else if (img && typeof img === 'object') {
			// This is already a SlideshowImage object
			return img as SlideshowImage;
		} else {
			// Fallback for any other type
			return {
				content: img as JSX.Element,
				alt: `Slide ${index + 1}`,
			};
		}
	});

	// slide calculations
	const totalSlides = normalizedImages.length;
	const visibleSlides = Math.min(slidesToShow!, totalSlides);
	const maxIndex = Math.max(0, totalSlides - visibleSlides);

	// Calculate slide groups for pagination
	const slideGroups: number[] = [];
	for (let i = 0; i <= maxIndex; i += slidesToMove!) {
		slideGroups.push(i);
	}
	const totalDots = slideGroups.length;
	const currentDotIndex = slideGroups.findIndex((groupStart) => currentIndex >= groupStart && currentIndex < groupStart + slidesToMove!);

	// Auto-play functionality
	useEffect(() => {
		if (isPlaying && normalizedImages.length > slidesToShow! && !isDragging) {
			intervalRef.current = setInterval(() => {
				setCurrentIndex((prevIndex) => {
					const nextIndex = prevIndex + slidesToMove!;
					if (loop) {
						return nextIndex > maxIndex ? 0 : nextIndex;
					} else {
						if (nextIndex >= maxIndex) {
							setIsPlaying(false);
							return maxIndex;
						}
						return nextIndex;
					}
				});
			}, autoPlayInterval);

			return () => {
				if (intervalRef.current) {
					clearInterval(intervalRef.current);
				}
			};
		} else {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		}
	}, [isPlaying, autoPlayInterval, normalizedImages.length, slidesToShow, slidesToMove, loop, maxIndex, isDragging]);

	// if all slides are visible, turn off touch dragging.
	if (totalSlides <= visibleSlides) {
		touchDragging = false;
	}

	// Touch/Mouse event handlers for dragging
	const handleDragStart = (clientX: number) => {
		if (!touchDragging) return;

		setIsDragging(true);
		setStartX(clientX);
		setCurrentX(clientX);

		// Pause autoplay during drag
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
	};

	const handleDragMove = (clientX: number) => {
		if (!isDragging || !touchDragging) return;

		setCurrentX(clientX);
		const diff = clientX - startX;
		setDragOffset(diff);
	};

	const handleDragEnd = () => {
		if (!isDragging || !touchDragging) return;
		const diff = currentX - startX;
		const containerWidth = trackRef.current?.parentElement?.offsetWidth || 0;
		const slideWidthPx = containerWidth / visibleSlides;
		const threshold = Math.min(dragThreshold!, slideWidthPx * 0.3); // 30% of slide width or dragThreshold, whichever is smaller

		if (Math.abs(diff) > threshold) {
			if (diff > 0 && (loop || currentIndex > 0)) {
				// Dragged right - go to previous
				goToPrevious();
			} else if (diff < 0 && (loop || currentIndex < maxIndex)) {
				// Dragged left - go to next
				goToNext();
			}
		}

		setIsDragging(false);
		setDragOffset(0);

		// Resume autoplay if it was playing
		if (isPlaying && normalizedImages.length > slidesToShow!) {
			intervalRef.current = setInterval(() => {
				setCurrentIndex((prevIndex) => {
					const nextIndex = prevIndex + slidesToMove!;
					if (loop) {
						return nextIndex > maxIndex ? 0 : nextIndex;
					} else {
						if (nextIndex >= maxIndex) {
							setIsPlaying(false);
							return maxIndex;
						}
						return nextIndex;
					}
				});
			}, autoPlayInterval);
		}
	};

	// Touch event handlers
	const handleTouchStart = (event: TouchEvent) => {
		const touch = event.touches[0];
		handleDragStart(touch.clientX);
	};

	const handleTouchMove = (event: TouchEvent) => {
		if (isDragging) {
			event.preventDefault(); // Prevent scrolling while dragging
		}
		const touch = event.touches[0];
		handleDragMove(touch.clientX);
	};

	const handleTouchEnd = () => {
		handleDragEnd();
	};

	// Mouse event handlers (for desktop testing)
	const handleMouseDown = (event: MouseEvent) => {
		event.preventDefault();
		handleDragStart(event.clientX);
	};

	const handleMouseMove = (event: MouseEvent) => {
		handleDragMove(event.clientX);
	};

	const handleMouseUp = () => {
		handleDragEnd();
	};

	// Add/remove mouse event listeners
	useEffect(() => {
		if (isDragging && touchDragging) {
			document.addEventListener('mousemove', handleMouseMove);
			document.addEventListener('mouseup', handleMouseUp);

			return () => {
				document.removeEventListener('mousemove', handleMouseMove);
				document.removeEventListener('mouseup', handleMouseUp);
			};
		}
	}, [isDragging, touchDragging]);

	// Pause autoplay on hover or focus
	const handleMouseEnter = () => {
		if (isPlaying && intervalRef.current && !isDragging) {
			clearInterval(intervalRef.current);
		}
	};

	const handleMouseLeave = () => {
		if (isPlaying && normalizedImages.length > slidesToShow! && !isDragging) {
			intervalRef.current = setInterval(() => {
				setCurrentIndex((prevIndex) => {
					const nextIndex = prevIndex + slidesToMove!;
					if (loop) {
						return nextIndex > maxIndex ? 0 : nextIndex;
					} else {
						if (nextIndex >= maxIndex) {
							setIsPlaying(false);
							return maxIndex;
						}
						return nextIndex;
					}
				});
			}, autoPlayInterval);
		}
	};

	// Handle image click
	const handleImageClick = (image: SlideshowImage, index: number) => {
		if (image.onClick && !isDragging) {
			image.onClick(image, index);
		}
	};

	// Handle image keyboard interaction
	const handleImageKeyDown = (event: KeyboardEvent, image: SlideshowImage, index: number) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleImageClick(image, index);
		}
	};

	// Keyboard navigation
	const handleKeyDown = (event: KeyboardEvent) => {
		switch (event.key) {
			case 'ArrowLeft':
				event.preventDefault();
				goToPrevious();
				break;
			case 'ArrowRight':
				event.preventDefault();
				goToNext();
				break;
			case 'Home':
				event.preventDefault();
				setCurrentIndex(0);
				announceSlideChange(1);
				break;
			case 'End':
				event.preventDefault();
				setCurrentIndex(maxIndex);
				announceSlideChange(totalDots);
				break;
			case ' ':
			case 'Spacebar':
				event.preventDefault();
				togglePlayPause();
				break;
			case 'Escape':
				event.preventDefault();
				setIsPlaying(false);
				break;
		}
	};

	const announceSlideChange = (slideGroup: number) => {
		const startSlide = (slideGroup - 1) * slidesToMove! + 1;
		const endSlide = Math.min(slideGroup * slidesToMove!, normalizedImages.length);

		if (startSlide === endSlide) {
			setAnnounceText(`Showing slide ${startSlide} of ${normalizedImages.length}`);
		} else {
			setAnnounceText(`Showing slides ${startSlide} to ${endSlide} of ${normalizedImages.length}`);
		}
	};

	const goToPrevious = () => {
		setCurrentIndex((prevIndex) => {
			let newIndex;
			if (loop) {
				newIndex = prevIndex - slidesToMove! < 0 ? maxIndex : prevIndex - slidesToMove!;
			} else {
				newIndex = Math.max(0, prevIndex - slidesToMove!);
			}
			announceSlideChange(Math.floor(newIndex / slidesToMove!) + 1);
			return newIndex;
		});
	};

	const goToNext = () => {
		setCurrentIndex((prevIndex) => {
			let newIndex;
			if (loop) {
				newIndex = prevIndex + slidesToMove! > maxIndex ? 0 : prevIndex + slidesToMove!;
			} else {
				newIndex = Math.min(maxIndex, prevIndex + slidesToMove!);
			}
			announceSlideChange(Math.floor(newIndex / slidesToMove!) + 1);
			return newIndex;
		});
	};

	const goToSlide = (dotIndex: number) => {
		const targetIndex = slideGroups[dotIndex] || 0;
		setCurrentIndex(targetIndex);
		announceSlideChange(dotIndex + 1);
	};

	const togglePlayPause = () => {
		setIsPlaying(!isPlaying);
		setAnnounceText(isPlaying ? 'Slideshow paused' : 'Slideshow resumed');
	};

	const styling = mergeStyles<SlideshowProps>(props, defaultStyles);

	// Don't render if no images
	if (!normalizedImages || normalizedImages.length === 0) {
		return <></>;
	}

	// Simplified transform calculation
	const slidePercentage = 100 / visibleSlides; // Each visible slide takes this % of container

	let translateX = -(currentIndex * slidePercentage);

	// Apply drag offset
	if (isDragging && trackRef.current) {
		const containerWidth = trackRef.current.parentElement?.offsetWidth || 0;
		const dragPercentage = (dragOffset / containerWidth) * 100;
		translateX += dragPercentage;
	}

	// Determine if navigation should be disabled
	const isPrevDisabled = !loop && currentIndex === 0;
	const isNextDisabled = !loop && currentIndex >= maxIndex;

	return (
		<CacheProvider>
			<div
				{...styling}
				className={classnames('ss__slideshow', className)}
				ref={slideshowRef}
				role="region"
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledBy}
				aria-roledescription="slideshow"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				// @ts-ignore - ignore
				onKeyDown={handleKeyDown}
				tabIndex={0}
			>
				{/* Screen reader announcements */}
				<div className="ss__slideshow__sr-only" aria-live="polite" aria-atomic="true">
					{announceText}
				</div>
				<div className="ss__slideshow__sr-only">
					Use arrow keys to navigate slides. Press spacebar to pause autoplay. Press home or end to go to first or last slide group.{' '}
					{touchDragging && 'Swipe left or right to navigate on touch devices.'}
				</div>
				{/* END Screen reader announcements */}

				<div className="ss__slideshow__container">
					<div
						ref={trackRef}
						className={classnames('ss__slideshow__track', {
							'ss__slideshow__track--dragging': isDragging,
						})}
						style={{ transform: `translateX(${translateX}%)` }}
						role="group"
						aria-label={`Slide group ${currentIndex} of ${totalDots}`}
						// Touch events
						// @ts-ignore - touch events
						onTouchStart={touchDragging ? handleTouchStart : undefined}
						// @ts-ignore - touch events
						onTouchMove={touchDragging ? handleTouchMove : undefined}
						// @ts-ignore - touch events
						onTouchEnd={touchDragging ? handleTouchEnd : undefined}
						// Mouse events (for desktop dragging)
						// @ts-ignore - mouse events
						onMouseDown={touchDragging ? handleMouseDown : undefined}
						// Mouse events (for desktop dragging)
						// @ts-ignore - mouse events
						onMouseUp={touchDragging ? handleMouseUp : undefined}
						// Mouse events (for desktop dragging)
						// @ts-ignore - mouse events
						onMouseMove={touchDragging ? handleMouseMove : undefined}
					>
						{normalizedImages.map((image, index) => {
							const isVisible = index >= currentIndex && index < currentIndex + slidesToShow!;
							const hasClickHandler = !!image.onClick;
							const hasContent = !!image.content;
							const imageAlt = image.alt || alt || `Image ${index + 1}`;

							return (
								<div
									key={index}
									className={classnames('ss__slideshow__slide', {
										'ss__slideshow__slide--clickable': hasClickHandler,
										'ss__slideshow__slide--content': hasContent,
									})}
									role={hasClickHandler ? 'button' : hasContent ? 'presentation' : 'img'}
									aria-label={hasClickHandler ? `Click to view ${imageAlt}` : `${imageAlt} ${index + 1} of ${normalizedImages.length}`}
									aria-hidden={!isVisible}
									tabIndex={hasClickHandler && isVisible ? 0 : -1}
									onClick={hasClickHandler ? () => handleImageClick(image, index) : undefined}
									onKeyDown={hasClickHandler ? (e: any) => handleImageKeyDown(e, image, index) : undefined}
								>
									{hasContent ? image.content : <Image {...subProps.Image} src={image.src || fallbackImage!} alt={isVisible ? imageAlt : ''} />}
								</div>
							);
						})}
					</div>
				</div>

				{showNavigation && normalizedImages.length > slidesToShow! && (
					<>
						<div className="ss__slideshow__navigation ss__slideshow__navigation--prev">
							<Button
								icon="angle-left"
								className={'ss__slideshow__prev'}
								disabled={isPrevDisabled}
								aria-label={`Previous slides${isPrevDisabled ? ' (disabled)' : ''}`}
								{...subProps.PrevButton}
								onClick={goToPrevious}
							/>
						</div>
						<div className="ss__slideshow__navigation ss__slideshow__navigation--next">
							<Button
								{...subProps.NextButton}
								className={'ss__slideshow__next'}
								icon="angle-right"
								disabled={isNextDisabled}
								aria-label={`Next slides${isNextDisabled ? ' (disabled)' : ''}`}
								onClick={goToNext}
							/>
						</div>
					</>
				)}

				{showPagination && totalSlides > visibleSlides && (
					<div className="ss__slideshow__pagination" role="tablist" aria-label="Slide navigation">
						{slideGroups.map((_, index: number) => (
							<Button
								key={index}
								className={classnames('ss__slideshow__dot', {
									ss__active: currentDotIndex === index,
								})}
								onClick={() => goToSlide(index)}
								aria-selected={currentDotIndex === index}
								aria-label={`Go to slide group ${index + 1} of ${totalDots}`}
								icon={currentDotIndex === index ? 'bullet-o' : 'bullet'}
								{...subProps.PaginationButton}
							/>
						))}
					</div>
				)}

				{autoPlay && (
					<Button
						className="ss__slideshow__sr-only"
						aria-label={isPlaying ? 'Pause slideshow' : 'Resume slideshow'}
						{...subProps.PauseButton}
						onClick={togglePlayPause}
					>
						{isPlaying ? 'Pause' : 'Play'}
					</Button>
				)}
			</div>
		</CacheProvider>
	);
}

export interface SlideshowImage {
	src?: string;
	alt?: string;
	onClick?: (image: SlideshowImage, index: number) => void;
	content?: JSX.Element;
}

export interface SlideshowProps extends ComponentProps {
	images: (string | SlideshowImage)[];
	fallbackImage?: string;
	autoPlay?: boolean;
	autoPlayInterval?: number;
	showNavigation?: boolean;
	overlayNavigation?: boolean;
	showPagination?: boolean;
	loop?: boolean;
	slidesToShow?: number;
	slidesToMove?: number;
	gap?: number;
	alt?: string;
	ariaLabel?: string;
	ariaLabelledBy?: string;
	touchDragging?: boolean;
	dragThreshold?: number;
}

interface SlideshowSubProps {
	Image: Partial<ImageProps>;
	PrevButton: Partial<ButtonProps>;
	NextButton: Partial<ButtonProps>;
	PaginationButton: Partial<ButtonProps>;
	PauseButton: Partial<ButtonProps>;
}
