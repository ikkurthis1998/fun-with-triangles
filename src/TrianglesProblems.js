import React, { useState } from "react";
import { Link } from "react-router-dom";
import Question from "./Question";
import "./TrianglesProblems.css";

const TrianglesProblems = () => {
	const [selectedAnswer1, setSelectedAnswer1] = useState("");
	const [selectedAnswer2, setSelectedAnswer2] = useState("");
	const [selectedAnswer3, setSelectedAnswer3] = useState("");

	const [score, setScore] = useState(null);
	const [reveal, setReveal] = useState(false);

	const questionsArray = [
		{
			question:
				"The length of the base of a triangle is 4 cm smaller than the length of its altitude. The area of the triangle is 96 sq.cm. The length of the base is",
			options: ["12 cm", "36 cm", "24 cm"],
		},
		{
			question:
				" A triangle has an area of 615 cm2. One of its sides is given as 123 centimeters, and then what is the length of the perpendicular that is dropped on that particular side from the opposite vertex.",
			options: ["10 cm", "5 cm", "Data insufficient"],
		},
		{
			question:
				"The perimeter of an isosceles triangle is 100 cm. If the base is 36 cm, find the length of the equal sides.",
			options: ["32 cm", "24 cm", "18 cm"],
		},
	];

	const answersArray = ["12 cm", "10 cm", "32 cm"];

	const checkScore = () => {
		setScore(0);
		let miniScore = 0;
		if (selectedAnswer1 === answersArray[0]) {
			miniScore = miniScore + 1;
		}
		if (selectedAnswer2 === answersArray[1]) {
			miniScore = miniScore + 1;
		}
		if (selectedAnswer3 === answersArray[2]) {
			miniScore = miniScore + 1;
		}
		setScore(miniScore);
		setReveal(true);
	};

	return (
		<div className="triangles-problems-container">
			<Link exact="true" to="/" className="back-button">
				Back to Home
			</Link>
			<h1>Triangle's Problems</h1>

			<Question
				question={questionsArray[0].question}
				options={questionsArray[0].options}
				setAnswer={setSelectedAnswer1}
			/>
			{reveal && (
				<p>
					<b>Explanation:</b>
					<br /> A = 96cm2.
					<br /> B – H = 4.
					<br /> Also, 1/2 B.H = 96
					<br /> ∴ H (H – 4) = 192 ⇒ H = 16 and B = 12 cm
				</p>
			)}
			<Question
				question={questionsArray[1].question}
				options={questionsArray[1].options}
				setAnswer={setSelectedAnswer2}
			/>
			{reveal && (
				<p>
					<b>Explanation:</b>
					<br /> A = 615cm2. Base = 123 cm.
					<br /> Perpendicular = ? <br />
					Also A = 1/2 * B * H <br />∴ 615 = 1/2 * 123 * H ⇒ H = 10 cm.
				</p>
			)}
			<Question
				question={questionsArray[2].question}
				options={questionsArray[2].options}
				setAnswer={setSelectedAnswer3}
			/>
			{reveal && (
				<p>
					<b>Explanation:</b>
					<br />
					Let the length of equal side = x.
					<br /> ∴ x + x + 36 = 100 ⇒ 2x = 64 ⇒ x = 32cm.
				</p>
			)}

			<button onClick={checkScore} className="finish-button">
				Finish
			</button>
			{score && <p>Score: {score}</p>}
		</div>
	);
};

export default TrianglesProblems;
