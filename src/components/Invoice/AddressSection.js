import React from 'react';
import { View, Text } from '@react-pdf/renderer';

const AddressSection = (context) => {
	const { data: styles, config: { addressHeaders }} = context;

	return (
		<View style={ styles.view }>
			{addressHeaders.map((addressHeader, i) =>
				<Text key={ i } style={ [styles.bold, styles.subtext] }>
					{addressHeader}:</Text>)}
		</View>
	);
};

export default AddressSection;
