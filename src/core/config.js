/* eslint-disable max-len */
const config = {
	obj: {
		bankDetails: {
			'Acc Type': 'Savings',
			'Account No': 20261000031380,
			'Branch Name': 'Mean St',
			'IFSC': 'IDBA0000138',
			'Name': 'Fluf Dug',
		},
		client: {
			address: [
				'Abstract Business Systems Pvt. Ltd,',
				'#40, Subramaniyapuram New St,',
				'Devakottai, Tamilnadu - 630302.',
			],
			govtDoc: { id: '33AAXCA0332P1ZC', type: 'GSTIN' },
		},
		grandTotal: '2552.85',
		invoiceDate: '18-09-2002',
		invoiceNo: 'fdg02091801',
		items: [
			{
				amount: 2836.5,
				item: 'Consulting charges',
				quantity: { count: 94.55, unit: 'hrs' },
				rate: 30,
			},
		],
		subTotal: '2836.50',
		taxes: '283.65',
		vendor: {
			address: [
				'17-261, Mean Street,',
				'Jobber, Heading Town,',
				'Broch - 340 321.',
			],
			govtDoc: { id: 'R7909FFJPA', type: 'PAN' },
			name: 'Fluf Dug',
		},
		amountInWords:
			'Two Thousand Five Hundred Fifty Two Rupees And Eighty Five Paise Only',
	},
};

export default config;
