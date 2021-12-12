export const ADD_BOOK = "ADD_BOOK";
export const EDIT_BOOK = "EDIT_BOOK";
export const DELETE_BOOK = "DELETE_BOOK";
export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";


export const addBook = ({ title, author, category, price, publicYear, pages, description }) => ({
  type: ADD_BOOK,
  payload: {
    title,
    author,
    category,
    price,
    publicYear,
    pages,
    description,
    id_book: Math.floor(Math.random() * 999999), 
  }
});

export const editBook = ({ title, author, category, price, publicYear, pages, id_book, description }) => ({
  type: EDIT_BOOK,
  payload: {
    title,
    author,
    category,
    price,
    publicYear,
    pages,
    description,
    id_book, 
  }
});

export const deleteBook = ({id_book}) => ({
  type: DELETE_BOOK,
  payload: {
    id_book,   
  }
});

export const addComment = ({commentAuthor, commentRate, comment, id_book}) => ({
  type: ADD_COMMENT,
  payload: {
    commentAuthor,
    commentRate,
    comment,  
    id_book: id_book,  
    id_comment: Math.floor(Math.random() *  9999999),
  }
});

export const editComment = ({commentAuthor, commentRate, comment, id_book, id_comment}) => ({
  type: EDIT_COMMENT,
  payload: {
    commentAuthor,
    commentRate,
    comment,  
    id_book,  
    id_comment,
  }
});

export const deleteComment = ({id_comment}) => ({
  type: DELETE_COMMENT,
  payload: {
    id_comment,   
  }
});