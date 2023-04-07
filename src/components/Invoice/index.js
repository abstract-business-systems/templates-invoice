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
Font.register({ family: 'Roboto-Light',
	src: RobotoLight });

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
		justifyContent: 'space-around',

	},
	text: {
		fontSize: 10,
		width: '50%',
		wordWrap: 'wrap',
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
		marginLeft: 25,
		flex: 1,
	},
	subView: {
		flexDirection: 'column',
	},
	position: { position: 'relative', right: 33 },
});

const Invoice = (context) => {
	const extendedContext = { ...{ ...context, data: styles }};

	return <Document>
		<Page size="A4" style={ styles.page }>
			<InvoiceSection { ...extendedContext }/>
			<AddressSection { ...extendedContext }/>
			<Address { ...extendedContext }/>
			<GovtDoc { ...extendedContext }/>
			<ChargesTable { ...context }/>
			<BillingTable { ...context }/>
			<Description { ...extendedContext }/>
		</Page>
	</Document>;
};

export default Invoice;
