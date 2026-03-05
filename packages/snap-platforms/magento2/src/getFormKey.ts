import { cookies } from '@athoscommerce/snap-toolbox';

export const getFormKey = () => {
	const formKey = cookies.get('form_key') ? cookies.get('form_key') : '';
	return formKey;
};
