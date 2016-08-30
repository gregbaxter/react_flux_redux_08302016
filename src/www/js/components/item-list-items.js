import React from 'react';

export class ItemListItemsComponent extends React.Component {
	render() {
		return <ul>
			{this.props.items.map((item, index) =>
				<li key={index}>{item}</li>
			)}
		</ul>;
	}
}
