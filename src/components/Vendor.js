import { View, Text } from '@react-pdf/renderer';
import React from 'react';

const subtext = {
	fontSize: 10,
	marginLeft: 30,
	flex: 1,
};

const Vendor = (context) => {
	const { styles } = context;

	return <View style={ styles.view }>
		<Text style={ subtext }>
			<Text style={ styles.bold }>Vendor Address:</Text>
		</Text>
		<Text style={ subtext }>
			<Text style={ styles.bold }>Client Billing Address: </Text>
		</Text>
	</View>;
};

export default Vendor;
