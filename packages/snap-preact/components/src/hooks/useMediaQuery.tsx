import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

export function useMediaQuery(query: string, runOnCleanup?: () => void): boolean {
	if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') return false;

	const mediaQuery = window.matchMedia(query);
	const [match, setMatch] = useState(!!mediaQuery.matches);

	useEffect(() => {
		// sync state immediately in case query changed
		setMatch(!!mediaQuery.matches);

		const handler = () => setMatch(!!mediaQuery.matches);
		mediaQuery.addListener(handler);
		return () => {
			runOnCleanup instanceof Function && runOnCleanup();
			mediaQuery.removeListener(handler);
		};
	}, [query]);

	return match;
}
