import React from 'react';
import ReactDOM from 'react-dom';

class BaseForm extends React.Component {

	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {

		this.setState({
			[e.target.name]: e.target.type === 'checkbox'
				? e.target.checked : e.target.multiple
					? Array.from(e.target.options).filter(option => option.selected).map(option => option.value) 
					: e.target.value
		});
	}	

}

class DemoForm extends BaseForm {

	constructor(props) {
		super(props);

		this.state = {
			inputTextDemo: '',
			inputNumberDemo: 0,
			inputEmailDemo: '',
			inputDateDemo: '2016-08-31',
			inputSliderDemo: 50,
			inputCheckboxDemo: false,
			inputRadioDemo: 'OPTION-TWO',
			inputDropDownDemo: 'second',
			inputListBoxDemo: 'second',
			inputMultiSelectListBoxDemo: ['first','third']
		};
	}

	render() {

		return <form>

			<div>
				<label htmlFor="input-text-demo">Input Text Demo</label>
				<input type="text" id="input-text-demo" name="inputTextDemo"
					value={this.state.inputTextDemo} onChange={this.onChange} />
			</div>

			<div>
				<label htmlFor="input-number-demo">Input Number Demo</label>
				<input type="number" id="input-number-demo" name="inputNumberDemo"
					value={this.state.inputNumberDemo} onChange={this.onChange} />
			</div>

			<div>
				<label htmlFor="input-email-demo">Input Email Demo</label>
				<input type="email" id="input-email-demo" name="inputEmailDemo"
					value={this.state.inputEmailDemo} onChange={this.onChange} />
			</div>

			<div>
				<label htmlFor="input-date-demo">Input Date Demo</label>
				<input type="date" id="input-date-demo" name="inputDateDemo"
					value={this.state.inputDateDemo} onChange={this.onChange} />
			</div>

			<div>
				<label htmlFor="input-slider-demo">Input Slider Demo</label>
				<input type="range" id="input-slider-demo" name="inputSliderDemo"
					value={this.state.inputSliderDemo} onChange={this.onChange} />
				<br />Input Range Demo: {this.state.inputSliderDemo}
			</div>

			<div>
				<label htmlFor="input-checkbox-demo">Input Checkbox Demo</label>
				<input type="checkbox" id="input-checkbox-demo" name="inputCheckboxDemo"
					value={this.state.inputCheckboxDemo} onChange={this.onChange} />
				<br />Input Checkbox Demo: {this.state.inputCheckboxDemo ? 'true' : 'false'}
			</div>

			<fieldset>
				<legend>Options</legend>

				<div>
					<label htmlFor="input-radio-demo-option-1">Input Radio Demo - Option 1</label>
					<input type="radio" id="input-radio-demo-option-1" name="inputRadioDemo"
						value="OPTION-ONE"
						checked={this.state.inputRadioDemo === 'OPTION-ONE'} onChange={this.onChange} />
				</div>

				<div>
					<label htmlFor="input-checkbox-demo-option-2">Input Radio Demo - Option 2</label>
					<input type="radio" id="input-checkbox-demo" name="inputRadioDemo"
						value="OPTION-TWO"
						checked={this.state.inputRadioDemo === 'OPTION-TWO'} onChange={this.onChange} />
				</div>

				Input Radio Demo: {this.state.inputRadioDemo}

			</fieldset>

			<div>
				<label htmlFor="input-dropdown-demo">Input Drop Demo</label>
				<select name='inputDropDownDemo' id='input-dropdown-demo'
					value={this.state.inputDropDownDemo} onChange={this.onChange}>
					<option value='first'>First</option>
					<option value='second'>Second</option>
					<option value='third'>Third</option>
				</select>
				<br />Input DropDown Demo: {this.state.inputDropDownDemo}
			</div>			

			<div>
				<label htmlFor="input-listbox-demo">Input List Box Demo</label>
				<select name='inputListBoxDemo' id='input-listbox-demo' size="5"
					value={this.state.inputListBoxDemo} onChange={this.onChange}>
					<option value='first'>First</option>
					<option value='second'>Second</option>
					<option value='third'>Third</option>
				</select>
				<br />Input List Box Demo: {this.state.inputListBoxDemo}
			</div>			

			<div>
				<label htmlFor="input-multiselectlistbox-demo">Input MultiSelect List Box Demo</label>
				<select name='inputMultiSelectListBoxDemo' id='input-multiselectlistbox-demo' size="5"
					value={this.state.inputMultiSelectListBoxDemo} onChange={this.onChange} multiple>
					<option value='first'>First</option>
					<option value='second'>Second</option>
					<option value='third'>Third</option>
				</select>
				<br />Input Multi Select List Box Demo: {this.state.inputMultiSelectListBoxDemo.join(',')}
			</div>	

			<div>
				<label htmlFor="input-textarea-demo">Input Textarea</label>
				<textarea id="input-textarea-demo" name="inputTextAreaDemo"
					value={this.state.inputTextAreaDemo} onChange={this.onChange}></textarea>
			</div>	


		</form>;

	}

}

ReactDOM.render(<DemoForm />, document.querySelector('main'));
