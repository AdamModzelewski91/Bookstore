import React from 'react';
import Book from './Book';
import { connect } from 'react-redux'
// import { useSelector } from 'react-redux'

// const selectBookIds = state => state.books.map(book => book.id_book)

const List = ({books}) => {
  // const bookIds = useSelector(selectBookIds)
  const listOfBooks = books.books.map(segment => (    
      <Book key={segment.id_book} {...segment}/>  
  ));
  return ( 
    <div>      
      {/* {console.log(bookIds)} */}
      {listOfBooks} 
    </div>
   );
}

const connectReduxStateToProps = store => ({
  books: store.books
})
 
const ListBooks = connect(connectReduxStateToProps)(List);

export default ListBooks