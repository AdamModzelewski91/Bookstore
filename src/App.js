import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import  FormBook from './FormBook'
import store from './store/store';
import List from './List'

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <FormBook />        
        <List />
      </div>
     </Provider>
  );
}


