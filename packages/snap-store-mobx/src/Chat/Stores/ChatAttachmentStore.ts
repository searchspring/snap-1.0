// TODO: implement
// how should localStorage be handled for attachments?
import { v4 as uuidv4 } from 'uuid';
import { makeObservable, observable, computed } from 'mobx';

type AttachmentState = 'loading' | 'error' | 'attached' | 'saved';
type AttachmentError = {
	message: string;
};

export type ChatAttachmentAddAttachment = ChatAttachmentImageConfig | /*AttachmentAddFilter |*/ never;

export class ChatAttachmentStore {
	public items: ChatAttachments[] = [];

	constructor() {
		makeObservable(this, {
			items: observable,
			attached: computed,
		});
	}

	get attached() {
		return this.items.filter((item) => item.state === 'attached' || item.state === 'loading' || item.state === 'error');
	}

	add<T extends ChatAttachments>(attachment: ChatAttachmentAddAttachment): T {
		switch (attachment.type) {
			case 'image': {
				const newAttachment = new ChatAttachmentImage(attachment);
				this.items.push(newAttachment);
				return newAttachment as T;
			}
		}
	}

	remove(id: string) {
		const index = this.items.findIndex((item) => item.id === id);
		if (index !== -1) {
			this.items.splice(index, 1);
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

type ChatAttachments = ChatAttachmentImage;

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

	abstract update(params: unknown): void;
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
