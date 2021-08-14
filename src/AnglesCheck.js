import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AnglesCheck.css";

const AnglesCheck = () => {
	const [angle1, setAngle1] = useState(0);
	const [angle2, setAngle2] = useState(0);
	const [angle3, setAngle3] = useState(0);

	const [result, setResult] = useState("");

	const checkAngles = () => {
		if (angle1 > 0 && angle2 > 0 && angle3 > 0) {
			if (angle1 + angle2 + angle3 === 180) {
				setResult("These angles can form a triangle!");
			} else {
				setResult("These angles cannot form a triangle");
			}
		} else {
			setResult("Please enter values greater than 0");
		}
	};

	return (
		<div className="angles-check-container">
			<Link exact="true" to="/" className="back-button">
				Back to Home
			</Link>
			<h1>Angles Check</h1>
			<label htmlFor="angle-1">Angle 1</label>
			<input
				type="number"
				className="angle-input"
				id="angle-1"
				onChange={(e) => setAngle1(parseInt(e.target.value))}
			/>
			<label htmlFor="angle-2">Angle 2</label>
			<input
				type="number"
				className="angle-input"
				id="angle-2"
				onChange={(e) => setAngle2(parseInt(e.target.value))}
			/>
			<label htmlFor="angle-3">Angle 3</label>
			<input
				type="number"
				className="angle-input"
				id="angle-3"
				onChange={(e) => setAngle3(parseInt(e.target.value))}
			/>
			<button onClick={() => checkAngles()} className="check-button">
				Check
			</button>
			<p>{result}</p>
		</div>
	);
};

export default AnglesCheck;
