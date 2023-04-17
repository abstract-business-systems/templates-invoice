import React from 'react';
import Doc from './Doc';

const ClientDoc = (context) => <Doc { ...{ ...context, data: 'client' } }/>;

export default ClientDoc;
