import React from 'react';

export class WidgetHeaderComponent extends React.Component {
	render() {
		return <h1>{this.props.headerText}</h1>;
	}
}