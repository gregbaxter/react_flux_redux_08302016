import 'bootstrap-loader';
import '../css/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

class ItemListHeaderComponent extends React.Component {
	render() {
		return <h1>{this.props.headerText}</h1>;
	}
}

class ItemListItemsComponent extends React.Component {
	render() {
		return <ul>
			{this.props.items.map((item, index) =>
				<li key={index}>{item}</li>
			)}
		</ul>;
	}
}

class ItemListFormComponent extends React.Component {

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

class ItemList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			items: props.items.concat()
		};

		this.addNewColor = this.addNewColor.bind(this);
	}

	addNewColor(newColor) {
		this.setState({
			items: this.state.items.concat(newColor)
		});
	}


	render() {

		return <div>
			<ItemListHeaderComponent headerText={this.props.headerText} />
			<ItemListItemsComponent items={this.state.items} />
			<ItemListFormComponent newItem={this.addNewColor} />
		</div>;
	}

}

const colors = ['red','white','gold','green','saffron','blue'];

ReactDOM.render(<ItemList headerText="Natonal Colors" items={colors} />, document.querySelector('main'));


