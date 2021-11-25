import { ADD_BOOK, DELETE_BOOK, ADD_COMMENT } from "../actions/appActions";

const defaultState = {
  books: [],  
}

function updateObject (oldObject, newValues) {
  return Object.assign({}, oldObject, newValues)
}

function addBook (state, action) {
  const newBook = [...state.books, action]
  return updateObject(state, {books: newBook})
}
function addComment (state, action) {
  const newComment = [...state.books, action]
  return updateObject(state, {books: newComment})
}

const appReducer = (state=defaultState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return addBook(state, action.payload)
    case ADD_COMMENT:         
      return addComment(state, action.payload)  
    case DELETE_BOOK:
      return state.books.filter(currentBook => currentBook.id !== currentBook.payload.id_book)
    default:
      console.warn(`nie ma akcji type ${action.type}`)
      return state;
  }
}

export default appReducer
