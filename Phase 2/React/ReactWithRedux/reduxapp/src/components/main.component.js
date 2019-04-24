import React from "react";
import { ShoppingCart } from "./shoppingcart.component";
import { NewProduct } from "./new.product";
import {Route, Switch,} from "react-router-dom"

export class MainComponent extends React.Component {
componentDidMount(){
    this.props.FetchProducts();
}
    render(){
    return(
        <div>
            <Switch>
            <Route exact path='/' render={()=><ShoppingCart {...this.props} />}/>
            <Route exact path='/newproduct' render={()=><NewProduct {...this.props} />}/>
            </Switch>
        </div>
    )
}
}