import React, { useEffect, useState } from 'react';
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

  const [titlePlaceholder, setTitlePlaceholder] = useState(false)
  const [authorPlaceholder, setAuthorPlaceholder] = useState(false)
  const [categoryPlaceholder, setCategoryPlaceholder] = useState(false)
  const [pricePlaceholder, setPricePlaceholder] = useState(false)
  const [publicYearPlaceholder, setPublicYearPlaceholder] = useState(false)
  const [pagesPlaceholder, setPagesPlaceholder] = useState(false)
  const [descriptionPlaceholder, setDescriptionPlaceholder] = useState(false)


  useEffect(()=> {
    const time = setTimeout(()=> {
      setTitlePlaceholder(false)
      setAuthorPlaceholder(false) 
      setCategoryPlaceholder(false) 
      setPricePlaceholder(false)
      setPublicYearPlaceholder(false)
      setPagesPlaceholder(false) 
      setDescriptionPlaceholder(false)          
    }, 3000)
    return () => clearTimeout(time)
    
  }, [titlePlaceholder, authorPlaceholder, categoryPlaceholder, pricePlaceholder, publicYearPlaceholder, pagesPlaceholder, descriptionPlaceholder])
  
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
      setTitlePlaceholder(true) 
    }   
    if (authorInput.trim() === '' || authorInput.length < 2) {
      setAuthorPlaceholder(true)  
    } 
    if (categoryInput.trim() === '') {
      setCategoryPlaceholder(true) 
    } 
    if (priceInput === '') {
      setPricePlaceholder(true)
    }     
    if (publicYearInput === '' ||  publicYearInput > new Date().getFullYear()) {      
      setPublicYearPlaceholder(true)
    } 
    if (pagesInput === '') {
      setPagesPlaceholder(true) 
    } 
    if (descriptionInput.trim() === '' || descriptionInput.length < 20 ) {
      setDescriptionPlaceholder(true)
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
      <div className='wrapp-form'>       
         <input
          id='title'
          className={titlePlaceholder ? 'red' : null}
          onChange={e => setTitleInput(e.target.value)}
          type="text" 
          placeholder={titlePlaceholder ? 'Title to short!' : 'Title'}
          value={titleInput}                   
        />        
        <input 
          id='author'
          className={authorPlaceholder ? 'red' : null}
          onChange={e => setAuthorInput(e.target.value)}
          type="text"
          placeholder={authorPlaceholder ? 'To short name!' : 'Author'}
          value={authorInput}                    
        />    
        <div className='wrapp-pack'>
          <input
            className={categoryPlaceholder ? 'red' : null}
            onChange={e => setCategoryInput(e.target.value)}
            type="text" 
            placeholder={categoryPlaceholder ? 'Type a category!' : 'Category'}
            value={categoryInput}            
          />
          <input
            className={pricePlaceholder ? 'red' : null}
            onChange={e => setPriceInput(e.target.value)}
            type="number" 
            placeholder={pricePlaceholder ? 'Type a price!' : 'Price ($)'}
            value={priceInput}            
          />
          <input
            className={publicYearPlaceholder ? 'red' : null}
            onChange={e => setPublicYearInput(e.target.value)}
            type="number" 
            placeholder={publicYearPlaceholder ? 'Type a public year!' : 'Public year'}
            value={publicYearInput}
          />
          <input
            className={pagesPlaceholder ? 'red' : null}
            onChange={e => setPagesInput(e.target.value)}
            type="number" 
            placeholder={pagesPlaceholder ? 'Type count of pages!' : 'Pages'}
            value={pagesInput}            
          />
        </div>    
        <textarea
          className={descriptionPlaceholder ? 'red' : null}
          onChange={e => setDescriptionInput(e.target.value)}
          type="text" 
          placeholder={descriptionPlaceholder ? 'Type short description (min 20 chars)!' : 'Description'}
          value={descriptionInput}            
        />
      </div>
      <button className="submit" type="submit">Add Book</button>      
      <button className="submit cancel" onClick={id_book ? callbackEditBook : handleShowForm} type='button'>Cancel</button>      
      </form>
      <button onClick={handleShowForm} className={`btnAddForm ${isFormVisible ? 'active' : ''}`}>Adding form</button>
    </div>
  )
}

export default FormBook