import React from 'react';

const WidgetItemComponent = (props) => {

	const deleteItem = () => {
		props.onDelete(props.item.key);
	};

	return <tr key={props.item.key}>
                <td>{props.item.name}</td>
                <td>{props.item.color}</td>
                <td>{props.item.size}</td>
                <td>{props.item.quantity}</td>
                <td>{props.item.description}</td>
                <td><button onClick={deleteItem}>delete</button></td>
            </tr>
}

WidgetItemComponent.propTypes = {
	item: React.PropTypes.object.isRequired
};

export class WidgetTableComponent extends React.Component {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(key) {
		this.props.deleteItem(key);
    }

    render() {
        return <div>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Color</th> 
                    <th>Size</th>
                    <th>Quantity</th>
                    <th>Description</th>
                </tr>
            </thead>
        <tbody>
            {this.props.items.map((item, index) => 
                <WidgetItemComponent key={item.key} item={item} onDelete={this.onDelete} />
            )}
        </tbody>
        </table>
        </div>
    }
}