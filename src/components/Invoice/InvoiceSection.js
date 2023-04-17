import React from 'react';
import { View } from '@react-pdf/renderer';
import InvoiceManager from '../../services/InvoiceManager';
import Helper from './Helper';

const InvoiceSection = (context) => {
	const { data: styles, config: { obj: { id }}} = context;
	const invoiceDate = InvoiceManager.getInvoiceDate(context) ;

	return (
		<View style={ styles.view }>
			<Helper { ...{ ...context, header: 'Invoice No', value: id } }/>
			<Helper { ...{ ...context,
				header: 'Invoice Date', value: invoiceDate } }
			/>
		</View>
	);
};

export default InvoiceSection;
