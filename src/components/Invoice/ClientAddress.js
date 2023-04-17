import React from 'react';
import { View, Text } from '@react-pdf/renderer';

const ClientAddress = (context) => {
	const { config: { obj: { client }}, styles } = context;

	return <View style={ styles.subView }>
		{client.address.map((address, i) =>
			<Text
				key={ i }
				style={ [styles.light, styles.text] }
			>{address}</Text>)}
	</View>;
};

export default ClientAddress;
