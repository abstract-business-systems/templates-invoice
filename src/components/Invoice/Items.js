import React from 'react';
import Item from './Item';

const Items = (context) => {
	const { data } = context;

	return data.map((item, i) =>
		<Item key={ i } { ...{ ...context, data: { item, i }} }/>);
};

export default Items;
