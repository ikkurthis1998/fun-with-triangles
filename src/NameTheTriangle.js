import React, { useState } from "react";
import { Link } from "react-router-dom";
import Question from "./Question";
import "./NameTheTriangle.css";

const NameTheTriangle = () => {
	const [selectedAnswer1, setSelectedAnswer1] = useState("");
	const [selectedAnswer2, setSelectedAnswer2] = useState("");
	const [selectedAnswer3, setSelectedAnswer3] = useState("");

	const [score, setScore] = useState(null);

	const questionsArray = [
		{
			question: "All my sides and angles are equal. Who am I?",
			options: [
				"Equilateral Triangle",
				"Obtuse-angled Triangle",
				"Scalene Triangle",
			],
		},
		{
			question: "One of my angles is greater than 90 degrees. Who am I?",
			options: [
				"Equilateral Triangle",
				"Scalene Triangle",
				"Obtuse-angled Triangle",
			],
		},
		{
			question: "None of the sides or angles are equal. Who am I?",
			options: [
				"Obtuse-angled Triangle",
				"Equilateral Triangle",
				"Scalene Triangle",
			],
		},
	];

	const answersArray = [
		"Equilateral Triangle",
		"Obtuse-angled Triangle",
		"Scalene Triangle",
	];

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
	};

	return (
		<div className="name-the-triangle-container">
			<Link exact="true" to="/" className="back-button">
				Back to Home
			</Link>
			<h1>Name the Triangle</h1>

			<Question
				question={questionsArray[0].question}
				options={questionsArray[0].options}
				setAnswer={setSelectedAnswer1}
			/>
			<Question
				question={questionsArray[1].question}
				options={questionsArray[1].options}
				setAnswer={setSelectedAnswer2}
			/>
			<Question
				question={questionsArray[2].question}
				options={questionsArray[2].options}
				setAnswer={setSelectedAnswer3}
			/>

			<button onClick={checkScore} className="finish-button">
				Finish
			</button>
			{score && <p>Score: {score}</p>}
		</div>
	);
};

export default NameTheTriangle;
