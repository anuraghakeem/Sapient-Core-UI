import { combineReducers } from "redux";
import { users } from "./users.reducer";
import { products } from "./products.reducer";

export var rootReducer = combineReducers({
  users,
  products
});
