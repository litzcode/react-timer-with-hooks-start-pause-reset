import React, { useState, useEffect } from "react";

const Home = () => {
	const [seconds, setSeconds] = useState(0);
	const [isActive, setIsActive] = useState(false);

	const toggle = () => setIsActive(!isActive);

	const reset = () => {
		setSeconds(0);
		setIsActive(false);
	};

	useEffect(() => {
		let interval = null;

		if (isActive) {
			interval = setInterval(() => {
				setSeconds(seconds => seconds + 1);
			}, 1000);
		} else if (!isActive && seconds !== 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [isActive, seconds]);

	//At the end of the useEffect Hook, we’re returning a new function.
	//This is the equivilent of componentWillUnmount in a React Class component.
	//The useEffect function returns the clearInterval method with the scheduled interval passed into it.
	//As a result, the interval is correctly cleared and
	//no longer triggers every second after the component unmounts from the DOM.

	// Above all, when using setInterval, it is IMPERATIVE that you clear the scheduled interval once the component unmounts.

	return (
		<div className="app">
			<div className="time">{seconds} s</div>
			<div className="row">
				<button
					className={`button button-primary button-primary-${
						isActive ? "active" : "inactive"
					}`}
					onClick={toggle}>
					{isActive ? "Pause" : "Start"}
				</button>
				<button className="button" onClick={reset}>
					Reset
				</button>
			</div>
		</div>
	);
};

export default Home;
