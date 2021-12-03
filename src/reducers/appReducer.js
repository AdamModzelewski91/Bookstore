import { ADD_BOOK, DELETE_BOOK,  ADD_COMMENT, DELETE_COMMENT } from "../actions/appActions";

const totalState = {
  books: [],
  comments: []
};  

const appReducer = (state = totalState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,        
        books: [...state.books, action.payload],
      };
    case ADD_COMMENT:
      return  {
        ...state,
        comments: [...state.comments, action.payload]
      } 
            
    case DELETE_BOOK:
      return {            
        books: state.books.filter(currentBook => currentBook.id_book !== action.payload.id_book),
        comments: state.comments.filter(currentComment => currentComment.id_book !== action.payload.id_book),
      }
    case DELETE_COMMENT:
      return {   
        ...state,    
        comments: state.comments.filter(currentComment => currentComment.id_comment !== action.payload.id_comment)
      }
    default:
      console.warn(`nie ma akcji type ${action.type}`)
      return state;
  }
}

export default appReducer