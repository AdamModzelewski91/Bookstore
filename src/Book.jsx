import React, { useState } from 'react';
import { Comment } from './Comment';
import { connect } from 'react-redux'

const Book = ({title, author, category, price, publicYear, pages, books}) => {  
  const [isVisibleAddComm, setIsVisibleAddComm] = useState(false)       

  return ( 
    <div>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{category}</p>
      <p>{price}</p>
      <p>{publicYear}</p>
      <p>{pages}</p>       

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