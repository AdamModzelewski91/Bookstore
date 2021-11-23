import React, { useState } from 'react';
import { Comment } from './Comment';
import { CommentList } from './CommentList';
import { connect } from 'react-redux'

const Book = ({title, author, category, price, publicYear, pages, books, id_book}) => {  
  const [isVisibleAddComm, setIsVisibleAddComm] = useState(false)  
  const listOfComments =  books.map(book => (
    <CommentList key={book.id_book} {...book}/>
  ))     

  return ( 
    <div>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{category}</p>
      <p>{price}</p>
      <p>{publicYear}</p>
      <p>{pages}</p>       
      {listOfComments.filter(comm => Number(comm.key) === id_book)}
      <button onClick={() => setIsVisibleAddComm(prev => !prev)}> { isVisibleAddComm ? 'Anuluj' : 'Dodaj komentarz'}</button>
      {isVisibleAddComm ? <Comment/> : null}
    </div>
   );
}
 
const connectReduxStateToProps = store => ({
  books: store.books
})
const BookComments = connect(connectReduxStateToProps)(Book)

export default BookComments