import { h, Fragment } from 'preact';
import { Skeleton } from '@searchspring/snap-preact/components';
import { GenAI } from '../Header/GenAI';

export const ContentSkel = () => {
	const aiq = new URL(window.location.href).searchParams.get('aiq');
	const vq = new URL(window.location.href).searchParams.get('vq');

	let genAImessage;
	if (aiq) {
		genAImessage =
			Math.random() > 0.5 ? 'Analyzing your preferences to find personalized results...' : 'Curating results that match your specifications...';
	} else if (vq) {
		genAImessage = Math.random() > 0.5 ? 'Analyzing image...' : 'Finding results that match the image attributes...';
	}

	return (
		<>
			<div className="ss-results">
				{aiq || vq ? (
					<GenAI message={genAImessage} />
				) : (
					<Fragment>
						<div className="ss-header-container">
							<Skeleton height="33px" width="300px" />
						</div>
						<div className="toolbar">
							<div style={{ display: 'inline-block', margin: '10px 20px 10px 0' }}>
								<Skeleton height="33px" width="180px" />
							</div>
							<div style={{ display: 'inline-block', margin: '10px 20px 10px 0' }}>
								<Skeleton height="33px" width="180px" />
							</div>
							<div style={{ float: 'right' }}>
								<Skeleton height="30px" width="150px" />
							</div>
						</div>
					</Fragment>
				)}
				<div className="ss__results" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'auto', gap: '20px' }}>
					{Array.from({ length: 40 }).map((_, index) => (
						<ResultsSkel key={index} />
					))}
				</div>
			</div>
		</>
	);
};

const ResultsSkel = () => {
	return (
		<div className="ss-result">
			<Skeleton height="320px" width="100%" />
			<Skeleton height="30px" width="100%" />
			<Skeleton height="42px" width="100%" />
		</div>
	);
};
