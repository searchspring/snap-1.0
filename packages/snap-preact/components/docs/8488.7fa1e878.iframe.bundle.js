'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8488],
		{
			'./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx'(he, H, e) {
				e.d(H, { S: () => oe });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					W = e('../../node_modules/classnames/index.js'),
					g = e.n(W),
					A = e('../../node_modules/mobx-react-lite/es/index.js'),
					z = e('./components/src/providers/cache.tsx'),
					Y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					X = e('./components/src/providers/treePath.tsx'),
					Z = e('./components/src/utilities/mergeProps.ts'),
					q = e('./components/src/utilities/mergeStyles.ts'),
					ee = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					te = e('./components/src/hooks/useLang.tsx'),
					K = e('../../node_modules/deepmerge/dist/cjs.js'),
					se = e.n(K),
					S = e('../../node_modules/color/index.js'),
					k = e.n(S);
				const D = ({ columns: c, gapSize: d, gridSize: M, theme: b }) => {
						const r = b?.variables,
							l = new (k())(r?.colors.primary || void 0),
							C = l.isDark() ? '#fff' : '#000';
						return (0, v.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: c ? `repeat(${c}, 1fr)` : `repeat(auto-fill, minmax(${M}, 1fr))`,
							gap: d,
							gridAutoRows: '1fr',
							'& .ss__facet-grid-options__option': {
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flex: '0 1 auto',
								border: `1px solid ${l.hex() || '#333'}`,
								textAlign: 'center',
								wordBreak: 'break-all',
								boxSizing: 'border-box',
								padding: '1em 0',
								width: `calc(100% / ${c} - ${2 * Math.round((c + 2) / 2)}px)`,
								margin: `0 ${d} ${d} 0`,
								[`:nth-of-type(${c}n)`]: { marginRight: '0' },
								'&.ss__facet-grid-options__option--filtered': { background: l.hex() || '#ccc', color: C || '#333' },
								'&:hover:not(.ss__facet-grid-options__option--filtered)': { cursor: 'pointer', background: l.hex() || '#f8f8f8', color: C || '#333' },
								'& .ss__facet-grid-options__option__value': { '&.ss__facet-grid-options__option__value--smaller': { fontSize: '70%' } },
							},
							'@supports (display: grid)': {
								display: 'grid',
								'& .ss__facet-grid-options__option': { padding: '0', margin: '0', width: 'initial' },
								'&::before': { content: '""', width: 0, paddingBottom: '100%', gridRow: '1 / 1', gridColumn: '1 / 1' },
								'&> *:first-of-type': { gridRow: '1 / 1', gridColumn: '1 / 1' },
							},
						});
					},
					oe = (0, A.PA)((c) => {
						const d = (0, Y.u)(),
							b = { columns: 4, gapSize: '8px', gridSize: '45px', treePath: (0, X.LU)() },
							r = (0, Z.v6)('facetGridOptions', d, b, c),
							{ values: l, onClick: C, previewOnFocus: f, valueProps: P, facet: _, horizontal: B, className: V, internalClassName: I } = r;
						B && (r.columns = 0);
						const L = (0, q.Z)(r, D),
							m = l || _?.refinedValues;
						return m?.length
							? (0, s.Y)(z._, {
									children: (0, s.Y)('div', {
										...L,
										className: g()('ss__facet-grid-options', V, I),
										children: m.map((a) => {
											const R = {
													gridOption: {
														attributes: {
															'aria-label': `${
																a.filtered
																	? `remove selected filter ${_?.label || ''} - ${a.label}`
																	: _?.label
																	? `filter by ${_?.label} - ${a.label}`
																	: `filter by ${a.label}`
															}`,
														},
													},
												},
												o = se()(R, r.lang || {}),
												O = (0, te.u)(o, { facet: _, value: a });
											return (0, s.Y)('a', {
												className: g()('ss__facet-grid-options__option', { 'ss__facet-grid-options__option--filtered': a.filtered }),
												href: a.url?.link?.href,
												...P,
												onClick: (t) => {
													a.url?.link?.onClick(t), C && C(t);
												},
												...(f ? (0, ee.l)(() => a?.preview && a.preview()) : {}),
												...O.gridOption?.all,
												children: (0, s.Y)('span', {
													className: g()('ss__facet-grid-options__option__value', {
														'ss__facet-grid-options__option__value--smaller': a.label.length > 3,
													}),
													children: a.label,
												}),
											});
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.tsx'(he, H, e) {
				e.d(H, { T: () => oe });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					W = e('../../node_modules/classnames/index.js'),
					g = e.n(W),
					A = e('../../node_modules/mobx-react-lite/es/index.js'),
					z = e('./components/src/providers/cache.tsx'),
					Y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					X = e('./components/src/providers/treePath.tsx'),
					Z = e('./components/src/utilities/defined.ts'),
					q = e('./components/src/utilities/mergeProps.ts'),
					ee = e('./components/src/utilities/mergeStyles.ts'),
					te = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					K = e('./components/src/hooks/useLang.tsx'),
					se = e('../../node_modules/deepmerge/dist/cjs.js'),
					S = e.n(se),
					k = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const D = ({ theme: c, horizontal: d, returnIcon: M }) =>
						d
							? (0, v.AH)({
									display: 'flex',
									flexWrap: 'wrap',
									'& .ss__facet-hierarchy-options__option': {
										margin: '0 5px 5px 0',
										padding: '6px',
										textDecoration: 'none',
										flex: '0 1 auto',
										'&:hover': { cursor: 'pointer' },
										'&.ss__facet-hierarchy-options__option--filtered': {
											fontWeight: 'bold',
											color: c?.variables?.colors?.primary,
											marginRight: '2em',
											'&:hover': { cursor: 'default', background: 'unset' },
										},
										'&.ss__facet-hierarchy-options__option--return': {
											'.ss__icon': { padding: '0 0 0 2px' },
											[M ? '' : '&:before']: { content: `${M ? '""' : "'\\0000ab'"}`, padding: '0 2px 0 0', color: c?.variables?.colors?.primary },
										},
										'& .ss__facet-hierarchy-options__option__value': {
											'& .ss__facet-hierarchy-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
										},
									},
							  })
							: (0, v.AH)({
									'& .ss__facet-hierarchy-options__option': {
										display: 'flex',
										padding: '6px 0',
										textDecoration: 'none',
										alignItems: 'center',
										'&:hover': { cursor: 'pointer' },
										'&.ss__facet-hierarchy-options__option--filtered': {
											fontWeight: 'bold',
											color: c?.variables?.colors?.primary,
											'&:hover': { cursor: 'default', background: 'unset' },
											'& ~ .ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)': { paddingLeft: '16px' },
										},
										'&.ss__facet-hierarchy-options__option--return': {
											'.ss__icon': { padding: '0 0 0 2px' },
											[M ? '' : '&:before']: { content: `${M ? '""' : "'\\0000ab'"}`, padding: '0 2px 0 0', color: c?.variables?.colors?.primary },
										},
										'& .ss__facet-hierarchy-options__option__value': {
											marginLeft: '8px',
											'& .ss__facet-hierarchy-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
										},
									},
							  }),
					oe = (0, A.PA)((c) => {
						const d = (0, Y.u)(),
							b = { treePath: (0, X.LU)() },
							r = (0, q.v6)('facetHierarchyOptions', d, b, c),
							{
								values: l,
								hideCount: C,
								returnIcon: f,
								onClick: P,
								previewOnFocus: _,
								horizontal: B,
								valueProps: V,
								facet: I,
								disableStyles: L,
								treePath: m,
								className: a,
								internalClassName: R,
							} = r,
							o = {
								icon: { internalClassName: 'ss__facet-hierarchy-options__icon', ...(0, Z.s)({ disableStyles: L }), theme: r?.theme, treePath: m },
							},
							O = (0, ee.Z)(r, D),
							t = l || I?.refinedValues;
						return t?.length
							? (0, s.Y)(z._, {
									children: (0, s.Y)('div', {
										...O,
										className: g()('ss__facet-hierarchy-options', { 'ss__facet-hierarchy-options--horizontal': B }, a, R),
										children: t.map((i) => {
											const j = {
													hierarchyOption: {
														attributes: {
															'aria-label': `${
																i.filtered ? `selected ${i.label}` : I?.label ? `filter by ${I?.label} - ${i.label}` : `filter by ${i.label}`
															}`,
														},
													},
												},
												h = S()(j, r.lang || {}),
												p = (0, K.u)(h, { facet: I, value: i });
											return (0, s.FD)('a', {
												className: g()(
													'ss__facet-hierarchy-options__option',
													{ 'ss__facet-hierarchy-options__option--filtered': i.filtered },
													{ 'ss__facet-hierarchy-options__option--return': i.history && !i.filtered }
												),
												href: i.url?.link?.href,
												...V,
												onClick: (G) => {
													i.url?.link?.onClick(G), P && P(G);
												},
												...(_ ? (0, te.l)(() => i?.preview && i.preview()) : {}),
												...p.hierarchyOption?.all,
												children: [
													f && i.history && !i.filtered && (0, s.Y)(k.I, { ...o.icon, ...(typeof f == 'string' ? { icon: f } : f) }),
													(0, s.FD)('span', {
														className: 'ss__facet-hierarchy-options__option__value',
														children: [
															i.label,
															!C &&
																i?.count > 0 &&
																!i.filtered &&
																(0, s.FD)('span', { className: 'ss__facet-hierarchy-options__option__value__count', children: ['(', i.count, ')'] }),
														],
													}),
												],
											});
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/FacetListOptions/FacetListOptions.tsx'(he, H, e) {
				e.d(H, { C: () => c });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					W = e('../../node_modules/classnames/index.js'),
					g = e.n(W),
					A = e('../../node_modules/mobx-react-lite/es/index.js'),
					z = e('./components/src/providers/cache.tsx'),
					Y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					X = e('./components/src/providers/treePath.tsx'),
					Z = e('./components/src/utilities/defined.ts'),
					q = e('./components/src/utilities/mergeProps.ts'),
					ee = e('./components/src/utilities/mergeStyles.ts'),
					te = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					K = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					se = e('./components/src/hooks/useLang.tsx'),
					S = e('../../node_modules/deepmerge/dist/cjs.js'),
					k = e.n(S),
					D = e('./components/src/components/Molecules/Radio/Radio.tsx');
				const oe = ({ horizontal: d, theme: M, hideCheckbox: b }) =>
						(0, v.AH)({
							display: d ? 'flex' : void 0,
							flexWrap: d ? 'wrap' : void 0,
							'& .ss__facet-list-options__option': {
								display: d ? void 0 : 'flex',
								alignItems: d ? void 0 : 'center',
								flex: d ? '0 1 auto' : void 0,
								padding: '6px',
								textDecoration: 'none',
								'&:hover': { cursor: 'pointer' },
								'&.ss__facet-list-options__option--filtered': { fontWeight: 'bold', color: M?.variables?.colors?.primary },
								'& .ss__facet-list-options__option__value': {
									marginLeft: b ? '' : '8px',
									'& .ss__facet-list-options__option__value__count': { fontSize: '0.8em', marginLeft: '6px' },
								},
							},
						}),
					c = (0, A.PA)((d) => {
						const M = (0, Y.u)(),
							b = (0, X.LU)(),
							r = { hideCheckbox: !!d.horizontal, treePath: b },
							l = (0, q.v6)('facetListOptions', M, r, d),
							{
								values: C,
								hideCheckbox: f,
								hideCount: P,
								onClick: _,
								previewOnFocus: B,
								hideCountParenthesis: V,
								respectSingleSelect: I,
								valueProps: L,
								facet: m,
								disableStyles: a,
								className: R,
								internalClassName: o,
								treePath: O,
							} = l;
						let t = !1;
						I && m?.multiple == 'single' && (t = !0);
						const i = {
								checkbox: { internalClassName: 'ss__facet-list-options__checkbox', ...(0, Z.s)({ disableStyles: a }), theme: l?.theme, treePath: O },
								radio: { internalClassName: 'ss__facet-list-options__radio', ...(0, Z.s)({ disableStyles: a }), theme: l?.theme, treePath: O },
							},
							j = (0, ee.Z)(l, oe),
							h = C || m?.refinedValues;
						return h?.length
							? (0, s.Y)(z._, {
									children: (0, s.Y)('div', {
										...j,
										className: g()('ss__facet-list-options', R, o),
										children: h.map((p) => {
											const G = {
													listOption: {
														attributes: {
															'aria-label': `${
																p.filtered
																	? `remove selected filter ${m?.label || ''} - ${p.label}`
																	: m?.label
																	? `filter by ${m?.label} - ${p.label}`
																	: `filter by ${p.label}`
															}`,
														},
													},
												},
												w = k()(G, l.lang || {}),
												T = (0, se.u)(w, { facet: m, value: p });
											return (0, s.FD)('a', {
												className: g()('ss__facet-list-options__option', { 'ss__facet-list-options__option--filtered': p.filtered }),
												href: p.url?.link?.href,
												...L,
												onClick: (x) => {
													p.url?.link?.onClick(x), _ && _(x);
												},
												...(B ? (0, K.l)(() => p?.preview && p.preview()) : {}),
												...T.listOption?.all,
												children: [
													t
														? !f && (0, s.Y)(D.s, { ...i.radio, checked: p.filtered, disableA11y: !0, ...T.listOption.attributes })
														: !f && (0, s.Y)(te.S, { ...i.checkbox, checked: p.filtered, disableA11y: !0, ...T.listOption.attributes }),
													(0, s.FD)('span', {
														className: 'ss__facet-list-options__option__value',
														children: [
															(0, s.Y)('span', { className: 'ss__facet-list-options__option__value__label', children: p.label }),
															!P &&
																p?.count > 0 &&
																(0, s.Y)('span', {
																	className: 'ss__facet-list-options__option__value__count',
																	children: V ? `${p.count}` : `(${p.count})`,
																}),
														],
													}),
												],
											});
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx'(he, H, e) {
				e.d(H, { P: () => r });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					W = e('../../node_modules/classnames/index.js'),
					g = e.n(W),
					A = e('../../node_modules/mobx-react-lite/es/index.js'),
					z = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					Y = e('./components/src/utilities/defined.ts'),
					X = e('./components/src/utilities/mergeProps.ts'),
					Z = e('./components/src/utilities/mergeStyles.ts'),
					q = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					ee = e('./components/src/providers/cache.tsx'),
					te = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					K = e('./components/src/providers/treePath.tsx'),
					se = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					S = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					k = e('./components/src/hooks/useLang.tsx'),
					D = e('../../node_modules/deepmerge/dist/cjs.js'),
					oe = e.n(D),
					c = e('../../node_modules/color/index.js'),
					d = e.n(c),
					M = e('./components/src/components/Atoms/Image/Image.tsx');
				const b = ({ columns: l, gridSize: C, gapSize: f, horizontal: P, theme: _ }) =>
						(0, v.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: l ? `repeat(${l}, calc((100% - (${l - 1} * ${f}))/ ${l}))` : `repeat(auto-fill, minmax(${C}, 1fr))`,
							gap: f,
							'.ss__facet-palette-options__option--list': { display: 'flex', flexDirection: 'row' },
							'.ss__facet-palette-options__option': {
								width: `calc(100% / ${l} - ${2 * Math.round((l + 2) / 2)}px )`,
								marginRight: f,
								marginBottom: f,
								[`:nth-of-type(${l}n)`]: { marginRight: '0' },
								'.ss__facet-palette-options__option__wrapper': { border: '2px solid transparent', borderRadius: '100%', padding: '2px' },
								'.ss__facet-palette-options__option__palette': {
									paddingTop: 'calc(100% - 2px)',
									border: '1px solid #EBEBEB',
									borderRadius: '100%',
									position: 'relative',
									'.ss__facet-palette-options__icon': {
										position: 'absolute',
										top: 0,
										right: 0,
										left: 0,
										margin: 'auto',
										bottom: 0,
										textAlign: 'center',
										stroke: 'black',
										strokeWidth: '3px',
										strokeLinejoin: 'round',
										opacity: 0,
									},
									'&.ss__facet-palette-options__option__palette--image': { paddingTop: '0', height: 'auto' },
								},
								'.ss__facet-palette-options__option__value': {
									display: 'block',
									textAlign: 'center',
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									whiteSpace: 'nowrap',
								},
							},
							'@supports (display: grid)': { display: 'grid', '.ss__facet-palette-options__option': { margin: '0', width: 'initial' } },
							'&.ss__facet-palette-options--list': {
								display: 'flex',
								flexDirection: P ? 'row' : 'column',
								'.ss__facet-palette-options__option__wrapper': { borderColor: 'transparent', width: '16px', height: 'fit-content' },
								'.ss__facet-palette-options__option--filtered': { '.ss__facet-palette-options__option__value': { fontWeight: 'bold' } },
								'.ss__facet-palette-options__option--list': { alignItems: 'center' },
								'.ss__facet-palette-options__option__value__count': { marginLeft: '5px' },
								'.ss__facet-palette-options__checkbox': { marginRight: '5px' },
							},
							'&.ss__facet-palette-options--grid': {
								'.ss__facet-palette-options__checkbox': {
									display: 'flex',
									textAlign: 'center',
									overflow: 'hidden',
									margin: 'auto',
									marginBottom: '5px',
								},
								'.ss__facet-palette-options__option--filtered': {
									'.ss__facet-palette-options__option__wrapper': {
										borderColor: _?.variables?.colors?.primary || '#333 !important',
										padding: '0px',
										borderWidth: '4px',
									},
								},
								'.ss__facet-palette-options__option': {
									'&:hover': {
										cursor: 'pointer',
										'.ss__facet-palette-options__option__wrapper': { borderColor: '#EBEBEB' },
										'.ss__facet-palette-options__option__palette': { '.ss__facet-palette-options__icon': { opacity: 1 } },
									},
								},
							},
							'.ss__facet-palette-options__option__value__count': {
								fontSize: '0.8em',
								display: 'block',
								textAlign: 'center',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
							},
						}),
					r = (0, A.PA)((l) => {
						const C = (0, te.u)(),
							f = (0, K.LU)(),
							P = {
								columns: 4,
								layout: 'grid',
								gridSize: '45px',
								gapSize: l.layout == 'list' ? '2px' : '8px',
								hideCount: !0,
								hideCheckbox: !0,
								treePath: f,
							},
							_ = (0, X.v6)('facetPaletteOptions', C, P, l),
							{
								values: B,
								hideLabel: V,
								layout: I,
								hideCount: L,
								hideCheckbox: m,
								colorMapping: a,
								hideIcon: R,
								onClick: o,
								previewOnFocus: O,
								valueProps: t,
								facet: i,
								horizontal: j,
								disableStyles: h,
								className: p,
								internalClassName: G,
								treePath: w,
							} = _;
						j && (_.columns = 0);
						const T = {
								icon: {
									internalClassName: 'ss__facet-palette-options__icon',
									...(0, Y.s)({ disableStyles: h, icon: 'close-thin', color: 'white', size: '40%' }),
									theme: _?.theme,
									treePath: w,
								},
								image: { internalClassName: 'ss__facet-palette-options__image', ...(0, Y.s)({ disableStyles: h }), theme: _?.theme, treePath: w },
								checkbox: {
									internalClassName: 'ss__facet-palette-options__checkbox',
									...(0, Y.s)({ disableStyles: h }),
									theme: _?.theme,
									treePath: w,
								},
							},
							x = (0, Z.Z)(_, b),
							U = B || i?.values;
						return U?.length
							? (0, s.Y)(ee._, {
									children: (0, s.Y)('div', {
										...x,
										className: g()('ss__facet-palette-options', `ss__facet-palette-options--${I?.toLowerCase()}`, p, G),
										children: U.map((n) => {
											const re = {
													paletteOption: {
														attributes: {
															'aria-label': `${
																n.filtered
																	? `remove selected filter ${i?.label || ''} - ${n.label}`
																	: i?.label
																	? `filter by ${i?.label} - ${n.label}`
																	: `filter by ${n.label}`
															}`,
														},
													},
												},
												ne = oe()(re, _.lang || {}),
												me = (0, k.u)(ne, { facet: i, value: n });
											let N;
											a && (N = Object.fromEntries(Object.entries(a).map(([Q, y]) => [Q.toLowerCase(), y])));
											const ae = N && N[n.label.toLowerCase()] && N[n.label.toLowerCase()].background ? N[n.label.toLowerCase()].background : n.value,
												E =
													N && N[n.label.toLowerCase()] && N[n.label.toLowerCase()].backgroundImageUrl
														? N[n.label.toLowerCase()].backgroundImageUrl
														: void 0;
											let $ = !1;
											if (ae)
												try {
													$ = new (d())(ae.toLowerCase()).isDark();
												} catch {}
											return (0, s.FD)(
												'a',
												{
													className: g()(
														'ss__facet-palette-options__option',
														{ 'ss__facet-palette-options__option--filtered': n.filtered },
														{ 'ss__facet-palette-options__option--dark': $ },
														`ss__facet-palette-options__option--${I?.toLowerCase()}`
													),
													href: n.url?.link?.href,
													...(V ? { title: n.label } : {}),
													...t,
													onClick: (Q) => {
														n.url?.link?.onClick(Q), o && o(Q);
													},
													'aria-atomic': 'false',
													...(O ? (0, se.l)(() => n?.preview && n.preview()) : {}),
													...me.paletteOption?.all,
													children: [
														!m && (0, s.Y)(S.S, { ...T.checkbox, checked: n.filtered, disableA11y: !0, ...me.paletteOption.attributes }),
														(0, s.Y)('div', {
															className: 'ss__facet-palette-options__option__wrapper',
															children: (0, s.FD)('div', {
																className: g()(
																	'ss__facet-palette-options__option__palette',
																	`ss__facet-palette-options__option__palette--${z.p(n.value)}`,
																	{ 'ss__facet-palette-options__option__palette--image': E }
																),
																style: { background: ae },
																children: [
																	E ? (0, s.Y)(M._, { ...T.image, src: E, alt: n.label || n.value.toString() }) : null,
																	!R && n.filtered && I?.toLowerCase() == 'grid' && (0, s.Y)(q.I, { ...T.icon }),
																],
															}),
														}),
														!V &&
															(0, s.Y)('span', {
																className: 'ss__facet-palette-options__option__value',
																children: N?.[n.label.toLowerCase()]?.label ?? n.label,
															}),
														!L &&
															n?.count > 0 &&
															(0, s.FD)('span', { className: 'ss__facet-palette-options__option__value__count', children: ['(', n.count, ')'] }),
													],
												},
												n.value
											);
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/Radio/Radio.tsx'(he, H, e) {
				e.d(H, { s: () => c });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					W = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					A = e.n(g),
					z = e('../../node_modules/mobx-react-lite/es/index.js'),
					Y = e('./components/src/utilities/defined.ts'),
					X = e('./components/src/utilities/mergeProps.ts'),
					Z = e('./components/src/utilities/mergeStyles.ts'),
					q = e('./components/src/providers/cache.tsx'),
					ee = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					te = e('./components/src/providers/treePath.tsx'),
					K = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					se = e('./components/src/hooks/useA11y.tsx'),
					S = e('./components/src/hooks/useLang.tsx'),
					k = e('../../node_modules/deepmerge/dist/cjs.js'),
					D = e.n(k);
				const oe = ({ size: d, native: M }) =>
						M
							? (0, W.AH)({})
							: (0, W.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: d,
									width: d,
									cursor: 'pointer',
									'&.ss__radio--disabled': { opacity: 0.3, cursor: 'default' },
							  }),
					c = (0, z.PA)((d) => {
						const M = (0, ee.u)(),
							b = (0, te.LU)(),
							r = {
								size: '20px',
								startChecked: !1,
								disableA11y: !1,
								checkedIcon: 'bullet',
								unCheckedIcon: 'bullet-o',
								color: M.variables?.colors.primary || '#000000',
								treePath: b,
							},
							l = (0, X.v6)('radio', M, r, d),
							{
								checked: C,
								color: f,
								disabled: P,
								checkedIcon: _,
								unCheckedIcon: B,
								onClick: V,
								startChecked: I,
								native: L,
								disableA11y: m,
								disableStyles: a,
								className: R,
								internalClassName: o,
								size: O,
								treePath: t,
								lang: i,
								style: j,
								styleScript: h,
								themeStyleScript: p,
								name: G,
								...w
							} = l,
							T = {
								activeIcon: {
									name: 'active',
									internalClassName: 'ss__radio__icon',
									...(0, Y.s)({ size: O, color: f, disableStyles: a }),
									theme: l.theme,
									treePath: t,
								},
								inactiveIcon: {
									name: 'inactive',
									internalClassName: 'ss__radio__icon',
									...(0, Y.s)({ size: O, color: f, disableStyles: a }),
									theme: l.theme,
									treePath: t,
								},
							};
						let x, U;
						const n = C === void 0;
						n ? ([x, U] = (0, v.J0)(I)) : (x = C);
						const re = (E) => {
								P || (n && U && U(($) => !$), V && V(E));
							},
							ne = (0, Z.Z)(l, oe),
							me = { radio: {} },
							N = D()(me, i || {}),
							ae = (0, S.u)(N, { disabled: P, checkedState: x });
						return (0, s.Y)(q._, {
							children: L
								? (0, s.Y)('div', {
										className: A()('ss__radio', 'ss__radio--native', { 'ss__radio--disabled': P }, R, o),
										...ne,
										children: (0, s.Y)('input', {
											className: A()('ss__radio__input'),
											'aria-checked': x,
											type: 'radio',
											onClick: (E) => re(E),
											disabled: P,
											checked: x,
											tabIndex: m ? -1 : 0,
										}),
								  })
								: (0, s.Y)('span', {
										...ne,
										className: A()('ss__radio', { 'ss__radio--disabled': P, 'ss__radio--active': x }, R, o),
										onClick: (E) => re(E),
										ref: (E) => (m ? null : (0, se.iy)(E)),
										...ae.radio?.all,
										role: 'radio',
										'aria-checked': x,
										'aria-disabled': P,
										...w,
										children: x
											? (0, s.Y)(K.I, { ...T.activeIcon, ...(typeof _ == 'string' ? { icon: _ } : _) })
											: (0, s.Y)(K.I, { ...T.inactiveIcon, ...(typeof B == 'string' ? { icon: B } : B) }),
								  }),
						});
					});
			},
			'./components/src/components/Molecules/SearchInput/SearchInput.tsx'(he, H, e) {
				e.d(H, { D: () => oe });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					W = e('../../node_modules/classnames/index.js'),
					g = e.n(W),
					A = e('../../node_modules/mobx-react-lite/es/index.js'),
					z = e('./components/src/utilities/defined.ts'),
					Y = e('./components/src/utilities/mergeProps.ts'),
					X = e('./components/src/utilities/mergeStyles.ts'),
					Z = e('./components/src/providers/cache.tsx'),
					q = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					ee = e('./components/src/providers/treePath.tsx'),
					te = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					K = e('./components/src/components/Atoms/Button/Button.tsx'),
					se = e('../../node_modules/deepmerge/dist/cjs.js'),
					S = e.n(se),
					k = e('./components/src/hooks/useLang.tsx');
				const D = ({ theme: c }) =>
						(0, v.AH)({
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							border: `1px solid ${c?.variables?.colors?.primary || '#ccc'}`,
							'& .ss__icon': { padding: '5px' },
							'& .ss__search-input__input': { width: '100%', outline: 'none', border: '0', boxSizing: 'border-box' },
							'& .ss__search-input__button--close-search-button': { padding: '0px', border: '0px' },
							'& .ss__search-input__icons': { display: 'flex', alignItems: 'center', '& .ss__button': { padding: '0px', border: '0px' } },
						}),
					oe = (0, A.PA)((c) => {
						const d = (0, q.u)(),
							b = {
								placeholderText: 'Search',
								treePath: (0, ee.LU)(),
								submitSearchButton: { icon: 'search-thin' },
								clearSearchButton: { icon: 'close-thin' },
							},
							r = (0, Y.v6)('searchInput', d, b, c);
						(r.submitSearchButton = { ...b.submitSearchButton, ...r.submitSearchButton, ...c?.submitSearchButton }),
							(r.clearSearchButton = { ...b.clearSearchButton, ...r.clearSearchButton, ...c?.clearSearchButton }),
							(r.closeSearchButton = { ...b.closeSearchButton, ...r.closeSearchButton, ...c?.closeSearchButton });
						const {
							placeholderText: l,
							value: C,
							submitSearchButton: f,
							closeSearchButton: P,
							clearSearchButton: _,
							inputRef: B,
							inputName: V,
							onChange: I,
							onClick: L,
							onKeyDown: m,
							onKeyUp: a,
							disabled: R,
							disableStyles: o,
							className: O,
							internalClassName: t,
							treePath: i,
						} = r;
						let j, h;
						C === void 0 ? ([j, h] = (0, te.J0)('')) : (j = C);
						const G = {
								submitSearchButton: {
									...f,
									internalClassName: 'ss__search-input__button--submit-search-button',
									name: 'submit-search',
									...(0, z.s)({ disableStyles: o }),
									theme: r?.theme,
									treePath: i,
								},
								clearSearchButton: {
									..._,
									internalClassName: 'ss__search-input__button--clear-search-button',
									name: 'clear-search',
									onClick: (n) => {
										B?.current && (((B?.current).value = ''), (B?.current).dispatchEvent(new Event('input', { bubbles: !0 }))),
											h && h(''),
											_?.onClick && _.onClick(n);
									},
									...(0, z.s)({ disableStyles: o }),
									theme: r?.theme,
									treePath: i,
								},
								closeSearchButton: {
									...P,
									internalClassName: 'ss__search-input__button--close-search-button',
									name: 'close-search',
									...(0, z.s)({ disableStyles: o }),
									theme: r?.theme,
									treePath: i,
								},
							},
							w = (0, X.Z)(r, D),
							T = {
								placeholderText: { attributes: { placeholder: l } },
								closeSearchButton: { attributes: { 'aria-label': 'Close Search' } },
								clearSearchButton: { attributes: { 'aria-label': 'Clear Search' } },
								submitSearchButton: { attributes: { 'aria-label': 'Submit Search' } },
							},
							x = S()(T, r.lang || {}),
							U = (0, k.u)(x, {});
						return (0, s.Y)(Z._, {
							children: (0, s.FD)('div', {
								...w,
								className: g()('ss__search-input', { 'ss__input--disabled': R }, O, t),
								onClick: (n) => !R && L && L(n),
								children: [
									P && (0, s.Y)(K.$, { ...G.closeSearchButton, ...U.closeSearchButton.all }),
									(0, s.Y)('input', {
										type: 'text',
										className: 'ss__search-input__input',
										...U.placeholderText.attributes,
										value: j,
										name: V,
										ref: B,
										onKeyDown: (n) => m && m(n),
										onKeyUp: (n) => a && a(n),
										onChange: (n) => {
											h && h(n.target.value || ''), I && I(n);
										},
										disabled: R,
									}),
									(0, s.FD)('div', {
										className: 'ss__search-input__icons',
										children: [
											_ && j?.length ? (0, s.Y)(K.$, { ...G.clearSearchButton, ...U.clearSearchButton.all }) : null,
											f && (0, s.Y)(K.$, { ...G.submitSearchButton, ...U.submitSearchButton.all }),
										],
									}),
								],
							}),
						});
					});
			},
			'./components/src/components/Organisms/Facet/Facet.tsx'(he, H, e) {
				e.d(H, { s: () => V });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					W = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					g = e('../../node_modules/classnames/index.js'),
					A = e.n(g),
					z = e('../../node_modules/mobx-react-lite/es/index.js'),
					Y = e('./components/src/components/Molecules/FacetListOptions/FacetListOptions.tsx'),
					X = e('./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx'),
					Z = e('./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx'),
					q = e('./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.tsx'),
					ee = e('./components/src/components/Molecules/FacetSlider/FacetSlider.tsx'),
					te = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					K = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					se = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					S = e('./components/src/types.ts'),
					k = e('./components/src/utilities/cloneWithProps.tsx'),
					D = e('./components/src/utilities/defined.ts'),
					oe = e('./components/src/utilities/mergeProps.ts'),
					c = e('./components/src/utilities/mergeStyles.ts'),
					d = e('./components/src/providers/cache.tsx'),
					M = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = e('./components/src/providers/treePath.tsx'),
					r = e('./components/src/hooks/useA11y.tsx'),
					l = e('./components/src/hooks/useLang.tsx'),
					C = e('../../node_modules/deepmerge/dist/cjs.js'),
					f = e.n(C),
					P = e('./components/src/components/Atoms/Button/Button.tsx'),
					_ = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js');
				const B = ({ disableCollapse: L, color: m, theme: a }) =>
						(0, W.AH)({
							width: '100%',
							margin: '0 0 20px 0',
							'& .ss__facet__header': {
								cursor: L ? void 0 : 'pointer',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								color: m || a?.variables?.colors?.primary,
								border: 'none',
								borderBottom: `2px solid ${a?.variables?.colors?.secondary || '#ccc'}`,
								padding: '6px 0',
								'& .ss__facet__header__inner': { display: 'flex' },
							},
							'& .ss__facet__header__clear-all': {
								cursor: 'pointer',
								display: 'flex',
								alignItems: 'center',
								marginLeft: '10px',
								border: 'none',
								padding: '0',
								color: m || a?.variables?.colors?.primary,
								'&:hover': { textDecoration: 'underline' },
								'& .ss__icon': { marginLeft: '5px' },
							},
							'& .ss__facet__options': { marginTop: '8px', maxHeight: '300px', overflowY: 'auto', overflowX: 'hidden' },
							'& .ss__facet__show-more-less': { display: 'block', margin: '8px', cursor: 'pointer', '& .ss__icon': { marginRight: '8px' } },
							'& .ss__search-input': { margin: '16px 0 0 0' },
							'& .ss__facet__header__selected-count': { margin: '0px 5px' },
							'.ss__facet__range-inputs': { display: 'flex', flexDirection: 'column', '.ss__facet__range-inputs__separator': { margin: '5px' } },
							'.ss__facet__range-inputs__row': {
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								'&.ss__facet__range-inputs__row--button-wrapper': {
									justifyContent: 'center',
									'.ss__facet__range-input__button--submit': { margin: '10px' },
								},
							},
							'.ss__facet__range-input': {
								flexDirection: 'row',
								display: 'flex',
								border: `1px solid ${a?.variables?.colors?.secondary || '#ccc'}`,
								backgroundColor: 'white',
								alignItems: 'center',
								'.ss__facet__range-input__prefix': { padding: '0 5px' },
								'.ss__facet__range-input__input': { width: '100%', border: 'none', minHeight: '35px' },
							},
						}),
					V = (0, z.PA)((L) => {
						const m = (0, M.u)(),
							R = {
								limit: 12,
								disableOverflow: !1,
								iconCollapse: 'angle-up',
								iconExpand: 'angle-down',
								showMoreText: 'Show More',
								showLessText: 'Show Less',
								iconOverflowMore: 'plus',
								iconOverflowLess: 'minus',
								clearAllText: 'Clear All',
								rangeInputsSubmitButtonText: 'Submit',
								rangeInputsSeparatorText: ' - ',
								searchable: !1,
								treePath: (0, b.LU)(),
								name: (0, _.P)(L.facet.field),
							};
						let o = (0, oe.v6)('facet', m, R, L);
						o.display && o.display[o.facet?.display] && (o = { ...o, ...o.display[o.facet?.display] }),
							o.fields && o.fields[o.facet?.field] && (o = { ...o, ...o.fields[o.facet?.field] });
						const {
								disableCollapse: O,
								facet: t,
								iconCollapse: i,
								iconExpand: j,
								limit: h,
								statefulOverflow: p,
								disableOverflow: G,
								iconColor: w,
								color: T,
								previewOnFocus: x,
								valueProps: U,
								showSelectedCount: n,
								hideSelectedCountParenthesis: re,
								clearAllIcon: ne,
								showClearAllText: me,
								justContent: N,
								horizontal: ae,
								disableStyles: E,
								className: $,
								internalClassName: Q,
								treePath: y,
							} = o,
							ie = {
								dropdown: {
									internalClassName: 'ss__facet__dropdown',
									disableClickOutside: !0,
									disableOverlay: !0,
									...(0, D.s)({ disableStyles: E }),
									theme: o?.theme,
									treePath: y,
								},
								icon: {
									internalClassName: 'ss__facet__dropdown__icon',
									size: '12px',
									fill: w || T,
									...(0, D.s)({ disableStyles: E }),
									theme: o?.theme,
									treePath: `${y} dropdown`,
								},
								button: { ...(0, D.s)({ disableStyles: E }), theme: o?.theme, treePath: `${y} dropdown` },
								showMoreLessIcon: {
									internalClassName: 'ss__facet__show-more-less__icon',
									size: '10px',
									fill: w || T,
									...(0, D.s)({ disableStyles: E }),
									theme: o?.theme,
									treePath: y,
								},
								facetHierarchyOptions: {
									internalClassName: 'ss__facet__facet-hierarchy-options',
									...(0, D.s)({ disableStyles: E, previewOnFocus: x, valueProps: U, horizontal: ae }),
									theme: o?.theme,
									treePath: y,
								},
								facetListOptions: {
									internalClassName: 'ss__facet__facet-list-options',
									...(0, D.s)({ disableStyles: E, previewOnFocus: x, valueProps: U, horizontal: ae }),
									theme: o?.theme,
									treePath: y,
								},
								facetGridOptions: {
									internalClassName: 'ss__facet__facet-grid-options',
									...(0, D.s)({ disableStyles: E, previewOnFocus: x, valueProps: U, horizontal: ae }),
									theme: o?.theme,
									treePath: y,
								},
								facetPaletteOptions: {
									internalClassName: 'ss__facet__facet-palette-options',
									...(0, D.s)({ disableStyles: E, previewOnFocus: x, valueProps: U, horizontal: ae }),
									theme: o?.theme,
									treePath: y,
								},
								facetSlider: { internalClassName: 'ss__facet__facet-slider', ...(0, D.s)({ disableStyles: E }), theme: o?.theme, treePath: y },
								searchInput: { internalClassName: 'ss__facet__search-input', ...(0, D.s)({ disableStyles: E }), theme: o?.theme, treePath: y },
							};
						let le;
						function ce(J) {
							return J.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
						}
						const [de, fe] = (0, v.J0)();
						if (
							((0, v.vJ)(() => {
								p &&
									fe({
										enabled: !1,
										limited: !0,
										limit: 0,
										remaining: void 0,
										setLimit: function (_e) {
											_e != this.limit && ((this.enabled = !0), (this.limit = _e), this.calculate());
										},
										toggle: function (_e) {
											typeof _e < 'u' ? (this.limited = _e) : (this.limited = !this.limited), this.calculate();
										},
										calculate: function () {
											if (this.limit > 0) {
												const _e = t?.values?.length - this.limit;
												_e > 0 && !t?.search?.input
													? ((this.enabled = !0), this.limited ? (this.remaining = _e) : (this.remaining = 0))
													: (this.enabled = !1);
											}
											fe({ ...this });
										},
									});
							}, []),
							t?.overflow && h && Number.isInteger(h) && !G)
						)
							if (p) {
								let J = t?.values || [];
								if (t?.search?.input) {
									const _e = new RegExp(ce(t?.search?.input), 'i');
									J = t?.values.filter((ve) => String(ve?.label || '').match(_e));
								}
								de?.enabled && de?.limited && (J = J.slice(0, de?.limit)), de?.limit !== h && de?.setLimit(h), (le = J);
							} else t.overflow?.setLimit(h), (le = t?.refinedValues);
						else t?.overflow && Number.isInteger(h) ? (le = t?.values.slice(0, h)) : (le = t?.values);
						const Ee = (0, c.Z)(o, B),
							pe = {
								allowableTypes: L.treePath?.includes('autocomplete') ? [] : ['list', 'grid', 'palette'],
								searchFilter: (J) => {
									t?.search && (t.search.input = J.target.value);
								},
							};
						let u = !0;
						t.display == S.Q.TOGGLE && t && t?.values.length !== 1 && (u = !1);
						const F = { limitedValues: le, overflowState: de, searchableFacet: pe, subProps: ie, className: $, internalClassName: Q, ...o },
							Pe = {
								showMoreText: { value: F.showMoreText },
								showLessText: { value: F.showLessText },
								dropdownButton: {
									attributes: {
										'aria-label': `currently ${t?.collapsed ? 'collapsed' : 'open'} ${t.label} facet dropdown ${
											t.values?.length ? t.values?.length + ' options' : ''
										}`,
									},
								},
								clearAllText: { value: F.clearAllText },
								submitRangeButton: { value: F.rangeInputsSubmitButtonText },
							},
							Oe = f()(Pe, o.lang || {}),
							ue = (0, l.u)(Oe, { facet: t }),
							ge = t?.values?.filter((J) => J?.filtered).length || t?.active?.high !== t?.range?.high || t?.active?.low !== t?.range?.low;
						return t && u
							? (0, s.Y)(d._, {
									children: (0, s.Y)('div', {
										...Ee,
										className: A()(
											'ss__facet',
											`ss__facet--${t.field}`,
											`${t.collapsed ? 'ss__facet--collapsed' : ''}`,
											$,
											Q,
											`${t.display ? `ss__facet--${t.display}` : ''}`,
											(p ? de?.remaining : (t?.overflow?.remaining || 0) > 0) || t?.display == 'slider' ? '' : 'ss__facet--showing-all'
										),
										children: N
											? (0, s.Y)(I, { ...F, mergedLang: ue })
											: (0, s.Y)(se.m, {
													...ie.dropdown,
													open: O || !t?.collapsed,
													onClick: () => !O && t.toggleCollapse && t?.toggleCollapse(),
													disableA11y: !0,
													button: (0, s.FD)('div', {
														className: 'ss__facet__header',
														ref: (J) => (0, r.iy)(J, O ? -1 : 0),
														role: 'heading',
														'aria-level': 3,
														...ue.dropdownButton.attributes,
														children: [
															(0, s.FD)('span', {
																className: 'ss__facet__header__inner',
																children: [
																	(0, s.Y)('span', { ...ue.dropdownButton.value, children: t?.label }),
																	n && ge && t.type !== 'range'
																		? (0, s.Y)('span', { className: 'ss__facet__header__selected-count', children: re ? ge : `(${ge})` })
																		: null,
																	(ue.clearAllText.value || ne) && ge
																		? (0, s.Y)(P.$, {
																				...ie.button,
																				internalClassName: 'ss__facet__header__clear-all',
																				name: 'reset-facet',
																				onClick: (J) => {
																					J.stopPropagation(), t?.clear.url.link.onClick();
																				},
																				icon: ne || void 0,
																				children: ue.clearAllText.value && me ? (0, s.Y)('label', { ...ue.clearAllText.all }) : null,
																		  })
																		: (0, s.Y)(s.FK, {}),
																],
															}),
															!O &&
																(0, s.Y)(K.I, {
																	...ie.icon,
																	...(t?.collapsed
																		? { ...(typeof j == 'string' ? { icon: j } : j) }
																		: { ...(typeof i == 'string' ? { icon: i } : i) }),
																	name: t?.collapsed ? 'expand' : 'collapse',
																}),
														],
													}),
													children: (0, s.Y)(I, { ...F, mergedLang: ue }),
											  }),
									}),
							  })
							: null;
					}),
					I = (L) => {
						const {
								searchableFacet: m,
								subProps: a,
								className: R,
								internalClassName: o,
								limitedValues: O,
								facet: t,
								statefulOverflow: i,
								limit: j,
								overflowSlot: h,
								optionsSlot: p,
								searchable: G,
								iconOverflowMore: w,
								iconOverflowLess: T,
								disableOverflow: x,
								previewOnFocus: U,
								rangeInputs: n,
								rangeInputsPrefix: re,
								rangeInputsInheritDefaultValues: ne,
								rangeInputsSeparatorText: me,
								justContent: N,
								valueProps: ae,
								hideShowMoreLessText: E,
								treePath: $,
								mergedLang: Q,
							} = L,
							[y, ie] = (0, v.J0)(ne && t.type === 'range' ? t?.range?.low : void 0),
							[le, ce] = (0, v.J0)(ne && t.type === 'range' ? t?.range?.high : void 0);
						(0, v.vJ)(() => {
							ne && t.type === 'range' && t?.active?.high !== le && ce(t?.active?.high),
								ne && t.type === 'range' && t?.active?.low !== y && ie(t?.active?.low);
						}, [t]);
						const de = (u) => {
								ie(u[0]), ce(u[1]);
							},
							fe = (u) => {
								u.key === 'Enter' && typeof y == 'number' && typeof le == 'number' && Ee.current?.base?.click();
							},
							Ee = (0, v.li)();
						let pe;
						return (
							i ? (pe = L.overflowState) : (pe = t.overflow),
							(0, s.FD)(s.FK, {
								children: [
									G &&
										m.allowableTypes.includes(t.display) &&
										(0, s.Y)(te.D, { ...a.searchInput, onChange: m.searchFilter, placeholderText: `Search ${t.label}`, treePath: $ }),
									(0, s.Y)('div', {
										className: A()('ss__facet__options', N ? R : '', N ? o : ''),
										children: (() => {
											if (p) return (0, k.Y)(p, { facet: t, valueProps: ae, limit: j, previewOnFocus: U, treePath: $ });
											switch (t?.display) {
												case S.Q.SLIDER:
													return (0, s.Y)(ee.l, { ...a.facetSlider, onChange: de, facet: t, treePath: $ });
												case S.Q.GRID:
													return (0, s.Y)(X.S, { ...a.facetGridOptions, values: O, facet: t, treePath: $ });
												case S.Q.PALETTE:
													return (0, s.Y)(Z.P, { ...a.facetPaletteOptions, values: O, facet: t, treePath: $ });
												case S.Q.HIERARCHY:
													return (0, s.Y)(q.T, { ...a.facetHierarchyOptions, values: O, facet: t, treePath: $ });
												default:
													return (0, s.Y)(Y.C, { ...a.facetListOptions, values: O, facet: t, treePath: $ });
											}
										})(),
									}),
									n &&
										(t.type === 'range' || t.type === 'range-buckets') &&
										(0, s.FD)('div', {
											className: 'ss__facet__range-inputs',
											children: [
												(0, s.FD)('div', {
													className: 'ss__facet__range-inputs__row',
													children: [
														(0, s.FD)('div', {
															className: 'ss__facet__range-input ss__facet__range-input--low',
															children: [
																re && (0, s.Y)('span', { className: 'ss__facet__range-input__prefix', children: re }),
																(0, s.Y)('input', {
																	type: 'number',
																	className: 'ss__facet__range-input__input',
																	value: y,
																	onInput: (u) => (u.currentTarget.value ? ie(Number(u.currentTarget.value)) : ie(void 0)),
																	onKeyUp: fe,
																}),
															],
														}),
														(0, s.Y)('span', { className: 'ss__facet__range-inputs__separator', children: me }),
														(0, s.FD)('div', {
															className: 'ss__facet__range-input ss__facet__range-input--high',
															children: [
																re && (0, s.Y)('span', { className: 'ss__facet__range-input__prefix', children: re }),
																(0, s.Y)('input', {
																	type: 'number',
																	className: 'ss__facet__range-input__input',
																	value: le,
																	onInput: (u) => (u.currentTarget.value ? ce(Number(u.currentTarget.value)) : ce(void 0)),
																	onKeyUp: fe,
																}),
															],
														}),
													],
												}),
												(0, s.Y)('div', {
													className: 'ss__facet__range-inputs__row ss__facet__range-inputs__row--button-wrapper',
													children: (0, s.Y)(P.$, {
														internalClassName: 'ss__facet__range-input__button--submit',
														ref: Ee,
														onClick: () => {
															if (t?.services?.urlManager && typeof y == 'number' && typeof le == 'number') {
																let u = y,
																	F = le;
																F < u && ((u = le), (F = y), ie(u), ce(F)),
																	t?.range?.low !== void 0 && u < t?.range?.low && ((u = t?.range?.low), ie(u)),
																	t?.range?.high !== void 0 && u > t?.range?.high && ((u = t?.range?.high), ie(u)),
																	t?.range?.low !== void 0 && F < t?.range?.low && ((F = t?.range?.low), ce(F)),
																	t?.range?.high !== void 0 && F > t?.range?.high && ((F = t?.range?.high), ce(F)),
																	t.services.urlManager.remove('page').set(`filter.${t.field}`, { low: u, high: F }).go();
															}
														},
														children: Q.submitRangeButton.value ? (0, s.Y)('label', { ...Q.submitRangeButton.all }) : null,
													}),
												}),
											],
										}),
									!x &&
										pe?.enabled &&
										(0, s.Y)('div', {
											className: 'ss__facet__show-more-less',
											'aria-live': 'polite',
											onClick: () => pe?.toggle(),
											ref: (u) => (0, r.iy)(u),
											children: h
												? (0, k.Y)(h, { facet: t, treePath: $ })
												: (0, s.FD)(s.FK, {
														children: [
															(0, s.Y)(K.I, {
																...a.showMoreLessIcon,
																treePath: $,
																name: (pe?.remaining || 0) > 0 ? 'overflow-more' : 'overflow-less',
																...((pe?.remaining || 0) > 0
																	? { ...(typeof w == 'string' ? { icon: w } : w) }
																	: { ...(typeof T == 'string' ? { icon: T } : T) }),
															}),
															!E && (0, s.Y)('span', { ...((pe?.remaining || 0) > 0 ? Q.showMoreText?.all : Q.showLessText?.all) }),
														],
												  }),
										}),
								],
							})
						);
					};
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(he, H, e) {
				e.d(H, { l: () => s });
				const s = (v, W = { delay: 333, focusElem: !0 }) => {
					let g;
					return {
						onMouseEnter: (A) => {
							clearTimeout(g),
								(g = window.setTimeout(() => {
									W.focusElem && A.target.focus(), v && v();
								}, W.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(g);
						},
					};
				};
			},
		},
	]);
})();
