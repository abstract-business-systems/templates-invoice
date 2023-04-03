import { React } from 'react';
import './App.scss';
import { PDFViewer, StyleSheet } from '@react-pdf/renderer';
import Invoice from './components/Invoice';

const styles = StyleSheet.create({
	frame: {
		width: '100vw',
		height: '100vh',
	},
});

const App = (context) => <div className="App">
	<PDFViewer style={ styles.frame }>
		<Invoice { ...context }/>
	</PDFViewer>
</div>;

export default App;
