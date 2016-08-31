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
	}

	addNewWidget(newWidget) {
		this.setState({
			items: this.state.items.concat(newWidget)
		});
	}

	render() {
		return <div>
			<WidgetHeaderComponent headerText={this.props.headerText} />
			<WidgetTableComponent items={this.state.items} />
			<WidgetForm1Component newItem={this.addNewWidget} />
		</div>;
	}

}

const widgets = [
    { name: 'thing-a-ding', color: 'red', size: 'small', quantity: '100', description: 'Yes it is a real'},
    { name: 'whatchamacallit', color: 'orange', size: 'large', quantity: '200', description: 'almost forgot it'},
    { name: 'whoknowswhat', color: 'blue', size: 'medium', quantity: '450', description: 'not me'},
    { name: 'yoo-hoo', color: 'pink', size: 'small', quantity: '50', description: 'not yahoo, but yoo-hoo'}

];

ReactDOM.render(<WidgetComponent headerText="Widget Table" items={widgets} />, document.querySelector('main'));





