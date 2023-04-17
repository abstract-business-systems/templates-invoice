import { Text } from '@react-pdf/renderer';
import React from 'react';

const GenDoc = (action) => {
	const res = (context) => {
		const { styles, config: { obj }} = context;
		const doc = obj[action];

		return (
			<Text style={ [styles.subtext, { paddingTop: 5 }] }>
				<Text style={ styles.bold }>{doc.govtDoc.type}: </Text>
				<Text style={ styles.light }>{doc.govtDoc.id}</Text>
			</Text>);
	};

	return res;
};

export default GenDoc;
