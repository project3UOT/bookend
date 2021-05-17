import React from 'react';
import BookCard from '../BookCard';

const BookList = () => {
    const books = [
        {
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            id: 1,
            read: true,
            favourite: true
        },
        {
            title: 'Normal People',
            author: 'Sally Rooney',
            id: 2,
            read: true,
            favourite: true
        },
        {
            title: 'Cloud Atlas',
            author: 'David Mitchell',
            id: 3,
            read: true,
            favourite: false
        },
        {
            title: 'Jane Eyre',
            author: 'Charlotte Bronte',
            id: 4,
            read: false,
            favourite: false
        },
        {
            title: 'The Stranger',
            author: 'Albert Camus',
            id: 5,
            read: true,
            favourite: false
        }

    ];

    return (
        <div className='container py-5'>
            <h2 className='text-dark is-family-secondary is-size-2-widscreen is-size-3-desktop py-4'>My Books</h2>

            <div className='columns is-multiline'>
                {
                    books.map(book => {
                        return (
                        <BookCard 
                        fromSearch={false}
                        title={book.title}
                        author={book.author}
                        read={book.read}
                        favourite={book.favourite}
                        key={book.id}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default BookList;