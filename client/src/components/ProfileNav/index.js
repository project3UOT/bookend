import React from 'react';

const ProfileNav = () => {
    return (
        <nav className='has-background-secondary pt-4 px-4' role='navigation' aria-label='profile navigation'>
                <div className='tabs is-boxed'>
                    <ul>
                    <li className='is-active'>
                        <a className='has-text-primary'>
                            Reading List
                        </a>
                        </li>
                    <li className=''>
                        <a className='has-text-primary'>
                            Read
                        </a>
                    </li>
                    </ul>
                </div>
        </nav>
    );
};

export default ProfileNav;