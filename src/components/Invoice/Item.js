/* eslint-disable max-lines-per-function */
import { View, Text } from '@react-pdf/renderer';
import React from 'react';

const Item = (context) => {
	const { config: { obj: { items }}, styles } = context;
	const { hsnOrSAC = '-' } = items;

	return items.map(({ item, rate, amount, quantity = {}}, i) =>
		<View key={ i } style={ [styles.row, styles.light] } wrap={ false }>
			<Text style={ [styles.row1, styles.num] }>{i + 1}</Text>
			<Text style={ [styles.row1, styles.item] }>{item}</Text>
			<Text
				style={ [styles.row1, styles.hsn, { textAlign: 'center' }] }
			>{hsnOrSAC}</Text>
			<Text style={ [styles.row1, styles.rightAlign] }>
				{quantity.count} {quantity.unit}
			</Text>
			<Text style={ [styles.row1, styles.hsn, styles.rightAlign] }>
				{rate}</Text>
			<Text style={ [styles.row1, styles.rightAlign] }>{amount}</Text>
		</View>);
};

export default Item;
