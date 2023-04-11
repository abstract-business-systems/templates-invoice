import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import InvoiceManager from '../../services/InvoiceManager';

const Item = (context) => {
	const { config: { hsnOrSAC }, styles, data } = context;
	const { item: { item, rate, amount, quantity, unit }, i } = data;
	const isProduct = InvoiceManager.isProduct(context);

	return <View style={ [styles.row, styles.light] } wrap={ false }>
		<Text style={ [styles.row1, styles.num] }> {isProduct && i + 1}
		</Text>
		<Text style={ [styles.row1, styles.item] }>{item}</Text>
		<Text style={ [styles.row1, styles.hsn, { textAlign: 'center' }] }>
			{isProduct && hsnOrSAC}
		</Text>
		<View style={ [styles.row1, styles.rightAlign, styles.quantity] }>
			<Text style={ { fontSize: 9 } }>{quantity}</Text>
			<Text style={ { fontSize: 8 } }>{unit}</Text>
		</View>
		<Text style={ [styles.row1, styles.hsn, styles.rightAlign] }>
			{rate}</Text>
		<Text style={ [styles.row1, styles.rightAlign] }>{amount}</Text>
	</View>;
};

export default Item;
