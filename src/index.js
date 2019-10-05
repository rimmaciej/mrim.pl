import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

function LinkButton(props) {
	return (
		<a className="link-btn" href={props.link}>
			{props.children}
		</a>
	);
}

function Name() {
	return <div className="name">Maciej Rim</div>;
}

function Summary() {
	return <div className="summary">IT student at University of Economics in Katowice</div>;
}

function Root() {
	return (
		<div className="info-page">
			<Name />
			<Summary />

			<LinkButton link="https://github.com/rimmaciej">Github</LinkButton>
			<LinkButton link="https://www.linkedin.com/in/maciej-rim/">LinkedIn</LinkButton>
			<LinkButton link="mailto:contact@mrim.pl">Mail</LinkButton>
		</div>
	);
}

ReactDOM.render(<Root />, document.getElementById('root'));
