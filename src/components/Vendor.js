import React from 'react';
import { View, Text } from '@react-pdf/renderer';

const Vendor = (context) => {
	const { data: styles } = context;

	return <View style={ styles.view }>
		<Text style={ styles.subtext }>
			<Text style={ styles.bold }>Vendor Address:</Text>
		</Text>
		<Text style={ styles.subtext }>
			<Text style={ styles.bold }>Client Billing Address: </Text>
		</Text>
	</View>;
};

export default Vendor;
