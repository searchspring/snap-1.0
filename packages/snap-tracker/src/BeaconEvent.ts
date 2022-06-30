import { v4 as uuidv4 } from 'uuid';
import { version } from '@searchspring/snap-toolbox';

import * as Types from './types';

export class BeaconEvent {
	type: Types.BeaconType;
	category: Types.BeaconCategory;
	context?: Types.BeaconContext;
	meta?: Types.BeaconMeta;
	event?:
		| Types.ProductViewEvent
		| Types.CartViewEvent
		| Types.OrderTransactionEvent
		| Types.RecommendationsEvent
		| Types.ProductClickEvent
		| Types.CustomBeaconEvent
		| Record<string, never>;
	id?: string;
	pid?: string | null;

	constructor(payload: Types.BeaconPayload, config: Types.TrackerConfig) {
		this.type = payload.type;
		this.category = payload.category;
		this.context = payload.context;
		this.meta = payload.meta;
		this.event = payload.event;
		this.id = payload.id;
		this.pid = payload.pid;

		this.meta = {
			initiator: {
				lib: 'searchspring/snap',
				'lib.version': version,
				'lib.framework': config.framework!,
			},
		};
		this.id = uuidv4();
	}
}
