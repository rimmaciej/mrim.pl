import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles, useTheme } from 'react-jss';

const Link = props => {
	const style = useStyle(useTheme());

	return (
		<a className={style.link} href={props.url} title={props.tooltip}>
			{props.children}
		</a>
	);
};

Link.propTypes = {
	url: PropTypes.string,
	children: PropTypes.node,
	tooltip: PropTypes.string
};

const useStyle = createUseStyles({
	link: {
		margin: 10,
		paddingBottom: 2,
		color: theme => theme.text,
		transition: 'border 0.3s',

		textDecoration: 'none',
		userSelect: 'none',
		fontWeight: 300,

		borderBottom: theme => `1px solid ${theme.linkBorder}`,

		'&:hover': {
			borderBottom: theme => `1px solid ${theme.primary}`
		}
	}
});

export default Link;
