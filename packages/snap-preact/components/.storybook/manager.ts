// .storybook/manager.js
// used to style up the UI - using Athos Custom Theme

import { addons } from '@storybook/addons';
import athosTheme from './AthosTheme';

addons.setConfig({
	theme: athosTheme,
});
