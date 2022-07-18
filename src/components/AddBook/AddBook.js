import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../Books/BookSlice';
import { v4 as uuidv4 } from "uuid";

const AddBook = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch= useDispatch();
    const navigate= useNavigate();

    
    const onSubmit = data => {
        const id=uuidv4();
        data.id=id;
        dispatch(addBook(data));
        navigate("/")
        
    }
    return (
        <div className='p-5' >
            <h2>Add a book</h2>
            <form className='w-50 mt-5' onSubmit={handleSubmit(onSubmit)}>
                
                <div className="mb-3">
                    <input className='form-control' placeholder='books title'  {...register("title", { required: true })} />
                    {errors.title && <span className='text-danger' >Please put a Title</span>}
                    
                </div>
                <div className="mb-3">
                    <input className='form-control' placeholder='author of the book' {...register("author", { required: true })} />
                    {errors.author && <span className='text-danger' >Please put a Author</span>}
                </div>

                <input className='btn btn-primary' value="Add" type="submit" />
            </form>
        </div>
    );
};

export default AddBook;