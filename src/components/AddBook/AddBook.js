import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../Books/BookSlice';

const AddBook = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch= useDispatch();
    const navigate= useNavigate();

    const numberOfBooks= useSelector((state)=> state.booksReducer.books.length);

    const onSubmit = data => {
        const id=numberOfBooks+1;
        data.id=id;
        dispatch(addBook(data));
        navigate("/")
        
    }
    return (
        <div className='p-5' >
            <h2>Add a book</h2>
            <form className='w-50 mt-5' onSubmit={handleSubmit(onSubmit)}>
                
                <div className="mb-3">
                    <input className='form-control' placeholder='book title'  {...register("title", { required: true })} />
                    {errors.review && <span className='text-danger' >Put a Title</span>}
                    
                </div>
                <div className="mb-3">
                    <input className='form-control' placeholder='author of the book' {...register("author", { required: true })} />
                    {errors.review && <span className='text-danger' >Put a Author</span>}
                </div>

                <input className='btn btn-primary' value="Add" type="submit" />
            </form>
        </div>
    );
};

export default AddBook;