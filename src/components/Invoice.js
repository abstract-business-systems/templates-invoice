import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import Table from './Table';
import InvoiceSection from './InvoiceSection';
import Vendor from './Vendor';

const styles = StyleSheet.create({
	page: {
		flexDirection: 'column',
		margin: 10,
		marginTop: 90,
	},

});

const Invoice = (context) => <Document>
	<Page size="A4" style={ styles.page }>
		<InvoiceSection { ...context }/>
		<Vendor { ...context }/>
		<Table { ...context }/>
	</Page>
</Document>;

export default Invoice;
