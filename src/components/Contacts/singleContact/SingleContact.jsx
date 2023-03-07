import { any, string } from 'prop-types';
import React from 'react';

import './single-contact.scss'

export const SingleContact = ({Logo, content, link}) => {

    return(
        <div className='single-contact'>
            <a className='single-contact__text' target='_blank' rel='noreferrer' href={link}>{content}</a>
            <Logo/>
        </div>
    )
}

SingleContact.propTypes = {
    Logo: any,
    content: string.isRequired,
    link: string,
}