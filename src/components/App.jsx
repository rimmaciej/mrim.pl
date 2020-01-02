import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Link from './Link';

const App = () => {
	const style = useStyle(useTheme());

	return (
		<div className={style.app}>
			<div className={style.contentWrapper}>
				<div className={style.name}>Maciej Rim</div>
				<div className={style.summary}>
					IT student at University of Economics in Katowice
				</div>

				<div className={style.links}>
					<Link url="https://github.com/rimmaciej">Github</Link>
					<Link url="https://www.linkedin.com/in/maciej-rim/">LinkedIn</Link>
					<Link url="mailto:contact@mrim.pl" tooltip="contact@mrim.pl">
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
};

const useStyle = createUseStyles({
	'@global *': {
		boxSizing: 'border-box'
	},

	'@global body': {
		margin: 0,
		display: 'flex',
		fontFamily: 'Josefin Sans, sans-serif'
	},

	app: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		width: '100vw',
		height: '100vh',

		background: theme => theme.background,
		color: theme => theme.text
	},

	contentWrapper: {
		display: 'flex',
		flexDirection: 'column'
	},

	name: {
		display: 'flex',
		justifyContent: 'center',

		color: theme => theme.primary,
		userSelect: 'none',

		font: {
			family: 'Josefin Sans',
			weight: 100
		},

		'@media (max-width: 768px)': {
			fontSize: '5em'
		},

		'@media (min-width: 768px)': {
			fontSize: '10em'
		}
	},

	summary: {
		display: 'flex',
		justifyContent: 'center',

		color: theme => theme.text,
		userSelect: 'none',

		fontWeight: 300,

		'@media (max-width: 768px)': {
			fontSize: '1em'
		},

		'@media (min-width: 768px)': {
			fontSize: '1.5em'
		}
	},

	links: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: 15
	}
});

export default App;
