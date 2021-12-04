import React, { useState } from 'react';
import { addComment, editComment } from './actions/appActions';
import { useDispatch } from 'react-redux'

const FormComment = ({  
  commentAuthor = '1',
  commentRate= '2',
  comment= '3',
  callbackAdd,  
  callbackEdit,  
  id_book, 
  id_comment, 
}) => {  

  const [inputAuthorComment, setInputAuthorOfComment] = useState(commentAuthor) 
  const [inputCommentRate, setInputCommentRate] = useState(commentRate) 
  const [inputComment, setInputComment] = useState(comment) 

  const dispatch = useDispatch();  

  const handleOnSubmit = e => {
    e.preventDefault();    

  const addComm = {
    commentAuthor: inputAuthorComment,
    commentRate: Number(inputCommentRate),
    comment: inputComment,
    id_book,  
    id_comment   
  }

  id_comment ? dispatch(editComment(addComm)) : dispatch(addComment(addComm))

  if (id_comment) {
    callbackEdit()
  } else {
    callbackAdd()
  }    
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
      <button type='submit' >Public</button>
    </form>  
   );
}
 
export default FormComment