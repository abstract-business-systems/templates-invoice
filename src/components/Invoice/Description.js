import React from 'react';
import { Text, View } from '@react-pdf/renderer';

const subtext = {
	fontSize: 10,
	fontFamily: 'Roboto-Light',
	paddingLeft: 5,
};

const Description = ({ styles }) =>
	<View style={ [styles.view, { textAlign: 'center' }] }>
		<Text style={ subtext }>
			Payments should be made within 15 working days
			from the date of invoice.
			Digitally prepared document.Signature not needed.
		</Text>;
	</View>;

export default Description;
