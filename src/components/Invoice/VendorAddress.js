import { Text, View } from '@react-pdf/renderer';
import React from 'react';

const VendorAddress = (context) => {
	const { config: { obj: { vendor: { address, name }}}, styles } = context;

	return <View style={ styles.subView }>
		<Text style={ [styles.light, styles.text] }>{name}</Text>
		{ address.lines.map((line, i) =>
			<Text
				key={ i }
				style={ [styles.light, styles.text] }
			>{line}</Text>)}
		<Text style={ [styles.light, styles.text] }>{address.state}</Text>
		<Text style={ [styles.light, styles.text] }>{address.country}</Text>
		<Text style={ [styles.light, styles.text] }>{address.zipCode}</Text>

	</View>;
};

export default VendorAddress;
