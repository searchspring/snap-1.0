// TODO: implement
// how should localStorage be handled for attachments?
import { v4 as uuidv4 } from 'uuid';
import { makeObservable, observable, computed } from 'mobx';

type AttachmentState = 'loading' | 'error' | 'attached' | 'active' | 'saved';
type AttachmentError = {
	message: string;
};

export type ChatAttachmentAddAttachment = ChatAttachmentImageConfig | ChatAttachmentProductConfig | ChatAttachmentFacetConfig;

export class ChatAttachmentStore {
	public items: ChatAttachments[] = [];

	constructor() {
		makeObservable(this, {
			items: observable,
			attached: computed,
		});
	}

	get attached() {
		return this.items.filter((item) => item.state !== 'saved');
	}

	add<T extends ChatAttachments>(attachment: ChatAttachmentAddAttachment): T {
		// TODO: check if attachment already exists
		switch (attachment.type) {
			case 'image': {
				// if there are currently any other attachments remove them
				this.items.forEach((item) => {
					this.remove(item.id);
				});

				const newAttachment = new ChatAttachmentImage(attachment);
				this.items.push(newAttachment);

				return newAttachment as T;
			}
			case 'product': {
				// if there are currently any other attachments remove them
				this.items.forEach((item) => {
					if (item.type !== 'product') {
						this.remove(item.id);
					}
				});

				// check if product is already attached
				const existingProductAttachment = this.items.find(
					(item) => item.type === 'product' && item.state === 'active' && (item as ChatAttachmentProduct).productId === attachment.productId
				);

				if (existingProductAttachment) {
					existingProductAttachment.activate();
					return existingProductAttachment as T;
				} else {
					// if there are already two product attachments, remove until only one remains
					const productAttachments = this.items.filter((item) => item.type === 'product' && item.state === 'active');
					while (productAttachments.length >= 2) {
						const toRemove = productAttachments.shift();
						if (toRemove) {
							this.remove(toRemove.id);
						}
					}
				}

				const newAttachment = new ChatAttachmentProduct(attachment);
				this.items.unshift(newAttachment);

				return newAttachment as T;
			}
			case 'facet': {
				// if there are currently any other attachments remove them
				this.items.forEach((item) => {
					this.remove(item.id);
				});

				const newAttachment = new ChatAttachmentFacet(attachment);
				this.items.push(newAttachment);

				return newAttachment as T;
			}
		}
	}

	remove(id: string) {
		const index = this.items.findIndex((item) => item.id === id);
		const attachment = this.items[index];

		if (attachment.state === 'active' || attachment.state === 'saved') {
			attachment.save();
		} else {
			if (index !== -1) {
				this.items.splice(index, 1);
			}
		}
	}

	get(id: string): ChatAttachments | undefined {
		return this.items.find((item) => item.id === id);
	}

	reset(): void {
		this.items = [];
	}
}

/* Various Attachment Types */

type ChatAttachments = ChatAttachmentImage | ChatAttachmentProduct | ChatAttachmentFacet;

abstract class ChatAttachment {
	public abstract type: string;

	public id: string;
	public state: AttachmentState = 'loading';
	public error?: AttachmentError = undefined;

	constructor(params: { data?: { id?: string; state?: AttachmentState; error?: AttachmentError } } = {}) {
		this.id = params.data?.id ?? uuidv4();
		this.state = params.data?.state ?? 'loading';
		makeObservable(this, {
			id: observable,
			state: observable,
			error: observable,
		});
	}

	save() {
		this.state = 'saved';
	}

	activate() {
		this.state = 'active';
	}
}

type ChatAttachmentImageConfig = {
	type: 'image';
	id?: string;
	base64?: string;
	imageId?: string;
	imageUrl?: string;
	thumbnailUrl?: string;
	state?: AttachmentState;
	error?: AttachmentError;
};

type ChatAttachmentProductConfig = {
	type: 'product';
	id?: string;
	productId: string;
	thumbnailUrl: string;
	name: string;
	state?: AttachmentState;
	error?: AttachmentError;
};
type ChatAttachmentFacetConfig = {
	type: 'facet';
	id?: string;
	key: string;
	facetLabel: string;
	value: string;
	label: string;
	count: number;
	state?: AttachmentState;
	error?: AttachmentError;
};

export class ChatAttachmentProduct extends ChatAttachment {
	public type: 'product' | never = 'product';
	public productId: string;
	public thumbnailUrl: string;
	public name: string;

	constructor({ id, productId, thumbnailUrl, name, state, error }: ChatAttachmentProductConfig) {
		super({ data: { id, state, error } });
		this.activate();

		this.productId = productId;
		this.thumbnailUrl = thumbnailUrl;
		this.name = name;

		makeObservable(this, {
			type: observable,
			productId: observable,
			thumbnailUrl: observable,
			name: observable,
		});
	}
}
export class ChatAttachmentFacet extends ChatAttachment {
	public type: 'facet' | never = 'facet';
	public key: string;
	public facetLabel: string;
	public value: string;
	public label: string;
	public count: number;

	constructor({ id, key, facetLabel, value, label, count, state, error }: ChatAttachmentFacetConfig) {
		super({ data: { id, state, error } });
		this.activate();

		this.key = key;
		this.facetLabel = facetLabel;
		this.value = value;
		this.label = label;
		this.count = count;

		makeObservable(this, {
			type: observable,
			key: observable,
			facetLabel: observable,
			value: observable,
			label: observable,
		});
	}
}
export class ChatAttachmentImage extends ChatAttachment {
	public type: 'image' | never = 'image';
	public imageId?: string;
	public imageUrl?: string;
	public thumbnailUrl?: string;
	public base64?: string;

	constructor({ id, base64, imageId, imageUrl, thumbnailUrl, state, error }: ChatAttachmentImageConfig) {
		super({ data: { id, state, error } });

		this.base64 = base64;
		this.imageId = imageId;
		this.imageUrl = imageUrl;
		this.thumbnailUrl = thumbnailUrl;

		makeObservable(this, {
			type: observable,
			imageId: observable,
			imageUrl: observable,
			thumbnailUrl: observable,
			base64: observable,
		});
	}

	// used to update attachment after upload or from
	update = async ({
		imageId,
		imageUrl,
		thumbnailUrl,
		error,
	}: {
		imageId?: string;
		imageUrl?: string;
		thumbnailUrl?: string;
		error?: AttachmentError;
	}): Promise<void> => {
		if (imageId && imageUrl && thumbnailUrl) {
			this.state = 'attached';
			this.imageId = imageId;
			this.imageUrl = imageUrl;
			this.thumbnailUrl = thumbnailUrl;
		} else if (error) {
			this.state = 'error';
			this.error = error;
		}
	};
}
