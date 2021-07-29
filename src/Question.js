import React, { useState } from "react";

const Question = ({ question, options, setSelectedAnswer }) => {
	return (
		<div className="question-container">
			<p>
				<b>{question}</b>
			</p>
			<div className="options-container">
				{options.map((option) => {
					return (
						<div
							className="option-container"
							key={option}
							onChange={(e) => {
								setSelectedAnswer(e.target.value);
							}}
						>
							<input type="radio" value={option} id={option} name={question} />
							<label htmlFor={option}>{option}</label>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Question;
