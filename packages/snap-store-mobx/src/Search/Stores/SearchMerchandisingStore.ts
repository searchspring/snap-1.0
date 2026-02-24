import type {
	SearchResponseModelMerchandisingCampaigns,
	SearchResponseModel,
	SearchResponseModelMerchandisingExperiments,
	SearchResponseModelTracking,
} from '@athoscommerce/snapi-types';

export enum ContentType {
	HEADER = 'header',
	BANNER = 'banner',
	FOOTER = 'footer',
	LEFT = 'left',
	INLINE = 'inline',
}

export type BannerContent = Partial<Record<ContentType, Content>>;

type SearchMerchandisingStoreConfig = {
	data: {
		search?: SearchResponseModel;
		tracking?: SearchResponseModelTracking;
	};
};

export class SearchMerchandisingStore {
	public redirect = '';
	public responseId = '';
	public content: BannerContent = {};
	public campaigns: SearchResponseModelMerchandisingCampaigns[] = [];
	public landingPage?: SearchResponseModelMerchandisingCampaigns;
	public personalized?: boolean = false;
	public experiments: SearchResponseModelMerchandisingExperiments[] = [];

	constructor(params: SearchMerchandisingStoreConfig) {
		const { merchandising } = params?.data?.search || {};
		if (merchandising) {
			this.redirect = merchandising.redirect || '';
			this.responseId = params?.data?.search?.tracking?.responseId || params?.data?.tracking?.responseId || ''; // Autocomplete 'beforeSubmit' doesn't have a response reference

			if (merchandising.content) {
				Object.values(ContentType).forEach((type) => {
					if (merchandising.content && merchandising.content[type]) {
						// Extract data-banner-id from the HTML string
						const htmlString = merchandising.content[type]?.[0] || '';
						const match = typeof htmlString === 'string' && htmlString.match(/data-banner-id="(\d+)"/);
						const uid = match ? match[1] : '';

						this.content[type] = new Content([
							{
								value: merchandising.content[type]!,
								uid,
								responseId: this.responseId,
							},
						] as MerchandisingContentBanner[]);
					}
				});
			}
			if (merchandising.campaigns) {
				this.campaigns = merchandising.campaigns;
				// if we find a 'landing-page', get landingPage details from merchandising.campaigns
				merchandising.campaigns.forEach((campaign) => {
					if (campaign.type == 'landing-page') {
						this.landingPage = campaign;
					}
				});
			}

			if (merchandising.experiments) {
				this.experiments = merchandising.experiments;
			}

			this.personalized = !!merchandising.personalized;
		}
	}
}

export type MerchandisingContentBanner = {
	value: string[];
	uid: string;
	responseId: string;
};
class Content extends Array<MerchandisingContentBanner> {
	static get [Symbol.species](): ArrayConstructor {
		return Array;
	}

	constructor(content: MerchandisingContentBanner[]) {
		super(...content);
	}
}
