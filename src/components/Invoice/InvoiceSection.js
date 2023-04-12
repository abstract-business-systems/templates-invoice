import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { map, values } from '@laufire/utils/collection';
import InvoiceManager from '../../services/InvoiceManager';

const InvoiceSection = (context) => {
	const { data: styles } = context;
	const invoiceDetails = InvoiceManager.getInvoiceDetails(context);

	return <View style={ styles.view }>
		{values(map(invoiceDetails, (value, key) =>
			<Text style={ styles.subtext }>
				<Text style={ styles.bold }>{key}</Text>
				<Text style={ styles.light }> {value}</Text>
			</Text>))}
	</View>;
};

export default InvoiceSection;
