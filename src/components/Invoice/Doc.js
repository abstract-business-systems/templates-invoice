import React from 'react';
import { Text } from '@react-pdf/renderer';

const Doc = (context) => {
	const { styles, config: { obj }, data } = context;
	const doc = obj[data];

	return (
		<Text style={ [styles.subtext, { paddingTop: 5 }] }>
			<Text style={ styles.bold }>{doc.govtDoc.type}: </Text>
			<Text style={ styles.light }>{doc.govtDoc.id}</Text>
		</Text>);
};

export default Doc;
