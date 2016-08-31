import React from 'react';
import ReactDOM from 'react-dom';

class ValidationDemo extends React.Component {

	render() {

		return <div>
			<h1>{this.props.header}</h1>
			<ul>
				{this.props.items.map(i => <li key={i}>{i}</li>)}
			</ul>
		</div>;

	}

}

ValidationDemo.propTypes = {
	header: React.PropTypes.string.isRequired,
	items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
	data: React.PropTypes.instanceOf(Promise).isRequired
};

ValidationDemo.defaultProps = {
	//header: 'Test'
};

const colors = ['red','blue','green'];

ReactDOM.render(<ValidationDemo header="test" items={colors} data={new Promise(() => {})} />, document.querySelector('main'));

