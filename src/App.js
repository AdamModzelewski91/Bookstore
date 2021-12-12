import React from 'react';
import { Provider } from 'react-redux';
import './styles/App.scss';
import './styles/FormBook.scss'
import './styles/Element.scss'
import './styles/CommentList.scss'
import  FormBook from './FormBook'
import store from './store/store';
import List from './List'

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <header>
          <h1>Book corner</h1>
        </header> 
        <FormBook />        
        <List />
        <footer>
          <p>&copy; Adam Modzelewski </p>
        </footer>
      </div>
     </Provider>
  );
}


