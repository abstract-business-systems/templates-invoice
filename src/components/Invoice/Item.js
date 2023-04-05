import { View, Text } from '@react-pdf/renderer';
import React from 'react';

const Item = (context) => {
	const { config: { obj: { items }}, styles } = context;
	const { hsnOrSAC = '-' } = items;

	return items.map(({ item, rate, amount, quantity = {}}, i) =>
		<View key={ i } style={ [styles.row, styles.light] } wrap={ false }>
			<Text style={ { width: '10%' } }>{i + 1}</Text>
			<Text style={ styles.row2 }>{item}</Text>
			<Text style={ styles.row2 }>{hsnOrSAC}</Text>
			<Text style={ styles.row1 }>
				{quantity.count} {quantity.unit}
			</Text>
			<Text style={ styles.row1 }>{rate}</Text>
			<Text style={ styles.row1 }>{amount}</Text>
		</View>);
};

export default Item;
