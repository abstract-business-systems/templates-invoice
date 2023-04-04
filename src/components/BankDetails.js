import React from 'react';
import { map } from '@laufire/utils/collection';
import { values } from '@laufire/utils/lib';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import BillingDetails from './BillingDetails';

const styles = StyleSheet.create({
	table: {
		width: '80%',
		margin: 10,
		marginLeft: 40,
		border: '0.6px solid black',
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
const BankDetails = (context) => {
	const { config: { obj: { bankDetails }}} = context;

	return <View style={ styles.table }>
		<View style={ styles.row }>
			<Text style={ styles.bold }>Bank Details: </Text>
			{values(map(bankDetails, (value, key) =>
				<View key={ key } style={ styles.row1 }>
					<Text style={ styles.bold }>{key}:</Text>
					<Text style={ styles.light }>
						{value}</Text>
				</View>))}
		</View>
		<BillingDetails { ...{ ...context, styles } }/>
	</View>;
};

export default BankDetails;
