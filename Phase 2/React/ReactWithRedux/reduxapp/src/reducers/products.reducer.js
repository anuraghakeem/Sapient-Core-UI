export function products(defStore = [], action) {
    switch(action.type){
        case 'ADD_NEW_PRODUCT':
            console.log("Within users Reducer..");
            return defStore; //return new store!
        default:
            return defStore;
      }
}
