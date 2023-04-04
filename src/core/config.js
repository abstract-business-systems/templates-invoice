const config = {
	obj: {
		invoiceNo: 'rk23033101',
		invoiceDate: '13-06-2001',
		vendor: {
			name: 'vendorName',
			address: ['Absasdsadswdsassdasdsadsdsdsadsadsdsdsadsa', '34', 'ch'],
			govtDoc: { id: 'FWe130230', type: 'PAN' },
		},
		bankDetails: {
			'Name': 'accountHolderName',
			'IFSC': 'ifsc',
			'Account No': 'accountNo',
			'Acc Type': 'accountType',
			'Branch Name': 'branchName',
		},
		client: {
			address: ['Abstract Business Systems Pvt. Ltd,',
				'#40, Subramaniyapuram New St,',
				'Devakottai, Tamilnadu - 630302.'],
			govtDoc: { id: 'panNo or gstNo', type: 'GSTIN' },
		},
		items: [
			{
				name: 'Consulting Charges',
				quantity: { count: 1, unit: 'hrs' },
				rate: 13,
				amount: 2001,
			},
			{
				name: 'Other charges',
				amount: 2002,
			},
		],
		subtotal: 'subtotal',
		taxes: 'taxes',
		grandTotal: 'grandTotal',
		amountInWords: 'amountInWords',
	},
};

export default config;
