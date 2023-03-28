import { React } from 'react';
import './App.scss';
import Invoice from './components/Invoice';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

const App = () => <div className="App">
	<PDFViewer width="90%" height="90%">
		<Invoice/>
	</PDFViewer>
	<PDFDownloadLink
		document={ <Invoice/> }
		fileName="Invoice.pdf"
		className="pdfDownloadLink"
	>
		{({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
	</PDFDownloadLink>
</div>;

export default App;
