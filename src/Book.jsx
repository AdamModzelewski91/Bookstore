import React, { useState } from 'react';
import  Comment from './Comment';
import { CommentList } from './CommentList';
import { connect } from 'react-redux'

const Book = ({title, author, category, price, publicYear, pages, id_book, books}) => {  
  const [isVisibleAddComm, setIsVisibleAddComm] = useState(false)  

  const toggleElement = () => setIsVisibleAddComm(prev => !prev)

  
  const listOfComments = books.books.map(book => (    
    <CommentList 
      key={book.id_comment}      
      id_book={id_book}       
      commentAuthor={book.commentAuthor}
      commentRate={book.commentRate}
      comment={book.comment}         
    />
  ))     

  return ( 
    <div>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{category}</p>
      <p>{price}</p>
      <p>{publicYear}</p>
      <p>{pages}</p>       
      {listOfComments}
      <button onClick={toggleElement}> { isVisibleAddComm ? 'Cancel' : 'Add comment'}</button>
      {isVisibleAddComm ? <Comment callback={toggleElement}/> : null}
    </div>
   );
}
 
const connectReduxStateToProps = store => ({
  books: store.books
})
const BookComments = connect(connectReduxStateToProps)(Book)

export default BookComments