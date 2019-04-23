export function products(defStore = [], action) {
    switch(action.type){
        case 'ADD_NEW_PRODUCT':
            console.log("Within product Reducer..");
            return defStore; //return new store!
        case 'REMOVE_PRODUCT':
            console.log("Within REMOVE_PRODUCT product Reducer..");
            console.log(action.theId+" Deleted");
            let theNewList = defStore.filter(p => p.id !== action.theId);
            return theNewList;
            // return defStore; //return new store!
        case 'INCREMENT_LIKES':
            console.log("Within product Reducer..");
            return defStore; //return new store!
        default:
            return defStore;
      }
}
