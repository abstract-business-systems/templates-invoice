import React from 'react';
import HelperText from './HelperText';

const VendorDoc = (context) => {
	const { config: { obj: { vendor: { govtDoc }}}} = context;

	return (
		<HelperText { ...{ ...context,
			header: govtDoc.type, value: govtDoc.id } }
		/>);
};

export default VendorDoc;
