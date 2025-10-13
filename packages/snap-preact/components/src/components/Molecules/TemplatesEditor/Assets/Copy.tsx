export const Copy = ({ size = 56 }) => {
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
			<rect x="12" y="12" width="24" height="32" rx="2" />
			<path d="M 20 12 L 20 8 A 2 2 0 0 1 22 6 L 42 6 A 2 2 0 0 1 44 8 L 44 38 A 2 2 0 0 1 42 40 L 36 40" />
		</svg>
	);
};
