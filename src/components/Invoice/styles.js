/* eslint-disable max-len */
import { StyleSheet, Font } from '@react-pdf/renderer';

Font.register({ family: 'Roboto-Light', src: 'https://cdn.jsdelivr.net/npm/roboto-mono-webfont@2.0.986/fonts/RobotoMono-Light.ttf' });
Font.register({ family: 'Roboto-Bold', src: 'https://cdn.jsdelivr.net/npm/roboto-mono-webfont@2.0.986/fonts/RobotoMono-Bold.ttf' });

const styles = StyleSheet.create({

	page: {
		margin: 20,
		paddingTop: 90,
		paddingBottom: 90,
		paddingHorizontal: 30,
	},
	view: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '85%',
		marginLeft: 25,
	},
	text: {
		fontSize: 10,
		width: '80%',
	},
	bold: {
		fontFamily: 'Roboto-Bold',
		textAlign: 'justify',
	},
	light: {
		fontFamily: 'Roboto-Light',
		textAlign: 'justify',
	},
	subtext: {
		fontSize: 10,
		flex: 1,
	},
	subView: {
		flexDirection: 'column',
		width: '80%',
		height: 80,
	},
});

export default styles;
