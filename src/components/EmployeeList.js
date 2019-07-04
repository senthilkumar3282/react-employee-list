import React, {Component} from 'react'
import axios from 'axios';
import '../styles/employee-panel.scss';

class EmployeeList extends Component {
	
	constructor(props) {
		super(props);
		// State will apply to the posts object which is set to loading by default
		this.state = {
			isLoading: true,
			employeesInit: [],
			employees: [],
			searchString: '',
			errors: null,
		}

		// This binding is necessary to make `this` work in the callback
		this.handleChange = this.handleChange.bind(this);
		
	}
	
	handleChange(e){
	
		this.setState({ 
		  employees: this.state.employeesInit,
		  searchString:e.target.value
		});
	
	}
    
	// Now we're going to make a request for data using axios
	getEmplyee() {
		axios
		// This is where the data is hosted
		.get("employee-data.json")
		// Once we get a response and store data, let's change the loading state
		.then(response => {
		this.setState({
			  employeesInit: response.data.employees,	
			  employees: response.data.employees,
			  isLoading: false
			});

		})
		// If we catch any errors connecting, let's update accordingly
		.catch(error => { console.log('error:'+error); this.setState({ errors:error, isLoading: true }) });
	} 
   // Let's our app know we're ready to render the data
    componentDidMount() {
		this.getEmplyee();
	}
	
	render() {
		return (	
			<div className="section container">
				<div className="row section-header">Employee List</div>
				<div className="row section-body">
					<input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />
					<table className="table employee-panel">
						<thead>
						  <tr>
							<th>Full Name</th>
							<th>DOB</th>
							<th>Role</th>
							<th>Photo</th>
						  </tr>
						</thead>
						<tbody>
						
						</tbody>
					</table>
				
				</div>
			</div>
		);
		
	}
}
    
export default EmployeeList;