import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


class CustomTableOne extends Component {

    constructor(props) {
        super(props);

       	
    }

    render() {

        return ( 
        	<BootstrapTable 
        	data = { this.props.data } 
        	striped
      		hover
      		pagination
      		search
      		>

      		<TableHeaderColumn dataField='id' isKey dataSort>Product ID</TableHeaderColumn>
        	<TableHeaderColumn dataField='label' dataSort>Label</TableHeaderColumn>
        	<TableHeaderColumn dataField='value' dataSort>Value</TableHeaderColumn>
      
      </BootstrapTable>

        )
    }

}

export default CustomTableOne;