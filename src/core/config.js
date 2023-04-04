/* eslint-disable max-len */
const config = {
	obj: {
		invoiceNo: 'rk23033101',
		invoiceDate: '13-06-2001',
		vendor: {
			name: 'vendorName',
			address: ['Abstract Business Systems Pvt. Ltd,',
				'34skdskjndoisjdiosdklnslmdoiksjdoianjskldms;lkdiahjsoidjsakj',
				'Eiusmod amet ipsum cupidatat ea. Nisi officia aliqua sit ut sint ea occaecat mollit incididunt laboris ipsum. Incididunt quis cupidatat nisi culpa pariatur tempor. Culpa sit commodo et sunt elit qui. Sint quis proident fugiat labore aliqua sint exercitation ad id. Esse officia laborum adipisicing pariatur esse et commodo nostrud quis nulla. Ut qui reprehenderit aute irure ad laboris ullamco.',
				'ch'],
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
				'Devakottai, Tamilnadu - 630302.',
				'drojfodmmfdkfpdfndfklfdl;',
				'ddfjdkjfpdjfpodjksfpjdfkjd'],
			govtDoc: { id: '33AAXCA0332P1ZC', type: 'GSTIN' },
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
		amountInWords: 'ten thousand two hundred thirty-four only',
	},
};

export default config;
