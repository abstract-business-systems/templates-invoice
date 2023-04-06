import React from 'react';
import { map, values } from '@laufire/utils/collection';
import { View, Text } from '@react-pdf/renderer';

const BankDetails = (context) => {
	const { data: styles, config: { obj: { bankDetails }}} = context;

	return <View style={ styles.row }>
		<Text style={ [styles.borderTop, styles.bold] }>
			Bank Details: </Text>
		{values(map(bankDetails, (value, key) =>
			<View
				key={ key }
				style={ [styles.row1, { marginLeft: 5, paddingRight: 5 }] }
			>
				<Text style={ styles.bold }>{key}:</Text>
				<Text style={ styles.light }>{value}</Text>
			</View>))}
	</View>;
};

export default BankDetails;
