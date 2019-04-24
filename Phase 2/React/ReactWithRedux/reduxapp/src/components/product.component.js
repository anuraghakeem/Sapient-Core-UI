import React from "react";
import '../product.component.css';

export default class ProductComponent extends React.Component {
  render() {
    // return <h1>Product Component!</h1>;
    return(
        <div className="col-sm-5 main1">
            <div className="row padddingProb">
                <div className="col-sm-12 col-sm-push-11">
                    <button className="btn btn-danger"
                        onClick={this.props.RemoveProduct.bind(null, this.props.prod.id)}>x</button>
                </div>
                <div className="row">
                    <span className="name1"><h1>{this.props.prod.name}</h1></span>
                </div>
                <div className="row" >
                    <div className="col-sm-6">
                        <img src={this.props.prod.image} alt="dell laptop" />
                    </div>
                    <div className="col-sm-6 main2">
                        <h4>ID: {this.props.prod.id}</h4>
                        <h4>RATING: {this.props.prod.rating}</h4>
                        <h4>AVAILABLE: {this.props.prod.quantity}</h4>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-sm-12 col-sm-push-6">
                        <button className="btn btn-primary" onClick={this.props.IncrementLikes.bind(null,this.props.pindex)}><i className="fas fa-plus"></i></button>
                        <button className="btn btn-danger" onClick={this.props.DecrementLikes.bind(null,this.props.pindex)}>
                            <i className="fas fa-minus"></i>
                        </button>
                    </div>
                </div>
                <div className="row ">
                    <span className="name2">
                        <h1>Likes: {this.props.prod.likes} </h1>
                    </span>
                </div>
            </div>
        </div>

    )
  }
}
