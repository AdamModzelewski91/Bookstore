import React from 'react';

export  const BookProp = ({title, author, category, price, publicYear, pages,}) => {
  return ( 
    <div>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{category}</p>
      <p>{price}</p>
      <p>{publicYear}</p>
      <p>{pages}</p>  
    </div>
   );
}
 
