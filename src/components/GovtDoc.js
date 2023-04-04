import { View, Text } from '@react-pdf/renderer';
import React from 'react';
const subtext = {
	fontSize: 10,
	padding: 10,
	marginLeft: 30,
	flex: 1,
};
const GovtDoc = (context) => {
	const { styles, config: { obj: { vendor, client }}} = context;

	return <View style={ styles.view }>
		<Text style={ subtext }>
			<Text style={ styles.bold }>{vendor.govtDoc.type}: </Text>
			<Text style={ styles.light }>{vendor.govtDoc.id}</Text>
		</Text>
		<Text style={ subtext }>
			<Text style={ styles.bold }>{client.govtDoc.type}: </Text>
			<Text style={ styles.light }>{client.govtDoc.id}</Text>
		</Text>
	</View>;
};

export default GovtDoc;
