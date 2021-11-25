import React, { useState } from 'react';
import { addComment } from './actions/appActions';
import { connect } from 'react-redux'

const Comment = ({
  addComment,
  commentAuthor = '1',
  commentRate= '2',
  comment= '3',
  callback,
}) => {  

  const [inputAuthorComment, setInputAuthorOfComment] = useState(commentAuthor) 
  const [inputCommentRate, setInputCommentRate] = useState(commentRate) 
  const [inputComment, setInputComment] = useState(comment) 

  const handleOnSubmit = e => {
    e.preventDefault();

  const rateComment = {
    commentAuthor: inputAuthorComment,
    commentRate: Number(inputCommentRate),
    comment: inputComment,
         
  }

  addComment(rateComment)  
  
  callback()

  }

  return (     
    <form onSubmit={handleOnSubmit}>
      <div>
        <label>
          Name:
          <input 
            onChange={e => setInputAuthorOfComment(e.target.value)}
            type="text"
            value={inputAuthorComment}
          />
        </label>
      </div>
      <div>
        <label>
          Rate:
          <input 
            onChange={e => setInputCommentRate(e.target.value)}
            type="number"
            value={inputCommentRate}
          />
        </label>
      </div>
      <div>
        <label>
          Comment:
          <input 
            onChange={e => setInputComment(e.target.value)}
            type="text"
            value={inputComment}
          />
        </label>
      </div>
      <button type='submit' > Confirm </button>
    </form>  
   );
}
 
const connectActionsToProps = ({
  addComment
})

const CommentBook = connect(null, connectActionsToProps)(Comment)

export default CommentBook