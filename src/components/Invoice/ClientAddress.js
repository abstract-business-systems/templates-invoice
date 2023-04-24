import React from 'react';
import { View, Text } from '@react-pdf/renderer';

const ClientAddress = (context) => {
	const { config: { obj: { client: { address }}}, styles } = context;

	return <View style={ styles.subView }>
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

export default ClientAddress;
