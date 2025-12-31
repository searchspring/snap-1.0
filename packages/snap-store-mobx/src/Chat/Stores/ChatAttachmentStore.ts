// TODO: implement
// how should localStorage be handled for attachments?
import { v4 as uuidv4 } from 'uuid';
import { makeObservable, observable, computed } from 'mobx';

/*

store.attachments = {
	loading: boolean,

	uploading: {
		type: '',
		base64?: string, // temporary base64 string before upload
		error?: string,
	}

	items: {
		id: string,
		conversationId: '',
		type: 'image',
		response: {
			success: boolean,
			imageId: string,
			url: '',
		}
	}[]
}


add attachment -> adding.loading = true
on success -> adding = null, items.push(attachment)
on error -> adding = { ...adding, loading: false, error: 'error message' }

*/

type AttachmentError = {
	message: string;
};

// type Attachment = {
// 	id: string;
// 	state: 'loading' | 'error' | 'attached' | 'saved';
// }

/*
starts as 'loading'
on success -> 'attached'
on error -> 'error'
once message is sent -> 'saved' or keep 'attached' until removed
*/

// success: boolean,
// message: string,
// error?: {
// 	errorCode: string,
// 	errorMessage: string,
// 	field: string,
// 	expectedValue: string,
// 	actualValue: string,
// 	httpStatus: number
// },
// imageId: string,
// imageUrl: string,
// thumbnailUrl: string

// export type ImageAttachment = Attachment & {
// 	type: 'image';
// 	data: {
// 		base64: string;
// 	};
// 	error?: AttachmentError;
// 	imageId: string,
// 	imageUrl: string,
// 	thumbnailUrl: string
// }

type Attachments = ImageAttachment;

// type FilterAttachment = Attachment & {
// 	type: 'filter';
// 	data: {
// 		field: string;
// 		value: string;
// 	}
// }

abstract class Attachment {
	public abstract type: string;
	public id: string = uuidv4();
	public state: 'loading' | 'error' | 'attached' | 'saved' = 'loading';
	public error?: AttachmentError;

	// public abstract update(): Promise<void>;

	constructor() {
		// makeObservable(this, {
		// 	items: observable,
		// 	attached: computed,
		// });
	}

	// remove() {

	// }
}

export class ImageAttachment extends Attachment {
	public type = 'image';
	public imageId?: string;
	public imageUrl?: string;
	public thumbnailUrl?: string;
	public base64?: string;

	constructor({ base64 }: { base64?: string }) {
		super();

		this.base64 = base64;

		makeObservable(this, {
			type: observable,
			imageId: observable,
			imageUrl: observable,
			thumbnailUrl: observable,
			base64: observable,
		});
	}

	// uploaded = async ({ error, imageId, }): Promise<void> => {
	// 	console.log();
	// }
}

export class ChatAttachmentStore {
	public items: Attachments[] = [];

	constructor() {
		makeObservable(this, {
			items: observable,
			attached: computed,
		});
	}

	/*

	Prior to sending message:
		* any attachments still pending?
		* any attachments in error state?

	Attachments that are not currently attached, but need to exist for future reference in chat history
		* attachments that are "removed"?

	*/

	get attached() {
		return this.items.filter((item) => item.state === 'attached');
	}

	add<T extends ImageAttachment>(attachment: Pick<T, 'type' | 'data'>): T {
		switch (attachment.type) {
			case 'image': {
				// const newAttachment = {
				// 	id: uuidv4(),
				// 	...attachment,
				// 	state: 'loading',
				// } as T;
				// this.items.push(newAttachment);
				const newAttachment = new ImageAttachment({});
				this.items.push(newAttachment);
				return newAttachment;
			}
		}
		throw new Error('Unsupported attachment type');
	}

	remove(id: string) {
		this.items = this.items.filter((item) => item.id !== id);
	}

	// update() {

	// }
}
