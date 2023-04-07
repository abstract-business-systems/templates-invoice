import React from 'react';
import { View, Text } from '@react-pdf/renderer';

const ChargesHeader = (context) => {
	const { styles } = context;

	return <View style={ [styles.row, styles.bold] }>
		<Text style={ [styles.row1, styles.num] }>Num</Text>
		<Text style={ [styles.row1, styles.item] }>Items</Text>
		<Text style={ [styles.row1, styles.hsn] }>HSN / SAC</Text>
		<Text style={ styles.row1 }>Qty</Text>
		<Text style={ [styles.row1, styles.hsn] }>Rate</Text>
		<Text style={ styles.row1 }>Amount</Text>
	</View>;
};

export default ChargesHeader;
