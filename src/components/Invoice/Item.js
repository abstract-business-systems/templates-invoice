import React from 'react';
import { View, Text } from '@react-pdf/renderer';

const Item = (context) => {
	const { config: { hsnOrSAC }, styles, data } = context;
	const { item: { item, rate, type, amount, quantity = {}}, i } = data;
	const isProduct = type === 'product';

	return <View style={ [styles.row, styles.light] } wrap={ false }>
		<Text style={ [styles.row1, styles.num] }> {isProduct && i + 1}
		</Text>
		<Text style={ [styles.row1, styles.item] }>{item}</Text>
		<Text style={ [styles.row1, styles.hsn, { textAlign: 'center' }] }>
			{isProduct && hsnOrSAC}
		</Text>
		<View style={ [styles.row1, styles.rightAlign, styles.quantity] }>
			<Text style={ { fontSize: 9 } }>{quantity.count}</Text>
			<Text style={ { fontSize: 8 } }>{quantity.unit}</Text>
		</View>
		<Text style={ [styles.row1, styles.hsn, styles.rightAlign] }>
			{rate}</Text>
		<Text style={ [styles.row1, styles.rightAlign] }>{amount}</Text>
	</View>;
};

export default Item;
