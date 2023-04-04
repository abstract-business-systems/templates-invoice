import React from 'react';
import { Text, View } from '@react-pdf/renderer';
const subtext = {
	width: '80%',
	fontSize: 10,
	fontFamily: 'Roboto-Light',
	letterSpacing: '1px',
};
const Description = () =>
	<View style={ {
		flexDirection: 'column', alignItems: 'center', paddingTop: 5,
	} }
	>
		<Text style={ [subtext, { paddingLeft: 5 }] }>
			Payments should be made within 15 working days
			from the date of invoice.
		</Text>;
		<Text style={ [subtext, { paddingLeft: 70 }] }>
			Digitally prepared document.  Signature not needed.
		</Text>
	</View>;

export default Description;
