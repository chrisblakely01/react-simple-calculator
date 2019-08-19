import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
	return (
			<div className="calculator">
				<div className="row">
					<div className="col display-container">0</div>
				</div>
				<div className="row">
					<div className="col button-container">7</div>
					<div className="col button-container">8</div>
					<div className="col button-container">9</div>
					<div className="col button-container">/</div>
				</div>
				<div className="row">
					<div className="col button-container">4</div>
					<div className="col button-container">5</div>
					<div className="col button-container">6</div>
					<div className="col button-container">+</div>
				</div>
				<div className="row">
					<div className="col button-container">1</div>
					<div className="col button-container">2</div>
					<div className="col button-container">3</div>
					<div className="col button-container">-</div>
				</div>
				<div className="row">
					<div className="col button-container">C</div>
					<div className="col button-container">0</div>
					<div className="col button-container">=</div>
					<div className="col button-container">X</div>
				</div>
			</div>
	);
}

export default App;
