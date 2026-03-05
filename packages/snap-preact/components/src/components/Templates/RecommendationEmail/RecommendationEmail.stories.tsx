import { h } from 'preact';

import { ArgsTable, PRIMARY_STORY, Markdown } from '@storybook/blocks';

import { RecommendationEmail, RecommendationEmailProps } from './RecommendationEmail';
import { componentArgs, highlightedCode } from '../../../utilities';
import { Snapify } from '../../../utilities/snapify';

import Readme from './readme.md';
import type { RecommendationController } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';
import type { Next } from '@athoscommerce/snap-event-manager';

export default {
	title: 'Templates/RecommendationEmail',
	component: RecommendationEmail,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => (
				<div>
					<Markdown
						options={{
							overrides: {
								code: highlightedCode,
							},
						}}
					>
						{Readme}
					</Markdown>
					<ArgsTable story={PRIMARY_STORY} />
				</div>
			),
		},
	},
	decorators: [(Story: any) => <Story />],
	argTypes: {
		controller: {
			description: 'Controller reference',
			table: {
				type: {
					summary: 'Controller',
				},
			},
			control: { type: 'none' },
		},
		results: {
			description: 'Results store reference, overrides controller.store.results',
			table: {
				type: {
					summary: 'Results store object',
				},
			},
			control: { type: 'none' },
		},
		resultComponent: {
			description: 'Custom component to render each result',
			type: { required: false },
			table: {
				type: {
					summary: 'ResultComponent',
				},
			},
			control: { type: 'none' },
		},
		resultProps: {
			description: 'Additional props to pass to each result component',
			type: { required: false },
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'Partial<ResultProps> | Record<string, any>',
				},
			},
			control: { type: 'object' },
		},
		resultWidth: {
			description: 'Width of each result card',
			type: { required: false },
			table: {
				category: 'Templates Legal',
				type: {
					summary: 'string',
				},
				defaultValue: { summary: '240px' },
			},
			control: { type: 'text' },
		},
		...componentArgs,
	},
};

