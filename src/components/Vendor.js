/* eslint-disable max-lines-per-function */
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import Address from './Address';
import GovtDoc from './GovtDoc';

const styles = StyleSheet.create({
	view: {
		flexDirection: 'row',
	},
	subtext: {
		marginLeft: 20,
		fontSize: 14,
		flex: 1,
	},
	bold: {
		fontFamily: 'Helvetica-Bold',
		textAlign: 'justify',
	},
	subView: {
		flexDirection: 'column',
	},
	text: {
		padding: 1,
		marginLeft: 20,
		fontSize: 14,
		width: 200,
	},
	sutext: {
		marginLeft: 100,
		fontSize: 14,
		padding: 1,
		width: 200,
	},
});

const Vendor = (context) => {
	const { config: { obj: { vendor, client }}} = context;

	return <View>
		<View style={ styles.subView }>
			<View style={ styles.view }>
				<Text style={ styles.subtext }>
					<Text style={ styles.bold }>Vendor Address:</Text>
				</Text>
				<Text style={ styles.subtext }>
					<Text style={ styles.bold }>Client Billing Address: </Text>
				</Text>
			</View>
			<Address { ...{ ...context, styles } }/>
			<GovtDoc { ...{ ...context, styles } }/>
		</View>
	</View>;
};

export default Vendor;
