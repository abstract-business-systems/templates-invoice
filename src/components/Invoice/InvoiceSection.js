import React from 'react';
import { View, Text } from '@react-pdf/renderer';

const InvoiceSection = (context) => {
	const { config: { obj: { invoiceNo, invoiceDate }},
		data: styles } = context;

	return <View style={ styles.view }>
		<Text style={ styles.subtext }>
			<Text style={ styles.bold }>Invoice No:</Text>
			<Text style={ styles.light }>  {invoiceNo}</Text>
		</Text>
		<Text style={ [styles.subtext, styles.position] }>
			<Text style={ styles.bold }>Invoice Date:</Text>
			<Text style={ styles.light }>  {invoiceDate}</Text>
		</Text>
	</View>;
};

export default InvoiceSection;
