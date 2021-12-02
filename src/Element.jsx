import React, { useState } from 'react';
import  FormComment from './FormComment';
import { useSelector } from 'react-redux'
import { CommentList } from './CommentList';


const Book = ({title, author, category, price, publicYear, id_book, pages} ) => {  
  const [isVisibleAddComm, setIsVisibleAddComm] = useState(false)  

  const toggleElement = () => setIsVisibleAddComm(prev => !prev)  

  const books = useSelector(store => store.books)

  console.log(id_book)
  
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
      {listOfComments.filter(single => single.props.id === id_book)}
      <button onClick={toggleElement}> { isVisibleAddComm ? 'Cancel' : 'Add comment'}</button>
      {isVisibleAddComm ? 
      <FormComment          
        id_book={id_book}           
        callback={toggleElement}
        /> : null}
    </div>
   );
}

export default Book