import React from 'react';
import Items from './Items';

const Taxes = (context) => {
	const { config: { obj: { items }}} = context;
	const filteredTaxes = items.filter((item) => item.type === 'tax');
	const extendedContext = { ...context, data: { items: filteredTaxes }};

	return <Items { ...extendedContext }/>;
};

export default Taxes;
