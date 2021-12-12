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
    <div className="btn-comment">      
       <button onClick={toggleComment}>Edit Comment</button>        
       <button onClick={handleDeleteComment}>Delete comment</button> 
    </div>
  )
  
  return ( 
    <div>
      <div className ='comment'>
        <div className = 'wrap'>
          <p>Name</p>
          <h4>{commentAuthor}</h4>
          <p>Rate</p>
          <h4>{commentRate}</h4>       
        </div>
        <textarea>{comment}</textarea>  
      </div>
      {formOrCommentElement}    
    </div>
   );
}

export default CommentList
