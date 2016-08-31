import 'bootstrap-loader';
import '../css/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { WidgetHeaderComponent } from './components/widget-header';
import { WidgetTableComponent } from './components/widget-table';
import { WidgetForm1Component } from './components/widget-form.1';

class WidgetComponent extends React.Component {
    constructor(props) {
        super(props);

		this.state = {
			items: props.items.concat()
		};

		this.addNewWidget = this.addNewWidget.bind(this);
		this.deleteWidget = this.deleteWidget.bind(this);
	}

	addNewWidget(newWidget) {
		let newKey = 0;
		const itemsLength = this.state.items.length;
		if (itemsLength > 0) {
			newKey = this.state.items[itemsLength-1].key + 1;
		}
		newWidget.key = newKey;
		this.setState({
			items: this.state.items.concat(newWidget)
		});
	}

	deleteWidget(itemId) {
		let itemIndex = null;
		this.state.items.find(function(value, index) {
			if (value.key === itemId) {
				itemIndex = index;
				return true;
			}
		});

		this.setState({
			item: this.state.items.splice(itemIndex, 1)
		})
	}

	render() {
		return <div>
			<WidgetHeaderComponent headerText={this.props.headerText} />
			<WidgetTableComponent items={this.state.items} deleteItem={this.deleteWidget} />
			<WidgetForm1Component newItem={this.addNewWidget} />
		</div>;
	}
}

const widgets = [
    { key: 0, name: 'thing-a-ding', color: 'red', size: 'small', quantity: '100', description: 'Yes it is a real'},
    { key: 1, name: 'whatchamacallit', color: 'orange', size: 'large', quantity: '200', description: 'almost forgot it'},
    { key: 2, name: 'whoknowswhat', color: 'blue', size: 'medium', quantity: '450', description: 'not me'},
    { key: 3, name: 'yoo-hoo', color: 'pink', size: 'small', quantity: '50', description: 'not yahoo, but yoo-hoo'}

];

ReactDOM.render(<WidgetComponent headerText="Widget Table" items={widgets} />, document.querySelector('main'));





