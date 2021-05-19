import React from 'react';
import BookCardFooter from '../BookCardFooter';

const BookCard = ({ bookId, title, author, img, read, favourite, fromSearch, saved }) => {
    return (
        <div className='column is-2-desktop is-4-tablet'>

        <div className='card'>
            <div className='card-image'>
                    <img src={img || 'https://via.placeholder.com/500x500'} alt={`${title} book cover`}/>
            </div>
                <div className='card-content'>
                    <p className='title is-family-secondary is-4'>{title}</p>
                    <p className='subtitle is-6 text-dark'>{author}</p>
                </div>
            
            <BookCardFooter 
                read={read}
                saved={saved}
                favourite={favourite}
                fromSearch={fromSearch}
                bookId={bookId} />
        </div>
        </div>
    );
};

export default BookCard;