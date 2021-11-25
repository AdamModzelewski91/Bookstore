import React from 'react';

export const CommentList = ({commentAuthor, commentRate, comment}) => {
  return ( 
    <div>
      <h3>{commentAuthor}</h3>
      <p>{commentRate}</p>
      <p>{comment}</p>      
    </div>
   );
}

