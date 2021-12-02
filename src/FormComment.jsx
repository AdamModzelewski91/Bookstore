import React, { useState } from 'react';
import { addComment } from './actions/appActions';
import { useDispatch, useSelector } from 'react-redux'

const FormComment = ({  
  commentAuthor = '1',
  commentRate= '2',
  comment= '3',
  callback,
  id_book,
}) => {  

  const [inputAuthorComment, setInputAuthorOfComment] = useState(commentAuthor) 
  const [inputCommentRate, setInputCommentRate] = useState(commentRate) 
  const [inputComment, setInputComment] = useState(comment) 

  const dispatch = useDispatch();

  const books = useSelector(store => store)

  const handleOnSubmit = e => {
    e.preventDefault();

    console.log(books.books.books.filter(currentBook => console.log(currentBook.id_book)))

  const rateComment = {
    commentAuthor: inputAuthorComment,
    commentRate: Number(inputCommentRate),
    comment: inputComment,
    id_book,     
  }

  dispatch(addComment(rateComment))
  
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
 
export default FormComment