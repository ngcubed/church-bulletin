import React from 'react';
import './nav.scss';

const Nav = (props) => {

    const names = [ "Dashboard", "Create Bulletin", "Generate QR Code" ];

    const generateButtons = () => {
        return names.map((name, index) => {
            let cn = 'nav-button';
            if(props.navSelected === index) {
                cn = cn+' nav-selected'
            }
            return (
                <button key={index} className={cn} onClick={() => props.handleNav(index)}>{name}</button>
            )
        })
    }

    return (
        <div className='nav-container'>
            {generateButtons()}
        </div>
    )
}

export default Nav;