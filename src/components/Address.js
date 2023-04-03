import { View, Text } from '@react-pdf/renderer';
import React from 'react';

const Address = (context) => {
	const { config: { obj: { vendor, client }}, styles } = context;

	return <View style={ styles.view }>
		<View style={ styles.subView }>
			<Text style={ styles.text }>
				<Text>{vendor.name}</Text>
			</Text>
			{vendor.address.map((address, i) =>
				<Text key={ i } style={ styles.text }>
					<Text>{address}</Text>
				</Text>)}
		</View>
		<View style={ styles.subView }>
			{client.address.map((address, i) =>
				<Text key={ i } wrap={ true } style={ styles.sutext }>
					<Text>{address}</Text>
				</Text>)}

		</View>
	</View>;
};

export default Address;
