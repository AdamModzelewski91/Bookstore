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
    <div className="right-corner">      
       <button type='button' onClick={toggleComment}><i className="fas fa-pencil-alt"></i></button>        
       <button type='button' onClick={handleDeleteComment}><i className="fas fa-times"></i></button> 
    </div>
  )
  
  return ( 
      <div className ='comment'>
        <div className = 'wrap'>
          <p>Name:</p>
          <h4>{commentAuthor}</h4>
          <p>Rate:</p>
          <h4>{commentRate}</h4>       
        </div>
        <p className='textarea'>{comment}</p>  
        {formOrCommentElement}    
      </div>
   );
}

export default CommentList
