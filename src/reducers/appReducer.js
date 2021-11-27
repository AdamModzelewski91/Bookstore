import { ADD_BOOK, ADD_COMMENT } from "../actions/appActions";

const totalState = {
  books: [],
  comments: []
};  

const bookNewIds = (state)=> {
  const findID = state.books.length -1
  const maxID = [...state.books][findID].id_book
  
  return {id_book: maxID}
}

function updateObject (oldObject, newValues) {
  return Object.assign(oldObject, newValues)
}

function addComment (state = totalState, action) {
  const newAction = Object.assign(action, bookNewIds(state))
  const newComment = [...state.comments, newAction ]
  return updateObject(state, {comments: newComment})
}

const appReducer = (state = totalState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case ADD_COMMENT:
      return  addComment(state, action.payload)  
            
    // case DELETE_BOOK:
    //   return state.books.filter(currentBook => currentBook.id !== currentBook.payload.id_book)
    default:
      console.warn(`nie ma akcji type ${action.type}`)
      return state;
  }
}

export default appReducer