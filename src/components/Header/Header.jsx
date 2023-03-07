import React, { useState } from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import NavButton from './NavButton';
import Contacts from '../Contacts';
import './header.scss';

export const Header = () => {
  const [isContactsHidden, setIsContactsHidden] = useState(false);

  const toggleContacts = () => isContactsHidden ? setIsContactsHidden(false) : setIsContactsHidden(true);

  return (
    <div>
      <header className="header">
        <Logo />
        <div className="header__nav-button-wrapper">
          <NavButton content="Kontaktai" handleClick={toggleContacts} />
        </div>
      </header>
      <Contacts isContactsHidden={isContactsHidden} />
    </div>
  );
};
