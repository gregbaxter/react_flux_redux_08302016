import React from 'react';

export class WidgetForm1Component extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newName : '',
            newColor: '',
            newSize: '',
            newQty: '',
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
		this.props.newItem({name: this.state.newName, color: this.state.newColor, size: this.state.newSize, quantity: this.state.newQty});
		this.setState({
            newName : '',
            newColor: '',
            newSize: '',
            newQty: ''
		});
	}

	render() {
       return <div className="container"><form>
        <div className="form-group row">
            <legend>Add A New Widget</legend>
            <label htmlFor='newName'>Name:</label> 
                <input type='text' name='newName' id='newName' 
                value = {this.state.newName} onChange={this.onChange}/>

            <label htmlFor='newColor'>Color:</label> 
            <input type='text' name='newColor' id='newColor' 
            value = {this.state.newColor} onChange={this.onChange}/>

            <label htmlFor='newSize'>Size:</label> 
            <input type='text' name='newSize' id='newSize' 
            value = {this.state.newSize} onChange={this.onChange}/>

            <label htmlFor='newQty'>Quantity:</label> 
            <input type='text' name='newQty' id='newQty' 
            value = {this.state.newQty} onChange={this.onChange}/>

            <button type='button' onClick={this.onClick}>Add New Widget</button>
        </div>
        </form></div>
	}
}