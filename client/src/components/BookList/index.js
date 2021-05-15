import React from 'react';
import BookCard from '../BookCard';

const BookList = () => {
    const books = [
        {
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            id: 1
        },
        {
            title: 'Normal People',
            author: 'Sally Rooney',
            id: 2
        },
        {
            title: 'Cloud Atlas',
            author: 'David Mitchell',
            id: 3
        }
    ]
    return (
        <div className='container py-5'>
            <h2 className='text-dark is-family-secondary is-size-2-widscreen is-size-3-desktop py-4'>My Books</h2>

            <div className='columns'>
                {
                    books.map(book => {
                        return (
                        <BookCard 
                        title={book.title}
                        author={book.author}
                        key={book.id}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default BookList;