import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 import App from './App';

// const NAME = "Vlad";
//
// const Header = (props) => {
//     console.log(props.children);
//     let styles = {
//         fontSize: "28px",
//         color: props.color,
//         backgroundColor: "black"
//     };
//     return (
//         <h1 style={styles} className="h1" data-id={1}>
//             Hello {props.children}
//         </h1>
//     )
// }

ReactDOM.render(
    <App/>,
    document.getElementById('root'));



//
// <Header({
//     color: "red",
//     children: "Vlad!"
// });
//
//
// // render = (element, container) => {
// 	container.appendChild(element);
// }


// <App /> -> new App({}).render();

// ->

// React.createElement("div", {
// 	className: "App"
// }, React.createElement("header", {
// 	className: "header"
// }, "..."));
//

//
// <Post className="post" header="Учим реакт" likes="500">
//     TDadsadsadsadasdada
//     <img src="https://imagej.nih.gov/ij/images/cat.jpg"/>
// </Post>







