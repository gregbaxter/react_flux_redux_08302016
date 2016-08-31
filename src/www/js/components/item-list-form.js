import React from 'react';

export class ItemListFormComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			newColor: '',
		};

		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onClick() {
		this.props.newItem(this.state.newColor);
		this.setState({
			newColor: ''
		});
	}

	render() {
		return <form>
			<label htmlFor="newColor">New Color:</label>
			<input type="text" name="newColor" id="newColor"
				value={this.state.newColor} onChange={this.onChange} />
			<button type="button" onClick={this.onClick}>Add Color</button>
		</form>;
	}
}
