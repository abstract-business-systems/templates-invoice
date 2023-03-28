import { React } from 'react';
import './App.scss';
import MyDocument from './components/MyDocument';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

const App = () =>
	<div className="App">
		<PDFViewer><MyDocument/></PDFViewer>
		<PDFDownloadLink document={ <MyDocument/> } fileName="somename.pdf">
			{({ loading }) =>
				(loading ? 'Loading document...' : 'Download now!')}
		</PDFDownloadLink>
	</div>;

export default App;
