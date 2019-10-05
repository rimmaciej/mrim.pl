import React from 'react';
import PropTypes from 'prop-types';

function LinkButton(props) {
	return (
		<a className="link-btn" href={props.link}>
			{props.children}
		</a>
	);
}

LinkButton.propTypes = {
	link: PropTypes.string,
	children: PropTypes.node
};

function Name() {
	return <div className="name">Maciej Rim</div>;
}

function Summary() {
	return <div className="summary">IT student at University of Economics in Katowice</div>;
}

export default function AboutPage() {
	return (
		<div className="page" id="page-main">
			<div>
				<Name />
				<Summary />

				<div className="links">
					<LinkButton link="https://github.com/rimmaciej">Github</LinkButton>
					<LinkButton link="https://www.linkedin.com/in/maciej-rim/">LinkedIn</LinkButton>
					<LinkButton link="mailto:contact@mrim.pl">Mail</LinkButton>
				</div>
			</div>
		</div>
	);
}
