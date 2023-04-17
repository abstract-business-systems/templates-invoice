import React from 'react';
import { Text } from '@react-pdf/renderer';

const HelperText = ({ styles, header, value }) =>
	<Text style={ styles.subtext }>
		<Text style={ styles.bold }>{header}:</Text>
		<Text style={ styles.light }>{ value}</Text>
	</Text>;

export default HelperText;
