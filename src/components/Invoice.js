import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import Table from './Table';
import InvoiceSection from './InvoiceSection';

const styles = StyleSheet.create({
	page: {
		flexDirection: 'column',
		margin: 10,
	},
});

const Invoice = (context) =>
	<Document>
		<Page size="A4" style={ styles.page }>
			<InvoiceSection/>
			<Table { ...context }/>
		</Page>
	</Document>;

export default Invoice;
