import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { deleteComment } from './actions/appActions';
import FormComment from './FormComment';

const CommentList = ({commentAuthor, commentRate, comment, id_comment, id_book}) => {
  
  const [isVisibleForm, setIsVisibleForm] = useState(false)

  const toggleComment = () => setIsVisibleForm(prev => !prev)

  const dispatch = useDispatch();  

  const handleDeleteComment = () => dispatch(deleteComment({id_comment}))

  const formOrCommentElement = isVisibleForm ? (
    <FormComment 
      commentAuthor = {commentAuthor}
      commentRate = {commentRate}
      comment = {comment}
      callbackEdit = {toggleComment}
      id_book = {id_book}
      id_comment = {id_comment}
      
    />
  ) : (
    <div>      
       <button onClick={toggleComment}>Edit Comment</button>        
       <button onClick={handleDeleteComment}>Delete comment</button> 
    </div>
  )
  
  return ( 
    <div>
      <div className='comments'>
        <h3>{commentAuthor}</h3>
        <p>{commentRate}</p>
        <p>{comment}</p>  
      </div>
      {formOrCommentElement}    
    </div>
   );
}

export default CommentList
