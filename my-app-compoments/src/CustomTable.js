import React, { Component } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filter from 'react-bootstrap-table2-filter';


class CustomTable extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return ( 
        	<BootstrapTable keyField='id' 
        	data = { this.props.data } 
        	columns = { this.props.columns }
        	striped
      		hover
      		noDataIndication="Table is Empty"
      		pagination={ paginationFactory() }
      		
      		/>

        )
    }

}

export default CustomTable;
