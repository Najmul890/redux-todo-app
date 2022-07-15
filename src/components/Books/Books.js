import React from 'react';
import { useSelector } from 'react-redux/es/exports';

const Books = () => {
    const books= useSelector((state)=> state.booksReducer.books);
    return (
        <div className='p-5' >
            <h2>this is books {books.length} </h2>
        </div>
    );
};

export default Books;