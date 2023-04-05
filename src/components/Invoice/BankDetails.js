import React from 'react';
import { map } from '@laufire/utils/collection';
import { values } from '@laufire/utils/lib';
import { View, Text } from '@react-pdf/renderer';

const BankDetails = (context) => {
	const { data: styles, config: { obj: { bankDetails }}} = context;

	return <View style={ styles.row }>
		<Text style={ styles.bold }>Bank Details: </Text>
		{values(map(bankDetails, (value, key) =>
			<View key={ key } style={ styles.row1 }>
				<Text style={ styles.bold }>{key}:</Text>
				<Text style={ styles.light }>
					{value}</Text>
			</View>))}
	</View>;
};

export default BankDetails;
