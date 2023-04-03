/* eslint-disable max-lines-per-function */
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import React from 'react';

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
	},
});

const Vendor = (context) => {
	const { config: { obj: { vendor }}} = context;

	return <View>
		<View style={ styles.view }>
			<Text style={ styles.subtext }>
				<Text style={ styles.bold }>Vendor:</Text>
			</Text>
			<Text style={ styles.subtext }>
				<Text style={ styles.bold }>Client Billing Address: </Text>
			</Text>
		</View>
		<View style={ styles.subView }>
			<Text style={ styles.text }>
				<Text>{vendor.name}</Text>
			</Text>
			{vendor.address.map((address, i) =>
				<Text key={ i } style={ styles.text }>
					<Text>{address}</Text>
				</Text>)}
		</View>
	</View>;
};

export default Vendor;
