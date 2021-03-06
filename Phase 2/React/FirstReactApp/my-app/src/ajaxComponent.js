import React from 'react';
import axios from 'axios';

export default class PostsComponent extends React.Component {
    constructor() {
        super();
        this.state = { allPosts: [] }
        // this.courses=[{name:"React",duration:"3 days"},{name:"Angular",duration:"2 days"},{name:"Node",duration:"1 days"},{name:"Mongo",duration:"5 days"}];
        // this.state={buttons:[10,20,30,40,50],text:""}
    }
    componentDidMount() {
        let thePromise = axios.get('https://jsonplaceholder.typicode.com/posts')
        thePromise.then(
            (response) => { this.setState({ allPosts: response.data }) },
            (error) => {console.log(error) }
        )
    }
    render() {
        
        var responseList = this.state.allPosts.map(allPosts_post => <li key={allPosts_post.id}>{allPosts_post.title}</li>)
        // console.log(this.state.allPosts)
        return <div>
            <h1>Posts</h1>
            <ul>
                {/*  posts to be created*/}
                {responseList}
            </ul>
        </div>
    }
}