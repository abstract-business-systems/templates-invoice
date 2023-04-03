import React from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';
import Item from './Item';

const styles = StyleSheet.create({
	table: {
		width: '100%',
		margin: 20,
		border: '1px solid black',
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		borderTop: '1px solid #EEE',
		paddingTop: 8,
		paddingBottom: 8,
	},
	header: {
		borderTop: 'none',
	},
	bold: {
		fontFamily: 'Helvetica-Bold',
	},
	row1: {
		width: '15%',
		textAlign: 'center',
	},

	text: {
		textAlign: 'center',
	},
});

const Table = (context) => {
	const { config: { items }} = context;

	return <View style={ styles.table }>
		<View style={ [styles.row, styles.bold] }>
			<Text style={ styles.row1 }>Num</Text>
			<Text style={ styles.row1 }>Items</Text>
			<Text style={ styles.row1 }>HSN/SAC</Text>
			<Text style={ styles.row1 }>Quantity</Text>
			<Text style={ styles.row1 }>rate</Text>
			<Text style={ styles.row1 }>amount</Text>
		</View>
		<Item { ...{ items, styles } }/>
	</View>;
};

export default Table;
