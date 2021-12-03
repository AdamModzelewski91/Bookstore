import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteComment } from './actions/appActions';

const CommentList = ({commentAuthor, commentRate, comment, id_comment}) => {
  
  const dispatch = useDispatch();

  const handleDeleteComment = () => dispatch(deleteComment({id_comment}))
  
  return ( 
    <div>
      <h3>{commentAuthor}</h3>
      <p>{commentRate}</p>
      <p>{comment}</p>  
      <button onClick={handleDeleteComment}>Delete comment</button>    
    </div>
   );
}

export default CommentList
