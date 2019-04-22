import React from 'react'

export class Form extends React.Component{
    render(){
        return(
            <React.Fragment>
                <form>
                    <input type="text" />
                </form>
            </React.Fragment> 
        )
    }
}

export class Comment extends React.Component{
    render(){
        return(
            <React.Fragment>
                <p>This is comment</p>
            </React.Fragment> 
        )
    }
}

export default class Blog extends React.Component {
render(){
    return(<React.Fragment>
        <h2>This is dynamic render of components</h2>
        {this.props.children}
        </React.Fragment>
        
    )
}

}