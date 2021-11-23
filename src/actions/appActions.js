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
    id_book: Math.floor(Math.random() * 999999 - 100000), 
  }
});

export const deleteBook = ({id}) => ({
  type: DELETE_BOOK,
  payload: {
    id
  }
});

export const addComment = ({commentAuthor, commentRate, comment}) => ({
  type: ADD_COMMENT,
  payload: {
    commentAuthor,
    commentRate,
    comment,
    id_comment: Math.floor(Math.random() * 1000000 - 9999999),
  }
});