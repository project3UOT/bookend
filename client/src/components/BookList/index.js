import React from 'react';
import BookCard from '../BookCard';

const BookList = () => {
    const books = [
        {
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            id: 1,
            read: true
        },
        {
            title: 'Normal People',
            author: 'Sally Rooney',
            id: 2,
            read: true
        },
        {
            title: 'Cloud Atlas',
            author: 'David Mitchell',
            id: 3,
            read: true
        }
    ];
    
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
                        read={book.read}
                        key={book.id}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default BookList;