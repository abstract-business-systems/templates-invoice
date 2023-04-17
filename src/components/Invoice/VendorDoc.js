import React from 'react';
import Doc from './Doc';

const VendorDoc = (context) => <Doc { ...{ ...context, data: 'vendor' } }/>;

export default VendorDoc;
