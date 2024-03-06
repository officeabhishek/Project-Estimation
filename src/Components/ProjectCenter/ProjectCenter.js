import { useState } from 'react';
import Row from './Row';
import './ProjectCenter.css'

const Employees = [  
    { ProjectID: '964126261', ProjectName: 'Tech', TypeofService: 'Digital', ProjectLead : 'Sharath ', Tool : 30, PlannedLaunchDate : '30/02/2024', Status  : 'Active', RequestType : 30, CPE  : 30, Complexity  : 'Low' },  
    { ProjectID: '063656261', ProjectName: 'Tech', TypeofService: 'Live', ProjectLead : 'Joy', Tool : 30, PlannedLaunchDate : '01/03/2024', Status  : 'Active', RequestType : 30, CPE  : 30, Complexity  : "Hard" },  
    { ProjectID: '563126361', ProjectName: 'Tech', TypeofService: 'Digital', ProjectLead : 'Kasturika', Tool : 30, PlannedLaunchDate : '30/03/2024', Status  : 'Active', RequestType : 30, CPE  : 30, Complexity  : 'Hard' },  
    { ProjectID: '133126261', ProjectName: 'Tech', TypeofService: 'Live', ProjectLead : 'Abhishek', Tool : 30, PlannedLaunchDate : '10/03/2024', Status  : 'Active', RequestType : 30, CPE  : 30, Complexity  : 'Low' },  
    { ProjectID: '426312646', ProjectName: 'Tech', TypeofService: 'Live', ProjectLead : 'Vignesh', Tool : 30, PlannedLaunchDate : '12/03/2024', Status  : 'Inactive', RequestType : 30, CPE  : 30, Complexity  : 'Hard' },  
    { ProjectID: '361232629', ProjectName: 'Tech', TypeofService: 'Digital', ProjectLead : 'Kasturika', Tool : 30, PlannedLaunchDate : '15/03/2024', Status  : 'Active', RequestType : 30, CPE  : 30, Complexity  : 'Medium' },  
    { ProjectID: '863236869', ProjectName: 'Tech', TypeofService: 'Live', ProjectLead : 'Sharath', Tool : 30, PlannedLaunchDate : '18/03/2024', Status  : 'Inactive', RequestType : 30, CPE  : 30, Complexity  : 'Hard' },  
    { ProjectID: '121272220', ProjectName: 'Tech', TypeofService: 'Live', ProjectLead : 'Joy', Tool : 30, PlannedLaunchDate : '22/03/2024', Status  : 'Inactive', RequestType : 30, CPE  : 30, Complexity  : 'Medium' },  
    { ProjectID: '862232321', ProjectName: 'Tech', TypeofService: 'Digital', ProjectLead : 'Joy', Tool : 30, PlannedLaunchDate : '25/03/2024', Status  : 'Inactive', RequestType : 30, CPE  : 30, Complexity  : 'Low' },  
  ];  

const ProjectCenter = () => {
    const [employees, setEmployees] = useState(Employees);  

    const handleProjectNameChange = (event) => {  
        if (event.target.value === '') {  
            setEmployees(Employees);  
        } else {  
        const searchData = Employees.filter((emp) => {  
            return emp.ProjectName === event.target.value;  
        });  
        setEmployees(searchData);  
        }  
    };  

    const handleServiceTypeChange = (event) => {  
        if (event.target.value === '') {  
            setEmployees(Employees);  
        } else {  
        const searchData = Employees.filter((emp) => {  
            return emp.TypeofService === event.target.value;  
        });  
        setEmployees(searchData);  
        } 
    }; 
    
    const handleToolChange = (event) => {  
        if (event.target.value === '') {  
            setEmployees(Employees);  
        } else {  
        const searchData = Employees.filter((emp) => {  
            return emp.Tool === event.target.value;  
        });  
        setEmployees(searchData);  
        } 
    }; 

    const handleStatusChange = (event) => {  
        if (event.target.value === '') {  
            setEmployees(Employees);  
        } else {  
        const searchData = Employees.filter((emp) => {  
            return emp.Status === event.target.value;  
        });  
        setEmployees(searchData);  
        } 
    }; 
  
    const handleInputChange = (event) => {  
        const searchText = event.target.value.toLowerCase();  
        const searchData = Employees.filter((emp) => {  
        return emp.ProjectID.toLowerCase().indexOf(searchText) > -1;  
        });  
        setEmployees(searchData);  
    };  

    const rows = employees.map((emp) => <Row employee={emp} />);  
  
    return (  
        <div className='formsss'>              
            <div className='form-group'>  
                <input  
                    className='ProjectSearch'  
                    placeholder='Search Project'  
                    onChange={handleInputChange}  
                />  
            </div>  
            <h1 className='ProjectTitle'>Project Center</h1>  
            <table className='table table-striped table-hover table-bordered table-hoved w tableData'>  
                <thead className='tableHeader'>  
                    <tr>  
                        <th>Project ID</th>  
                        <th>Project Name
                            <div className='form-group'>  
                                <select className='form-control' onChange={handleProjectNameChange}>  
                                    <option value='dropdown-options'>Project Name</option>  
                                    <option value='Tech'>Tech</option>  
                                    <option value='Mech'>Mech</option>  
                                    <option value='Prod'>Prod</option>  
                                </select>  
                            </div>  
                        </th>  
                        <th>Type of Service
                        <div className='form-group'>  
                            <select className='form-control' onChange={handleServiceTypeChange}>  
                                <option value=''>Type of Service</option>  
                                <option value='Digital'>Digital</option>  
                                <option value='Live'>Live</option>   
                            </select>  
                        </div>
                        </th>  
                        <th>Project Lead </th>  
                        <th>Tool
                            <div className='form-group'>  
                                <select className='form-control' onChange={handleToolChange}>  
                                    <option value=''>Tool</option>  
                                    <option value='Digital'>Digital</option>  
                                    <option value='Live'>Live</option>   
                                </select>  
                            </div> 
                        </th>  
                        <th>Planned launch date</th>  
                        <th>Status
                            <div className='form-group'>  
                                <select className='form-control' onChange={handleStatusChange}>  
                                    <option value=''>Status</option>  
                                    <option value='Active'>Active</option>  
                                    <option value='Inactive'>Inactive</option>   
                                </select>  
                            </div>
                        </th>  
                        <th>Request Type</th>  
                        <th>CPE</th>
                        <th>Complexity </th>  
                    </tr>  
                </thead>  
                <tbody className='tabeeBody'>{rows}</tbody>  
            </table>  
        </div>          
    );  
} 

export default ProjectCenter