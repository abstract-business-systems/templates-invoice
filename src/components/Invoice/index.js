import React from 'react';
import { Page, Document } from '@react-pdf/renderer';
import InvoiceSection from './InvoiceSection';
import GovtDoc from './GovtDoc';
import Address from './Address';
import Description from './Description';
import AddressSection from './AddressSection';
import ChargesTable from './ChargesTable';
import BillingTable from './BillingTable';

const Invoice = (context) => {
	const { styles } = context;

	return (
		<Document>
			<Page size="A4" style={ styles.page }>
				<InvoiceSection { ...context }/>
				<AddressSection { ...context }/>
				<Address { ...context }/>
				<GovtDoc { ...context }/>
				<ChargesTable { ...context }/>
				<BillingTable { ...context }/>
				<Description { ...context }/>
			</Page>
		</Document>
	);
};

export default Invoice;
