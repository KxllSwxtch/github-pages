import React from 'react';

import assignedClass from './Header.css';
import LogoImage from '../../Assets/Images/logo.png';

export default () => (
  <header className={assignedClass.Header}>
    <img 
      className={assignedClass.Header__Logo}
      src={LogoImage}
      alt="Logo"
      height="200"
    />
    <h1 className={assignedClass.Header__Title}>Github Pages</h1>
  </header>
);
