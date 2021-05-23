import React from 'react';
import BookCardFooter from '../BookCardFooter';

const BookCard = ({ bookId, title, author, img, read, favourite, fromSearch, saved }) => {    
    return (
        <div className='column is-2-widescreen is-one-fifth-desktop is-4-tablet'>

        <div className='card'>
                
                <div className='card-image'>
                    <img src={img || require('../../assets/imgs/logoblue.png')} alt={`${title} book cover`}/>
                </div>
                
                <div className='card-content'>
                    <div>

                    <p className='title is-family-secondary is-size-4'>{title}</p>
                    <p className='subtitle is-size-6'>{author}</p>
                    </div>
                    
                </div>
            
            <BookCardFooter 
                read={read}
                saved={saved}
                favourite={favourite}
                fromSearch={fromSearch}
                title={title}
                bookId={bookId} />
        </div>
        </div>
    );
};

export default BookCard;