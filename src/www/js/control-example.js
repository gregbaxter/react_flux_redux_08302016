import 'bootstrap-loader';
import '../css/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

class DemoForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			inputTextDemo : '',
			inputNumberDemo : '',
			newName : '',
			newInputTextDemo : ''
		};

		this.onChange = this.onChange.bind(this);
	}


    onChange(e) {
        this.setState({
            [e.target.name]: e.target.type === 'checkbox' 
				? e.target.checked: e.target.multiple 
				? Array.from(e.target.options).filter(option => option.selected).map(option => option.value) 
				: e.target.value
        });
    }

	render() {

		return <form>
			<label htmlFor='inputdemo'>Input:</label>
			<input type='text' name='inputdemo' id='inputdemo' 
				value = {this.state.newInputTextDemo} onChange={this.onChange}/>

			<label htmlFor='newName'>myName:</label> 
			<input type='text' name='newName' id='newName' 
				value = {this.state.newName} onChange={this.onChange}/>

			<label htmlFor="input-text-demo">Input Text Demo</label>
			<input type="text" id="input-text-demo" name="inputTextDemo"
				value={this.state.inputTextDemo} onChange={this.onChange}/>
		
			<label htmlFor="input-number-demo">Input Number Demo</label>
			<input type="number" id="input-number-demo" name="input-number-demo"
				value={this.state.inputNumberDemo} onChange={this.onChange}/>
		
		</form>


	}

}

ReactDOM.render(<DemoForm />, document.querySelector('main'));





