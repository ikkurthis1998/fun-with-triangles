import React, { useState } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Question from "./Question";

const NameTheTriangle = () => {
	const [questionId, setQuestionId] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState("");

	const [score, setScore] = useState(0);

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
				"Obtuse-angled Triangle",
				"Scalene Triangle",
			],
		},
		{
			question: "None of the sides or angles are equal. Who am I?",
			options: [
				"Equilateral Triangle",
				"Obtuse-angled Triangle",
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
		if (selectedAnswer === answersArray[questionId]) {
			setScore(score + 1);
		}
		setQuestionId(questionId + 1);
	};

	return (
		<div className="name-the-triangle-container">
			<Link exact="true" to="/" className="back-button">
				Back to Home
			</Link>
			<h1>Name the Triangle</h1>
			<p>Score: {score}</p>
			<Question
				question={questionsArray[questionId].question}
				options={questionsArray[questionId].options}
				setSelectedAnswer={setSelectedAnswer}
			/>

			{questionId < questionsArray.length - 1 && (
				<button onClick={() => checkScore()}>Next</button>
			)}
			{questionId === questionsArray.length - 1 && <button>Finish</button>}
		</div>
	);
};

export default NameTheTriangle;
