import React from 'react';
import { View, Text } from '@react-pdf/renderer';

const Items = (context) => {
	const { config: { hsnOrSAC }, styles, data: { items }} = context;

	return items.map(({ item, rate, amount, type, quantity = {}}, i) =>
		<View key={ i } style={ [styles.row, styles.light] } wrap={ false }>
			<Text style={ [styles.row1, styles.num] }>
				{type === 'product' && i + 1}
			</Text>
			<Text style={ [styles.row1, styles.item] }>{item}</Text>
			<Text style={ [styles.row1, styles.hsn, { textAlign: 'center' }] }>
				{hsnOrSAC}
			</Text>
			<View style={ [styles.row1, styles.rightAlign, styles.quantity] }>
				<Text style={ { fontSize: 9 } }>{quantity.count}</Text>
				<Text style={ { fontSize: 8 } }>{quantity.unit}</Text>
			</View>
			<Text style={ [styles.row1, styles.hsn, styles.rightAlign] }>
				{rate}</Text>
			<Text style={ [styles.row1, styles.rightAlign] }>{amount}</Text>
		</View>);
};

export default Items;
