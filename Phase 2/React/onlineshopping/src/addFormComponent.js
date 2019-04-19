import React from 'react';
class AddFormComponent extends React.Component {

    addNewCard() {
        let theNewProd = { name: (this.refs.txtName.value), id: (this.refs.txtID.value), rating: +(this.refs.txtRating.value), likes: +(this.refs.txtLikes.value), quantity: +(this.refs.txtQuantity.value), image: (this.refs.txtImage.value) };
        this.props.addNewCard(theNewProd);
    }
    render() {
        return( 
            <form>
                <div className="row">
                    <div className="col-sm-12 text-center formHeading">
                        <h1>Enter details for new card</h1>
                    </div>
                </div>
                <div className="form-group">
                    <input type="text" ref="txtName" className="form-control" id="name" placeholder="Enter name" />
                </div>
                <div className="form-group">
                    <input type="text" ref="txtID" className="form-control" id="id" placeholder="ID" />
                </div>
                <div className="form-group">
                    <input type="text" ref="txtRating" className="form-control" id="rating" placeholder="Rating" />
                </div>
                <div className="form-group">
                    <input type="text" ref="txtLikes" className="form-control" id="likes" placeholder="Likes" />
                </div>
                <div className="form-group">
                    <input type="text" ref="txtQuantity" className="form-control" id="quantity" placeholder="Quantity" />
                </div>
                <div className="form-group">
                    <input type="text" ref="txtImage" className="form-control" id="image" placeholder="Image Url" />
                </div>
                <div className="row">
                    <div className="col-sm-12 col-sm-push-5">
                        <input type="button" className="btn btn-danger" value="Add Item To List" onClick={this.addNewCard.bind(this)} />
                    </div>
                </div>

            </form>
        )

    }
}
export default AddFormComponent;