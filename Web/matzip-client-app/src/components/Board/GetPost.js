import React, {Component } from 'react'
import axios from 'axios'
import Post from './Posts'

class GetPost extends Component {

    state = {
        posts: []
    }
    
    componentDidMount(){
        // axios.get('https://jsonplaceholder.typicode.com/users')
        axios.get('https://matzip-api.azurewebsites.net/v1/venues')
            .then(res => {
                this.setState({posts: res.data});  
                console.log(res);
            });
            
    }

    render(){
        const posts=this.state.posts.map(post =>{
            return <Post id={post.id} name={post.name} />
        });
        return  (
            <div>{posts}</div>
        );
      }
}

export default GetPost;