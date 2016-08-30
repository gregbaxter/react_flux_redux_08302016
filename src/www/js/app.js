import 'bootstrap-loader';
import '../css/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

class ItemList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			newColor: ''
		};

		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {

		this.setState({
			[e.target.name]: e.target.value
		});

	}

	render() {

		return <div>
			<h1>{this.props.headerText}</h1>
			<ul>
				{this.props.items.map((item, index) =>
					<li key={index}>{item}</li>
				)}
			</ul>
			<form>
				<label htmlFor="newColor">New Color:</label>
				<input type="text" name="newColor" id="newColor"
					value={this.state.newColor} onChange={this.onChange} />
				<button type="button">Add Color</button>
			</form>
		</div>;
	}

}

const colors = ['red','white','gold','green','saffron','blue'];

ReactDOM.render(<ItemList headerText="Natonal Colors" items={colors} />, document.querySelector('main'));


