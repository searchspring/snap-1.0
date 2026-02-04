export const fieldNameToComponentName = (fieldName: string) => {
	// eg. color_family -> color-family
	return fieldName.replace(/_/g, '-').toLowerCase();
};
