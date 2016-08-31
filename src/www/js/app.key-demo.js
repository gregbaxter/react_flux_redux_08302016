import 'bootstrap-loader';
import '../css/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

const items = [
	{ id: 1, name: 'Item 1' },
	{ id: 2, name: 'Item 2' },
	{ id: 3, name: 'Item 3' }
];

class ListItemComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			name: props.item.name
		};

		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({
			name: e.target.value
		});
	}

	render() {
		return <li><input type="text" value={this.state.name} onChange={this.onChange} /></li>;
	}

}

class KeyDemoComponent extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			items: props.items.concat()
		};

		setTimeout(() => {
			console.log('removing first item');
			this.setState({
				items: this.state.items.slice(1)
			});
		},1000);
	}

	render() {

		return <ul>
			{this.state.items.map(item => <ListItemComponent key={item.id} item={item} />)}
		</ul>;

	}

}

ReactDOM.render(<KeyDemoComponent items={items} />, document.querySelector('main'));


