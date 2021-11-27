export const ADD_BOOK = "ADD_BOOK";
export const DELETE_BOOK = "DELETE_BOOK";
export const ADD_COMMENT = "ADD_COMMENT";


export const addBook = ({ title, author, category, price, publicYear, pages }) => ({
  type: ADD_BOOK,
  payload: {
    title,
    author,
    category,
    price,
    publicYear,
    pages,
    id_book: Math.floor(Math.random() * 999999), 
  }
});

export const deleteBook = ({id_book}) => ({
  type: DELETE_BOOK,
  payload: {
    id_book
  }
});

export const addComment = ({commentAuthor, commentRate, comment, id_book}) => ({
  type: ADD_COMMENT,
  payload: {
    commentAuthor,
    commentRate,
    comment,  
    id_book,  
    id_comment: Math.floor(Math.random() *  9999999),
  }
});