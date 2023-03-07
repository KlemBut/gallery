import { func, string } from 'prop-types';
import React from 'react';

import './nav-button.scss'

export const NavButton = ({content, handleClick}) => {

    return(
        <button className='nav-button' onClick={handleClick}>{content}</button>
    )
}

NavButton.propTypes = {
    content: string.isRequired,
    handleClick: func,
}