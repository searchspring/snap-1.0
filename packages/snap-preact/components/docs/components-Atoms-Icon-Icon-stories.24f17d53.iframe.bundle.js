(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[6634],
		{
			'./components/src/components/Atoms/Icon/Icon.stories.tsx'(d, t, n) {
				'use strict';
				n.r(t), n.d(t, { Custom: () => l, CustomPath: () => p, Default: () => a, Gallery: () => m, __namedExportsOrder: () => f, default: () => x });
				var e = n('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = n('../../node_modules/@storybook/blocks/dist/index.mjs'),
					o = n('./components/src/components/Atoms/Icon/Icon.tsx'),
					u = n('./components/src/components/Atoms/Icon/paths.tsx'),
					s = n('./components/src/utilities/storybook.tsx'),
					c = n('./components/src/utilities/componentArgs.ts');
				const h = `# Icon

Renders an Icon either from our list of available icons or from a custom path. 

## Usage
\`\`\`jsx
import { Icon } from '@searchspring/snap-preact-components';
\`\`\`

### icon
The \`icon\` prop specifies the name of the icon to display. 

\`\`\`jsx
<Icon icon='cogs' />
\`\`\`

if false is passed, no Icon will render. 

\`\`\`jsx
<Icon icon={false} />
\`\`\`


### path
The \`path\` prop specifies the SVG path value for custom icons.

\`\`\`jsx
<Icon color='#3a23ad' size='120px' style='padding: 20px;' viewBox='0 0 70 70' path='M12.9,13.8C12.9,13.8,12.9,13.8,12.9,13.8c-0.1,0.1-0.3,0.2-0.5,0.2C4.5,17.9,1.9,28.8,6.6,38.5l28.6-13.8 c0,0,0,0,0,0c0.2-0.1,0.3-0.1,0.5-0.2C43.5,20.6,46.2,9.7,41.5,0L12.9,13.8zM8.6,42.1C8.6,42.1,8.6,42.1,8.6,42.1c-0.1,0.1-0.3,0.1-0.5,0.2C0.3,46.1-2.4,57,2.3,66.7l28.6-13.8 c0,0,0,0,0,0c0.2-0.1,0.3-0.1,0.5-0.2c7.9-3.8,10.5-14.8,5.8-24.4L8.6,42.1z' />
\`\`\`

The \`path\` prop can also contain an array of children svg elements to render.

\`\`\`jsx
<Icon size={'70'} viewBox={'0 0 70 70'} path={[
    {
        type: 'line', 
        attributes: { 
            x1: "1",
            y1: "10",
            x2: "69",
            y2: "10",
            stroke: "#000000",
            'stroke-width': "3",
            'stroke-linecap': "round",
            'stroke-linejoin': "round",
        }
    },
    {
        type: 'line', 
        attributes: { 
            x1: "1",
            y1: "30",
            x2: "69",
            y2: "30",
            stroke: "#000000",
            'stroke-width': "3",
            'stroke-linecap': "round",
            'stroke-linejoin': "round",
        }
    },
    {
        type: 'circle', 
        attributes: { 
            cx: "15",
            cy: "10",
            r: "6",
            fill: "#000000",
            stroke: "#000000",
            'stroke-width': "3",
        }
    },
    {
        type: 'circle', 
        attributes: { 
            cx: "55",
            cy: "30",
            r: "6",
            fill: "#000000",
            stroke: "#000000",
            'stroke-width': "3",
        }
    },
]} />
\`\`\`

### children
Component children can be provided and will be rendered within the wrapping \`svg\` element.

\`\`\`jsx
<Icon size={'70'} viewBox={'0 0 70 70'} >
    <line x1="1" y1="10" x2="69" y2="10" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></line>
	<line x1="1" y1="30" x2="69" y2="30" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></line>
	<circle cx="15" cy="10" r="6" fill="#000000" stroke="#000000" stroke-width="3"></circle>
	<circle cx="55" cy="30" r="6" fill="#000000" stroke="#000000" stroke-width="3"></circle>
</Icon>
\`\`\`

### color
The \`color\` prop specifies the icon color, overwritten by fill props.

\`\`\`jsx
<Icon icon='cogs' color="#ffff00" />
\`\`\`

### fill
The \`fill\` prop specifies the icon fill color, overwrites color prop.

\`\`\`jsx
<Icon icon='cogs' fill="#ffff00" />
\`\`\`

### stroke
The \`stroke\` prop specifies the icon stroke color.

\`\`\`jsx
<Icon icon='cogs' stroke="#ffff00" />
\`\`\`

### title
The \`title\` prop specifies the title to render inside the svg.

\`\`\`jsx
<Icon icon='cogs' title={'Settings'} />
\`\`\`

### size
The \`size\` prop specifies the custom icon size. This will be set to both the width and height.

\`\`\`jsx
<Icon icon='cogs' size={'20px'} />
\`\`\`

### title
The \`title\` prop specifies the title to render inside the svg.

\`\`\`jsx
<Icon icon='cogs' title={'Settings'} />
\`\`\`

### width & height
The \`width\` and \`height\` props specify custom icon dimensions and will overwrite the \`size\` prop.

\`\`\`jsx
<Icon icon='cogs' width={'20px'} height={'25px'} />
\`\`\`

### viewBox
The \`viewBox\` prop specifies the SVG \`viewBox\` attribute. This defines the position and dimension, in user space, of an SVG viewport.

Format: \`\` \`\${min-x} \${min-y} \${width} \${height}\` \`\`

\`\`\`jsx
<Icon icon='cogs' viewBox={'0 0 20 20'} />
\`\`\`
`,
					x = {
						title: 'Atoms/Icon',
						component: o.I,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, e.FD)('div', {
										children: [(0, e.Y)(i.oz, { options: { overrides: { code: s.Z } }, children: h }), (0, e.Y)(i.uY, { story: i.h1 })],
									}),
							},
							actions: { disabled: !0 },
						},
						argTypes: {
							icon: { description: 'Icon name', table: { type: { summary: 'string' } }, options: [...Object.keys(u.c)], control: { type: 'select' } },
							path: { description: 'SVG path', table: { type: { summary: 'string | SVGPathElement[]' } }, control: { type: 'text' } },
							title: { description: 'Title text to render inside the svg', table: { type: { summary: 'string' } }, control: { type: 'text' } },
							children: {
								description: 'SVG elements to be contained within (using children)',
								table: { type: { summary: 'string, JSX' } },
								control: { type: 'none' },
							},
							color: {
								description: 'Icon color',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'theme.variables.colors.primary' } },
								control: { type: 'color' },
							},
							stroke: { description: 'Icon stroke color', table: { type: { summary: 'string' } }, control: { type: 'color' } },
							fill: { description: 'Icon fill color', table: { type: { summary: 'string' } }, control: { type: 'color' } },
							size: {
								defaultValue: '16px',
								description: 'Icon size',
								table: { type: { summary: 'string | number' }, defaultValue: { summary: '16px' } },
								control: { type: 'text' },
							},
							height: { description: 'Icon height. Overwrites size.', table: { type: { summary: 'string | number' } }, control: { type: 'text' } },
							width: { description: 'Icon width. Overwrites size.', table: { type: { summary: 'string | number' } }, control: { type: 'text' } },
							viewBox: {
								description: 'SVG view box',
								defaultValue: '0 0 56 56',
								table: { type: { summary: 'string' }, defaultValue: { summary: '0 0 56 56' } },
								control: { type: 'text' },
							},
							...c.F,
						},
					},
					a = (r) => (0, e.Y)(o.I, { ...r });
				a.args = { icon: 'cogs' };
				const l = (r) => (0, e.Y)(o.I, { ...r });
				l.args = { color: '#00cee1', icon: 'cog', size: '60px' };
				const p = (r) => (0, e.Y)(o.I, { ...r });
				p.args = {
					path: 'M12.9,13.8C12.9,13.8,12.9,13.8,12.9,13.8c-0.1,0.1-0.3,0.2-0.5,0.2C4.5,17.9,1.9,28.8,6.6,38.5l28.6-13.8 c0,0,0,0,0,0c0.2-0.1,0.3-0.1,0.5-0.2C43.5,20.6,46.2,9.7,41.5,0L12.9,13.8zM8.6,42.1C8.6,42.1,8.6,42.1,8.6,42.1c-0.1,0.1-0.3,0.1-0.5,0.2C0.3,46.1-2.4,57,2.3,66.7l28.6-13.8 c0,0,0,0,0,0c0.2-0.1,0.3-0.1,0.5-0.2c7.9-3.8,10.5-14.8,5.8-24.4L8.6,42.1z',
					size: '70px',
					viewBox: '0 0 70 70',
				};
				const m = () => {
					const r = ['layout-large', 'layout-grid'];
					return (0, e.Y)('div', {
						style: {
							display: 'flex',
							flexWrap: 'wrap',
							fontFamily:
								'"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif',
							fontSize: '10px',
						},
						children: Object.keys(u.c)
							.filter((y) => !r.includes(y))
							.map((y) =>
								(0, e.FD)('div', {
									style: { marginBottom: '40px' },
									children: [
										(0, e.Y)(o.I, { icon: y, size: '40px', style: { padding: '20px' } }),
										(0, e.Y)('div', { style: { textAlign: 'center' }, children: y }),
									],
								})
							),
					});
				};
				(m.parameters = { controls: { expanded: !1, disabled: !0 }, options: { showPanel: !1 } }),
					(a.parameters = {
						...a.parameters,
						docs: {
							...a.parameters?.docs,
							source: { originalSource: '(props: IconProps): JSX.Element => <Icon {...props} />', ...a.parameters?.docs?.source },
						},
					}),
					(l.parameters = {
						...l.parameters,
						docs: {
							...l.parameters?.docs,
							source: { originalSource: '(props: IconProps): JSX.Element => <Icon {...props} />', ...l.parameters?.docs?.source },
						},
					}),
					(p.parameters = {
						...p.parameters,
						docs: {
							...p.parameters?.docs,
							source: { originalSource: '(props: IconProps): JSX.Element => <Icon {...props} />', ...p.parameters?.docs?.source },
						},
					}),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: {
								originalSource: `(): JSX.Element => {
  const legacyPaths = ['layout-large', 'layout-grid'];
  return <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    fontFamily: '"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: '10px'
  }}>
            {Object.keys(iconPaths).filter(val => !legacyPaths.includes(val)).map(icon => {
      return <div style={{
        marginBottom: '40px'
      }}>
                            <Icon icon={icon as IconType} size="40px" style={{
          padding: '20px'
        }} />
                            <div style={{
          textAlign: 'center'
        }}>{icon}</div>
                        </div>;
    })}
        </div>;
}`,
								...m.parameters?.docs?.source,
							},
						},
					});
				const f = ['Default', 'Custom', 'CustomPath', 'Gallery'];
			},
			'./components/src/utilities/componentArgs.ts'(d, t, n) {
				'use strict';
				n.d(t, { F: () => e });
				const e = {
					className: {
						description: 'Class name appended to root element of component',
						table: { type: { summary: 'string' }, defaultValue: { summary: 'ss__${component-name}' } },
						control: { type: 'text' },
					},
					disableStyles: {
						defaultValue: !1,
						description: 'Disable all default styling',
						table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
						control: { type: 'boolean' },
					},
					style: { description: 'Inline style', table: { type: { summary: 'string, object' } }, control: { type: 'text' } },
					theme: { description: 'Specify specific sub component props', table: { type: { summary: 'object' } }, control: { type: 'none' } },
				};
			},
			'./components/src/utilities/storybook.tsx'(d, t, n) {
				'use strict';
				n.d(t, { Z: () => u });
				var e = n('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = n('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = 'prism-block',
					u = (s) => {
						const c = (0, i.li)(null);
						return (
							(0, i.vJ)(() => {
								c.current && s.className?.includes('lang-') && !s.className?.includes(o) && window?.Prism?.highlightElement(c.current);
							}, [s.className, s.children, c]),
							(0, e.Y)('code', { ...s, ref: c, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(d) {
				function t(n) {
					var e = new Error("Cannot find module '" + n + "'");
					throw ((e.code = 'MODULE_NOT_FOUND'), e);
				}
				(t.keys = () => []), (t.resolve = t), (t.id = '../../node_modules/memoizerific sync recursive'), (d.exports = t);
			},
		},
	]);
})();

//# sourceMappingURL=components-Atoms-Icon-Icon-stories.24f17d53.iframe.bundle.js.map
