import { SVGPathElement } from './Icon';
export type IconType = keyof typeof iconPaths;

export const iconPaths: { [name: string]: string | SVGPathElement[] } = {
	'angle-up':
		'M56 39.671c0 0.449-0.224 0.954-0.561 1.291l-2.806 2.806c-0.337 0.337-0.786 0.561-1.291 0.561-0.449 0-0.954-0.224-1.291-0.561l-22.052-22.052-22.052 22.052c-0.337 0.337-0.842 0.561-1.291 0.561s-0.954-0.224-1.291-0.561l-2.806-2.806c-0.337-0.337-0.561-0.842-0.561-1.291s0.224-0.954 0.561-1.291l26.148-26.148c0.337-0.337 0.842-0.561 1.291-0.561s0.954 0.224 1.291 0.561l26.148 26.148c0.337 0.337 0.561 0.842 0.561 1.291z',
	'angle-down':
		'M56 16.329c0 0.449-0.224 0.954-0.561 1.291l-26.148 26.148c-0.337 0.337-0.842 0.561-1.291 0.561s-0.954-0.224-1.291-0.561l-26.148-26.148c-0.337-0.337-0.561-0.842-0.561-1.291s0.224-0.954 0.561-1.291l2.806-2.806c0.337-0.337 0.786-0.561 1.291-0.561 0.449 0 0.954 0.224 1.291 0.561l22.052 22.052 22.052-22.052c0.337-0.337 0.842-0.561 1.291-0.561s0.954 0.224 1.291 0.561l2.806 2.806c0.337 0.337 0.561 0.842 0.561 1.291z',
	'angle-left':
		'M44.329 4.657c0 0.449-0.224 0.954-0.561 1.291l-22.052 22.052 22.052 22.052c0.337 0.337 0.561 0.842 0.561 1.291s-0.224 0.954-0.561 1.291l-2.806 2.806c-0.337 0.337-0.842 0.561-1.291 0.561s-0.954-0.224-1.291-0.561l-26.148-26.148c-0.337-0.337-0.561-0.842-0.561-1.291s0.224-0.954 0.561-1.291l26.148-26.148c0.337-0.337 0.842-0.561 1.291-0.561s0.954 0.224 1.291 0.561l2.806 2.806c0.337 0.337 0.561 0.786 0.561 1.291z',
	'angle-right':
		'M44.329 28c0 0.449-0.224 0.954-0.561 1.291l-26.148 26.148c-0.337 0.337-0.842 0.561-1.291 0.561s-0.954-0.224-1.291-0.561l-2.806-2.806c-0.337-0.337-0.561-0.786-0.561-1.291 0-0.449 0.224-0.954 0.561-1.291l22.052-22.052-22.052-22.052c-0.337-0.337-0.561-0.842-0.561-1.291s0.224-0.954 0.561-1.291l2.806-2.806c0.337-0.337 0.842-0.561 1.291-0.561s0.954 0.224 1.291 0.561l26.148 26.148c0.337 0.337 0.561 0.842 0.561 1.291z',
	ban: 'M47.769 27.982c0-3.961-1.163-7.631-3.162-10.72l-27.4 27.364c3.125 2.035 6.832 3.234 10.793 3.234 10.902 0 19.769-8.903 19.769-19.878zM11.465 38.848l27.437-27.4c-3.125-2.108-6.868-3.307-10.902-3.307-10.902 0-19.769 8.903-19.769 19.842 0 4.034 1.199 7.74 3.234 10.866zM55.909 27.982c0 15.481-12.501 28.018-27.909 28.018s-27.909-12.537-27.909-28.018c0-15.445 12.501-27.982 27.909-27.982s27.909 12.537 27.909 27.982z',
	check:
		'M56 14.921c0 0.903-0.361 1.806-1.012 2.457l-31.071 31.071c-0.65 0.65-1.554 1.012-2.457 1.012s-1.806-0.361-2.457-1.012l-17.992-17.992c-0.65-0.65-1.012-1.554-1.012-2.457s0.361-1.806 1.012-2.457l4.914-4.914c0.65-0.65 1.554-1.012 2.457-1.012s1.806 0.361 2.457 1.012l10.622 10.658 23.701-23.737c0.65-0.65 1.554-1.012 2.457-1.012s1.806 0.361 2.457 1.012l4.914 4.914c0.65 0.65 1.012 1.554 1.012 2.457z',
	'check-thin': 'M17.771 40.395l33.749-33.749 4.48 4.48-38.229 38.229-17.771-17.771 4.48-4.48z',
	'chevron-up':
		'M55.349 39.589l-5.769 5.734c-0.869 0.869-2.259 0.869-3.128 0l-18.452-18.452-18.452 18.452c-0.869 0.869-2.259 0.869-3.128 0l-5.769-5.734c-0.869-0.869-0.869-2.293 0-3.162l25.785-25.75c0.869-0.869 2.259-0.869 3.128 0l25.785 25.75c0.869 0.869 0.869 2.293 0 3.162z',
	'chevron-down':
		'M55.348 19.573l-25.785 25.75c-0.869 0.869-2.259 0.869-3.128 0l-25.785-25.75c-0.869-0.869-0.869-2.293 0-3.162l5.768-5.734c0.869-0.869 2.259-0.869 3.128 0l18.452 18.452 18.452-18.452c0.869-0.869 2.259-0.869 3.128 0l5.768 5.734c0.869 0.869 0.869 2.293 0 3.162z',
	'chevron-left':
		'M45.34 9.548l-18.452 18.452 18.452 18.452c0.869 0.869 0.869 2.259 0 3.128l-5.769 5.769c-0.869 0.869-2.259 0.869-3.128 0l-25.785-25.785c-0.869-0.869-0.869-2.259 0-3.128l25.785-25.785c0.869-0.869 2.259-0.869 3.128 0l5.769 5.769c0.869 0.869 0.869 2.259 0 3.128z',
	'chevron-right':
		'M45.34 29.564l-25.785 25.785c-0.869 0.869-2.259 0.869-3.128 0l-5.768-5.768c-0.869-0.869-0.869-2.259 0-3.128l18.452-18.452-18.452-18.452c-0.869-0.869-0.869-2.259 0-3.128l5.768-5.768c0.869-0.869 2.259-0.869 3.128 0l25.785 25.785c0.869 0.869 0.869 2.259 0 3.128z',
	circle: 'M56 28c0 15.458-12.542 28-28 28s-28-12.542-28-28 12.542-28 28-28 28 12.542 28 28z',
	close:
		'M56 45.064c0 1.178-0.471 2.357-1.32 3.205l-6.411 6.411c-0.849 0.849-2.027 1.32-3.205 1.32s-2.357-0.471-3.205-1.32l-13.859-13.859-13.859 13.859c-0.849 0.849-2.027 1.32-3.205 1.32s-2.357-0.471-3.205-1.32l-6.411-6.411c-0.849-0.849-1.32-2.027-1.32-3.205s0.471-2.357 1.32-3.205l13.859-13.859-13.859-13.859c-0.849-0.849-1.32-2.027-1.32-3.205s0.471-2.357 1.32-3.205l6.411-6.411c0.849-0.849 2.027-1.32 3.205-1.32s2.357 0.471 3.205 1.32l13.859 13.859 13.859-13.859c0.849-0.849 2.027-1.32 3.205-1.32s2.357 0.471 3.205 1.32l6.411 6.411c0.849 0.849 1.32 2.027 1.32 3.205s-0.471 2.357-1.32 3.205l-13.859 13.859 13.859 13.859c0.849 0.849 1.32 2.027 1.32 3.205z',
	'close-thin':
		'M56 5.638l-22.362 22.362 22.362 22.362-5.638 5.638-22.362-22.362-22.362 22.362-5.638-5.638 22.362-22.362-22.362-22.362 5.638-5.638 22.362 22.362 22.362-22.362z',
	cog: 'M37.333 28c0-5.141-4.193-9.333-9.333-9.333s-9.333 4.193-9.333 9.333 4.193 9.333 9.333 9.333 9.333-4.193 9.333-9.333zM56 24.026v8.094c0 0.547-0.438 1.203-1.021 1.312l-6.745 1.021c-0.401 1.167-0.839 2.26-1.422 3.318 1.24 1.786 2.552 3.391 3.901 5.031 0.219 0.255 0.365 0.583 0.365 0.911s-0.109 0.583-0.328 0.839c-0.875 1.167-5.797 6.526-7.036 6.526-0.328 0-0.656-0.146-0.948-0.328l-5.031-3.938c-1.057 0.547-2.188 1.021-3.318 1.385-0.255 2.224-0.474 4.594-1.057 6.781-0.146 0.583-0.656 1.021-1.312 1.021h-8.094c-0.656 0-1.24-0.474-1.312-1.094l-1.021-6.708c-1.13-0.365-2.224-0.802-3.281-1.349l-5.141 3.901c-0.255 0.219-0.583 0.328-0.911 0.328s-0.656-0.146-0.911-0.401c-1.932-1.75-4.484-4.010-6.016-6.125-0.182-0.255-0.255-0.547-0.255-0.839 0-0.328 0.109-0.583 0.292-0.839 1.24-1.677 2.589-3.281 3.828-4.995-0.62-1.167-1.13-2.37-1.495-3.609l-6.672-0.984c-0.62-0.109-1.057-0.693-1.057-1.312v-8.094c0-0.547 0.438-1.203 0.984-1.312l6.781-1.021c0.365-1.167 0.839-2.26 1.422-3.354-1.24-1.75-2.552-3.391-3.901-5.031-0.219-0.255-0.365-0.547-0.365-0.875s0.146-0.583 0.328-0.839c0.875-1.203 5.797-6.526 7.036-6.526 0.328 0 0.656 0.146 0.948 0.365l5.031 3.901c1.057-0.547 2.188-1.021 3.318-1.385 0.255-2.224 0.474-4.594 1.057-6.781 0.146-0.583 0.656-1.021 1.312-1.021h8.094c0.656 0 1.24 0.474 1.312 1.094l1.021 6.708c1.13 0.365 2.224 0.802 3.281 1.349l5.177-3.901c0.219-0.219 0.547-0.328 0.875-0.328s0.656 0.146 0.911 0.365c1.932 1.786 4.484 4.047 6.016 6.198 0.182 0.219 0.255 0.51 0.255 0.802 0 0.328-0.109 0.583-0.292 0.839-1.24 1.677-2.589 3.281-3.828 4.995 0.62 1.167 1.13 2.37 1.495 3.573l6.672 1.021c0.62 0.109 1.057 0.693 1.057 1.312z',
	cogs: 'M26.133 27.985c0-4.113-3.354-7.467-7.467-7.467s-7.467 3.354-7.467 7.467 3.354 7.467 7.467 7.467 7.467-3.354 7.467-7.467zM48.533 42.919c0-2.042-1.692-3.733-3.733-3.733s-3.733 1.692-3.733 3.733c0 2.071 1.692 3.733 3.733 3.733 2.071 0 3.733-1.692 3.733-3.733zM48.533 13.052c0-2.042-1.692-3.733-3.733-3.733s-3.733 1.692-3.733 3.733c0 2.071 1.692 3.733 3.733 3.733 2.071 0 3.733-1.692 3.733-3.733zM37.333 25.331v5.396c0 0.379-0.292 0.817-0.671 0.875l-4.521 0.7c-0.233 0.758-0.554 1.487-0.933 2.217 0.817 1.167 1.692 2.246 2.625 3.354 0.117 0.175 0.204 0.35 0.204 0.583 0 0.204-0.058 0.408-0.204 0.554-0.583 0.787-3.85 4.346-4.696 4.346-0.233 0-0.438-0.088-0.613-0.204l-3.354-2.625c-0.729 0.379-1.458 0.671-2.246 0.904-0.146 1.487-0.292 3.092-0.671 4.521-0.117 0.408-0.467 0.7-0.875 0.7h-5.425c-0.408 0-0.817-0.321-0.875-0.729l-0.671-4.462c-0.758-0.233-1.488-0.554-2.188-0.904l-3.442 2.596c-0.146 0.146-0.379 0.204-0.583 0.204-0.233 0-0.438-0.087-0.612-0.233-0.758-0.7-4.2-3.821-4.2-4.667 0-0.204 0.087-0.379 0.204-0.554 0.846-1.108 1.721-2.188 2.567-3.325-0.408-0.788-0.758-1.575-1.021-2.392l-4.433-0.7c-0.408-0.058-0.7-0.438-0.7-0.846v-5.396c0-0.379 0.292-0.817 0.671-0.875l4.521-0.7c0.233-0.758 0.554-1.488 0.933-2.217-0.817-1.167-1.692-2.246-2.625-3.354-0.117-0.175-0.204-0.379-0.204-0.583s0.058-0.408 0.204-0.583c0.583-0.787 3.85-4.317 4.696-4.317 0.233 0 0.438 0.087 0.612 0.204l3.354 2.625c0.729-0.379 1.458-0.671 2.246-0.933 0.146-1.458 0.292-3.063 0.671-4.492 0.117-0.408 0.467-0.7 0.875-0.7h5.425c0.408 0 0.817 0.321 0.875 0.729l0.671 4.463c0.758 0.233 1.488 0.554 2.188 0.904l3.442-2.596c0.175-0.146 0.379-0.204 0.583-0.204 0.233 0 0.438 0.088 0.613 0.233 0.758 0.7 4.2 3.85 4.2 4.667 0 0.204-0.087 0.379-0.204 0.554-0.846 1.138-1.721 2.188-2.537 3.325 0.379 0.787 0.729 1.575 0.992 2.392l4.433 0.671c0.408 0.087 0.7 0.467 0.7 0.875zM56 40.877v4.083c0 0.438-3.762 0.846-4.346 0.904-0.233 0.554-0.525 1.050-0.875 1.517 0.263 0.583 1.488 3.5 1.488 4.025 0 0.087-0.029 0.146-0.117 0.204-0.35 0.204-3.471 2.071-3.617 2.071-0.379 0-2.567-2.917-2.858-3.354-0.292 0.029-0.583 0.058-0.875 0.058s-0.583-0.029-0.875-0.058c-0.292 0.438-2.479 3.354-2.858 3.354-0.146 0-3.267-1.867-3.617-2.071-0.087-0.058-0.117-0.146-0.117-0.204 0-0.496 1.225-3.442 1.488-4.025-0.35-0.467-0.642-0.963-0.875-1.517-0.583-0.058-4.346-0.467-4.346-0.904v-4.083c0-0.438 3.762-0.846 4.346-0.904 0.233-0.525 0.525-1.050 0.875-1.517-0.262-0.583-1.488-3.529-1.488-4.025 0-0.058 0.029-0.146 0.117-0.204 0.35-0.175 3.471-2.042 3.617-2.042 0.379 0 2.567 2.887 2.858 3.325 0.292-0.029 0.583-0.058 0.875-0.058s0.583 0.029 0.875 0.058c0.817-1.137 1.692-2.275 2.683-3.267l0.175-0.058c0.146 0 3.267 1.837 3.617 2.042 0.087 0.058 0.117 0.146 0.117 0.204 0 0.525-1.225 3.442-1.488 4.025 0.35 0.467 0.642 0.992 0.875 1.517 0.583 0.058 4.346 0.467 4.346 0.904zM56 11.010v4.083c0 0.438-3.762 0.846-4.346 0.904-0.233 0.554-0.525 1.050-0.875 1.517 0.263 0.583 1.488 3.5 1.488 4.025 0 0.088-0.029 0.146-0.117 0.204-0.35 0.204-3.471 2.071-3.617 2.071-0.379 0-2.567-2.917-2.858-3.354-0.292 0.029-0.583 0.058-0.875 0.058s-0.583-0.029-0.875-0.058c-0.292 0.438-2.479 3.354-2.858 3.354-0.146 0-3.267-1.867-3.617-2.071-0.087-0.058-0.117-0.146-0.117-0.204 0-0.496 1.225-3.442 1.488-4.025-0.35-0.467-0.642-0.963-0.875-1.517-0.583-0.058-4.346-0.467-4.346-0.904v-4.083c0-0.438 3.762-0.846 4.346-0.904 0.233-0.525 0.525-1.050 0.875-1.517-0.262-0.583-1.488-3.529-1.488-4.025 0-0.058 0.029-0.146 0.117-0.204 0.35-0.175 3.471-2.042 3.617-2.042 0.379 0 2.567 2.888 2.858 3.325 0.292-0.029 0.583-0.058 0.875-0.058s0.583 0.029 0.875 0.058c0.817-1.138 1.692-2.275 2.683-3.267l0.175-0.058c0.146 0 3.267 1.837 3.617 2.042 0.087 0.058 0.117 0.146 0.117 0.204 0 0.525-1.225 3.442-1.488 4.025 0.35 0.467 0.642 0.992 0.875 1.517 0.583 0.058 4.346 0.467 4.346 0.904z',
	dollar:
		'M42.565 37.031c0 6.375-4.563 11.406-11.187 12.5v5.469c0 0.563-0.438 1-1 1h-4.219c-0.531 0-1-0.438-1-1v-5.469c-7.312-1.031-11.312-5.406-11.469-5.594-0.312-0.375-0.344-0.906-0.063-1.281l3.219-4.219c0.156-0.219 0.438-0.344 0.719-0.375s0.563 0.063 0.75 0.281c0.063 0.031 4.438 4.219 9.969 4.219 3.063 0 6.375-1.625 6.375-5.156 0-3-3.688-4.469-7.906-6.156-5.625-2.219-12.625-5.031-12.625-12.875 0-5.75 4.5-10.5 11.031-11.75v-5.625c0-0.563 0.469-1 1-1h4.219c0.563 0 1 0.438 1 1v5.5c6.344 0.719 9.719 4.156 9.844 4.281 0.312 0.344 0.375 0.812 0.156 1.187l-2.531 4.563c-0.156 0.281-0.406 0.469-0.719 0.5-0.312 0.063-0.594-0.031-0.844-0.219-0.031-0.031-3.812-3.375-8.5-3.375-3.969 0-6.719 1.969-6.719 4.812 0 3.312 3.812 4.781 8.25 6.5 5.75 2.219 12.25 4.75 12.25 12.281z',
	envelope:
		'M56 20.188v24.812c0 2.75-2.25 5-5 5h-46c-2.75 0-5-2.25-5-5v-24.812c0.938 1.031 2 1.938 3.156 2.719 5.187 3.531 10.437 7.063 15.531 10.781 2.625 1.938 5.875 4.312 9.281 4.312h0.063c3.406 0 6.656-2.375 9.281-4.312 5.094-3.688 10.344-7.25 15.562-10.781 1.125-0.781 2.188-1.687 3.125-2.719zM56 11c0 3.5-2.594 6.656-5.344 8.562-4.875 3.375-9.781 6.75-14.625 10.156-2.031 1.406-5.469 4.281-8 4.281h-0.063c-2.531 0-5.969-2.875-8-4.281-4.844-3.406-9.75-6.781-14.594-10.156-2.219-1.5-5.375-5.031-5.375-7.875 0-3.063 1.656-5.688 5-5.688h46c2.719 0 5 2.25 5 5z',
	error:
		'M28 0c15.458 0 28 12.542 28 28s-12.542 28-28 28-28-12.542-28-28 12.542-28 28-28zM32.667 45.464v-6.927c0-0.656-0.51-1.203-1.13-1.203h-7c-0.656 0-1.203 0.547-1.203 1.203v6.927c0 0.656 0.547 1.203 1.203 1.203h7c0.62 0 1.13-0.547 1.13-1.203zM32.594 32.922l0.656-22.641c0-0.255-0.109-0.51-0.365-0.656-0.219-0.182-0.547-0.292-0.875-0.292h-8.021c-0.328 0-0.656 0.109-0.875 0.292-0.255 0.146-0.365 0.401-0.365 0.656l0.62 22.641c0 0.51 0.547 0.911 1.24 0.911h6.745c0.656 0 1.203-0.401 1.24-0.911z',
	eye: 'M28 20.374q3.098 0 5.362 2.264t2.264 5.362-2.264 5.362-5.362 2.264-5.362-2.264-2.264-5.362 2.264-5.362 5.362-2.264zM28 40.749q5.243 0 8.996-3.753t3.753-8.996-3.753-8.996-8.996-3.753-8.996 3.753-3.753 8.996 3.753 8.996 8.996 3.753zM28 8.936q9.413 0 17.038 5.243t10.962 13.821q-3.336 8.579-10.962 13.821t-17.038 5.243-17.038-5.243-10.962-13.821q3.336-8.579 10.962-13.821t17.038-5.243z',
	'eye-thin':
		'M52 28c-2.969-4.594-7.031-8.531-11.906-11.031 1.25 2.125 1.906 4.563 1.906 7.031 0 7.719-6.281 14-14 14s-14-6.281-14-14c0-2.469 0.656-4.906 1.906-7.031-4.875 2.5-8.938 6.437-11.906 11.031 5.344 8.25 13.969 14 24 14s18.656-5.75 24-14zM29.5 16c0-0.812-0.687-1.5-1.5-1.5-5.219 0-9.5 4.281-9.5 9.5 0 0.812 0.687 1.5 1.5 1.5s1.5-0.687 1.5-1.5c0-3.563 2.937-6.5 6.5-6.5 0.812 0 1.5-0.687 1.5-1.5zM56 28c0 0.781-0.25 1.5-0.625 2.156-5.75 9.469-16.281 15.844-27.375 15.844s-21.625-6.406-27.375-15.844c-0.375-0.656-0.625-1.375-0.625-2.156s0.25-1.5 0.625-2.156c5.75-9.437 16.281-15.844 27.375-15.844s21.625 6.406 27.375 15.844c0.375 0.656 0.625 1.375 0.625 2.156z',
	filter:
		'M25.519 21.889c0 0-0.241-4.089-0.241-4.089s0-13.471 0-13.471c0.002-1.162-0.005-2.636 0.825-3.553 1.104-1.224 3.156-0.929 4.022 0.435 0.498 0.787 0.443 1.744 0.445 2.636 0 0 0 25.258 0 25.258s-5.052 0-5.052 0c0 0 0-7.217 0-7.217zM42.358 3.848c0.019-1.576 0.281-3.476 2.165-3.794 2.798-0.471 3.125 2.24 3.127 4.275 0 0 0 11.546 0 11.546s-2.646-0.233-2.646-0.233c0 0-2.646 0.233-2.646 0.233s0-12.028 0-12.028zM8.44 3.848c0.014-1.181 0.147-2.442 1.229-3.163 1.484-0.986 3.286-0.156 3.825 1.479 0.322 0.984 0.238 2.545 0.238 3.608 0 0 0 6.014 0 6.014s-2.646-0.197-2.646-0.197c0 0-2.646 0.197-2.646 0.197s0-7.938 0-7.938zM13.010 13.556c5.509 1.855 5.477 10.377-1.203 11.551-5.121 0.902-8.455-5.015-5.867-9.23 0.907-1.475 2.314-2.151 3.943-2.535 1.176-0.166 1.985-0.171 3.127 0.214zM46.207 28.993c-5.564 1.051-8.874-4.833-6.348-9.028 1.046-1.737 2.533-2.357 4.424-2.774 7.57-0.883 9.36 10.399 1.924 11.802zM13.732 26.46c0 0 0 24.536 0 24.536-0.002 1.215-0.067 3.079-0.844 4.063-1.066 1.352-3.094 1.222-3.984-0.226-0.496-0.808-0.462-1.958-0.464-2.875 0 0 0-25.499 0-25.499s5.292 0 5.292 0zM33.219 33.436c1.936 3.286-0.019 8.15-3.851 8.821-1.169 0.207-3.019 0.135-4.089-0.402-4.71-2.355-4.39-9.803 1.443-11.193 2.673-0.375 5.056 0.33 6.497 2.774zM45.004 30.77c0 0 2.646-0.221 2.646-0.221s0 21.409 0 21.409c-0.002 1.034 0.034 2.215-0.649 3.074-0.977 1.224-3.017 1.224-3.993 0-0.637-0.799-0.645-1.867-0.649-2.834 0 0 0-21.65 0-21.65s2.646 0.221 2.646 0.221zM27.684 43.998c0 0 2.887-0.219 2.887-0.219s0 8.66 0 8.66c-0.022 1.758-0.654 3.861-2.887 3.517-1.912-0.296-2.384-2.114-2.406-3.757 0 0 0-8.419 0-8.419s2.406 0.219 2.406 0.219z',
	filters: [
		{
			type: 'line',
			attributes: {
				x1: '1',
				y1: '17',
				x2: '55',
				y2: '17',
				'stroke-width': '4',
				'stroke-linecap': 'round',
				'stroke-linejoin': 'round',
			},
		},
		{
			type: 'line',
			attributes: {
				x1: '1',
				y1: '39',
				x2: '55',
				y2: '39',
				'stroke-width': '4',
				'stroke-linecap': 'round',
				'stroke-linejoin': 'round',
			},
		},
		{
			type: 'circle',
			attributes: {
				cx: '18',
				cy: '17',
				r: '8',
				fill: 'white',
				'stroke-width': '4',
			},
		},
		{
			type: 'circle',
			attributes: {
				cx: '38',
				cy: '39',
				r: '8',
				fill: 'white',
				'stroke-width': '4',
			},
		},
	],
	bullet: [
		{
			type: 'circle',
			attributes: {
				cx: '10',
				cy: '10',
				r: '5',
				stroke: 'black',
				'stroke-width': '3',
				fill: 'grey',
			},
		},
	],
	'selected-bullet': [
		{
			type: 'circle',
			attributes: {
				cx: '10',
				cy: '10',
				r: '5',
				stroke: 'black',
				'stroke-width': '3',
				fill: 'white',
			},
		},
	],
	heart:
		'M28 52c-0.5 0-1-0.188-1.375-0.563l-19.5-18.813c-0.25-0.219-7.125-6.5-7.125-14 0-9.156 5.594-14.625 14.938-14.625 5.469 0 10.594 4.312 13.062 6.75 2.469-2.437 7.594-6.75 13.062-6.75 9.344 0 14.938 5.469 14.938 14.625 0 7.5-6.875 13.781-7.156 14.063l-19.469 18.75c-0.375 0.375-0.875 0.563-1.375 0.563z',
	'heart-o':
		'M52 18.625c0-8.781-5.937-10.625-10.938-10.625-4.656 0-9.906 5.031-11.531 6.969-0.75 0.906-2.313 0.906-3.063 0-1.625-1.938-6.875-6.969-11.531-6.969-5 0-10.938 1.844-10.938 10.625 0 5.719 5.781 11.031 5.844 11.094l18.156 17.5 18.125-17.469c0.094-0.094 5.875-5.406 5.875-11.125zM56 18.625c0 7.5-6.875 13.781-7.156 14.063l-19.469 18.75c-0.375 0.375-0.875 0.563-1.375 0.563s-1-0.188-1.375-0.563l-19.5-18.813c-0.25-0.219-7.125-6.5-7.125-14 0-9.156 5.594-14.625 14.938-14.625 5.469 0 10.594 4.312 13.062 6.75 2.469-2.437 7.594-6.75 13.062-6.75 9.344 0 14.938 5.469 14.938 14.625z',
	info: 'M56.1425 28.2143C56.1425 43.6783 43.6065 56.2143 28.1425 56.2143C12.6786 56.2143 0.142578 43.6783 0.142578 28.2143C0.142578 12.7504 12.6786 0.214325 28.1425 0.214325C43.6065 0.214325 56.1425 12.7504 56.1425 28.2143ZM32.2543 16.7406C33.1441 15.8361 33.587 14.7358 33.587 13.4469C33.587 12.1603 33.1441 11.0578 32.2543 10.1417C31.3665 9.22792 30.2961 8.76988 29.0452 8.76988C27.7901 8.76988 26.7156 9.22562 25.8194 10.1417C24.9232 11.0578 24.4741 12.1603 24.4741 13.4469C24.4741 14.7358 24.9232 15.8361 25.8194 16.7406C26.7177 17.6498 27.7901 18.1032 29.0452 18.1032C30.2961 18.1032 31.3665 17.6498 32.2543 16.7406ZM29.9419 45.5994C30.7373 45.2628 31.8057 44.7746 33.1417 44.1326C33.1417 44.1326 32.9859 42.1999 32.4746 42.3716C31.9633 42.5432 31.5033 42.6302 31.0983 42.6302C30.237 42.6302 29.6304 42.4585 29.2785 42.113C28.9285 41.7675 28.7544 41.1188 28.7544 40.1669C28.7544 39.7902 28.8076 39.2285 28.9175 38.4928C29.0238 37.7527 29.1466 37.0951 29.2822 36.52L30.9462 29.3555C31.1093 28.6979 31.2211 27.9756 31.2816 27.1865C31.342 26.3996 31.3714 25.849 31.3714 25.5369C31.3714 24.0255 30.9352 22.7995 30.0647 21.8543C29.1942 20.9091 27.9536 20.4365 26.3464 20.4365C25.4521 20.4365 24.5065 20.6305 23.5059 21.0161C22.5053 21.4018 21.4588 21.8654 20.3648 22.4071C20.3648 22.4071 20.6323 24.3198 21.0868 24.157C21.5395 23.9943 21.983 23.9096 22.4155 23.9096C23.2969 23.9096 23.8907 24.0924 24.2022 24.4535C24.5138 24.8146 24.6695 25.4566 24.6695 26.3751C24.6695 26.8833 24.6201 27.4473 24.5174 28.0603C24.4167 28.6778 24.2902 29.3309 24.1418 30.0198L22.4704 37.2111C22.322 37.9667 22.2139 38.6444 22.1461 39.2441C22.0783 39.8437 22.0453 40.4322 22.0453 41.0051C22.0453 42.483 22.4943 43.7024 23.3922 44.6632C24.2902 45.6217 25.5492 46.1032 27.1674 46.1032C28.2211 46.1032 29.1466 45.936 29.9419 45.5994Z',
	'layout-grid':
		'M16 41v6c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3zM16 25v6c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3zM36 41v6c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3zM16 9v6c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3zM36 25v6c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3zM56 41v6c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3zM36 9v6c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3zM56 25v6c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3zM56 9v6c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3z',
	'layout-large':
		'M25.846 34.461v12.923c0 2.356-1.952 4.308-4.308 4.308h-17.231c-2.356 0-4.308-1.952-4.308-4.308v-12.923c0-2.356 1.952-4.308 4.308-4.308h17.231c2.356 0 4.308 1.952 4.308 4.308zM25.846 8.615v12.923c0 2.356-1.952 4.308-4.308 4.308h-17.231c-2.356 0-4.308-1.952-4.308-4.308v-12.923c0-2.356 1.952-4.308 4.308-4.308h17.231c2.356 0 4.308 1.952 4.308 4.308zM56 34.461v12.923c0 2.356-1.952 4.308-4.308 4.308h-17.231c-2.356 0-4.308-1.952-4.308-4.308v-12.923c0-2.356 1.952-4.308 4.308-4.308h17.231c2.356 0 4.308 1.952 4.308 4.308zM56 8.615v12.923c0 2.356-1.952 4.308-4.308 4.308h-17.231c-2.356 0-4.308-1.952-4.308-4.308v-12.923c0-2.356 1.952-4.308 4.308-4.308h17.231c2.356 0 4.308 1.952 4.308 4.308z',
	'layout-list':
		'M16 41v6c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3zM16 25v6c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3zM56 41v6c0 1.656-1.344 3-3 3h-30c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h30c1.656 0 3 1.344 3 3zM16 9v6c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3zM56 25v6c0 1.656-1.344 3-3 3h-30c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h30c1.656 0 3 1.344 3 3zM56 9v6c0 1.656-1.344 3-3 3h-30c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3h30c1.656 0 3 1.344 3 3z',
	minus:
		'M56 24.182v7.636c0 2.108-1.71 3.818-3.818 3.818h-48.364c-2.108 0-3.818-1.71-3.818-3.818v-7.636c0-2.108 1.71-3.818 3.818-3.818h48.364c2.108 0 3.818 1.71 3.818 3.818z',
	'minus-thin': 'M0 23.297h56v9.406h-56v-9.406z',
	plus: 'M56 24.182v7.636c0 2.108-1.71 3.818-3.818 3.818h-16.545v16.545c0 2.108-1.71 3.818-3.818 3.818h-7.636c-2.108 0-3.818-1.71-3.818-3.818v-16.545h-16.545c-2.108 0-3.818-1.71-3.818-3.818v-7.636c0-2.108 1.71-3.818 3.818-3.818h16.545v-16.545c0-2.108 1.71-3.818 3.818-3.818h7.636c2.108 0 3.818 1.71 3.818 3.818v16.545h16.545c2.108 0 3.818 1.71 3.818 3.818z',
	'plus-thin': 'M56 31.946h-24.054v24.054h-7.893v-24.054h-24.054v-7.893h24.054v-24.054h7.893v24.054h24.054v7.893z',
	'rotate-left':
		'M56 28c0 15.422-12.578 28-28 28-8.349 0-16.224-3.682-21.547-10.099-0.365-0.474-0.328-1.167 0.073-1.568l4.995-5.031c0.255-0.219 0.583-0.328 0.911-0.328 0.328 0.036 0.656 0.182 0.839 0.438 3.573 4.63 8.932 7.255 14.729 7.255 10.281 0 18.667-8.385 18.667-18.667s-8.385-18.667-18.667-18.667c-4.776 0-9.297 1.823-12.687 4.995l4.995 5.031c0.693 0.656 0.875 1.677 0.51 2.516-0.365 0.875-1.203 1.458-2.151 1.458h-16.333c-1.276 0-2.333-1.057-2.333-2.333v-16.333c0-0.948 0.583-1.786 1.458-2.151 0.839-0.365 1.859-0.182 2.516 0.51l4.74 4.703c5.141-4.849 12.104-7.729 19.286-7.729 15.422 0 28 12.578 28 28z',
	'rotate-right':
		'M56 4.667v16.333c0 1.276-1.057 2.333-2.333 2.333h-16.333c-0.948 0-1.786-0.583-2.151-1.458-0.365-0.839-0.182-1.859 0.51-2.516l5.031-5.031c-3.427-3.172-7.948-4.995-12.724-4.995-10.281 0-18.667 8.385-18.667 18.667s8.385 18.667 18.667 18.667c5.797 0 11.156-2.625 14.729-7.255 0.182-0.255 0.51-0.401 0.839-0.438 0.328 0 0.656 0.109 0.911 0.328l4.995 5.031c0.438 0.401 0.438 1.094 0.073 1.568-5.323 6.417-13.198 10.099-21.547 10.099-15.422 0-28-12.578-28-28s12.578-28 28-28c7.182 0 14.146 2.88 19.286 7.729l4.74-4.703c0.656-0.693 1.677-0.875 2.552-0.51 0.839 0.365 1.422 1.203 1.422 2.151z',
	search:
		'M38.769 23.692c0-8.313-6.764-15.077-15.077-15.077s-15.077 6.764-15.077 15.077 6.764 15.077 15.077 15.077 15.077-6.764 15.077-15.077zM56 51.692c0 2.356-1.952 4.308-4.308 4.308-1.144 0-2.255-0.471-3.029-1.279l-11.543-11.51c-3.937 2.726-8.649 4.173-13.428 4.173-13.091 0-23.692-10.601-23.692-23.692s10.601-23.692 23.692-23.692 23.692 10.601 23.692 23.692c0 4.779-1.447 9.49-4.173 13.428l11.543 11.543c0.774 0.774 1.245 1.885 1.245 3.029z',
	sort: 'M48.364 35.636c0 0.676-0.278 1.312-0.756 1.79l-17.818 17.818c-0.477 0.477-1.114 0.756-1.79 0.756s-1.312-0.278-1.79-0.756l-17.818-17.818c-0.477-0.477-0.756-1.114-0.756-1.79 0-1.392 1.153-2.545 2.545-2.545h35.636c1.392 0 2.545 1.153 2.545 2.545zM48.364 20.364c0 1.392-1.153 2.545-2.545 2.545h-35.636c-1.392 0-2.545-1.153-2.545-2.545 0-0.676 0.278-1.312 0.756-1.79l17.818-17.818c0.477-0.477 1.114-0.756 1.79-0.756s1.312 0.278 1.79 0.756l17.818 17.818c0.477 0.477 0.756 1.114 0.756 1.79z',
	spinner:
		'M16.009 45.176c0 2.268-1.847 4.148-4.148 4.148-2.268 0-4.148-1.88-4.148-4.148 0-2.301 1.88-4.148 4.148-4.148 2.301 0 4.148 1.847 4.148 4.148zM32.148 51.852c0 2.301-1.847 4.148-4.148 4.148s-4.148-1.847-4.148-4.148 1.847-4.148 4.148-4.148 4.148 1.847 4.148 4.148zM9.333 29.037c0 2.301-1.847 4.148-4.148 4.148s-4.148-1.847-4.148-4.148 1.847-4.148 4.148-4.148 4.148 1.847 4.148 4.148zM48.287 45.176c0 2.268-1.88 4.148-4.148 4.148-2.301 0-4.148-1.88-4.148-4.148 0-2.301 1.847-4.148 4.148-4.148 2.268 0 4.148 1.847 4.148 4.148zM17.046 12.898c0 2.852-2.333 5.185-5.185 5.185s-5.185-2.333-5.185-5.185 2.333-5.185 5.185-5.185 5.185 2.333 5.185 5.185zM54.963 29.037c0 2.301-1.847 4.148-4.148 4.148s-4.148-1.847-4.148-4.148 1.847-4.148 4.148-4.148 4.148 1.847 4.148 4.148zM34.222 6.222c0 3.435-2.787 6.222-6.222 6.222s-6.222-2.787-6.222-6.222 2.787-6.222 6.222-6.222 6.222 2.787 6.222 6.222zM51.398 12.898c0 4.018-3.273 7.259-7.259 7.259-4.018 0-7.259-3.241-7.259-7.259 0-3.986 3.241-7.259 7.259-7.259 3.986 0 7.259 3.273 7.259 7.259z',
	square: 'M0 0h56v56h-56z',
	star: 'M56 21.993c0 0.606-0.438 1.178-0.875 1.615l-12.216 11.913 2.894 16.827c0.034 0.236 0.034 0.438 0.034 0.673 0 0.875-0.404 1.683-1.38 1.683-0.471 0-0.942-0.168-1.346-0.404l-15.111-7.942-15.111 7.942c-0.438 0.236-0.875 0.404-1.346 0.404-0.976 0-1.413-0.808-1.413-1.683 0-0.236 0.034-0.438 0.067-0.673l2.894-16.827-12.25-11.913c-0.404-0.438-0.841-1.010-0.841-1.615 0-1.010 1.043-1.413 1.885-1.548l16.894-2.457 7.572-15.312c0.303-0.639 0.875-1.38 1.649-1.38s1.346 0.74 1.649 1.38l7.572 15.312 16.894 2.457c0.808 0.135 1.885 0.538 1.885 1.548z',
	'star-half':
		'M39.919 32.426l8.651-8.415-14.205-2.087-1.010-2.020-5.352-10.839v32.415l1.986 1.043 10.704 5.655-2.020-11.949-0.404-2.222zM55.134 23.607l-12.219 11.916 2.895 16.83c0.236 1.481-0.303 2.356-1.346 2.356-0.37 0-0.842-0.135-1.346-0.404l-15.113-7.944-15.113 7.944c-0.505 0.269-0.976 0.404-1.346 0.404-1.043 0-1.582-0.875-1.346-2.356l2.895-16.83-12.252-11.916c-1.447-1.447-0.976-2.861 1.043-3.164l16.897-2.457 7.574-15.315c0.438-0.909 1.043-1.38 1.649-1.38v0c0.606 0 1.178 0.471 1.649 1.38l7.574 15.315 16.897 2.457c2.020 0.303 2.491 1.717 1.010 3.164z',
	'star-o':
		'M38.264 34.007l10.298-9.995-14.202-2.087-6.361-12.856-6.361 12.856-14.202 2.087 10.298 9.995-2.457 14.168 12.721-6.697 12.688 6.697zM56 21.993c0 0.606-0.438 1.178-0.875 1.615l-12.216 11.913 2.894 16.827c0.034 0.236 0.034 0.438 0.034 0.673 0 0.909-0.404 1.683-1.38 1.683-0.471 0-0.942-0.168-1.346-0.404l-15.111-7.942-15.111 7.942c-0.438 0.236-0.875 0.404-1.346 0.404-0.976 0-1.413-0.808-1.413-1.683 0-0.236 0.034-0.438 0.067-0.673l2.894-16.827-12.25-11.913c-0.404-0.438-0.841-1.010-0.841-1.615 0-1.010 1.043-1.413 1.885-1.548l16.894-2.457 7.572-15.312c0.303-0.639 0.875-1.38 1.649-1.38s1.346 0.74 1.649 1.38l7.572 15.312 16.894 2.457c0.808 0.135 1.885 0.538 1.885 1.548z',
	'video-camera':
		'M56 11v34c0 0.812-0.5 1.531-1.219 1.844-0.25 0.094-0.531 0.156-0.781 0.156-0.531 0-1.031-0.188-1.406-0.594l-12.594-12.594v5.187c0 4.969-4.031 9-9 9h-22c-4.969 0-9-4.031-9-9v-22c0-4.969 4.031-9 9-9h22c4.969 0 9 4.031 9 9v5.156l12.594-12.562c0.375-0.406 0.875-0.594 1.406-0.594 0.25 0 0.531 0.063 0.781 0.156 0.719 0.312 1.219 1.031 1.219 1.844z',
	warn: 'M31.2981 5.28228C29.8323 2.74341 26.1677 2.74341 24.7019 5.28228L0.515899 47.1737C-0.94992 49.7126 0.88235 52.8861 3.81399 52.8861H52.186C55.1176 52.8861 56.9499 49.7126 55.4841 47.1737L31.2981 5.28228ZM25.2229 35.0037L24.8264 18.837C24.8264 18.655 24.8923 18.4729 25.047 18.3686C25.1794 18.2387 25.3776 18.1601 25.5759 18.1601H30.4241C30.6223 18.1601 30.8206 18.238 30.953 18.3686C31.1071 18.4729 31.1736 18.655 31.1736 18.837L30.7988 35.0037C30.7988 35.3679 30.4682 35.6542 30.0493 35.6542H25.9724C25.5759 35.6542 25.2453 35.3679 25.2229 35.0037ZM25.1788 43.9593V39.0131C25.1788 38.5447 25.487 38.1541 25.8618 38.1541H30.0929C30.4894 38.1541 30.82 38.5447 30.82 39.0131V43.9593C30.82 44.4277 30.4894 44.8183 30.0929 44.8183H25.8618C25.487 44.8183 25.1788 44.4277 25.1788 43.9593Z',
	wrench:
		'M12.407 45.809c0-1.193-0.988-2.181-2.181-2.181s-2.181 0.988-2.181 2.181 0.988 2.181 2.181 2.181 2.181-0.988 2.181-2.181zM34.357 31.494l-23.245 23.245c-0.784 0.784-1.909 1.261-3.068 1.261s-2.284-0.477-3.102-1.261l-3.613-3.681c-0.818-0.784-1.295-1.909-1.295-3.068s0.477-2.284 1.295-3.102l23.211-23.211c1.772 4.465 5.351 8.044 9.816 9.816zM55.966 16.667c0 1.125-0.409 2.522-0.784 3.613-2.147 6.067-7.976 10.259-14.418 10.259-8.419 0-15.27-6.851-15.27-15.27s6.851-15.27 15.27-15.27c2.488 0 5.726 0.75 7.805 2.147 0.341 0.239 0.545 0.545 0.545 0.954 0 0.375-0.239 0.75-0.545 0.954l-9.987 5.76v7.635l6.578 3.647c1.125-0.648 9.032-5.624 9.714-5.624s1.091 0.511 1.091 1.193z',
};
