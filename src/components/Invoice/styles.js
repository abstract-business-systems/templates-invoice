import { StyleSheet, Font } from '@react-pdf/renderer';
import RobotoBold from '../../fonts/RobotoMono-Bold.ttf';
import RobotoLight from '../../fonts/RobotoMono-Light.ttf';

Font.register({ family: 'Roboto-Bold', src: RobotoBold });
Font.register({ family: 'Roboto-Light', src: RobotoLight });

const styles = StyleSheet.create({
	frame: {
		width: '90vw',
		height: '90vh',
	},
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
