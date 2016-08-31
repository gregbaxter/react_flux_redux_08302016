import 'bootstrap-loader';
import '../css/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

class DemoStyling extends React.Component {

	render() {

		const someClass= ['test','test2'].join(' ');
		const s = {fontWeight:'bold'};

		return <div className={someClass} style={s}>Some text!</div>;
	}

}

ReactDOM.render(<DemoStyling />, document.querySelector('main'));