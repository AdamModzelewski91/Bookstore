import React, { useState } from 'react';
import FormComment from './FormComment';
import { deleteBook } from './actions/appActions';
import { useDispatch, useSelector } from 'react-redux'
import CommentList from './CommentList';
import FormBook from './FormBook';


const Element = ({title, author, category, price, publicYear, id_book, pages, description} ) => {  
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
      description = {description}
      callbackEditBook = {toggleBook}
    />
  ) : (
    <div className='commentBTNs'>
      <button className="blue" onClick={toggleBook}>Edit Book</button>
      <button className="red" onClick={handleDeleteElement}>Delete book</button>
      <button onClick={toggleElement}> { isVisibleAddComm ? 'Cancel' : 'Add comment'}</button>
    </div>
  )
  
  return ( 
    <div className='element'>
      <div className='books'>        
          <p>Title:</p>
          <h2 className='br-5 pad-l-5 bg-input'>{title}</h2>
          <p>Author:</p>
          <h3 className='br-5 pad-l-5 bg-input'>{author}</h3>
          <p>Category:</p>
          <h4 className='br-5 pad-l-5 bg-input'>{category}</h4>
          <p>Price:</p>
          <h4 className='br-5 pad-l-5 bg-input'>{price}</h4>
          <p>Public year:</p>
          <h4 className='br-5 pad-l-5 bg-input'>{publicYear}</h4>
          <p>Pages:</p>
          <h4 className='br-5 pad-l-5 bg-input'>{pages}</h4> 
          <p>Description:</p>
          <textarea className='br-5 pad-l-5 bg-input'>{description}</textarea>
      </div>    

      <div className='comments' >
        {listOfComments.filter(single => single.props.id_book === id_book)}
      </div>

      {isVisibleAddComm ? 
      <FormComment          
      id_book={id_book}           
      callbackAdd={toggleElement}        
      /> : null}
      
      {formBookElement}   
    </div>
   );
}

export default Element