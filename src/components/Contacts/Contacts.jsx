import React from 'react';
import classNames from 'classnames';

import { ReactComponent as Phone } from '../../assets/phone.svg';
import { ReactComponent as Mail } from '../../assets/mail.svg';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import SingleContact from './singleContact';
import './contacts.scss';
import { bool } from 'prop-types';

export const Contacts = ({isContactsHidden}) => {
 
  return (
    <div className={classNames('contacts', {'contacts--active' : isContactsHidden,})} >
      <SingleContact 
      Logo={Phone} 
      content='+37062342343' 
      link='tel:+37062342343' />
      <SingleContact 
      Logo={Mail} 
      content='example@example.com' 
      link='mailto:example@example.com' />
      <SingleContact 
      Logo={Facebook} 
      content='Facebook' 
      link='https:facebook.com' />
      <SingleContact 
      Logo={Instagram} 
      content='Instagram' 
      link='https:instagram.com' />
    </div>
  );
};

Contacts.propTypes = {
  isContactsHidden: bool.isRequired
}
