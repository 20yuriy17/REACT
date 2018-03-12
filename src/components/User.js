import React from 'react';
import UsersList from './UsersList.js';


// import ReactDOM from "react-dom";

const User = (props) => {
    // console.log(props);
    let styles = {
        fontSize: "28px",
        color: "red",
        backgroundColor: "black",
    };

    return (
        <div className ="post" >
            <h1 className="posts__user">{props.name}</h1>
            <p className="posts__content">годков {props.age}</p>

            <p>айдишка  = {props.id}</p>
            <button onClick={props.delUser}>DELETE</button>
        </div>
    )
};
export default User;