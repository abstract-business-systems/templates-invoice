import { View, Text } from '@react-pdf/renderer';
import React from 'react';

const subtext = {
	marginLeft: 88,
	paddingLeft: 30,
	fontSize: 10,
	width: 180,
	flexWrap: 'wrap',
};

const ClientAddress = (context) => {
	const { config: { obj: { client }}, data: styles } = context;

	return <View style={ styles.subView }>
		{client.address.map((address, i) =>
			<Text key={ i } style={ subtext }>
				<Text style={ styles.light }>{address}</Text>
			</Text>)}
	</View>;
};

export default ClientAddress;
