import React from 'react';
import { View, Text } from '@react-pdf/renderer';

const subtext = {
	marginLeft: 99,
	paddingLeft: 30,
	fontSize: 10,
	width: 180,
	flexWrap: 'wrap',
};

const Address = (context) => {
	const { config: { obj: { vendor, client }}, data: styles } = context;

	return <View style={ styles.view }>
		<View style={ styles.subView }>
			<Text style={ styles.text }>
				<Text style={ styles.light }>{vendor.name}</Text>
			</Text>
			{vendor.address.map((address, i) =>
				<Text key={ i } wrap={ true } style={ styles.text }>
					<Text style={ styles.light }>{address}</Text>
				</Text>)}
		</View>
		<View style={ styles.subView }>
			{client.address.map((address, i) =>
				<Text key={ i } style={ subtext }>
					<Text style={ styles.light }>{address}</Text>
				</Text>)}
		</View>
	</View>;
};

export default Address;
