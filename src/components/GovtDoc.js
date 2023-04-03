import { View, Text } from '@react-pdf/renderer';
import React from 'react';

const GovtDoc = (context) => {
	const { styles, config: { obj: { vendor, client }}} = context;

	return <View style={ styles.view }>
		<Text style={ styles.text }>
			<Text style={ styles.bold }>{vendor.govtDoc.type}: </Text>
			<Text>{vendor.govtDoc.id}</Text>
		</Text>
		<Text style={ styles.subtext }>
			<Text style={ styles.bold }>{client.govtDoc.type}: </Text>
			<Text>{client.govtDoc.id}</Text>
		</Text>
	</View>;
};

export default GovtDoc;
