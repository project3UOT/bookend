import React from 'react'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='content is-flex'>

                <a
                    href='https://github.com/project3UOT/bookend'

                    target='_blank'
                    rel='noopener noreferrer'>
                    <h3 className='is-family-secondary is-size-4 has-text-link-light pl-4'>About Us</h3>
                </a>
                <a
                    href='https://github.com/project3UOT/bookend'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <h3 className='is-family-secondary is-size-4 has-text-link-light pl-4'>Contact</h3>
                </a>
                <a
                    href='https://github.com/project3UOT/bookend'

                    target='_blank'
                    rel='noopener noreferrer'>
                    <h3 className='is-family-secondary is-size-4 has-text-link-light pl-4'>GitHub</h3>
                </a>
            </div>
        </footer>
    )
};

export default Footer;