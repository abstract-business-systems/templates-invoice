import React from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';
import Item from './Item';

const styles = StyleSheet.create({
	table: {
		width: '80%',
		margin: 20,
		marginLeft: 40,
		border: '1px solid black',
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		borderTop: '1px solid #EEE',
		paddingTop: 8,
		padding: 10,
		paddingBottom: 8,
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
		textAlign: 'center',
	},
	row2: {
		width: '25%',
		textAlign: 'center',
	},
});

const Table = (context) => <View style={ styles.table }>
	<View style={ [styles.row, styles.bold] }>
		<Text style={ { width: '10%' } }>Num</Text>
		<Text style={ styles.row2 }>Items</Text>
		<Text style={ styles.row2 }>HSN/SAC</Text>
		<Text style={ styles.row1 }>Qty</Text>
		<Text style={ styles.row1 }>Rate</Text>
		<Text style={ styles.row1 }>Amount</Text>
	</View>
	<Item { ...{ ...context, styles } }/>
</View>;

export default Table;
