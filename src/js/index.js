//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.js";

//render your react application

//>> TIMER RENDERING FROM INDEX <<

let time = 0;

// setInterval(() => {
// 	time++; // 2 segundo => 2
// 	ReactDOM.render(
// 		<Home propTime={time} title="Timer from Index" />,
// 		document.querySelector("#app")
// 	); //renderiza
// 	console.log(time);
// }, 1000);

ReactDOM.render(<Home time={time} />, document.querySelector("#app"));
