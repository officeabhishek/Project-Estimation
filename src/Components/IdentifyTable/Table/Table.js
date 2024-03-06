import React, { useState } from 'react';  
import './Table.css'
  
const Table = ({ data }) => {   
  const [searchTerm, setSearchTerm] = useState('');  
  const [filteredData, setFilteredData] = useState(data);  
  const [sortOrder, setSortOrder] = useState('asc');  
  const [selectedRows, setSelectedRows] = useState([]);  
  const [filters, setFilters] = useState({});  
  
  const handleSearch = (e) => {  
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);  
    if(term === ''){
      setFilteredData(data); 
    } else {
      const filtered = data.filter((item) =>  
        item.name.toLowerCase().includes(term)  
      ); 
      setFilteredData(filtered);  
    }
  };
  
  const handleSort = () => {  
    const sorted = [...data].sort((a, b) => {  
      if (sortOrder === 'asc') {  
        return a.name.localeCompare(b.name);  
      } else {  
        return b.name.localeCompare(a.name);  
      }  
    });  
    setFilteredData(sorted);  
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');  
  };  
  
  const handleReset = () => {  
    setSearchTerm('');  
    setFilteredData(data);  
    setSortOrder('asc');  
    setSelectedRows([]);  
    setFilters({});  
  };  
  
  const handleSelectRow = (id) => {  
    if (selectedRows.includes(id)) {  
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));  
    } else {  
      setSelectedRows([...selectedRows, id]);  
    }  
  };  
  
  const handleFilterChange = (e) => {  
    const { name, value } = e.target;  
    setFilters((prevFilters) => ({  
      ...prevFilters,  
      [name]: value,  
    }));  
  };  
  
  const applyFilters = () => {  
    let filtered = data;  
  
    for (const key in filters) {  
      if (filters[key]) {  
        filtered = filtered.filter((item) => {  
          const itemValue = item[key];  
          if (typeof itemValue === 'string') {  
            return itemValue.toLowerCase().includes(filters[key].toLowerCase());  
          }  
          return false;  
        });  
      }  
    }  
    setFilteredData(filtered);  
  };  
  
  const handleSubmit = () => {  
    console.log('Selected Rows:', selectedRows);  
  };
  
  return (  
    <div className='table'> 
      <div className='table-searchSort'>
        <input  
            type="text"  
            placeholder="Search..."  
            value={searchTerm}  
            onChange={handleSearch}  
            className='table-searchBox'
        />  
      </div> 
      <div className='table-priorityBox'>  
        <label className='table-priorityBox_label'>Priority Skill 1</label>  
        <input  
          type="text"  
          name="ps1"  
          value={filters.ps1 || ''}  
          onChange={handleFilterChange}  
          className='table-priorityBox_input'
        />  
        <label className='table-priorityBox_label'>Priority Skill 2</label>  
        <input  
          type="text"  
          name="ps2"  
          value={filters.ps2 || ''}  
          onChange={handleFilterChange}
          className='table-priorityBox_input'  
        />  
        <label className='table-priorityBox_label'>Priority Skill 3</label>  
        <input  
          type="text"  
          name="ps3"  
          value={filters.ps3 || ''}  
          onChange={handleFilterChange}  
          className='table-priorityBox_input'
        />  
        <button onClick={applyFilters} className='table_buttons'>Apply Filters</button>  
        <button onClick={handleReset} className='table_buttons'>Reset</button>
        <button onClick={handleSort} className='table_buttons'>Sort</button>  
      </div>  
      <table className='mainTable'>  
        <thead className='mainTable_header'>  
          <tr>  
            <th>Select</th>  
            <th>Employee ID</th>  
            <th>Name</th>  
            <th>Designation</th>  
            <th>Exp in PwC (Years)</th>
            <th>Team</th>  
            <th>Hours availability in the next 30 days</th>  
            <th>Total Skills matched</th>  
            <th>Priority Skill 1 Match</th> 
            <th>Skill 1 Proficiency</th>  
            <th>Priority Skill 2 Match</th> 
            <th>Skill 2 Proficiency</th>  
            <th>Priority Skill 3 Match</th> 
            <th>Skill 3 Proficiency</th>   
          </tr>  
        </thead>  
        <tbody className='mainTable_body'>  
          {filteredData.map((item) => (  
            <tr key={item.id}>  
              <td>  
                <input  
                  type="checkbox"  
                  checked={selectedRows.includes(item.id)}  
                  onChange={() => handleSelectRow(item.id)}  
                />  
              </td>  
              <td>{item.id}</td>  
              <td>{item.name}</td>  
              <td>{item.designation}</td>  
              <td>{item.team}</td>  
              <td>{item.experience}</td>  
              <td>{item.hoursavailable}</td>  
              <td>{item.totalskills}</td>  
              <td>{item.ps1}</td>  
              <td>{item.profiency1}</td>  
              <td>{item.ps2}</td>  
              <td>{item.profiency2}</td>  
              <td>{item.ps3}</td>
              <td>{item.profiency3}</td>  
            </tr>  
          ))}  
        </tbody>  
      </table>  
      {selectedRows.length > 0 && (  
        <button onClick={handleSubmit} className='table_buttons'>Submit</button>  
      )} 
    </div>  
  );  
};  
  
export default Table;  
