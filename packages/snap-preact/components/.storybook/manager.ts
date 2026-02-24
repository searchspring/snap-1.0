// .storybook/manager.ts
// Storybook manager-side config: UI theme + toolbar addon registration.

import React from 'react';
import { addons, types } from '@storybook/manager-api';
import searchspringTheme from './searchspringTheme';
import { ColorPickerTool } from './ColorPickerTool';

addons.setConfig({ theme: searchspringTheme });

addons.register('snap-theme-color-picker', () => {
	addons.add('snap-theme-color-picker/tool', {
		type: types.TOOL,
		title: 'Theme Colors',
		render: () => React.createElement(ColorPickerTool),
	});
});
