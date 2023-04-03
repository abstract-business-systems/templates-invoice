import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	view: {
		flexDirection: 'row',
		margin: 20,
	},
	subtext: {
		margin: 10,
		fontSize: 14,
		padding: 20,
		flex: 1,
	},
	bold: {
		fontFamily: 'Helvetica-Bold',
		textAlign: 'justify',
	},
});

const InvoiceSection = () => <View style={ styles.view }>
	<Text style={ styles.subtext }>
		<Text style={ styles.bold }>Invoice No:</Text>
		<Text>  13-06-2001</Text>
	</Text>
	<Text style={ styles.subtext }>
		<Text style={ styles.bold }>Invoice Date:</Text>
		<Text>  13-06-2001</Text>
	</Text>
</View>;

export default InvoiceSection;
