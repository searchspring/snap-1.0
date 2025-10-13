export const Power = ({ size = 56 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 56 56"
			width={size}
			height={size}
			fill="none"
			stroke="white"
			strokeWidth="4"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="28" y1="8" x2="28" y2="28" />
			<path d="M 16 14 A 18 18 0 1 0 40 14" />
		</svg>
	);
};
