import { ADD_BOOK, DELETE_BOOK, ADD_COMMENT } from "../actions/appActions";

const appReducer = (state=[], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload]
    case ADD_COMMENT:
      return state.map(currentBook => {
        if (currentBook.id !== currentBook.payload.id_book){
          return currentBook
        }       

        return [...state, action.payload]
      });
      case DELETE_BOOK:
        return state.filter(currentBook => currentBook.id !== currentBook.payload.id_book)
      default:
        console.warn(`nie ma akcji type ${action.type}`)
        return state;
  }
  
}

export default appReducer