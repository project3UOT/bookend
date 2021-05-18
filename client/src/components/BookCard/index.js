import React from 'react';
import BookCardFooter from '../BookCardFooter';

const BookCard = ({ title, author, img, read, favourite, fromSearch }) => {
    return (
        <div className='column is-2-desktop is-4-tablet'>

        <div className='card'>
            <div className='card-image'>
                    <img src={img || 'https://via.placeholder.com/500x500'} alt='book cover'/>
            </div>
                <div className='card-content'>
                    <p className='title is-family-secondary is-4'>{title}</p>
                    <p className='subtitle is-6 text-dark'>{author}</p>
                </div>
            
            <BookCardFooter 
                read={read}
                favourite={favourite}
                fromSearch={fromSearch} />
        </div>
        </div>
    );
};

export default BookCard;