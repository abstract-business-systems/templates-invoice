const config = {
	obj: {
		invoiceNo: 'rk23033101',
		invoiceDate: '13-06-2001',
		vendor: {
			name: 'vendorName',
			address: ['Abs', '34', 'ch'],
			govtDoc: { id: 'panNo or gstNo', type: 'gstIn or pan' },
		},
		bankDetails: {
			accountHolderName: 'accountHolderName',
			accountNo: 'accountNo',
			ifsc: 'ifsc',
			accountType: 'accountType',
			branchName: 'branchName',
		},
		client: {
			address: ['Abs', '34', 'ch'],
			govtDoc: { id: 'panNo or gstNo', type: 'gstIn or pan' },
		},
		items: [
			{
				name: 'Consulting Charge',
				quantity: { count: 1, unit: 12 },
				hsnOrSAC: '-',
				rate: 13,
				amount: 2001,
			},
			{
				name: 'other charge',
				quantity: { count: 1234, unit: 12 },
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
