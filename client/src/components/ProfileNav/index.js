import React, { useState } from 'react';

const ProfileNav = () => {
    const [showRead, setShowRead] = useState(false);

    return (
        <nav className='has-background-secondary p-4 is-family-secondary' role='navigation' aria-label='profile navigation'>
                <div className='buttons are-medium'>
                <button
                    className={'button' + (showRead ? ' is-secondary' : ' is-success is-rounded')}
                    onClick={() => setShowRead(false)}>
                        All Books
                    </button>
                    <button 
                    className={'button' + (showRead ? ' is-secondary' : ' is-success is-rounded')}
                    onClick={() => setShowRead(false)}>
                        Reading List
                    </button>
                    <button
                    className={'button' + (showRead ? ' is-success is-rounded' : ' is-secondary')}
                        onClick={() => setShowRead(true)}>
                            Read
                    </button>
                    
                </div>
        </nav>
    );
};

export default ProfileNav;