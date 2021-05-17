import React from 'react';

const BookResultCard = ({ title, author }) => {
    return (
        <div className='column is-2-desktop is-4-tablet'>

            <div className='card'>
                <div className='card-image'>
                    <img src='https://via.placeholder.com/500x500' alt='book cover' />
                </div>
                <div className='card-content'>
                    <p className='title is-family-secondary is-4'>{title}</p>
                    <p className='subtitle is-6 text-dark'>{author}</p>
                </div>
            </div>
        </div>
    );
};

export default BookResultCard;