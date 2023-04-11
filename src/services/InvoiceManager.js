import dayjs from 'dayjs';

const getBillingDetails = (context) => {
	const { config: { digits,
		obj: { subTotal, taxes, grandTotal }}} = context;

	return {
		'Sub Total': subTotal.toFixed(digits),
		'Taxes': taxes?.toFixed(digits) || '-',
		'Grand Total': grandTotal.toFixed(digits),
	};
};

const getBankDetails = (context) => {
	const { config: { obj: { bankDetails }}} = context;

	return {
		'Name:': bankDetails.accountHolderName,
		'IFSC:': bankDetails.ifsc,
		'Account No:': bankDetails.accountNo,
		'Acc Type:': bankDetails.accountType,
		'Branch Name:': bankDetails.branchName,
	};
};

const getFilteredItems = (context) => {
	const { config: { obj: { items }}, data } = context;

	return items.filter((item) => item.type === data);
};

const isProduct = ({ data: { item: { type }}}) => type === 'product';

const getInvoiceDate = ({ config: { obj: { invoiceDate }}}) =>
	dayjs(invoiceDate).format('DD-MM-YYYY');

const InvoiceManager = {
	getBillingDetails,
	getBankDetails,
	getFilteredItems,
	isProduct,
	getInvoiceDate,
};

export default InvoiceManager;
