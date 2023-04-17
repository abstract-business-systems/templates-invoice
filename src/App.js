import { React } from 'react';
import './App.scss';
import { PDFViewer } from '@react-pdf/renderer';
import Invoice from './components/Invoice/';
import styles from './components/Invoice/styles';

const App = (context) => <div className="App">
	<PDFViewer style={ styles.frame }>
		<Invoice { ...{ ...context, styles } }/>
	</PDFViewer>
</div>;

export default App;
