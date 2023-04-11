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

const InvoiceManager = {
	getBillingDetails,
	getBankDetails,
};

export default InvoiceManager;
