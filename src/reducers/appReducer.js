import { ADD_BOOK, DELETE_BOOK, ADD_COMMENT } from "../actions/appActions";

const appReducer = (state=[], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload]
    case ADD_COMMENT:
      return state.map(currentBook => {
        if (currentBook.id !== currentBook.payload.id){
          return currentBook
        }
        const currentID = {id: currentBook}

        return [...state, action.payload, currentID]
      });
      case DELETE_BOOK:
        return state.filter(currentBook => currentBook.id !== currentBook.payload.id)
      default:
        console.warn(`nie ma akcji type ${action.type}`)
        return state;
  }
  
}

export default appReducer