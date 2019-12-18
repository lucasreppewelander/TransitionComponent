import React, {useState, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import BEM from '@upsales/bemclass';

export default function TransitionComponent({ timeout = 300, classNames = 'Content', children }) {
	const [contentVisible, setContentVisible] = useState(false);

	useLayoutEffect(() => {
		setTimeout(() => {
			setContentVisible(true);
		}, timeout);

		return () => setContentVisible(false);
	}, [children]);

	return <div className='TransitionComponent'>
		{currentContent(contentVisible, children, classNames)}
	</div>;
}

TransitionComponent.propTypes = {
	timeout: PropTypes.number,
	classNames: PropTypes.string
}

function currentContent(visible, children, classNames) {
	const contentClass = new BEM(classNames);

	if (visible) {
		contentClass.mod('Visible');
	}

	return <div className={contentClass}>
		{visible ? children : null}
	</div>;
}