import { observable, makeObservable } from 'mobx';
import type { StoreServices } from '../../types';
import type { RecommendCombinedResponseModel } from '@searchspring/snap-client';

export class RecommendationProfileStore {
	public tag!: string;
	public placement!: string;
	public display: Record<string, any> = {};

	constructor(services: StoreServices, data?: RecommendCombinedResponseModel) {
		if (!data?.profile?.tag) {
			return;
		}

		this.tag = data.profile.tag;
		this.placement = data.profile.placement;
		this.display = data.profile.display;

		makeObservable(this, {
			tag: observable,
			placement: observable,
			display: observable,
		});
	}
}