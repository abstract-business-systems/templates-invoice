import React from 'react';
import Items from './Items';

const Products = (context) => {
	const { config: { obj: { items }}} = context;
	const filteredProducts = items.filter((item) => item.type === 'product');
	const extendedContext = { ...context, data: { items: filteredProducts }};

	return <Items { ...extendedContext }/>;
};

export default Products;
