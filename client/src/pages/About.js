import React from 'react';

const About = () => {
    return (
        <section className='has-background-secondary'>
            <div className='columns p-6'>
                <div className='column is-half'>
                    <h2 className='text-dark is-size-2 is-family-secondary pb-2'>About Us</h2>

                    <p className='text-dark'>
                        We are a group of web developers and Coding Boot Camp grads. We built this website as our final project at the UofT SCS Coding Bootcamp.
                    </p>
                    <p className='text-dark'>
                        You can find us on <a href='githubcom'>GitHub</a>. We'd love to hear from you!
                </p>
                </div>
                <div className='column is-half'>


                    <h3 className='text-dark is-size-3 is-family-secondary pb-2'>Our Team</h3>
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
            </div>
        </section>
    );
};

export default About;