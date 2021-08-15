import React from "react";
import { Link } from "react-router-dom";
import "./Intro.css";

const Intro = () => {
	const questionId = 0;

	return (
		<>
			<h1>Fun with Triangles</h1>

			<div className="box-container">
				<div className="box-row-container">
					<Link to="/anglesCheck" className="box-element">
						Angles Check
					</Link>
					<Link to="/hypotenuseCalculator" className="box-element">
						Hypotenuse Calculator
					</Link>
				</div>
				<div className="box-row-container">
					<Link to={`/nameTheTriangle`} className="box-element">
						Name the Triangle
					</Link>
					<Link to="/trianglesProblems" className="box-element">
						Triangle's Problems
					</Link>
				</div>
				<div className="box-row-container">
					<Link to="/calculateArea" className="box-element">
						Calculate Area
					</Link>
				</div>
			</div>
		</>
	);
};

export default Intro;
