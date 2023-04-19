/* eslint-disable max-len */
const config = {
	obj: {
		invoiceDate: new Date('2022-09-28T18:29:50.000Z'),
		id: 'fdg22092801',
		subTotal: 4727.5,
		grandTotal: 4254.75,
		currency: 'INR',
		amountInWords:
			'INR Four Thousand Two Hundred Fifty Four point Seven Five.',
		vendor: {
			address: [
				'17-261, Mean Street,Jobber, Heading Town,',
				'Broch - 340 321.',
			],
			govtDoc: { id: 'R7909FFJPA', type: 'PAN' },
			name: 'Fluf Dug',
		},
		client: {
			address: [
				'Abstract Business Systems Pvt. Ltd,',
				'#40, Subramaniyapuram New St,',
				'Devakottai, Tamilnadu - 630302.',
			],
			govtDoc: { id: '33AAXCA0332P1ZC', type: 'GSTIN' },
		},
		bankDetails: {
			accountHolderName: 'Fluf Dug',
			accountNo: 20261000031380,
			accountType: 'Savings',
			branchName: 'Mean St',
			ifsc: 'IDBA0000138',
		},
		items: [
			{
				item: 'Consulting charges',
				type: 'product',
				unit: 'hrs',
				quantity: 94.55,
				rate: 50,
				amount: 4727.5,
			},
		],
	},
	hsnOrSAC: '-',
	digits: 2,
	pageSize: 'A4',
	addressHeaders: ['Vendor Address', 'Client Billing Address'],
};

export default config;
