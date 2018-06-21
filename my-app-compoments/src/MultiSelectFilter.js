import React, { Component } from 'react';

import Multiselect from 'react-select';
import 'react-select/dist/react-select.css';

class MultiSelectFilter extends Component {

	constructor(props) {
		super(props);

		this.filter = this.filter.bind(this);
    	this.isFiltered = this.isFiltered.bind(this);
	}

	filter(event) {

	}

	isFiltered() {

	}

	render() {
		return (

			<div> 
				<Multiselect />
			</div>

		)
	}
}

export default MultiSelectFilter;
