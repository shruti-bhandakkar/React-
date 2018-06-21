import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Multiselect from 'react-select';
import 'react-select/dist/react-select.css';
import CustomTable from './CustomTable';
import CustomTableOne from './CustomTableOne';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange (value) {
    console.log('You\'ve selected:', value);
    this.setState({ value });
  }

  componentDidMount() {

  }

  render() {

    const options = [
        { id: "1", label: 'Chocolate', value: 'chocolate' },
        { id: "2", label: 'Vanilla', value: 'vanilla' },
        { id: "3", label: 'Strawberry', value: 'strawberry' },
        { id: "4", label: 'Caramel', value: 'caramel' },
        { id: "5",label: 'Cookies and Cream', value: 'cookiescream' },
        { id: "6", label: 'Peppermint', value: 'peppermint' },
        { id: "7", label: 'Chocolate', value: 'chocolate' },
        { id: "8", label: 'Vanilla', value: 'vanilla' },
        { id: "9", label: 'Strawberry', value: 'strawberry' },
        { id: "10", label: 'Caramel', value: 'caramel' },
        { id: "11",label: 'Cookies and Cream', value: 'cookiescream' },
        { id: "12", label: 'Peppermint', value: 'peppermint' },
    ];

    const columns = [{
            dataField: 'label',
            text: 'Label',
            sort: true
        }, 
        {
            dataField: 'id',
            text: 'ID',
            sort: true
        },
        {
            dataField: 'value',
            text: 'Value',
            sort: true
        }];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <p> Multiselect </p>
        
        <div>

        <Multiselect closeOnSelect={false}
          disabled={false}
          multi
          onChange={this.handleSelectChange}
          options={options}
          placeholder="Select your favourite(s)"
          removeSelected={true}
          rtl={false}
          simpleValue
          value={this.state.value}/>
          </div>


          <p> Data Table 1 </p>

          <div>
          <CustomTableOne data = {options} columns = {columns} />
          </div>

      </div>
    );
  }
}

export default App;
