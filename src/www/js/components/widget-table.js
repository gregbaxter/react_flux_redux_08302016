import React from 'react';


export class WidgetTableComponent extends React.Component {

    render() {
        return <div>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Color</th> 
                    <th>Size</th>
                    <th>Quantity</th>
                </tr>
            </thead>
        <tbody>
            {this.props.items.map((item, index) => 
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.color}</td>
                    <td>{item.size}</td>
                    <td>{item.quantity}</td>
                </tr>
            )}
        </tbody>
        </table>
        </div>
    }
}