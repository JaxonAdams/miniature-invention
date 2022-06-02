import React from 'react';

const Header = () => {
    return (
        <header>
            <div className='title-container'>
                <a href='/'><h2 className='header-title'>Home</h2></a>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href='#rsvp'>RSVP</a>
                    </li>
                    <li>
                        <a href='#countdown'>Countdown</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;