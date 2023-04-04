import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	view: {
		flexDirection: 'row',
	},
	subtext: {
		fontSize: 10,
		padding: 20,
		flex: 1,
	},
	bold: {
		fontFamily: 'Roboto-Bold',
		textAlign: 'justify',
	},
});

const InvoiceSection = (context) => {
	const { config: { obj: { invoiceNo, invoiceDate }}} = context;

	return <View style={ styles.view }>
		<Text style={ styles.subtext }>
			<Text style={ styles.bold }>Invoice No:</Text>
			<Text>  {invoiceNo}</Text>
		</Text>
		<Text style={ styles.subtext }>
			<Text style={ styles.bold }>Invoice Date:</Text>
			<Text>  {invoiceDate}</Text>
		</Text>
	</View>;
};

export default InvoiceSection;
