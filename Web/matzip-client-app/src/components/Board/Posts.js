import React from 'react';
import Item from './Posts.css'

//functional Component 는 소문자로 시작하는게 컨벤션임
const posts = (props) => {
    return (
        <div>
             <h2> ID : {props.id} </h2>
             <h3> 이름 : {props.name} </h3>
        </div>
      
    )
};

export default posts;