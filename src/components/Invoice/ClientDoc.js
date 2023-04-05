import { Text } from '@react-pdf/renderer';
import React from 'react';

const ClientDoc = (context) => {
	const { data: styles, config: { obj: { client }}} = context;

	return <Text style={ [styles.subtext, { paddingTop: 5 }] }>
		<Text style={ styles.bold }>{client.govtDoc.type}: </Text>
		<Text style={ styles.light }>{client.govtDoc.id}</Text>
	</Text>;
};

export default ClientDoc;