const results = [
	{
		id: '52079567700334',
		mappings: {
			core: {
				uid: '52079567700334',
				sku: 'VW1982-STA-SA',
				available: true,
				name: 'Shift Tank',
				url: '/products/shift-tank',
				parentId: '14725182128494',
				parentImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Shift_Tank_-_Sandstone_7e5d6de5-223b-42bc-8ebd-3b416e7ab133_450x.png?v=1747685639',
				price: 55,
				imageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Shift_Tank_-_Sandstone_7e5d6de5-223b-42bc-8ebd-3b416e7ab133_450x.png?v=1747685639',
				thumbnailImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Shift_Tank_-_Sandstone_7e5d6de5-223b-42bc-8ebd-3b416e7ab133_450x.png?v=1747685639',
				rating: '0',
				description:
					"<p>Sculpted fit and breathable knit ideal for all-day movement. Racerback tank with layered hem, bonded neckline, and laser-perforated side panels. Featherweight jersey with matte finish. The Shift Tank delivers versatile style that transitions seamlessly from gym to street. Strategic ventilation keeps you cool during intense workouts, while the refined matte finish elevates your everyday look. Engineered seams reduce chafing, and the structured racerback provides confident support. Whether you're layering under jackets or wearing solo, this tank adapts to your lifestyle with effortless sophistication and performance-driven comfort.</p>",
				brand: 'VersaWearCo',
				msrp: 0,
			},
		},
		attributes: {},
	},
	{
		id: '52079572287854',
		mappings: {
			core: {
				uid: '52079572287854',
				sku: 'VW1982-RTE-AS',
				available: true,
				name: 'Stride Tee',
				url: '/products/stride-tee',
				parentId: '14725183373678',
				parentImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Men_s_Apparel_Stride_Tee_-_Ash_Grey_ccbffc15-8e7d-49cf-8040-47e48d52439c_450x.png?v=1747685695',
				price: 53,
				imageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Men_s_Apparel_Stride_Tee_-_Ash_Grey_ccbffc15-8e7d-49cf-8040-47e48d52439c_450x.png?v=1747685695',
				thumbnailImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Men_s_Apparel_Stride_Tee_-_Ash_Grey_ccbffc15-8e7d-49cf-8040-47e48d52439c_450x.png?v=1747685695',
				rating: '0',
				description:
					"<p>Sculpted fit and breathable knit ideal for all-day movement. Technical jersey tee with stitched side gussets, reinforced neckline, and subtle curved hem engineered for multi-direction stretch. The precision-constructed side panels eliminate excess fabric while maintaining freedom of motion, making this essential for active lifestyles. Reinforced stitching at high-stress areas ensures durability through repeated wear and washing. The curved hem prevents rolling and bunching, while the advanced knit fabric wicks moisture and regulates temperature. Whether layered or worn solo, the Stride Tee adapts to your body's demands without compromise.</p>",
				brand: 'VersaWearCo',
				msrp: 0,
			},
		},
		attributes: {},
	},
	{
		id: '52955932983662',
		mappings: {
			core: {
				uid: '52955932983662',
				sku: 'VW1982-ABO-LA',
				available: true,
				name: 'Align Bottle',
				url: '/products/align-bottle',
				parentId: '14870399353198',
				parentImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-bottle-lavender_450x.png?v=1762813057',
				price: 24,
				imageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-bottle-lavender_450x.png?v=1762813057',
				thumbnailImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-bottle-lavender_450x.png?v=1762813057',
				rating: '0',
				description:
					"<p>Stretch, rest, hydrate, repeat. The Align Bottle will become part of your regular routine in no time.<br>\\n<br>\\nNon-BPA, dishwasher-safe, and utterly stylish, the Align Bottle sits comfortably on the floor beside your workout station or yoga mat, it's wide base preventing unintentional knocks and spills. And even if it takes a tumble, the precision-fit lid and mouthpiece work together to hold in liquids so nothing escapes - until you want a sip, which is when the spring-loaded mouthpiece opens easily to deliver your beverage and quench your thirst. The squeezable core is durable and allows for quick delivery when you need a splash, and holds its shape when just a sip is wanted.</p>",
				brand: 'VersaWearCo',
				msrp: 0,
			},
		},
		attributes: {},
	},
	{
		id: '53297940300142',
		mappings: {
			core: {
				uid: '53297940300142',
				sku: 'VW1982-ABO-LA',
				available: true,
				name: 'Align Bottle - Central Store Arrival',
				url: '/products/align-bottle-central-store-arrival',
				parentId: '14959520219502',
				parentImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-bottle-lavender_450x.png?v=1762813057',
				price: 24,
				imageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-bottle-lavender_450x.png?v=1762813057',
				thumbnailImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-bottle-lavender_450x.png?v=1762813057',
				rating: '0',
				description:
					"<p>Stretch, rest, hydrate, repeat. The Align Bottle will become part of your regular routine in no time.<br>\\n<br>\\nNon-BPA, dishwasher-safe, and utterly stylish, the Align Bottle sits comfortably on the floor beside your workout station or yoga mat, it's wide base preventing unintentional knocks and spills. And even if it takes a tumble, the precision-fit lid and mouthpiece work together to hold in liquids so nothing escapes - until you want a sip, which is when the spring-loaded mouthpiece opens easily to deliver your beverage and quench your thirst. The squeezable core is durable and allows for quick delivery when you need a splash, and holds its shape when just a sip is wanted.</p>",
				brand: 'VersaWearCo',
				msrp: 0,
			},
		},
		attributes: {},
	},
	{
		id: '52079544238446',
		mappings: {
			core: {
				uid: '52079544238446',
				sku: 'VW1982-ACR-OL',
				available: true,
				name: 'Align Crewneck New Arrive',
				url: '/products/align-crewneck',
				parentId: '14725170364782',
				parentImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Crewneck_-_Olive_519ac0c5-e067-4ab7-9fe5-5421f364c52a_450x.png?v=1747685123',
				price: 107,
				imageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Crewneck_-_Olive_519ac0c5-e067-4ab7-9fe5-5421f364c52a_450x.png?v=1747685123',
				thumbnailImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Crewneck_-_Olive_519ac0c5-e067-4ab7-9fe5-5421f364c52a_450x.png?v=1747685123',
				rating: '0',
				description:
					'<p>Quick-dry fabric with a tailored edge for everyday agility.<br>\\n <br>\\nStreamlined crewneck pullover made from midweight brushed jersey. Features raglan sleeves, flatlock side seams, and a curved hem for a clean, ergonomic fit.</p>',
				brand: 'VersaWearCo',
				msrp: 0,
			},
		},
		attributes: {},
	},
	{
		id: '52955932918126',
		mappings: {
			core: {
				uid: '52955932918126',
				sku: 'VW1982-ADU-CH',
				available: true,
				name: 'Align Duffel',
				url: '/products/align-duffel',
				parentId: '14870399320430',
				parentImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-duffel-charcoal_450x.png?v=1762822635',
				price: 119,
				imageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-duffel-charcoal_450x.png?v=1762822635',
				thumbnailImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-duffel-charcoal_450x.png?v=1762822635',
				rating: '0',
				description:
					"<p>A durable, sturdy, and good looking way to haul your gear from place to place, the Align Duffel is made your style.<br>\\n<br>\\nA canvas-inspired polyester blend with abrasion-resistance makes up the shell of this go-anywhere bag, and webbing straps keep a strong hold so there's no risk of rips, tears, or other stuff-threatening events while you're between stops. An oversized reinforced zipper keeps everything tucked away, and a waterproof lining makes sure it stays safe even on rainy days. A leather handle finishes the look for a stylish-yet-rugged pack that will last longer than you'll ever expect.</p>",
				brand: 'VersaWearCo',
				msrp: 0,
			},
		},
		attributes: {},
	},
	{
		id: '52079544500590',
		mappings: {
			core: {
				uid: '52079544500590',
				sku: 'VW1982-AHO-SA',
				available: true,
				name: 'Align Hoodie',
				url: '/products/align-hoodie',
				parentId: '14725170528622',
				parentImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Hoodie_-_Sandstone_4354a6ad-5db0-4d69-91b1-65e7d7ebe647_450x.png?v=1747685130',
				price: 111,
				imageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Hoodie_-_Sandstone_4354a6ad-5db0-4d69-91b1-65e7d7ebe647_450x.png?v=1747685130',
				thumbnailImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Hoodie_-_Sandstone_4354a6ad-5db0-4d69-91b1-65e7d7ebe647_450x.png?v=1747685130',
				rating: '0',
				description:
					'<p>Wrinkle-resistant finish with clean lines and performance details.<br>\\n <br>\\nSlim-fit hoodie with crossover neckline, double-layer hood, and minimalist sleeve paneling. Kangaroo pocket features concealed zip entry. Constructed from soft performance fleece.</p>',
				brand: 'VersaWearCo',
				msrp: 0,
			},
		},
		attributes: {},
	},
	{
		id: '52079544828270',
		mappings: {
			core: {
				uid: '52079544828270',
				sku: 'VW1982-AJO-IN',
				available: true,
				name: 'Align Jogger',
				url: '/products/align-jogger',
				parentId: '14725170725230',
				parentImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Jogger_-_Indigo_3a782b8b-63e0-46ab-9d36-362adb3cd157_450x.png?v=1747685137',
				price: 111,
				imageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Jogger_-_Indigo_3a782b8b-63e0-46ab-9d36-362adb3cd157_450x.png?v=1747685137',
				thumbnailImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Jogger_-_Indigo_3a782b8b-63e0-46ab-9d36-362adb3cd157_450x.png?v=1747685137',
				rating: '0',
				description:
					'<p>Sculpted fit and breathable knit ideal for all-day movement.<br>\\n <br>\\nTapered jogger with contoured side seams, laser-cut ankle vents, and zippered hip pockets. Made from brushed stretch interlock for breathability and structure.</p>',
				brand: 'VersaWearCo',
				msrp: 0,
			},
		},
		attributes: {},
	},
	{
		id: '52079545057646',
		mappings: {
			core: {
				uid: '52079545057646',
				sku: 'VW1982-AQZ-AS',
				available: true,
				name: 'Align Quarter-Zip',
				url: '/products/align-quarter-zip',
				parentId: '14725170823534',
				parentImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Quarter-Zip_-_Ash_Grey_6d644d3e-7956-417f-90a3-5290b2764e78_450x.png?v=1747685144',
				price: 45,
				imageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Quarter-Zip_-_Ash_Grey_6d644d3e-7956-417f-90a3-5290b2764e78_450x.png?v=1747685144',
				thumbnailImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Quarter-Zip_-_Ash_Grey_6d644d3e-7956-417f-90a3-5290b2764e78_450x.png?v=1747685144',
				rating: '0',
				description:
					'<p>Anti-odor tech keeps you fresh on the move.<br>\\n <br>\\nTechnical quarter-zip with stand collar, contrast inner zip guard. Thumbhole cuffs and slightly extended back hem support movement.</p>',
				brand: 'VersaWearCo',
				msrp: 0,
			},
		},
		attributes: {},
	},
	{
		id: '52079545287022',
		mappings: {
			core: {
				uid: '52079545287022',
				sku: 'VW1982-ATA-WH',
				available: true,
				name: 'Align Tank',
				url: '/products/align-tank',
				parentId: '14725170987374',
				parentImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Tank_-_White_321562a5-0752-4236-8deb-b530dbb7419d_450x.png?v=1747685150',
				price: 46,
				imageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Tank_-_White_321562a5-0752-4236-8deb-b530dbb7419d_450x.png?v=1747685150',
				thumbnailImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Tank_-_White_321562a5-0752-4236-8deb-b530dbb7419d_450x.png?v=1747685150',
				rating: '0',
				description:
					'<p>Quick-dry fabric with a tailored edge for everyday agility.<br>\\n <br>\\nFitted tank with scoop neck and wide racerback. Constructed from ribbed performance jersey with clean bonded hems and tonal topstitching.</p>',
				brand: 'VersaWearCo',
				msrp: 0,
			},
		},
		attributes: {},
	},
	{
		id: '52079545549166',
		mappings: {
			core: {
				uid: '52079545549166',
				sku: 'VW1982-ATE-SL',
				available: true,
				name: 'Align Tee',
				url: '/products/align-tee',
				parentId: '14725171151214',
				parentImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Tee_-_Slate_f44207db-229a-4a83-8edc-27cca6a73b05_450x.png?v=1747685157',
				price: 46,
				imageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Tee_-_Slate_f44207db-229a-4a83-8edc-27cca6a73b05_450x.png?v=1747685157',
				thumbnailImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Tee_-_Slate_f44207db-229a-4a83-8edc-27cca6a73b05_450x.png?v=1747685157',
				rating: '0',
				description:
					'<p>Sculpted fit and breathable knit ideal for all-day movement.<br>\\n <br>\\nAthletic tee with raglan sleeves, curved hem, and mesh underarm panels. Soft modal-poly blend with moisture control for all-day wear.</p>',
				brand: 'VersaWearCo',
				msrp: 0,
			},
		},
		attributes: {},
	},
	{
		id: '52079545778542',
		mappings: {
			core: {
				uid: '52079545778542',
				sku: 'VW1982-AWR-OL',
				available: true,
				name: 'Align Wrap',
				url: '/products/align-wrap',
				parentId: '14725171282286',
				parentImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Wrap_-_Olive_ad79b9f8-abd3-4f3d-97e9-c955ff7fdb31_450x.png?v=1747685163',
				price: 103,
				imageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Wrap_-_Olive_ad79b9f8-abd3-4f3d-97e9-c955ff7fdb31_450x.png?v=1747685163',
				thumbnailImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Wrap_-_Olive_ad79b9f8-abd3-4f3d-97e9-c955ff7fdb31_450x.png?v=1747685163',
				rating: '0',
				description:
					'<p>Modern silhouette with subtle technical detailing.<br>\\n <br>\\nA long-sleeve open-front wrap made from a lightweight modal blend. Features include draped asymmetrical front panels, extended cuffs with thumbholes, and flatlock seams. Designed to fall below the hip with a relaxed fit for layering.</p>',
				brand: 'VersaWearCo',
				msrp: 0,
			},
		},
		attributes: {},
	},
	{
		id: '52955932787054',
		mappings: {
			core: {
				uid: '52955932787054',
				sku: 'VW1982-AYM-LA',
				available: true,
				name: 'Align Yoga Mat',
				url: '/products/align-yoga-mat',
				parentId: '14870399287662',
				parentImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-yoga-mat-lavender_450x.png?v=1762822746',
				price: 39,
				imageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-yoga-mat-lavender_450x.png?v=1762822746',
				thumbnailImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/align-yoga-mat-lavender_450x.png?v=1762822746',
				rating: '0',
				description:
					"<p>When you're stretching those joints to the limit, you need a mat that's got your back. That's where the Align Yoga Mat shines.<br>\\n<br>\\nWith a core constructed from memory foam with an odor-resistant outer layer, this mat gives the perfect mix of comfort and durability needed to support those long, intense yoga sessions. Washable and flexible this mat goes with you whether you're in the Bikram studio or working on your Warrior by the beach. It also lies flat after being curled up, so you don't have to deal with those pesky dog-earned edges when in the downward dog. Comes with an adjustable carrying strap for easy mobility. </p>",
				brand: 'VersaWearCo',
				msrp: 0,
			},
		},
		attributes: {},
	},
	{
		id: '52079546040686',
		mappings: {
			core: {
				uid: '52079546040686',
				sku: 'VW1982-AZJ-BL',
				available: true,
				name: 'Align Zip Jacket',
				url: '/products/align-zip-jacket',
				parentId: '14725171413358',
				parentImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Zip_Jacket_-_Black_74fc7521-257b-44bb-9908-97b105126ee7_450x.png?v=1747685170',
				price: 53,
				imageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Zip_Jacket_-_Black_74fc7521-257b-44bb-9908-97b105126ee7_450x.png?v=1747685170',
				thumbnailImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Zip_Jacket_-_Black_74fc7521-257b-44bb-9908-97b105126ee7_450x.png?v=1747685170',
				rating: '0',
				description:
					'<p>Modern silhouette with subtle technical detailing.<br>\\n <br>\\nSlim-fit zip-up with stand collar, dual-entry zip pockets, and curved back yoke. Bonded seams and brushed fleece interior for warmth and structure.</p>',
				brand: 'VersaWearCo',
				msrp: 0,
			},
		},
		attributes: {},
	},
	{
		id: '52955932557678',
		mappings: {
			core: {
				uid: '52955932557678',
				sku: 'VW1982-XBO-IN',
				available: true,
				name: 'Apex Bottle',
				url: '/products/apex-bottle',
				parentId: '14870399189358',
				parentImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/apex-bottle-indigo_450x.png?v=1762823848',
				price: 20,
				imageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/apex-bottle-indigo_450x.png?v=1762823848',
				thumbnailImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/apex-bottle-indigo_450x.png?v=1762823848',
				rating: '0',
				description:
					'<p>For hydration-on-the-go, the Apex Bottle is second to none.<br>\\n<br>\\nA squeezable, stylish, and secure outer shell forms to your hand while the thermal insert keeps beverages cool or hot to your taste for hours. The non-BPA plastic is dishwasher-safe and available in a variety of colors to suit your look. The metal threaded lid makes for a strong connection to the bottle to prevent spillage, but releases easily for cleaning and storage.</p>',
				brand: 'VersaWearCo',
				msrp: 0,
			},
		},
		attributes: {},
	},
	{
		id: '52079546237294',
		mappings: {
			core: {
				uid: '52079546237294',
				sku: 'VW1982-XCR-AS',
				available: true,
				name: 'Apex Crewneck',
				url: '/products/apex-crewneck',
				parentId: '14725171544430',
				parentImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Men_s_Apparel_Apex_Crewneck_-_Ash_Grey_7a2b10f2-a31f-46ad-8204-302e5cf363a4_450x.png?v=1747685176',
				price: 108,
				imageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Men_s_Apparel_Apex_Crewneck_-_Ash_Grey_7a2b10f2-a31f-46ad-8204-302e5cf363a4_450x.png?v=1747685176',
				thumbnailImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Men_s_Apparel_Apex_Crewneck_-_Ash_Grey_7a2b10f2-a31f-46ad-8204-302e5cf363a4_450x.png?v=1747685176',
				rating: '0',
				description:
					'<p>Moisture-wicking fabric with refined tailoring for daily wear.<br>\\n <br>\\nCrew sweatshirt with dropped shoulder seams, flatlock stitch details, and reinforced cuffs. Slightly oversized with soft technical terry fabric.</p>',
				brand: 'VersaWearCo',
				msrp: 0,
			},
		},
		attributes: {},
	},
	{
		id: '52955932623214',
		mappings: {
			core: {
				uid: '52955932623214',
				sku: 'VW1982-XHE-BL',
				available: true,
				name: 'Apex Headband',
				url: '/products/apex-headband',
				parentId: '14870399222126',
				parentImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/apex-headband-black_450x.png?v=1762823561',
				price: 24,
				imageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/apex-headband-black_450x.png?v=1762823561',
				thumbnailImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/apex-headband-black_450x.png?v=1762823561',
				rating: '0',
				description:
					"<p>For all-season comfort and hair management, the Apex Headband will be your go-to.<br>\\n<br>\\nA soft-yet-durably polyester-cotton blend is woven with elastic to provide a snug fit that won't slip off your head while you move, but isn't so tight that it will cause discomfort, even when worn for long days on the trail or in the gym. A reflective strip along the outside provides added visibility for low-light situations, and it's machine-washable fabric means you don't have to worry about sweating in it. Suitable for any weather, this headband can keep hair, rain, snow, sweat, or bad vibes away from your face as you push past your limits.</p>",
				brand: 'VersaWearCo',
				msrp: 0,
			},
		},
		attributes: {},
	},
	{
		id: '52079546466670',
		mappings: {
			core: {
				uid: '52079546466670',
				sku: 'VW1982-XHO-CH',
				available: true,
				name: 'Apex Hoodie',
				url: '/products/apex-hoodie',
				parentId: '14725171675502',
				parentImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Men_s_Apparel_Apex_Hoodie_-_Charcoal_f17e4a82-4e28-482b-b87f-b1fbc8646268_450x.png?v=1747685180',
				price: 69,
				imageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Men_s_Apparel_Apex_Hoodie_-_Charcoal_f17e4a82-4e28-482b-b87f-b1fbc8646268_450x.png?v=1747685180',
				thumbnailImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Men_s_Apparel_Apex_Hoodie_-_Charcoal_f17e4a82-4e28-482b-b87f-b1fbc8646268_450x.png?v=1747685180',
				rating: '0',
				description:
					'<p>Quick-dry fabric with a tailored edge for everyday agility.<br>\\n <br>\\nModern pullover hoodie with double-layer hood, forward side seams, and stretch rib cuffs. Kangaroo pocket with hidden phone pouch inside.</p>',
				brand: 'VersaWearCo',
				msrp: 0,
			},
		},
		attributes: {},
	},
	{
		id: '52079546663278',
		mappings: {
			core: {
				uid: '52079546663278',
				sku: 'VW1982-XLE-TE',
				available: true,
				name: 'Apex Legging',
				url: '/products/apex-legging',
				parentId: '14725171806574',
				parentImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Men_s_Apparel_Apex_Legging_-_Teal_bebbc33c-3d77-45a5-8948-f525bc4bd026_450x.png?v=1747685185',
				price: 120,
				imageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Men_s_Apparel_Apex_Legging_-_Teal_bebbc33c-3d77-45a5-8948-f525bc4bd026_450x.png?v=1747685185',
				thumbnailImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Men_s_Apparel_Apex_Legging_-_Teal_bebbc33c-3d77-45a5-8948-f525bc4bd026_450x.png?v=1747685185',
				rating: '0',
				description:
					'<p>Wrinkle-resistant finish with clean lines and performance details.<br>\\n <br>\\nCompressive full-length legging with seamless waistband, sculpted thigh paneling, and invisible phone pocket at back. Matte finish jersey for everyday use.</p>',
				brand: 'VersaWearCo',
				msrp: 0,
			},
		},
		attributes: {},
	},
	{
		id: '52079546859886',
		mappings: {
			core: {
				uid: '52079546859886',
				sku: 'VW1982-XQZ-CR',
				available: true,
				name: 'Apex Quarter-Zip',
				url: '/products/apex-quarter-zip',
				parentId: '14725171937646',
				parentImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Men_s_Apparel_Apex_Quarter-Zip_-_Crimson_a4a29b27-3bb7-4768-a994-a949913bb8ec_450x.png?v=1747685191',
				price: 54,
				imageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Men_s_Apparel_Apex_Quarter-Zip_-_Crimson_a4a29b27-3bb7-4768-a994-a949913bb8ec_450x.png?v=1747685191',
				thumbnailImageUrl:
					'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Men_s_Apparel_Apex_Quarter-Zip_-_Crimson_a4a29b27-3bb7-4768-a994-a949913bb8ec_450x.png?v=1747685191',
				rating: '0',
				description:
					'<p>Lightweight fleece perfect for layering or solo wear.<br>\\n <br>\\nA structured pullover with a quarter-length zipper. Constructed from textured technical knit, includes a stand collar, articulated sleeves, bonded zipper placket, and micro side vents for airflow.</p>',
				brand: 'VersaWearCo',
				msrp: 0,
			},
		},
		attributes: {},
	},
];

const snapInstance = Snapify.recommendation({ id: 'RecommendationEmail', tag: 'email-trending', globals: { siteId: 'atkzs2' } });

export const Default = (props: RecommendationEmailProps, { loaded: { controller } }: { loaded: { controller: RecommendationController } }) => {
	return <RecommendationEmail {...props} controller={controller} />;
};

Default.loaders = [
	async () => {
		snapInstance.on('init', async ({ controller }: { controller: RecommendationController }, next: Next) => {
			controller.store.results = results as unknown as Product[];
			controller.store.results.forEach((result: Product) => (result.mappings.core!.url = 'javascript:void(0);'));
			await next();
		});
		await snapInstance.init();
		return {
			controller: snapInstance,
		};
	},
];
