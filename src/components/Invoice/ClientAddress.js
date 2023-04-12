import React from 'react';
import { View, Text } from '@react-pdf/renderer';

const ClientAddress = (context) => {
	const { config: { obj: { client }}, data: styles } = context;

	return <View style={ styles.subView }>
		{client.address.map((address, i) =>
			<Text
				key={ i }
				style={ styles.text }
			>
				<Text style={ styles.light }>{address}</Text>
			</Text>)}
	</View>;
};

export default ClientAddress;
