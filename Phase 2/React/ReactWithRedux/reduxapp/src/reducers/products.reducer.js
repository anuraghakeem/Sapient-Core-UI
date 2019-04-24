export function products(defStore = [], action) {
    switch(action.type){
        case 'ADD_NEW_PRODUCT':
            console.log("Within ADD_NEW_PRODUCT product Reducer..");
            return [...defStore,action.obj];
            //return defStore; //return new store!
        case 'REMOVE_PRODUCT':
            console.log("Within REMOVE_PRODUCT product Reducer..");
            console.log(action.theId+" Deleted");
            let theNewList = defStore.filter(p => p.id !== action.theId);
            return theNewList;
            // return defStore; //return new store!
        case 'INCREMENT_LIKES':
            console.log("Within INCREMENT_LIKES product Reducer..");
            return [
                    ...defStore.slice(0,action.theIndex),
                    {...defStore[action.theIndex],likes:defStore[action.theIndex].likes+1},
                    ...defStore.slice(action.theIndex+1)
                    ];
            //return defStore; //return new store!
        case 'FETCH_PRODUCTS':        
            return action.response;
        default:
            return defStore;
      }
}
