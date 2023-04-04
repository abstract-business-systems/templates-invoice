import React from 'react';
import { Page, Document, StyleSheet, Font } from '@react-pdf/renderer';
import Table from './Table';
import InvoiceSection from './InvoiceSection';
import Vendor from './Vendor';
import GovtDoc from './GovtDoc';
import RobotoBold from '../fonts/Roboto-Bold.ttf';
import RobotoLight from '../fonts/Roboto-Light.ttf';

Font.register({ family: 'Roboto-Bold',
	src: RobotoBold });
Font.register({ family: 'Roboto-Light',
	src: RobotoLight });

const styles = StyleSheet.create({
	page: {
		flexDirection: 'column',
		margin: 20,
		marginTop: 100,
	},
	view: {
		flexDirection: 'row',
	},
	text: {
		padding: 10,
		marginTop: 5,
		marginLeft: 20,
		fontSize: 10,
		width: 200,
	},
	bold: {
		fontFamily: 'Roboto-Bold',
		textAlign: 'justify',
	},
	light: {
		fontFamily: 'Roboto-Light',
	},
	subtext: {
		marginLeft: 100,
		fontSize: 10,
		width: 200,
	},

});

const Invoice = (context) => <Document>
	<Page size="A4" style={ styles.page }>
		<InvoiceSection { ...{ ...context, styles } }/>
		<Vendor { ...{ ...context, styles } }/>
		<GovtDoc { ...{ ...context, styles } }/>
		<Table { ...context }/>
	</Page>
</Document>;

export default Invoice;
