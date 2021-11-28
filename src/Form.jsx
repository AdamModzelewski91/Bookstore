import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import { addBook } from './actions/appActions';

const Form = ({ 
  title = '',
  author = '',
  category = '',
  price = '',
  publicYear = '',
  pages = '',  
}) => {

  const [titleInput, setTitleInput] = useState(title)
  const [authorInput, setAuthorInput] = useState(author)
  const [categoryInput, setCategoryInput] = useState(category)
  const [priceInput, setPriceInput] = useState(price)
  const [publicYearInput, setPublicYearInput] = useState(publicYear)
  const [pagesInput, setPagesInput] = useState(pages)

  const dispatch = useDispatch()
  
  const handleOnSubmit = e => {
    e.preventDefault();
    
    const addNewBook = {
      title: titleInput,
      author: authorInput,
      category: categoryInput,
      price: Number(priceInput),      
      publicYear: Number(publicYearInput),
      pages: Number(pagesInput),
    }

    dispatch(addBook(addNewBook))
    // console.log(addNewBook)    
  }
  
  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label>
          Title:
          <input 
            onChange={e => setTitleInput(e.target.value)}
            type="text" 
            value={titleInput}                   
          />
        </label>
      </div>
      <div>
        <label>
          Author:
          <input 
            onChange={e => setAuthorInput(e.target.value)}
            type="text" 
            value={authorInput}                    
          />
        </label>
      </div>
      <div>
        <label>
          Category:
          <input 
            onChange={e => setCategoryInput(e.target.value)}
            type="text" 
            value={categoryInput}            
          />
        </label>
      </div>
      <div>
        <label>
          Price:
          <input 
            onChange={e => setPriceInput(e.target.value)}
            type="number" 
            value={priceInput}            
          />
        </label>
      </div>
      <div>
        <label>
          Public Year:
          <input 
            onChange={e => setPublicYearInput(e.target.value)}
            type="number" 
            placeholder="yyyy" 
            pattern='[0-9]{4}' required       
            value={publicYearInput}            
          />
        </label>
      </div>
      <div>
        <label>
          Pages:
          <input 
            onChange={e => setPagesInput(e.target.value)}
            type="number" 
            value={pagesInput}            
          />
        </label>
      </div>   
      <button type="submit">
        Add Book
      </button> 
    </form>
  )
}

export default Form