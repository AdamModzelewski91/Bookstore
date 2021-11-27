import React, { useState } from 'react';
import  Comment from './Comment';
import { CommentList } from './CommentList';
import { connect } from 'react-redux'
// import { useSelector } from 'react-redux'



const Book = ({title, author, category, price, publicYear, id_book, pages, books} ) => {  
  const [isVisibleAddComm, setIsVisibleAddComm] = useState(false)  

  const toggleElement = () => setIsVisibleAddComm(prev => !prev)  
  
  const listOfComments = books.comments.map(comment => (    
    <CommentList 
      key={comment.id_comment} 
      id={comment.id_book}  
      id_comment={comment.id_comment}      
      commentAuthor={comment.commentAuthor}
      commentRate={comment.commentRate}
      comment={comment.comment}         
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
      {/* {console.log(bookId)} */}     
      {/* {listOfComments} */}
      {listOfComments.filter(single => single.props.id === id_book)}
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