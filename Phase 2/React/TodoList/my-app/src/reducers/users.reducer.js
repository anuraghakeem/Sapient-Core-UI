export function users(defStore = [],action){
    switch(action.type){
        case 'FETCH_USERS':
            return action.response;
        case 'ADD_NEW_USER':
            var newStore = [...defStore,action.newUser];
            return newStore;
        default:
            return defStore;
    }
}