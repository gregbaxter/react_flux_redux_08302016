import 'bootstrap-loader';
import '../css/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { ItemListHeaderComponent } from './components/item-list-header';
import { ItemListItemsComponent } from './components/item-list-items';
import { ItemListFormComponent } from './components/item-list-form';

class ItemListComponent extends React.Component {

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
		}, function() {
			console.log(this);
			console.log('state was set...');

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

ReactDOM.render(<ItemListComponent headerText="Natonal Colors" items={colors} />, document.querySelector('main'));


