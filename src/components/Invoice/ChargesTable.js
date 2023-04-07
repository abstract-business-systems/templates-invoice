import React from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';
import Products from './Products';

const styles = StyleSheet.create({
	table: {
		width: '85%',
		margin: 10,
		marginLeft: 20,
		border: '1.5px solid #EEE',
		borderTop: 'none',
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		borderTop: '1.5px solid #EEE',
		fontSize: 10,

	},
	bold: {
		fontFamily: 'Roboto-Bold',
	},
	light: {
		fontFamily: 'Roboto-Light',
	},
	row1: {
		width: '15%',
		borderLeft: '1.5px solid #EEE',
		padding: '3 3 10 5',
	},
	num: {
		width: '10%',
		borderLeft: 'none',
	},
	hsn: {
		width: '13%',
	},
	item: {
		width: '50%',
	},
	rightAlign: {
		textAlign: 'right',
	},
	quantity: {
		display: 'flex',
		flexDirection: 'column',
	},
});

const ChargesTable = (context) => <View style={ styles.table }>
	<View style={ [styles.row, styles.bold] }>
		<Text style={ [styles.row1, styles.num] }>Num</Text>
		<Text style={ [styles.row1, styles.item] }>Items</Text>
		<Text style={ [styles.row1, styles.hsn] }>HSN / SAC</Text>
		<Text style={ styles.row1 }>Qty</Text>
		<Text style={ [styles.row1, styles.hsn] }>Rate</Text>
		<Text style={ styles.row1 }>Amount</Text>
	</View>
	<Products { ...{ ...context, styles } }/>
</View>;

export default ChargesTable;
