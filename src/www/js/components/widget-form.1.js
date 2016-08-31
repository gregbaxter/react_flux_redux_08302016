import React from 'react';

export class WidgetForm1Component extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newName : '',
            newColor: 'Red',
            newSize: 'small',
            newQty: '',
            newDescription : ''
        };

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

	onChange(e) {

		this.setState({
			[e.target.name]: e.target.type === 'checkbox'
				? e.target.checked : e.target.multiple
					? Array.from(e.target.options).filter(option => option.selected).map(option => option.value) 
					: e.target.value
		});
	}

	onClick() {
        if (!this.state.newName) {
            return;
        }

		this.props.newItem(
            { key: -1,
              name: this.state.newName, 
              color: this.state.newColor, 
              size: this.state.newSize, 
              quantity: this.state.newQty,
              description: this.state.newDescription
             });
		this.setState({
            newName : '',
            newColor : 'Red',
            newSize : 'small',
            newQty : '',
            newDescription : ''
		});
	}

	render() {
       return <form className="container">
        <div className="form-group">
            <legend>Add A New Widget</legend>

            <div>
                <label htmlFor='newName'>Name</label> 
                    <input type='text' name='newName' id='newName' required 
                    value = {this.state.newName} onChange={this.onChange}/>    
            </div>

            <div>
                <label htmlFor="newColor">Color:</label>
				<select name='newColor' id='newColor'
					value={this.state.newColor} onChange={this.onChange}>
					<option value='Red'>Red</option>
					<option value='Green'>Green</option>
					<option value='Blue'>Blue</option>
                    <option value='Orange'>Orange</option>
				</select>
            </div>

            <fieldset>
                <legend>Size</legend>
				<div>
					<label htmlFor="size1">Small</label>
					<input type="radio" id="size1" name="newSize"
						value="small"
						checked={this.state.newSize === 'small'} onChange={this.onChange} />
				</div>
                <div>
					<label htmlFor="size2">Medium</label>
					<input type="radio" id="size2" name="newSize"
						value="med"
						checked={this.state.newSize === 'med'} onChange={this.onChange} />
				</div>
                <div>
					<label htmlFor="size3">Large</label>
					<input type="radio" id="size3" name="newSize"
						value="large"
						checked={this.state.newSize === 'large'} onChange={this.onChange} />
				</div>
            </fieldset>

            
            <div>
                <label htmlFor='newQty'>Quantity:</label> 
                <input type='number' name='newQty' id='newQty' 
                value = {this.state.newQty} onChange={this.onChange}/>
            </div>

            
			<div>
				<label htmlFor="newDescription">Description</label>
				<textarea id="newDescription" name="newDescription"
					value={this.state.newDescription} onChange={this.onChange}></textarea>
			</div>	


            <button onClick={this.onClick}>Add New Widget</button>
              
        </div>

        </form>
	}
}