import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

import MainPage from './components/MainPage';
// import SkillsPage from './components/SkillsPage';
// import WorkPage from './components/WorkPage';

function Root() {
	return (
		<div className="page-wrapper">
			<MainPage />
			{/* <SkillsPage />
			<WorkPage /> */}
		</div>
	);
}

ReactDOM.render(<Root />, document.getElementById('root'));
