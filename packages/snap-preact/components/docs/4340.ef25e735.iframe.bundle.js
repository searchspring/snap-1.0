'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[4340],
		{
			'./src/getBundleDetails/getBundleDetails.ts'(c, t, n) {
				n.r(t), n.d(t, { getBundleDetails: () => o });
				const o = async (a) =>
					new Promise((d, r) => {
						const e = new XMLHttpRequest();
						e.open('HEAD', a, !0),
							(e.onreadystatechange = () => {
								if (e.readyState === e.DONE) {
									const s = e.status,
										i = e.getResponseHeader('Last-Modified');
									(i && s === 0) || (s >= 200 && s < 400)
										? d({ url: a, lastModified: i?.split(',')[1]?.trim() || '' })
										: r({ message: 'Branch not found!', description: 'Incorrect branch name or branch no longer exists.' });
								}
							}),
							(e.onerror = () => r({ message: 'Branch load fail!', description: 'There was an error with the request.' })),
							e.send();
					});
			},
		},
	]);
})();
