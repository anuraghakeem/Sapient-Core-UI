import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import {store} from './store/store'
import {Main} from './connect'
import { Route, BrowserRouter,Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
       <BrowserRouter>
          <Main/>
        </BrowserRouter>
  
      </Provider>
  );
}

export default App;
