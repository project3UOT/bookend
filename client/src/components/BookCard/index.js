import React from 'react';
import { FaCheckCircle, FaHeart, FaExternalLinkSquareAlt } from "react-icons/fa";


const BookCard = ({ title, author, read }) => {
    return (
        <div className='column is-2-desktop is-4-tablet'>

        <div className='card'>
            <div className='card-image'>
                    <img src='https://via.placeholder.com/500x500' alt='book cover'/>
            </div>
                <div className='card-content'>
                    <p className='title is-family-secondary is-4'>{title}</p>
                    <p className='subtitle is-6 text-dark'>{author}</p>
                </div>
                <div className='card-footer align-items-center'>
                    <button className={'button is-inverted' + (read ? ' is-secondary' : ' is-primary')}>
                        <FaCheckCircle />
                    </button>
                    <button className='button is-primary is-inverted'>
                        <FaHeart />
                    </button>
                    <a href='/' className='button is-inverted is-primary'>
                        <FaExternalLinkSquareAlt />
                    </a>
                </div>
        </div>
        </div>
    );
};

export default BookCard;