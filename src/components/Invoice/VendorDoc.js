import { Text } from '@react-pdf/renderer';
import React from 'react';

const VendorDoc = (context) => {
	const { data: styles, config: { obj: { vendor }}} = context;

	return <Text style={ [styles.subtext, { paddingTop: 5 }] }>
		<Text style={ styles.bold }>{vendor.govtDoc.type}: </Text>
		<Text style={ styles.light }>{vendor.govtDoc.id}</Text>
	</Text>;
};

export default VendorDoc;
