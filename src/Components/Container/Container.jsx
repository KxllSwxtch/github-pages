import React from 'react';

import assignedClass from './Container.css';

export default ({children}) => (
  <div className={assignedClass.Container}>
    {children}
  </div>
);
