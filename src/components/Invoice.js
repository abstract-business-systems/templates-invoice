/* eslint-disable max-len */
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	page: {
		flexDirection: 'column',
		backgroundColor: '#E4E4E4',
	},
	section: {
		margin: 10,
		padding: 10,
	},
	text: {
		margin: 12,
		fontSize: 14,
		textAlign: 'justify',
		fontFamily: 'Times-Roman',
	},
	subtitle: {
		fontSize: 18,
		margin: 12,
		// fontFamily: 'Oswald',
	},

});

const Invoice = () =>
	<Document>
		<Page size="A4" style={ styles.page }>
			<View style={ styles.section }>
				<Text style={ styles.subtitle }>Section1</Text>
			</View>
			<View style={ styles.section }>
				<Text style={ styles.subtitle }>Section #2</Text>
				<Text style={ styles.text }>Aliquip sit fugiat id occaecat pariatur labore ipsum eiusmod cillum id ut. Cupidatat veniam occaecat ad Lorem aliquip dolor dolor ullamco consequat proident. Est culpa eu aliquip ipsum sunt voluptate aliquip sit magna anim ut tempor incididunt ullamco.
				</Text>
				<Text style={ styles.text }>Non deserunt laboris pariatur in dolor adipisicing nisi do et excepteur ullamco nulla. Ex est mollit magna ex ad excepteur sint non reprehenderit adipisicing. Nostrud aliqua irure exercitation occaecat aliqua pariatur in occaecat dolore et do. Lorem proident sint duis esse proident officia consectetur aliqua adipisicing. Exercitation id est eiusmod amet sit sit. Aliqua voluptate consectetur magna culpa tempor.

					Dolor commodo deserunt in excepteur esse Lorem reprehenderit sunt ad minim incididunt. Commodo voluptate et aliquip adipisicing duis magna consectetur. Sit labore adipisicing est in sunt laborum commodo est cupidatat. Consectetur officia sit voluptate et tempor ullamco Lorem exercitation. Tempor nisi pariatur proident anim esse consectetur ipsum proident nulla nulla aliqua adipisicing aliquip. Consectetur magna cillum consequat pariatur velit consequat irure ad aute officia.
				</Text>
			</View>
		</Page>
	</Document>;

export default Invoice;
