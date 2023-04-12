import React from 'react';
import { Page, Document, StyleSheet, Font } from '@react-pdf/renderer';
import InvoiceSection from './InvoiceSection';
import GovtDoc from './GovtDoc';
import RobotoBold from '../../fonts/RobotoMono-Bold.ttf';
import RobotoLight from '../../fonts/RobotoMono-Light.ttf';
import Address from './Address';
import Description from './Description';
import AddressSection from './AddressSection';
import ChargesTable from './ChargesTable';
import BillingTable from './BillingTable';

Font.register({
	family: 'Roboto-Bold',
	src: RobotoBold,
});
Font.register({ family: 'Roboto-Light', src: RobotoLight });

const styles = StyleSheet.create({
	page: {
		flexDirection: 'column',
		margin: 20,
		paddingTop: 90,
		paddingBottom: 90,
		paddingHorizontal: 30,
	},
	view: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '85%',
		marginLeft: 25,
	},
	text: {
		fontSize: 10,
		wordWrap: 'wrap',
		width: '80%',
		overflow: 'hidden',
	},
	bold: {
		fontFamily: 'Roboto-Bold',
		textAlign: 'justify',
	},
	light: {
		fontFamily: 'Roboto-Light',
		textAlign: 'justify',
	},
	subtext: {
		fontSize: 10,
		flex: 1,
	},
	subView: {
		flexDirection: 'column',
		marginRight: 'auto',
		width: '80%',
		height: 80,
	},
});

const Invoice = (context) => {
	const extendedContext = { ...{ ...context, data: styles }};

	return (
		<Document>
			<Page size="A4" style={ styles.page }>
				<InvoiceSection { ...extendedContext }/>
				<AddressSection { ...extendedContext }/>
				<Address { ...extendedContext }/>
				<GovtDoc { ...extendedContext }/>
				<ChargesTable { ...context }/>
				<BillingTable { ...context }/>
				<Description { ...extendedContext }/>
			</Page>
		</Document>
	);
};

export default Invoice;
