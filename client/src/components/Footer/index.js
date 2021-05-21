import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer className='footer'>
            <div className='content is-flex is-justify-content-space-evenly'>

                <Link to='/about' className='is-family-secondary is-size-4 pl-4'>
                    <strong>
                        About Us
                    </strong>
                </Link>
                <Link to='contact' className='is-family-secondary is-size-4 pl-4'>
                    <strong>
                        Contact
                    </strong>
                </Link>
                <a
                    href='https://github.com/project3UOT/bookend' className='is-family-secondary is-size-4 pl-4'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <strong>
                        GitHub
                    </strong>
                </a>
            </div>
        
        </footer>
    );
};

export default Footer;