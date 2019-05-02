import axios from 'axios';

export function AddNewUser(newUser) {
    return {type:'ADD_NEW_USER',newUser};
}

export function FetchUsers() {
    let thePromise = axios.get('https://jsonplaceholder.typicode.com/users');

    return (dispatch) => {
        thePromise.then(
            (response) => {
                dispatch({type:'FETCH_USERS', response: response.data}) 
            },
            (err)=>{}
        )
    }
}

export function FetchTodos() {
    let thePromise = axios.get('https://jsonplaceholder.typicode.com/todos');

    return (dispatch) => {
        thePromise.then(
            (response) => {
                dispatch({type:'FETCH_TODOS', response: response.data}) 
            },
            (err)=>{}
        )
    }
}