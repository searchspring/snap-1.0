// TODO: implement
// how should localStorage be handled for attachments?
import { v4 as uuidv4 } from 'uuid';
import { makeObservable, observable, computed } from 'mobx';

type AttachmentError = {
	message: string;
};

type Attachments = ImageAttachment;

abstract class Attachment {
	public abstract type: string;

	public id: string = uuidv4();
	public state: 'loading' | 'error' | 'attached' | 'saved' = 'loading';
	public error?: AttachmentError = undefined;

	constructor() {
		makeObservable(this, {
			id: observable,
			state: observable,
			error: observable,
		});
	}

	setError(error: AttachmentError) {
		this.state = 'error';
		this.error = error;
	}

	save() {
		this.state = 'saved';
	}

	abstract attach(params: any): void;
}

export class ImageAttachment extends Attachment {
	public type = 'image';
	public imageId?: string = undefined;
	public imageUrl?: string = undefined;
	public thumbnailUrl?: string = undefined;
	public base64?: string = undefined;

	constructor({ base64, imageId, imageUrl, thumbnailUrl }: AttachmentAddImage) {
		super();

		this.base64 = base64;

		// loading from storage with all data present
		if (imageId && imageUrl && thumbnailUrl) {
			this.imageId = imageId;
			this.imageUrl = imageUrl;
			this.thumbnailUrl = thumbnailUrl;
			this.state = 'attached';
		}

		makeObservable(this, {
			type: observable,
			imageId: observable,
			imageUrl: observable,
			thumbnailUrl: observable,
			base64: observable,
		});
	}

	attach = async ({ imageId, imageUrl, thumbnailUrl }: { imageId?: string; imageUrl?: string; thumbnailUrl?: string }): Promise<void> => {
		this.state = 'attached';
		this.imageId = imageId;
		this.imageUrl = imageUrl;
		this.thumbnailUrl = thumbnailUrl;
	};
}

type AttachmentAddImage = { type: 'image'; base64?: string; imageId?: string; imageUrl?: string; thumbnailUrl?: string };
type AttachmentAddAttachment = AttachmentAddImage | /*AttachmentAddFilter |*/ never;

export class ChatAttachmentStore {
	public items: Attachments[] = [];

	constructor() {
		makeObservable(this, {
			items: observable,
			attached: computed,
		});
	}

	get attached() {
		return this.items.filter((item) => item.state === 'attached');
	}

	add<T extends Attachments>(attachment: AttachmentAddAttachment): T {
		switch (attachment.type) {
			case 'image': {
				const newAttachment = new ImageAttachment(attachment);
				this.items.push(newAttachment);
				return newAttachment as T;
			}
		}
		throw new Error('Unsupported attachment type');
	}

	remove(id: string) {
		const index = this.items.findIndex((item) => item.id === id);
		if (index !== -1) {
			this.items.splice(index, 1);
		}
	}

	get(id: string): Attachments | undefined {
		return this.items.find((item) => item.id === id);
	}
}
