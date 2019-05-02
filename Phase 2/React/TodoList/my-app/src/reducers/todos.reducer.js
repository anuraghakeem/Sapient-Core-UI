export function todos(defStore = [],action){
    switch(action.type){
        case 'FETCH_TODOS':
            return action.response;
        default:
            return defStore;    
    }
}