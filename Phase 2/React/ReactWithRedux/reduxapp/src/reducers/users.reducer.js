export function users(defStore = [], action) {
  
  switch(action.type){
    case 'ADD_USER':
        console.log("Within users Reducer..");
        return defStore; //return new store!
    default:
        return defStore;
  }
  
}
