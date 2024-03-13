import { useState } from "react";
import "./Allocate.css"

const Allocate = ()=>{
  const [solution, setSolution] = useState('');
  const [requirements] = useState([
    { value: 'Development', label: 'Fresh Development' },
    { value: 'Refresher', label: 'Refresher' },
    { value: 'Content', label: 'Content Updates' },
    { value: 'Other', label: 'Other' }
  ]);

  const handleSolutionChange = (e) => {
    const selectedSolution = e.target.value;
    setSolution(selectedSolution);
  };

  const getFilteredRequirements = () => {
    if (solution === 'Live') {
      return [
        { value: 'Development', label: 'Fresh Development' },
        { value: 'Refresher', label: 'Refresher' }
      ];
    } else if (solution === 'digital') {
      return [
        { value: 'Refresher', label: 'Refresher' },
        { value: 'Content', label: 'Content Updates' }
      ];
    } else {
      return requirements;
    }
  };


    return (
      <div className="main">
        <h1 className="form-title">Allocation Information form</h1>
        <form action="" className="main-form">
          <label for="first">Project Title</label>
          <input type="text" id="title" name="title" placeholder="Enter your Project Title" required />

          <label for="last">Description</label>
          <input type="text" id="description" name="description" placeholder="Enter Description" required />

          <label for="last">Learning objectives</label>
          <input type="text" id="objectives" name="objectives" placeholder="Learning Objective" required />

          <label for="last">Duration (in hours)​</label>
          <input type="text" id="duration" name="duration" placeholder="Enter Duration" required />

          <label for="dob">Planned launch date</label>
          <input type="date" id="dob" name="dob" placeholder="Enter your PLD" required />



          <label htmlFor="solution">Type of solution</label>
          <select id="solution" name="solution" required onChange={handleSolutionChange}>
            <option value="">Select Solution</option>
            <option value="Live">Live</option>
            <option value="digital">Digital</option>
            <option value="curation">Curation</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="requirement">Nature of requirement</label>
          <select id="requirement" name="requirement" required>
            <option value="">Select Requirement</option>
            {getFilteredRequirements().map((requirement) => (
              <option key={requirement.value} value={requirement.value}>{requirement.label}</option>
            ))}
          </select>



          <label for="CPE">CPE eligibility​​</label>
          <select id="CPE" name="CPE" required>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <label for="Geographies">Targeted Geographies​​</label>
          <select id="geographies" name="geographies" required>
            <option value="US only">US Only</option>
            <option value="All ACs">All ACs</option>
            <option value="Select ACs">Select ACs(Please Specify)</option>
          </select>
          <label for="translation">Translation requirements​</label>
          <select id="translation" name="translation" required>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <div className="wrap">
            <button type="submit" onclick="solve()">
              Submit for Approval
            </button>
          </div>
        </form>
    </div>
    )
}

export default Allocate