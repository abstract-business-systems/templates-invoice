import { View, Text } from '@react-pdf/renderer';
import React from 'react';

// const styles = StyleSheet.create({

// 	subtext: {
// 		marginLeft: 20,
// 		fontSize: 12,
// 		flex: 1,
// 	},

// 	subView: {
// 		flexDirection: 'column',
// 	},
// 	text: {
// 		padding: 1,
// 		marginLeft: 20,
// 		fontSize: 14,
// 		width: 200,
// 	},
// 	sutext: {
// 		marginLeft: 100,
// 		fontSize: 14,
// 		padding: 1,
// 		width: 200,
// 	},
// });
const subtext = {
	fontSize: 10,
	padding: 10,
	marginLeft: 30,
	flex: 1,
};

const Vendor = (context) => {
	const { styles } = context;

	return <View style={ styles.view }>
		<Text style={ subtext }>
			<Text style={ styles.bold }>Vendor Address:</Text>
		</Text>
		<Text style={ subtext }>
			<Text style={ styles.bold }>Client Billing Address: </Text>
		</Text>
	</View>;
};

export default Vendor;
