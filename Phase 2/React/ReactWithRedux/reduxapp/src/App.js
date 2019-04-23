import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { ShoppingCart } from "./components/shoppingcart.component";
import { store } from "./store/store";
import {Main} from "./connect.js"

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
