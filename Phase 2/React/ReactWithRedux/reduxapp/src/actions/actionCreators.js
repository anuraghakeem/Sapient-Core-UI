import axios from 'axios';

export function AddNewProduct(obj) {
    return {
        type : "ADD_NEW_PRODUCT",
        obj
    };
}

export function RemoveProduct(theId) {
    return {
        type : "REMOVE_PRODUCT",
        theId
    };

}

export function IncrementLikes(theIndex) {
    return {
        type : "INCREMENT_LIKES",
        theIndex
    };

}
export function DecrementLikes(theIndex) {
    return {
        type : "DECREMENT_LIKES",
        theIndex
    };

}
export function AddUser() {
    return {
        type : "ADD_USER"
    };

}
export function FetchProducts() {
    //MAKE an ajax request
    
    var thePromise=axios.get("https://api.myjson.com/bins/hupsc");
    return (dispatch)=>{
        thePromise.then(
            (response)=>{
                console.log("Fethcing from ajax");
                dispatch({
                    type : "FETCH_PRODUCTS", 
                    response: response.data
                }) 
            },
            (err)=>{}
        )
    }
    
   

}