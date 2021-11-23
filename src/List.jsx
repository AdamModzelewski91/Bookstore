import React from 'react';
import Book from './Book';
import { connect } from 'react-redux'

const List = ({books}) => {
  const listOfBooks = books.map(book => (
    <Book key={book.id} {...book}/>
  ));
  return ( 
    <div>      
      {listOfBooks}
      {/* {console.log(books)} */}
    </div>
   );
}

const connectReduxStateToProps = store => ({
  books: store.books
})
 
const ListBooks = connect(connectReduxStateToProps)(List);

export default ListBooks