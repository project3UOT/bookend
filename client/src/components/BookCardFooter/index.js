import React from 'react';
import { FaCheckCircle, FaHeart, FaExternalLinkSquareAlt, FaBookmark } from "react-icons/fa";

const BookCardFooter = ({ read, favourite, fromSearch }) => {
    const handleSaveBook = () => {
        console.log('book saved');
    };
    return (
        <div className='card-footer align-items-center'>
            {fromSearch ? 
                <button 
                    className='button is-inverted is-primary'
                    onClick={() => {
                        handleSaveBook()
                    }}>
                    <FaBookmark className='pr-2' /> Save this book
                </button>
             : 
             <>
             <button 
                className={'button is-inverted' + (read ? ' is-secondary' : ' is-primary')}>
                <FaCheckCircle />
            </button>
            <button 
                className={'button is-inverted' + (favourite ? ' is-secondary' : ' is-primary')}>
                <FaHeart />
            </button>
            <a href='/' 
                className='button is-inverted is-primary'>
                <FaExternalLinkSquareAlt />
            </a>
            </>
            }
        </div>
    );
};

export default BookCardFooter;