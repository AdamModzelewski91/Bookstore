import { ADD_BOOK, ADD_COMMENT } from "../actions/appActions";

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
            
    // case DELETE_BOOK:
    //   return state.books.filter(currentBook => currentBook.id !== currentBook.payload.id_book)
    default:
      console.warn(`nie ma akcji type ${action.type}`)
      return state;
  }
}

export default appReducer