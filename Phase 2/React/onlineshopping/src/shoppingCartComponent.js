import React from 'react'
import './shoppingComponent.css'
import ProductComponent from './productComponent'
import AddFormComponent from './addFormComponent'
import LoadingComponent from './loadingComponent'
import axios from 'axios'
export default class ShoppinCart extends React.Component {
    constructor() {
        super();
        // this.courses=[{name:"React",duration:"3 days"},{name:"Angular",duration:"2 days"},{name:"Node",duration:"1 days"},{name:"Mongo",duration:"5 days"}];

        this.state = { productList: [], isLoading: true }

    }

    componentDidMount() {
        let thePromise = axios.get('https://api.myjson.com/bins/hupsc')
        thePromise.then(
            (response) => { this.setState({ productList: response.data, isLoading: false }) },
            (error) => { console.log(error) }
        )
    }

    addNewCard(newProduct) {
        this.setState({ productList: [...this.state.productList, (newProduct)] });
    }

    deleteTheItem(pID) {
        console.log("Deleted");
        let theNewList = this.state.productList.filter(p => p.id !== pID);
        this.setState({ productList: theNewList });
    }

    render() {
        if (this.state.isLoading == true) {
            var list = <LoadingComponent />
        } else {
            var list = this.state.productList.map(p =>
                <ProductComponent prod={p} key={p.id} deleteItem={this.deleteTheItem.bind(this)} />);
        }

        return (

            <div className="container">

                <AddFormComponent addNewCard={this.addNewCard.bind(this)} />
                <div className="row justify-content-between">
                    {list}
                </div>
            </div>
        )
    }
}