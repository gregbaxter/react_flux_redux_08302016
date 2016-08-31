import React from 'react';

export class ItemListHeaderComponent extends React.Component {
	render() {
		return <h1>{this.props.headerText}</h1>;
	}
}