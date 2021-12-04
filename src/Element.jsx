import React, { useState } from 'react';
import FormComment from './FormComment';
import { deleteBook } from './actions/appActions';
import { useDispatch, useSelector } from 'react-redux'
import CommentList from './CommentList';
import FormBook from './FormBook';


const Element = ({title, author, category, price, publicYear, id_book, pages} ) => {  
  const [isVisibleAddComm, setIsVisibleAddComm] = useState(false)  
  const [isVisibleFormBook, setIsVisibleFormBook] = useState(false)

  const toggleElement = () => setIsVisibleAddComm(prev => !prev)  
  const toggleBook = () => setIsVisibleFormBook(prev => !prev)  

  const dispatch = useDispatch()

  const handleDeleteElement = () => dispatch(deleteBook({id_book})) 

  const books = useSelector(store => store.books)  
  
  const listOfComments = books.comments.map(comment => (    
    <CommentList 
      key={comment.id_comment} 
      id_book={comment.id_book}  
      id_comment={comment.id_comment}      
      commentAuthor={comment.commentAuthor}
      commentRate={comment.commentRate}
      comment={comment.comment}         
    />
  ))    
  
  const formBookElement = isVisibleFormBook ? (
    <FormBook 
      title = {title}
      author = {author}
      category = {category}
      price = {price}
      publicYear = {publicYear}
      pages = {pages}  
      id_book = {id_book}
      callbackEditBook = {toggleBook}
    />
  ) : (
    <div>
      <button onClick={toggleBook}>Edit book</button>
      <button onClick={handleDeleteElement}>Delete book</button>
    </div>
  )
  
  return ( 
    <div>
      <div className='books'>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <p>{category}</p>
        <p>{price}</p>
        <p>{publicYear}</p>
        <p>{pages}</p>  
      </div>    
      {listOfComments.filter(single => single.props.id_book === id_book)}
      {formBookElement}
      <button onClick={toggleElement}> { isVisibleAddComm ? 'Cancel' : 'Add comment'}</button>

      {isVisibleAddComm ? 
      <FormComment          
        id_book={id_book}           
        callbackAdd={toggleElement}        
      /> : null}
    </div>
   );
}

export default Element