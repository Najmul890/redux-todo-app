import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from './BookSlice';

const Books = () => {
    const books= useSelector((state)=> state.booksReducer.books);
    const dispatch= useDispatch(); 

    const handleDelete=(id)=>{
         dispatch(deleteBook(id))
    }
    return (
        <div className='container-fluid' >
            <h2>All Books</h2>


            <div className="row">

                <div className="col-md-12">

                    <div className="row p-5">
                        <table className="table table-borderLess table-responsive">
                            <thead>
                                <tr>
                                    <th className="text-secondary text-left" scope="col">Id</th>
                                    <th className="text-secondary" scope="col">Title</th>
                                    <th className="text-secondary" scope="col">Author</th>
                                    <th className="text-secondary" scope="col">Action</th>
                                    


                                </tr>
                            </thead>
                            <tbody>
                                {
                                    books.map((book) =>

                                        <tr key={book.id} >
                                            <td>{book.id}</td>
                                            
                                            <td>{book?.title}</td>
                                            <td>{book?.author}</td>
                                            <td>
                                                <button className="btn btn-primary me-1">Edit</button>
                                                <button onClick={()=>{handleDelete(book.id)}} className="btn btn-danger">Delete</button>
                                            </td>
                                            
                                            



                                        </tr>
                                    )

                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;