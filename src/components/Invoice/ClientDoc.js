import React from 'react';
import HelperText from './HelperText';

const ClientDoc = (context) => {
	const { config: { obj: { client: { govtDoc }}}} = context;

	return (
		<HelperText { ...{ ...context,
			header: govtDoc.type, value: govtDoc.id } }
		/>);
};

export default ClientDoc;
