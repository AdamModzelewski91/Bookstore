import React, { useEffect, useState } from 'react';
import { addComment, editComment } from './actions/appActions';
import { useDispatch } from 'react-redux'

const FormComment = ({  
  commentAuthor = '',
  commentRate= '',
  comment= '',
  callbackAdd,  
  callbackEdit,  
  id_book, 
  id_comment, 
}) => {  

  const [inputAuthorComment, setInputAuthorOfComment] = useState(commentAuthor) 
  const [inputCommentRate, setInputCommentRate] = useState(commentRate) 
  const [inputComment, setInputComment] = useState(comment) 

  const dispatch = useDispatch();  

  const [placeholderAuthorComment, setPlaceholderAuthorOfComment] = useState(false) 
  const [placeholderCommentRate, setPlaceholderCommentRate] = useState(false) 
  const [placeholderCommentRateNum, setPlaceholderCommentRateNum] = useState(false) 
  const [placeholderComment, setPlaceholderComment] = useState(false)

  useEffect(()=> {
    const time = setTimeout(()=> {
      setPlaceholderAuthorOfComment(false)
      setPlaceholderCommentRate(false) 
      setPlaceholderCommentRateNum(false) 
      setPlaceholderComment(false) 
    }, 3000)
    return () => clearTimeout(time)
  },[placeholderAuthorComment, placeholderCommentRate, placeholderComment])

  const handleOnSubmit = e => {
    e.preventDefault();    

  const addComm = {
    commentAuthor: inputAuthorComment,
    commentRate: Number(inputCommentRate),
    comment: inputComment,
    id_book,  
    id_comment   
  }

  if (inputAuthorComment.trim() === '' || inputAuthorComment.length < 2) {        
    setPlaceholderAuthorOfComment(true) 
  }   
  if (inputCommentRate === '') {    
    setPlaceholderCommentRate(true)  
  } else if (Number(inputCommentRate) < 1 || Number(inputCommentRate) > 5){    
    setPlaceholderCommentRate(true)  
    setPlaceholderCommentRateNum(true) 
    setInputCommentRate('')
  }
  if (inputComment.trim() === '' || inputComment.length < 2) {
    setPlaceholderComment(true) 
  } 
  
  else{
    id_comment ? dispatch(editComment(addComm)) : dispatch(addComment(addComm))
  
    if (id_comment) {
      callbackEdit()
    }  else{
      callbackAdd()
    }
  
    setInputAuthorOfComment('')
    setInputCommentRate('')
    setInputComment('')
  }
  }

  return ( 
    <div className='form commentRelative'>  
      <form onSubmit={handleOnSubmit}>
        <div className='wrapp-form wrapp-form-com'>      
            <input 
              className={placeholderAuthorComment ? 'red' : null}
              placeholder={placeholderAuthorComment ? 'Enter your name!' : 'Name'}
              onChange={e => setInputAuthorOfComment(e.target.value)}
              type="text"
              value={inputAuthorComment}
            />      
            <input 
              className={placeholderCommentRate ? 'red' : null}
              placeholder={placeholderCommentRate ? (placeholderCommentRateNum ? 'It must be from 1 to 5' : 'Rate it!') : 'Rate (from 1 to 5)'}
              onChange={e => setInputCommentRate(e.target.value)}
              type="number"
              value={inputCommentRate}
            />       
            <textarea 
              className={placeholderComment ? 'red' : null}
              placeholder={placeholderComment ? 'Type comment! (at least 3 char)' : 'Comment'}
              onChange={e => setInputComment(e.target.value)}
              type="text"
              value={inputComment}
            />        
        </div>               
        <button className='submit submit-com addComment' type='button' onClick={id_comment ? callbackEdit : callbackAdd}>Cancel</button>    
        <button className='submit submit-com' type='submit'>Public</button>      
      </form>  
    </div>
   );
}
 
export default FormComment