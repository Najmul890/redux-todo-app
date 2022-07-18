import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateBook } from '../Books/BookSlice';


const EditBook = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({ id, title, author }));
    navigate("/", { replace: true });
  };
  return (
    <div>
      <h2 className='mt-3' >Edit the book info</h2>
      <form className='w-50 mt-5' onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title: </label>
          <input className='form-control'
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="author">Author: </label>
          <input className='form-control'
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button className='btn btn-primary mt-2' type="submit">Update Book</button>
      </form>
    </div>

  );
};

export default EditBook;