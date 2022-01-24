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
      toggleElement={toggleElement} 
      isVisibleAddComm={isVisibleAddComm} 
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
      <div className='right-corner'>
        <button onClick={toggleBook}><i className="fas fa-pencil-alt"></i></button>
        <button onClick={handleDeleteElement}><i className="fas fa-times"></i></button>
      </div>
      <button className='addComment' onClick={toggleElement}> { isVisibleAddComm ? 'Cancel' : 'Add comment'}</button>
    </div>
  )
  
  return ( 
    <div className='element'>
      <div className='books'>   
        <h2>{title}</h2>
        <h3>{author}</h3>
        <table>
          <tbody>
            <tr>
              <td>Category</td>
              <td>Public year</td>
              <td>Price</td>
              <td>Pages</td>
            </tr>
            <tr>
              <th>{category}</th>
              <th>{publicYear}</th>
              <th>{price} $</th>
              <th>{pages}</th>
            </tr>
          </tbody>
        </table>       
        <p>Description:</p>
        <p className='textarea'>{description}</p>
        {formBookElement}   
      </div> 
      <div className='comments' >
        {listOfComments.filter(single => single.props.id_book === id_book)}
      </div>

      {isVisibleAddComm ? 
      <FormComment          
      id_book={id_book}           
      callbackAdd={toggleElement}        
      /> : null}
      
    </div>
   );
}

export default Element