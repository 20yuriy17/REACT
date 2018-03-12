
import React from 'react';
import News from './News.js';


// import ReactDOM from "react-dom";

const Post = (props) => {
    console.log(props);
    let styles = {
        fontSize: "28px",
        color: "red",
        backgroundColor: "black",
    };

    return (
        <div className ="post" >
            <h1 className="posts__header">{props.header}</h1>
            <p className="posts__content">{props.children}</p>

            <p>Количество лайков = {props.likes}</p>
            <button onClick={props.likeP}>ADD LIKES</button>
        </div>
    )
};
export default Post;


