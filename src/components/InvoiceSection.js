import React from 'react';
import { View, Text } from '@react-pdf/renderer';
const subtext = {
	fontSize: 10,
	padding: 10,
	marginLeft: 30,
	flex: 1,
};
const InvoiceSection = (context) => {
	const { config: { obj: { invoiceNo, invoiceDate }}, styles } = context;

	return <View style={ styles.view }>
		<Text style={ subtext }>
			<Text style={ styles.bold }>Invoice No:</Text>
			<Text style={ styles.light }>  {invoiceNo}</Text>
		</Text>
		<Text style={ subtext }>
			<Text style={ styles.bold }>Invoice Date:</Text>
			<Text style={ styles.light }>  {invoiceDate}</Text>
		</Text>
	</View>;
};

export default InvoiceSection;
