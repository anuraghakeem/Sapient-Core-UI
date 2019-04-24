import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import {Main} from "./connect.js"
// import {NewProduct} from "./components/new.product"

import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    // <Provider store={store}>
    //   <Main />
    // </Provider>

    <Provider store={store}>
    <BrowserRouter>
      {/* <Route exact path='/' component={Main}/>
      <Route exact path='/newproduct' component={NewProduct}/> */}
      <Main />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
