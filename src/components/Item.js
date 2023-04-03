import { View, Text } from '@react-pdf/renderer';
import React from 'react';

const Item = ({ items, styles }) =>
	items.map((item, i) => <View key={ i } style={ styles.row } wrap={ false }>
		<Text style={ styles.row1 }>{i + 1}</Text>
		<Text style={ styles.row1 }>{item.name}</Text>
		<Text style={ styles.row1 }>{item.hsnOrSAC}</Text>
		<Text style={ styles.row1 }>{item.quantity.count}  {item.quantity.unit}
		</Text>
		<Text style={ styles.row1 }>{item.rate}</Text>
		<Text style={ styles.row1 }>{item.amount}</Text>
	</View>);

export default Item;
