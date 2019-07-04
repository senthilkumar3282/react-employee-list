import React, {Component} from 'react'
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
	
	var updatedList = this.state.employeesInit;
	updatedList = updatedList.filter(employee => {
			return employee.fullName.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
			});
	
	this.setState({ 
	  employees: updatedList,
	  searchString:e.target.value
	});
	
    
  }
	
	// Now we're going to make a request for data using fetch
  getEmplyee() {
      
	fetch("employee-data.json")
	.then((response) => {
	  if (response.ok) {
		return response.json();
	  } else {
		throw new Error(response.statusText);
	  }
	})
	.then(response => {
		
		this.setState({
		  employeesInit: response.data.employees,	
		  employees: response.data.employees,
		  isLoading: false
		});
	})
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
					{!this.state.isLoading ? (
							this.state.employees.map(employee => {

							  const { id, fullName, DOB, role, photo } = employee;
							  return (
								<tr className="employee" key={id}>
									<td>{fullName}</td>
									<td>{DOB}</td>
									<td>{role}</td>
									<td><img src={photo} width="100" height="100" /></td>
								</tr>
							  );
							})
						
					  ) : (
						<tr className="employee"><td>Loading...</td></tr>
					)}
				  
				</tbody>
			  </table>
			</div>
		  </div>
		);
		
	}
}
    
export default EmployeeList;