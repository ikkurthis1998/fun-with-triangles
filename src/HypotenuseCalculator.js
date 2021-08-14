import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HypotenuseCalculator.css";

const HypotenuseCalculator = () => {
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);

	const [result, setResult] = useState("");

	const calculateH = () => {
		if (a > 0 && b > 0) {
			setResult(Math.sqrt(a * a + b * b));
		} else {
			setResult("Please enter values greater than 0");
		}
	};

	return (
		<div className="hypotenuse-calculator-container">
			<Link exact="true" to="/" className="back-button">
				Back to Home
			</Link>
			<h1>Hypotenuse Calculator</h1>
			<p>
				Hypotensue is the third side of an right-angled triangle.
				<br /> Please enter the length of other two sides a and b
			</p>
			<label htmlFor="a">a</label>
			<input
				className="input"
				id="a"
				type="number"
				onChange={(e) => setA(parseInt(e.target.value))}
			/>
			<label htmlFor="b">b</label>
			<input
				className="input"
				id="b"
				type="number"
				onChange={(e) => setB(parseInt(e.target.value))}
			/>
			<button onClick={() => calculateH()} className="calculate">
				Calculate
			</button>
			{result && <p>Hypotenuse = {result}</p>}
		</div>
	);
};

export default HypotenuseCalculator;
