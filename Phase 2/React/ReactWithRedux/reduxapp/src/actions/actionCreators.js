export function AddNewProduct() {
    return {
        type : "ADD_NEW_PRODUCT"
    };
}

export function RemoveProduct(theId) {
    return {
        type : "REMOVE_PRODUCT",
        theId
    };

}

export function IncrementLikes() {
    return {
        type : "INCREMENT_LIKES"
    };

}

export function AddUser() {
    return {
        type : "ADD_USER"
    };

}