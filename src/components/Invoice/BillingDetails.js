import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import InvoiceManager from '../../services/InvoiceManager';

const BillingDetails = (context) => {
	const { styles, config: { obj }} = context;
	const billingDetails = InvoiceManager.getBillingDetails(context);

	return <View style={ [styles.row, { borderLeft: '1.5px solid #EEE' }] }>
		{billingDetails.map((billingDetail, key) =>
			<View
				key={ key }
				style={ [styles.subRow, styles.borderTop] }
			>
				<Text style={ styles.bold }>{billingDetail.header}:</Text>
				<Text style={ styles.light }>{billingDetail.value}</Text>
			</View>)}
		<Text style={ [styles.bold, styles.borderTop] }>Amount in words:
			<Text style={ styles.light }>{ obj.amountInWords}</Text>
		</Text>
	</View>;
};

export default BillingDetails;
