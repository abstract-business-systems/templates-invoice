import dayjs from 'dayjs';

const getNormalizedTotals = (context) => {
	const { config: { digits,
		obj: { subTotal, taxes, grandTotal }}} = context;

	return {
		subTotal: subTotal.toFixed(digits),
		taxes: taxes?.toFixed(digits) || '-',
		grandTotal: grandTotal.toFixed(digits),
	};
};

const getBillingDetails = (context) => {
	const { subTotal, taxes, grandTotal }
	= getNormalizedTotals(context);

	return [
		{ header: 'Sub Total', value: subTotal },
		{ header: 'Taxes', value: taxes },
		{ header: 'Grand Total', value: grandTotal },
	];
};

const getBankDetails = (context) => {
	const { config: { obj: { bankDetails }}} = context;

	return [
		{ title: 'Name', value: bankDetails.accountHolderName },
		{ title: 'IFSC', value: bankDetails.ifsc },
		{ title: 'Account No', value: bankDetails.accountNo },
		{ title: 'Acc Type', value: bankDetails.accountType },
		{ title: 'Branch Name', value: bankDetails.branchName },
	];
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
