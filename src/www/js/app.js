import React from 'react';
import ReactDOM from 'react-dom';


class WidgetTable extends React.Component {



    constructor(props) {
        super(props);

        this.state = {
            items: props.items.concat(),
            newName : '',
            newColor: '',
            newSize: '',
            newQty: ''
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
        // mutate the array and add my new item
        this.setState ({
            items: this.state.items.concat( {name: this.state.newName,
                color: this.state.newColor, size: this.state.newSize, quantity: this.state.newQty}),
            newName : '',
            newColor: '',
            newSize: '',
            newQty: ''
        });
    }

    render() {
        return <div>
        <h1>{this.props.headerText}</h1>
            <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Color</th> 
                        <th>Size</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
            <tbody>
                {this.state.items.map((item, index) => 
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

            <form>
            <fieldset>
                <legend>New Widget</legend>
                <p><label htmlFor='newName'>Name:</label> 
                <input type='text' name='newName' id='newName' 
                value = {this.state.newName} onChange={this.onChange}/></p>

                <p><label htmlFor='newColor'>Color:</label> 
                <input type='text' name='newColor' id='newColor' 
                value = {this.state.newColor} onChange={this.onChange}/></p>

                <p><label htmlFor='newSize'>Size:</label> 
                <input type='text' name='newSize' id='newSize' 
                value = {this.state.newSize} onChange={this.onChange}/></p>

                <p><label htmlFor='newQty'>Quantity:</label> 
                <input type='text' name='newQty' id='newQty' 
                value = {this.state.newQty} onChange={this.onChange}/></p>

                <button type='button' onClick={this.onClick}>Add New Widget</button>
            </fieldset>
            </form>


        </div>
    }
}

class ItemList extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            newColor : '',
            items: props.items.concat()
        };

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });

    }

    onClick(e) {
        // mutate the array and add my new item
        this.setState ({
            items: this.state.items.concat(this.state.newColor),
            newColor: ''

        });
    }

    render() {

   
return <div>
            <h1>{this.props.headerText}</h1>
            <ul>
                {this.props.items.map((item, index) => 
                    <li key={index}>{item}</li>
                )}
            </ul>
        <div>
            <form>
                <label htmlFor='newColor'>New color:</label> 
                <input type='text' name='newColor' id='newColor' 
                value = {this.state.newColor} onChange={this.onChange}/>
                <button type='button' onClick={this.onClick}>Add Color</button>
            </form>
        </div>
    </div>
    }
}

const colors = [ 'red', 'white', 'gold', 'green', 'saffron', 'blue'];

//  ReactDOM.render(<ItemList headerText='Gregs List of National Colors' items={colors}/>, document.querySelector('main'));

const widgets = [
    { name: 'thing-a-ding', color: 'red', size: 'small', quantity: '100'},
    { name: 'whatchamacallit', color: 'orange', size: 'large', quantity: '200'},
    { name: 'whoknowswhat', color: 'blue', size: 'medium', quantity: '450'},
    { name: 'yoo-hoo', color: 'pink', size: 'small', quantity: '50'}

];

ReactDOM.render(<WidgetTable headerText='Widget Table' items={widgets}/>, document.querySelector('main'));





