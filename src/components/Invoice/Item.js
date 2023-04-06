import { View, Text } from '@react-pdf/renderer';
import React from 'react';

const Item = (context) => {
	const { config: { obj: { items }}, styles } = context;
	const { hsnOrSAC = '-' } = items;

	return items.map(({ item, rate, amount, quantity = {}}, i) =>
		<View key={ i } style={ [styles.row, styles.light] } wrap={ false }>
			<Text style={ [styles.row1, styles.num] }>{i + 1}</Text>
			<Text style={ [styles.row1, styles.item] }>{item}</Text>
			<Text style={ [styles.row1, styles.hsn, { textAlign: 'center' }] }>
				{hsnOrSAC}</Text>
			<View style={ [styles.row1, styles.rightAlign, styles.quantity] }>
				<Text style={ { fontSize: 9 } }>{quantity.count}</Text>
				<Text style={ { fontSize: 8 } }>{quantity.unit}</Text>
			</View>
			<Text style={ [styles.row1, styles.hsn, styles.rightAlign] }>
				{rate}</Text>
			<Text style={ [styles.row1, styles.rightAlign] }>{amount}</Text>
		</View>);
};

export default Item;
