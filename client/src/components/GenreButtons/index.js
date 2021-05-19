import React from 'react';
import { searchGoogleBooks } from '../../utils/API';



const Test = () => {
    const genres = ['Horror', 'Comedy', 'Sci-Fi', 'Fantasy', 'Thriller', 'Romance', 'Mystery'];

    const handleFormSubmit = async (event) => {
        const response = await searchGoogleBooks(genres);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }


    }

console.log(handleFormSubmit);
    return (
        <div>
            <button onClick={() => handleFormSubmit(genres)}>
        Click here to call API
      </button>
        </div>
    )

};

export default Test;