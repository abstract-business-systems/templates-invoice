const getBillingDetails = (context) => {
	const { config: { digits,
		obj: { subTotal, taxes, grandTotal }}} = context;

	return {
		'Sub Total': subTotal.toFixed(digits),
		'Taxes': taxes?.toFixed(digits) || '-',
		'Grand Total': grandTotal.toFixed(digits),
	};
};

const InvoiceManager = {
	getBillingDetails,
};

export default InvoiceManager;
