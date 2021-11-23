import React from 'react';
import Book from './Book';
import { connect } from 'react-redux'

const List = ({books}) => {
  const listOfBooks = books.map(book => (
    <Book key={book.id_book} {...book}/>
  ));
  return ( 
    <div>      
      {listOfBooks}      
    </div>
   );
}

const connectReduxStateToProps = store => ({
  books: store.books
})
 
const ListBooks = connect(connectReduxStateToProps)(List);

export default ListBooks