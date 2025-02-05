import { h } from 'preact';
import { useEffect } from 'preact/hooks';

import { observer } from 'mobx-react';

import {
	Pagination,
	Results as ResultsComponent,
	Result,
	LoadMore,
	withController,
	withSnap,
	Recommendation,
	useCreateController,
	Theme,
} from '@searchspring/snap-preact/components';

import { Profile } from '../Profile/Profile';
import { Toolbar } from '../Toolbar/Toolbar';
import { Product } from '@searchspring/snap-store-mobx';

type ResultsProps = {
	store?: SearchStore;
	controller?: SearchController;
};

const resultsBreakpoints = {
	0: {
		columns: 2,
	},
	768: {
		columns: 3,
	},
	991: {
		columns: 4,
	},
};

export const Results = withController(
	observer(({ controller }: ResultsProps) => {
		const store = controller.store;
		const results = store.results;
		const pagination = store.pagination;

		return (
			<div className="ss-results">
				<Toolbar />

				<div className="clear"></div>

				<Profile name="results" controller={controller}>
					<div id="ss_results">
						<ResultsComponent breakpoints={resultsBreakpoints} controller={controller} results={results} resultComponent={CustomResultComponent} />
					</div>
				</Profile>

				<div className="clear"></div>

				<div className={`ss-toolbar ${controller.config.settings.infinite ? 'ss-toolbar-bottom-infinite' : 'ss-toolbar-bottom'}`}>
					{controller.config.settings.infinite ? (
						<LoadMore controller={controller} progressIndicator="radial" />
					) : (
						pagination.totalPages > 1 && <Pagination pagination={pagination} />
					)}
				</div>

				<div className="clear"></div>
			</div>
		);
	})
);

export const CustomResultComponent = ({ controller, result, theme }: { controller: SearchController; result: Product; theme: Theme }) => {
	let aiResult = false;
	if (result.attributes.knnRank && parseInt(result.attributes.knnRank as string) > 0) {
		aiResult = true;
	}

	return (
		<div className={aiResult ? 'aiResult' : ''}>
			<div className={aiResult ? 'aiResult-inner' : ''}>
				{aiResult ? (
					<div className="aiResult-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none">
							<g clip-path="url(#clip0_576_8456)">
								<path
									d="M16 18C16.5304 18 17.0391 18.2107 17.4142 18.5858C17.7893 18.9609 18 19.4696 18 20C18 19.4696 18.2107 18.9609 18.5858 18.5858C18.9609 18.2107 19.4696 18 20 18C19.4696 18 18.9609 17.7893 18.5858 17.4142C18.2107 17.0391 18 16.5304 18 16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18ZM9 18C9 16.4087 9.63214 14.8826 10.7574 13.7574C11.8826 12.6321 13.4087 12 15 12C13.4087 12 11.8826 11.3679 10.7574 10.2426C9.63214 9.11742 9 7.5913 9 6C9 7.5913 8.36786 9.11742 7.24264 10.2426C6.11742 11.3679 4.5913 12 3 12C4.5913 12 6.11742 12.6321 7.24264 13.7574C8.36786 14.8826 9 16.4087 9 18Z"
									stroke="#00CEE1"
									fill="#00CEE1"
									stroke-width="1"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M17.4142 6.58579C17.0391 6.21071 16.5304 6 16 6C16.5304 6 17.0391 5.78929 17.4142 5.41421C17.7893 5.03914 18 4.53043 18 4C18 4.53043 18.2107 5.03914 18.5858 5.41421C18.9609 5.78929 19.4696 6 20 6C19.4696 6 18.9609 6.21071 18.5858 6.58579C18.2107 6.96086 18 7.46957 18 8C18 7.46957 17.7893 6.96086 17.4142 6.58579Z"
									stroke="#00CEE1"
									fill="#00CEE1"
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
						</svg>
					</div>
				) : null}
				<Result controller={controller} result={result} theme={theme} />
			</div>
		</div>
	);
};

export const NoResults = withSnap(
	withController(
		observer(({ controller, snap }) => {
			const store = controller.store;
			const dym = store.search.didYouMean;

			const recsController = useCreateController<RecommendationController>(snap, 'recommendation', {
				id: 'no-results',
				tag: 'no-results',
				branch: 'production',
			});

			useEffect(() => {
				if (!recsController?.store?.loaded && recsController?.store.error?.type !== 'error') {
					recsController?.search();
				}
			}, [recsController]);

			return (
				<div className="ss-no-results">
					{dym && (
						<div className="ss-no-results-container">
							<p className="ss-did-you-mean">
								Did you mean <a href={dym.url.href}>{dym.string}</a>?
							</p>
						</div>
					)}

					<div style={{ maxWidth: '100%' }}>{recsController?.store?.loaded && <Recommendation controller={recsController} />}</div>

					<div className="ss-no-results-container">
						<h4 className="ss-title">Suggestions</h4>

						<ul className="ss-suggestion-list">
							<li>Check for misspellings.</li>
							<li>Remove possible redundant keywords (ie. "products").</li>
							<li>Use other words to describe what you are searching for.</li>
						</ul>

						<p>
							Still can't find what you're looking for? <a href="/urlhere.html">Contact us</a>.
						</p>

						<div className="ss-contact ss-location">
							<h4 className="ss-title">Address</h4>
							<p>
								1234 Random Street
								<br />
								Some City, XX, 12345
							</p>
						</div>

						<div className="ss-contact ss-hours">
							<h4 className="ss-title">Hours</h4>
							<p>
								Mon - Sat, 00:00am - 00:00pm
								<br />
								Sun, 00:00am - 00:00pm
							</p>
						</div>

						<div className="ss-contact ss-phone">
							<h4 className="ss-title">Call Us</h4>
							<p>
								<strong>Telephone:</strong> 123-456-7890
								<br />
								<strong>Toll Free:</strong> 123-456-7890
							</p>
						</div>

						<div className="ss-contact ss-email">
							<h4 className="ss-title">Email</h4>
							<p>
								<a href="mailto:email@sitename.com">email@sitename.com</a>
							</p>
						</div>
					</div>
				</div>
			);
		})
	)
);
