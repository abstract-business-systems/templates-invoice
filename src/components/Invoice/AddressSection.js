import React from 'react';
import { View, Text } from '@react-pdf/renderer';

const AddressSection = (context) => {
	const { data: styles, config: { addressHeader }} = context;

	return (
		<View style={ styles.view }>
			{addressHeader.map((address, i) =>
				<Text key={ i } style={ styles.subtext }>
					<Text style={ styles.bold }>{address}</Text>
				</Text>)}
		</View>
	);
};

export default AddressSection;
