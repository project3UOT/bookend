import React, { useState } from 'react';

const ProfileNav = () => {
    const [showRead, setShowRead] = useState(false);

    return (
        <nav className='has-background-secondary px-4 pt-4 is-family-secondary' role='navigation' aria-label='profile navigation'>
                <div className='tabs is-boxed'>
                    <ul>
                    <li className={showRead ? '' : 'is-active'}>
                        <a 
                        className='has-text-primary'
                        onClick={() => setShowRead(false)}>
                            Reading List
                        </a>
                        </li>
                    <li className={showRead ? 'is-active' : ''}>
                        <a 
                        className='has-text-primary'
                        onClick={() => setShowRead(true)}>
                            Read
                        </a>
                    </li>
                    </ul>
                </div>
        </nav>
    );
};

export default ProfileNav;