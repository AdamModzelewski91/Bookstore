import { ADD_BOOK, EDIT_BOOK, DELETE_BOOK, ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from "../actions/appActions";

const totalState = {
  books: [],
  comments: []
};  

const findCurrentBook = (state, action) => {    
    const currentBook = state.books.map(element => {
      if (element.id_comment !== action.id_comment){        
        return element
      }
     
    const {title, author, category, price, publicYear, pages, description} = action
       
    return {    
      title,
      author,
      category,
      price,
      publicYear,
      pages,
      description,
      id_book: element.id_book,          
  }
})

    return {
      ...state, 
      books: currentBook
    }
  }

const findCurrentComment = (state, action) => {    
    const currentComment = state.comments.map(element => {
      if (element.id_comment !== action.id_comment){        
        return element
      }
     
    const {commentAuthor, commentRate, comment, id_book} = action
       
    return {    
       commentAuthor,
       commentRate,
       comment,  
       id_book,  
       id_comment: element.id_comment,          
  }
})

    return {
      ...state, 
      comments: currentComment
    }
  }

const appReducer = (state = totalState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,        
        books: [...state.books, action.payload],
      };
      
    case DELETE_BOOK:
    return {            
      books: state.books.filter(currentBook => currentBook.id_book !== action.payload.id_book),
      comments: state.comments.filter(currentComment => currentComment.id_book !== action.payload.id_book),
    }

    case EDIT_BOOK:
      return findCurrentBook(state, action.payload)

    case ADD_COMMENT:
      return  {
        ...state,
        comments: [...state.comments, action.payload]
      } 

    case EDIT_COMMENT:
      return  findCurrentComment(state, action.payload)
      
    case DELETE_COMMENT:
      return {   
        ...state,    
        comments: state.comments.filter(currentComment => currentComment.id_comment !== action.payload.id_comment)
      }

    default:
      console.warn(`missing action type of ${action.type}`)
      return state;
  }
}

export default appReducer