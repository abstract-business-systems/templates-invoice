import { View, Text } from '@react-pdf/renderer';
import React from 'react';

const subtext = {
	position: 'relative',
	left: 10,
	paddingLeft: 5,
	fontSize: 10,
	width: '220px',
	flexWrap: 'wrap',
};

const ClientAddress = (context) => {
	const { config: { obj: { client }}, data: styles } = context;

	return <View style={ [styles.subView, { height: '100px' }] }>
		{client.address.map((address, i) =>
			<Text key={ i } style={ subtext }>
				<Text style={ styles.light }>{address}</Text>
			</Text>)}
	</View>;
};

export default ClientAddress;
