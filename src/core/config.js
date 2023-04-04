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
			address: ['Absasdsadswdsassdasdsadsdsdsadsadsdsdsadsa', '34', 'ch'],
			govtDoc: { id: 'panNo or gstNo', type: 'GSTIN' },
		},
		items: [
			{
				name: 'Consulting Charges',
				quantity: { count: 1, unit: 'hrs' },
				hsnOrSAC: '-',
				rate: 13,
				amount: 2001,
			},
			{
				name: 'Other charges',
				quantity: { count: 134, unit: 'hrs' },
				hsnOrSAC: '-',
				rate: 3,
				amount: 2002,
			},
		],
		subtotal: 'subtotal',
		taxes: 'taxes',
		grandTotal: 'grandTotal',
		advancePaid: 'advancePaid',
		balanceAmount: 'balanceAmount',
		amountInWords: 'amountInWords',
	},
};

export default config;
