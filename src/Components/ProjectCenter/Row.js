import React from 'react';  
import './Row.css'

const Row = (props) => {  
    return (  
      <tr className='tableData'>  
        <td>{props.employee.ProjectID}</td>  
        <td>{props.employee.ProjectName}</td>  
        <td>{props.employee.TypeofService}</td>  
        <td>{props.employee.ProjectLead}</td>  
        <td>{props.employee.Tool}</td>  
        <td>{props.employee.PlannedLaunchDate}</td>  
        <td>{props.employee.Status}</td>  
        <td>{props.employee.RequestType}</td>  
        <td>{props.employee.CPE}</td>  
        <td>{props.employee.Complexity}</td>  
      </tr>  
    );  
};

export default Row

