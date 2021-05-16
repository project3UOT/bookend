import React from 'react';

const Footer = () => {

    return (
        <footer className='footer'>
            <div className='content is-flex is-justify-content-space-evenly'>

                <a href='/about' className='is-family-secondary is-size-4 pl-4'>
                    <strong>
                        About Us
                    </strong>
                </a>
                <a href='contact' className='is-family-secondary is-size-4 pl-4'>
                    <strong>
                        Contact
                    </strong>
                </a>
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