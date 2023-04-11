import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import InvoiceManager from '../../services/InvoiceManager';

const InvoiceSection = (context) => {
	const { config: { obj: { id }},
		data: styles } = context;
	const invoiceDate = InvoiceManager.getInvoiceDate(context);

	return <View style={ styles.view }>
		<Text style={ styles.subtext }>
			<Text style={ styles.bold }>Invoice No:</Text>
			<Text style={ styles.light }> {id}</Text>
		</Text>
		<Text style={ [styles.subtext, styles.position] }>
			<Text style={ styles.bold }>Invoice Date:</Text>
			<Text style={ styles.light }> {invoiceDate}</Text>
		</Text>
	</View>;
};

export default InvoiceSection;
