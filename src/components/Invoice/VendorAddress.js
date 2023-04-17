import { Text, View } from '@react-pdf/renderer';
import React from 'react';

const VendorAddress = (context) => {
	const { config: { obj: { vendor }}, styles } = context;

	return <View style={ styles.subView }>
		<Text style={ [styles.light, styles.text] }>{vendor.name}</Text>
		{ vendor.address.map((address, i) =>
			<Text
				key={ i }
				style={ [styles.light, styles.text] }
			>{address}</Text>)}
	</View>;
};

export default VendorAddress;
