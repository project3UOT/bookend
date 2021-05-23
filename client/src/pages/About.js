import React from 'react';

const About = () => {
    return (
        <>
        <section className='has-background-secondary'>
            <div className='container p-6'>
            <h2 className='text-dark is-size-2 is-family-secondary'>About Us</h2>

        <p className='text-dark'>
            We are a group of web developers and Coding Boot Camp grads. We built this website as our final project at the UofT Coding Bootcamp. 
        </p>
            <p className='text-dark'>
                You can find us on <a href='githubcom'>GitHub</a>. We'd love to hear from you!
                </p>
            </div>
        </section>
        <section>
            <div className='container p-6'>


            <h3 className='text-dark is-size-3 is-family-secondary'>Our Team</h3>
            <ul>
                <li>
                    <a className='text-dark' href='github.com' target='blank' rel='noopener noreferrer'>Samantha Brown</a>
                </li>
                <li>
                    <a className='text-dark' href='github.com' target='blank' rel='noopener noreferrer'>Brandon Burton</a>
                </li>
                <li>
                    <a className='text-dark' href='github.com' target='blank' rel='noopener noreferrer'>Austin Dudzic</a>
                </li>
                <li>
                    <a className='text-dark' href='github.com' target='blank' rel='noopener noreferrer'>Thomas Kyle</a>
                </li>
                <li>
                    <a className='text-dark' href='github.com' target='blank' rel='noopener noreferrer'>Zoha Mumtaz</a>
                </li>
                <li>
                    <a className='text-dark' href='github.com' target='blank' rel='noopener noreferrer'>Brad Spurrell</a>
                </li>
                <li>
                    <a className='text-dark' href='github.com' target='blank' rel='noopener noreferrer'>Taylor Van Scoy</a>
                </li>
                <li>
                    <a className='text-dark' href='github.com' target='blank' rel='noopener noreferrer'>Amelia Wasowski</a>
                </li>

            </ul>
            </div>
        </section>
        </>
    );
};

export default About;