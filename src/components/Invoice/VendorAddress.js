import { Text, View } from '@react-pdf/renderer';
import React from 'react';

const VendorAddress = (context) => {
	const { config: { obj: { vendor }}, data: styles } = context;

	return <View style={ [styles.subView, { height: '100px' }] }>
		<Text style={ styles.text }>
			<Text style={ styles.light }>{vendor.name}</Text>
		</Text>
		{ vendor.address.map((address, i) =>
			<Text key={ i } style={ styles.text }>
				<Text style={ styles.light }>{address}</Text>
			</Text>)}
	</View>;
};

export default VendorAddress;
