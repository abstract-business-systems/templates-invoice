import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import Table from './Table';

const styles = StyleSheet.create({
	page: {
		flexDirection: 'column',
		margin: 10,
	},
	section: {
		margin: 10,
		padding: 10,
		flex: 1,
	},
	text: {
		margin: 10,
		fontSize: 14,
		textAlign: 'justify',
		fontFamily: 'Times-Roman',
		width: '35vw',
	},
	subtitle: {
		fontSize: 18,
		margin: 2,
	},
	subtext: {
		margin: 5,
		fontSize: 14,
	},
});

const Invoice = (context) =>
	<Document>
		<Page size="A4" style={ styles.page }>
			<Table { ...context }/>
		</Page>
	</Document>;

export default Invoice;
