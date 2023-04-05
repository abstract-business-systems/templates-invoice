import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import BillingDetails from './BillingDetails';
import BankDetails from './BankDetails';

const styles = StyleSheet.create({
	table: {
		width: '80%',
		margin: 10,
		marginLeft: 30,
		border: '1.5px solid #EEE',
		flexDirection: 'row',
	},
	row: {
		display: 'flex',
		flexDirection: 'column',
		paddingBottom: 30,
		fontSize: 10,
		width: '50%',
		paddingRight: 10,

	},
	bold: {
		fontFamily: 'Roboto-Bold',
		padding: 5,
	},
	light: {
		fontFamily: 'Roboto-Light',
		padding: 5,
	},
	row1: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		marginLeft: 5,
	},

});
const BillingTable = (context) =>
	<View style={ styles.table }>
		<BankDetails { ...{ ...context, data: styles } }/>
		<BillingDetails { ...{ ...context, styles } }/>
	</View>;

export default BillingTable;
