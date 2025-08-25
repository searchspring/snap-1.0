'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[1085],
	{
		'./src/getBundleDetails/getBundleDetails.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { getBundleDetails: () => getBundleDetails });
			const getBundleDetails = async (url) =>
				new Promise((resolve, reject) => {
					const request = new XMLHttpRequest();
					request.open('HEAD', url, !0),
						(request.onreadystatechange = () => {
							if (request.readyState === request.DONE) {
								const status = request.status,
									lastModified = request.getResponseHeader('Last-Modified');
								(lastModified && 0 === status) || (status >= 200 && status < 400)
									? resolve({ url, lastModified: lastModified?.split(',')[1]?.trim() || '' })
									: reject({ message: 'Branch not found!', description: 'Incorrect branch name or branch no longer exists.' });
							}
						}),
						(request.onerror = () => reject({ message: 'Branch load fail!', description: 'There was an error with the request.' })),
						request.send();
				});
		},
	},
]);
