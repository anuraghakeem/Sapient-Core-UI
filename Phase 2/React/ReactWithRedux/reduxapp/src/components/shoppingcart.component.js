import React from "react";
import ProductComponent from './product.component';
import {Link} from 'react-router-dom'
import '../shoppingcart.component.css'


export class ShoppingCart extends React.Component {
//   addNewCard(newProduct) {
//     this.setState({ productList: [...this.state.productList, (newProduct)] });
// }
  
  render() {
      console.log(this.props.allproducts);
      var list = this.props.allproducts.map((p,i) =>
        <ProductComponent prod={p} key={p.id} pindex={i} {...this.props}/>);
    // return <h1>Shopping Cart Component!</h1>;
    return(
        <div className="container">
                <Link to="/newproduct">Add new Card </Link>
                {/* <AddFormComponent addNewCard={this.addNewCard.bind(this)} /> */}
                <div className="row justify-content-between">
                    {list}
                </div>
            </div>
    )
  }
}
