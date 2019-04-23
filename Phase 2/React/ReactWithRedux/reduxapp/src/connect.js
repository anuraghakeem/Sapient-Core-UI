import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as allactions from './actions/actionCreators';
import { ShoppingCart } from "./components/shoppingcart.component";

function mapStateToProps(store){
    return {
        allusers: store.users,
        allproducts: store.products
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators(allactions, dispatcher)
}


export var Main = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);