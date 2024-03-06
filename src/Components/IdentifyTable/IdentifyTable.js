import React from 'react';  
import Table from './Table/Table'; 
  
const IdentifyTable = () => {  
  const data = [  
    { id: 181382673, name: 'Smitha Kujur Agarwal', designation: 'Senior Associate 2',  team: 'CS&C',  experience: '2.7' ,  hoursavailable: '73' ,  totalskills: '2' , ps1: 'Yes' , profiency1: '2' , ps2: 'Yes', profiency2: '2' , ps3: 'No', profiency3: ''},
    { id: 131382674, name: 'Samyukth Dani', designation: 'Senior Associate 1',  team: 'CS&C',  experience: '2.1' ,  hoursavailable: '83' ,  totalskills: '2' , ps1: 'No' , profiency1: '' , ps2: 'Yes', profiency2: '2' , ps3: 'Yes', profiency3: '3'}, 
    { id: 101662675, name: 'Paromita Das', designation: 'Senior Associate 1',  team: 'Learner Support',  experience: '1.7' ,  hoursavailable: '77' ,  totalskills: '2' , ps1: 'Yes' , profiency1: '2' , ps2: 'Yes', profiency2: '2' , ps3: 'Yes', profiency3: '4'}, 
    { id: 101782676, name: 'Jeya Kiruba', designation: 'Senior Associate 1',  team: 'M&A T&R',  experience: '1.9' ,  hoursavailable: '71' ,  totalskills: '2' , ps1: 'No' , profiency1: '' , ps2: 'No', profiency2: '' , ps3: 'No', profiency3: ''}, 
    { id: 171682677, name: 'Md Asadullah', designation: 'Senior Associate 2',  team: 'Live D&D',  experience: '1.9' ,  hoursavailable: '65' ,  totalskills: '2' , ps1: 'Yes' , profiency1: '2' , ps2: 'Yes', profiency2: '2' , ps3: 'Yes', profiency3: '3'}, 
    { id: 141382678, name: 'Vikas Tiwari', designation: 'Senior Associate 1',  team: 'CS&C',  experience: '3.7' ,  hoursavailable: '52' ,  totalskills: '2' , ps1: 'Yes' , profiency1: '2' , ps2: 'Yes', profiency2: '2' , ps3: 'No', profiency3: ''}, 
    { id: 121382679, name: 'Rapeti Pranay Kumar', designation: 'Manager 1',  team: 'M&A T&R',  experience: '1.2' ,  hoursavailable: '64' ,  totalskills: '2' , ps1: 'Yes' , profiency1: '3' , ps2: 'No', profiency2: '' , ps3: 'Yes', profiency3: '3'}, 
    { id: 111382676, name: 'Madhusudhan BS', designation: 'Senior Associate 1',  team: 'Learner Support',  experience: '2.2' ,  hoursavailable: '45' ,  totalskills: '2' , ps1: 'Yes' , profiency1: '1' , ps2: 'Yes', profiency2: '3' , ps3: 'No', profiency3: ''}, 
    { id: 371382477, name: 'Karishma Aswani', designation: 'Senior Associate 2',  team: 'CS&C',  experience: '2.4' ,  hoursavailable: '43' ,  totalskills: '2' , ps1: 'Yes' , profiency1: '2' , ps2: 'Yes', profiency2: '2' , ps3: 'No', profiency3: ''},
    { id: 981382474, name: 'Arpita Balakrishna Naik', designation: 'Senior Associate 2',  team: 'M&A T&R',  experience: '2.8' ,  hoursavailable: '63' ,  totalskills: '2' , ps1: 'Yes' , profiency1: '2' , ps2: 'Yes', profiency2: '2' , ps3: 'No', profiency3: ''},   
    { id: 191382474, name: 'Geetha C K', designation: 'Senior Associate 2',  team: 'M&A T&R',  experience: '1.1' ,  hoursavailable: '88' ,  totalskills: '2' , ps1: 'Yes' , profiency1: '3' , ps2: 'No', profiency2: '' , ps3: 'No', profiency3: ''},   
    { id: 172382474, name: 'Udit Verma', designation: 'Manager 1',  team: 'Learner Support',  experience: '1.3' ,  hoursavailable: '54' ,  totalskills: '2' , ps1: 'Yes' , profiency1: '2' , ps2: 'Yes', profiency2: '2' , ps3: 'No', profiency3: ''},
    { id: 171482594, name: 'Srinath Attravanam', designation: 'Senior Associate 2',  team: 'Learner Support',  experience: '1.2' ,  hoursavailable: '52' ,  totalskills: '2' , ps1: 'No' , profiency1: '' , ps2: 'Yes', profiency2: '2' , ps3: 'No', profiency3: ''},   
    { id: 171682474, name: 'Anuj Thosar', designation: 'Manager 1',  team: 'CS&C',  experience: '2.7' ,  hoursavailable: '48' ,  totalskills: '2' , ps1: 'Yes' , profiency1: '2' , ps2: 'Yes', profiency2: '2' , ps3: 'No', profiency3: ''},   
    { id: 571992474, name: 'Murugan Jayavelu', designation: 'Senior Associate 2',  team: 'M&A T&R',  experience: '2.0' ,  hoursavailable: '76' ,  totalskills: '2' , ps1: 'Yes' , profiency1: '3' , ps2: 'No', profiency2: '2' , ps3: 'No', profiency3: ''},   
    { id: 471372474, name: 'Ravi Mathan', designation: 'Manager 1',  team: 'LI&T',  experience: '1.7' ,  hoursavailable: '55' ,  totalskills: '2' , ps1: 'Yes' , profiency1: '2' , ps2: 'Yes', profiency2: '2' , ps3: 'No', profiency3: ''},   
    { id: 671352474, name: 'Vishwanathan Srinivasan', designation: 'Senior Associate 1',  team: 'Live D&D',  experience: '2.9' ,  hoursavailable: '44' ,  totalskills: '2' , ps1: 'No' , profiency1: '' , ps2: 'Yes', profiency2: '3' , ps3: 'Yes', profiency3: '3'},
    { id: 971332444, name: 'Seema Nayak', designation: 'Senior Associate 2',  team: 'LI&T',  experience: '2.3' ,  hoursavailable: '23' ,  totalskills: '2' , ps1: 'Yes' , profiency1: '2' , ps2: 'Yes', profiency2: '2' , ps3: 'No', profiency3: ''},   
    { id: 171457454, name: 'Rucha Ramkrushna Patil', designation: 'Senior Associate 1',  team: 'M&A T&R',  experience: '1.2' ,  hoursavailable: '48' ,  totalskills: '2' , ps1: 'No' , profiency1: '' , ps2: 'Yes', profiency2: '2' , ps3: 'Yes', profiency3: '2'},     
  ];  
  
  return (  
    <div>  
      <Table data={data} />  
    </div>  
  );  
};  
  
export default IdentifyTable;  
