import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import  Form from './Form'
import store from './store/store';
import List from './List.jsx'

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Form />        
        <List />
      </div>
     </Provider>
  );
}


