import React from 'react';
import Book from './Book';
import { useSelector } from 'react-redux'

const List = () => {
  const books = useSelector(store => store.books)
  const listOfBooks = books.books.map(segment => (    
      <Book key={segment.id_book} {...segment}/>  
  ));
  return ( 
    <div>      
      {listOfBooks} 
    </div>
   );
}
 
export default List