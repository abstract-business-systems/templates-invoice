import React from 'react';
import { View, Text } from '@react-pdf/renderer';

const GovtDoc = (context) => {
	const { data: styles, config: { obj: { vendor, client }}} = context;

	return <View style={ styles.view }>
		<Text style={ [styles.subtext, { paddingTop: 5 }] }>
			<Text style={ styles.bold }>{vendor.govtDoc.type}: </Text>
			<Text style={ styles.light }>{vendor.govtDoc.id}</Text>
		</Text>
		<Text style={ [styles.subtext, { paddingTop: 5 }] }>
			<Text style={ styles.bold }>{client.govtDoc.type}: </Text>
			<Text style={ styles.light }>{client.govtDoc.id}</Text>
		</Text>
	</View>;
};

export default GovtDoc;
