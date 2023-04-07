import React from 'react';
import Item from './Item';

const Items = (context) => {
	const { data: { items }} = context;

	return items.map((item, i) =>
		<Item key={ i } { ...{ ...context, data: { item, i }} }/>);
};

export default Items;
