import React from "react";
import ProductComponent from './product.component';
import AddFormComponent from './addform.component';
import '../shoppingcart.component.css'


export class ShoppingCart extends React.Component {
  addNewCard(newProduct) {
    this.setState({ productList: [...this.state.productList, (newProduct)] });
}
  
  render() {
      console.log(this.props.allproducts);
      var list = this.props.allproducts.map(p =>
        <ProductComponent prod={p} key={p.id} {...this.props}/>);
    // return <h1>Shopping Cart Component!</h1>;
    return(
        <div className="container">
                {/* <AddFormComponent addNewCard={this.addNewCard.bind(this)} /> */}
                <div className="row justify-content-between">
                    {list}
                </div>
            </div>
    )
  }
}
