import React from 'react';
import { FaBookmark } from "react-icons/fa";

const BookResultCard = ({ title, author, img, genre }) => {
    return (
        <div className='column is-2-desktop is-4-tablet'>

            <div className='card'>
                <div className='card-image'>
                    <img src={img || 'https://via.placeholder.com/500x500'} alt={`${title} book cover`} />
                </div>
                <div className='card-content'>
                    <p className='title is-family-secondary is-4'>{title}</p>
                    <p className='subtitle is-6 text-dark'>{author}</p>
                </div>
                <div className='card-footer align-items-center'>
                    <button className='button is-inverted'>
                        <FaBookmark />  Save this book
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookResultCard;