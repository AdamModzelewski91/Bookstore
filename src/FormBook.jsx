import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addBook, editBook } from './actions/appActions';

const FormBook = ({ 
  title = '',
  author = '',
  category = '',
  price = '',
  publicYear = '',
  pages = '',
  description = '',  
  id_book,
  callbackEditBook,  
}) => {

  const [isFormVisible, setIsFormVisible] = useState(false)
  const handleShowForm = () => setIsFormVisible( prev => !prev )

  const [titleInput, setTitleInput] = useState(title)
  const [authorInput, setAuthorInput] = useState(author)
  const [categoryInput, setCategoryInput] = useState(category)
  const [priceInput, setPriceInput] = useState(price)
  const [publicYearInput, setPublicYearInput] = useState(publicYear)
  const [pagesInput, setPagesInput] = useState(pages)
  const [descriptionInput, setDescriptionInput] = useState(description)

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
      description: descriptionInput,
      id_book,    
    }

    if (titleInput.trim() === '' || titleInput.length < 2) {
      alert('Title field must be completed!') 
      setTitleInput('') 
    }   
    else if (authorInput.trim() === '' || authorInput.length < 2) {
      alert('Author field must be completed!') 
      setAuthorInput('')  
    } 
    else if (categoryInput.trim() === '' || categoryInput.length < 2) {
      alert('Category field must be completed!') 
      setCategoryInput('') 
    } 
    else if (priceInput === '') {
      alert('Price field must be completed!') 
      setPriceInput('')
    }     
    else if (publicYearInput === '' ||  publicYearInput > new Date().getFullYear()) {      
      alert('Year field is incorrect!') 
      setPublicYearInput('')
    } 
    else if (pagesInput === '') {
      alert('Page field must be completed!') 
      setPagesInput('') 
    } 
    else if (descriptionInput.trim() === '' || descriptionInput.length < 20 ) {
      alert('Description field to short!') 
      setDescriptionInput('')
    } 
        
    else {

      id_book ? dispatch(editBook(addNewBook)) : dispatch(addBook(addNewBook))

      if (id_book) {
        callbackEditBook()
      }   

      setTitleInput('') 
      setAuthorInput('') 
      setCategoryInput('') 
      setPriceInput('') 
      setPublicYearInput('') 
      setPagesInput('') 
      setDescriptionInput('')   
      handleShowForm()
    }
  }
  
  return (
    <div className={`form ${isFormVisible ? 'active' : null}`}>
    <form onSubmit={handleOnSubmit}>
      <div>
        <label>
          <p>Title:</p>
          <input id='focus'
            onChange={e => setTitleInput(e.target.value)}
            type="text" 
            value={titleInput}                   
          />
        </label>
      </div>
      <div>
        <label>
          <p>Author:</p>
          <input id='focus'
            onChange={e => setAuthorInput(e.target.value)}
            type="text"
            value={authorInput}                    
          />
        </label>
      </div>
      <div>
        <label>
          <p>Category:</p> 
          <input id='focus'
            onChange={e => setCategoryInput(e.target.value)}
            type="text" 
            value={categoryInput}            
          />
        </label>
      </div>
      <div>
        <label>
          <p>Price:</p> 
          <input id='focus'
            onChange={e => setPriceInput(e.target.value)}
            type="number" 
            value={priceInput}            
          />
        </label>
      </div>
      <div>
        <label>
          <p>Public Year:</p> 
          <input id='focus'
            onChange={e => setPublicYearInput(e.target.value)}
            type="number" 
            placeholder="yyyy"                    
            value={publicYearInput}            
          />
        </label>
      </div>
      <div>
        <label>
          <p>Pages:</p> 
          <input id='focus'
            onChange={e => setPagesInput(e.target.value)}
            type="number" 
            value={pagesInput}            
          />
        </label>
      </div>   
      <div>
        <label>
          <p>Description:</p> 
          <textarea id='focus'
            onChange={e => setDescriptionInput(e.target.value)}
            type="text" 
            value={descriptionInput}            
          />
        </label>
      </div>                   
        <button className="blue" type="submit">Add Book</button>
        {handleShowForm}
    </form>
      <button onClick={handleShowForm} className={`btnAddForm blue ${isFormVisible ? 'active' : ''}`}>Adding form</button>
    </div>
  )
}

export default FormBook