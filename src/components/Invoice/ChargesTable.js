import React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import Products from './Products';
import Taxes from './Taxes';
import ChargesHeader from './ChargesHeader';

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

const ChargesTable = (context) => {
	const extendedContext = { ...{ ...context, styles }};

	return <View style={ styles.table }>
		<ChargesHeader { ...extendedContext }/>
		<Products { ...extendedContext }/>
		<Taxes { ...extendedContext }/>
	</View>;
};

export default ChargesTable;
