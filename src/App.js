import React from "react";
import "./App.css";
import Intro from "./Intro";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AnglesCheck from "./AnglesCheck";
import HypotenuseCalculator from "./HypotenuseCalculator";
import NameTheTriangle from "./NameTheTriangle";

const App = () => {
	return (
		<Router>
			<div className="app-container">
				<Switch>
					<Route exact path="/">
						<Intro />
					</Route>
					<Route path="/anglesCheck">
						<AnglesCheck />
					</Route>
					<Route path="/hypotenuseCalculator">
						<HypotenuseCalculator />
					</Route>
					<Route path="/nameTheTriangle">
						<NameTheTriangle />
					</Route>
					<Route path="/trianglesProblems">
						<h1>Triangle's Problems</h1>
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
