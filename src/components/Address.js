import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import VendorAddress from './VendorAddress';

const subtext = {
	marginLeft: 99,
	paddingLeft: 30,
	fontSize: 10,
	width: 180,
	flexWrap: 'wrap',
};

const Address = (context) => {
	const { config: { obj: { client }}, data: styles } = context;

	return <View style={ styles.view }>
		<VendorAddress { ...context }/>
		<View style={ styles.subView }>
			{client.address.map((address, i) =>
				<Text key={ i } style={ subtext }>
					<Text style={ styles.light }>{address}</Text>
				</Text>)}
		</View>
	</View>;
};

export default Address;
