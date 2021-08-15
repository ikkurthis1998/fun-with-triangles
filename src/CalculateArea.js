import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CalculateArea.css";

const CalculateArea = () => {
	const [method, setMethod] = useState(null);

	const [height, setHeight] = useState("");
	const [base, setBase] = useState("");

	const [a, setA] = useState("");
	const [b, setB] = useState("");
	const [c, setC] = useState("");

	const [side1, setSide1] = useState("");
	const [side2, setSide2] = useState("");
	const [angle, setAngle] = useState("");

	const [result1, setResult1] = useState("");
	const [result2, setResult2] = useState("");
	const [result3, setResult3] = useState("");

	const method1 = () => {
		setResult1(0.5 * base * height);
	};

	const method2 = () => {
		const s = (a + b + c) / 2;
		setResult2(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
	};

	const method3 = () => {
		const inRadians = angle * (Math.PI / 180);
		setResult3(0.5 * side1 * side2 * Math.sin(inRadians));
		if (angle >= 180) {
			console.log(true);
			setResult3("0");
		}
	};

	return (
		<div>
			<Link exact="true" to="/" className="back-button">
				Back to Home
			</Link>
			<h1>Calculate Area</h1>

			<div className="some-container">
				<p>Select an option below as per the data you have for a triangle</p>

				<div
					className="options-list"
					onChange={(e) => setMethod(e.target.value)}
				>
					<label>
						<input type="radio" name="iniOption" value={1} />
						If you have base and height length
					</label>
					<label>
						<input type="radio" name="iniOption" value={2} />
						If you have length of 3 sides
					</label>
					<label>
						<input type="radio" name="iniOption" value={3} />
						If you have length of 2 sides and included angle
					</label>
				</div>
			</div>

			{method && method == 1 && (
				<div className="options-list some-container">
					<label className="options-list some-container">
						Base =
						<input
							className="input"
							type="number"
							onChange={(e) => setBase(parseFloat(e.target.value))}
						/>
					</label>
					<label className="options-list some-container">
						Height =
						<input
							className="input"
							type="number"
							onChange={(e) => setHeight(parseFloat(e.target.value))}
						/>
					</label>
					<button onClick={() => method1()} className="button">
						Calculate
					</button>
					{result1 && <p>Area: {result1}</p>}
				</div>
			)}
			{method && method == 2 && (
				<div className="options-list some-container">
					<label className="options-list some-container">
						a =
						<input
							className="input"
							type="number"
							onChange={(e) => setA(parseFloat(e.target.value))}
						/>
					</label>
					<label className="options-list some-container">
						b =
						<input
							className="input"
							type="number"
							onChange={(e) => setB(parseFloat(e.target.value))}
						/>
					</label>
					<label className="options-list some-container">
						c =
						<input
							className="input"
							type="number"
							onChange={(e) => setC(parseFloat(e.target.value))}
						/>
					</label>
					<button onClick={() => method2()} className="button">
						Calculate
					</button>
					{result2 !== "" ? (
						!result2 || result2 === 0 ? (
							<p>Please Enter proper values</p>
						) : (
							<p>Area: {result2}</p>
						)
					) : null}
				</div>
			)}
			{method && method == 3 && (
				<div className="options-list some-container">
					<label className="options-list some-container">
						Side1 =
						<input
							className="input"
							type="number"
							onChange={(e) => setSide1(parseFloat(e.target.value))}
						/>
					</label>
					<label className="options-list some-container">
						Side2 =
						<input
							className="input"
							type="number"
							onChange={(e) => setSide2(parseFloat(e.target.value))}
						/>
					</label>
					<label className="options-list some-container">
						Angle between sides =
						<input
							className="input"
							type="number"
							onChange={(e) => setAngle(parseFloat(e.target.value))}
						/>
					</label>
					<button onClick={() => method3()} className="button">
						Calculate
					</button>
					{result3 ? (
						!result3 || result3 == 0 ? (
							<p>Enter Valid Values</p>
						) : (
							<p>Area: {result3}</p>
						)
					) : null}
				</div>
			)}
		</div>
	);
};

export default CalculateArea;
