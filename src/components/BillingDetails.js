/* eslint-disable max-lines-per-function */
import { View, Text } from '@react-pdf/renderer';
import React from 'react';

const BillingDetails = (context) => {
	const {
		styles,
		config: { obj },
	} = context;
	const borderTop = { borderTop: '1.5px solid #EEE' };

	return (
		<View
			style={ [styles.row,
				{ borderLeft: '1.5px solid #EEE' }] }
		>
			<View style={ styles.row1 }>
				<Text style={ styles.bold }>Sub Total</Text>
				<Text style={ styles.light }>{obj.subtotal}</Text>
			</View>
			<View style={ [styles.row1, borderTop] }>
				<Text style={ styles.bold }>Taxes</Text>
				<Text style={ styles.light }>{obj.grandTotal}</Text>
			</View>
			<View style={ [styles.row1, borderTop] }>
				<Text style={ styles.bold }>Grand Total</Text>
				<Text style={ styles.light }>{obj.taxes}</Text>
			</View>
			<View style={ [styles.row1, borderTop] }>
				<Text style={ styles.bold }>Amount in words: </Text>
				<Text style={ styles.light }>{obj.amountInWords}</Text>
			</View>
		</View>
	);
};

export default BillingDetails;
