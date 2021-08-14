import React, { useState } from "react";

const Question = ({ question, options, setAnswer }) => {
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
								setAnswer(e.target.value);
							}}
						>
							<label htmlFor={question + option}>
								<input
									type="radio"
									value={option}
									id={question + option}
									name={question}
								/>
								{option}
							</label>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Question;
