import React from 'react';
import Element from './Element';
import { useSelector } from 'react-redux'

const List = () => {
  const books = useSelector(store =>  store.books)  
  const listOfBooks = books.books.map(segment => (    
      <Element key={segment.id_book} {...segment}/>  
  ));
  return ( 
    <div>      
      {listOfBooks}      
    </div>
   );
}
 
export default List