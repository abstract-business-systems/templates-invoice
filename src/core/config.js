/* eslint-disable max-len */
const config = {
	obj: {
		bankDetails: {
			'Acc Type': 'Savings',
			'Account No': 55955579016957,
			'Branch Name': 'Jobber',
			'IFSC': 'ICIC0000009',
			'Name': 'Ratty',
		},
		client: {
			address: [
				'Abstract Business Systems Pvt. Ltd,',
				'#40, Subramaniyapuram New St,',
				'Devakottai, Tamilnadu - 630302.',
			],
			govtDoc: { id: '33AAXCA0332P1ZC', type: 'GSTIN' },
		},
		grandTotal: '4432.50',
		invoiceDate: '28-08-2022',
		invoiceNo: 'rty22082801',
		items: [
			{
				amount: 2400,
				item: 'Consulting charges',
				quantity: { count: 120, unit: 'hrs' },
				rate: 20,
			},
			{ amount: 2525, item: 'Other charges' },
		],
		subTotal: '4925.00',
		taxes: '492.50',
		vendor: {
			address: [
				'303-A, 2nd Broch Street,',
				'Jobber, Heading Town,',
				'Mean - 340 322.',
			],
			govtDoc: { id: 'RPK494EO5D', type: 'PAN' },
			name: 'Ratty',
		},
		amountInWords:
			'Four Thousand Four Hundred Thirty Two Rupees And Fifty Paise Only',
	},
};

export default config;
