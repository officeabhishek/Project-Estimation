/* eslint-disable jsx-a11y/no-redundant-roles */
import "./Estimate.css"
import { useState} from "react"
import { useNavigate } from "react-router-dom"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// import CardDemo from "./Card/Card";

const Estimate = () =>{
    const [showEstimate, setShowEstimate] = useState(true);
    const navigate = useNavigate();

    const [serviceType, setServiceType] = useState('');
    const [compexity, setComplexity] = useState('');
    const [taskType, setTaskType] = useState('');
    const [tool, setTool] = useState('');
    const [duration, setDuration] = useState('');
    const [allFieldsFilled, setAllFieldsFilled] = useState(false);

    const handleChangeServiceType = (event) => {
        setServiceType(event.target.value);
    };
    const handleChangeComplexity = (event) => {
        setComplexity(event.target.value);
    };
    const handleChangeTaskType = (event) => {
        setTaskType(event.target.value);
    };
    const handleChangeTool = (event) => {
        setTool(event.target.value);
    };
    const handleChangeDuration = (event) => {
        setDuration(event.target.value);
    };

    // Function to handle form submission
    const onSubmit = (event) => {
        event.preventDefault();
        if (serviceType && compexity && taskType && tool && duration) {
            setShowEstimate(false);
            setAllFieldsFilled(true)
        } else {
            setShowEstimate(true);
            setAllFieldsFilled(false)
        }
        if (allFieldsFilled) {
            // Submit the form
            console.log("Form submitted");
        } else {
            setTimeout(() => {
                console.log("Reset error message");
            }, 3000);
        }
    };


    

    return  (
        <div className="Estimate">
            <form className="Estimate-left">
                <p className="Estimate-left-title">Register </p>
                <p className="Estimate-left-message">Tell us about your project</p>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label" >Types of Service</InputLabel>
                    <Select 
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={serviceType}
                        onChange={handleChangeServiceType}
                        label="Types of Service"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label" >Complexity</InputLabel>
                    <Select 
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={compexity}
                        onChange={handleChangeComplexity}
                        label="Complexity"
                        >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label" >Task type</InputLabel>
                    <Select 
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={taskType}
                        onChange={handleChangeTaskType}
                        label="Task type"
                        >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label" >Tool</InputLabel>
                    <Select 
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={tool}
                        onChange={handleChangeTool}
                        label="Tool"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>  
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label" >Duration</InputLabel>
                    <Select 
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={duration}
                        onChange={handleChangeDuration}
                        label="Duration"
                        >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>          
                <button className="Estimate-left-submit" onClick={(event)=>onSubmit(event)}>Submit</button>
                {!allFieldsFilled && <p className="error-message">Please fill in all fields</p>}
            </form>
            {showEstimate ? (
                <div className="Estimate-right">Click to estimate</div>
            ):(
                <main className="main flow">
                    <h1 className="main__heading">Title</h1>
                    <div className="cards__card card">
                            <h2 className="card__heading">Total Estimated time</h2>
                            <p className="card__price">10.4 Hrs</p>
                            <ul role="list" class="card__bullets flow">
                                <li>Other wanted Information if any</li>
                                <li>Other wanted Information if any</li>
                                <li>Other wanted Information if any</li>
                                <li>Other wanted Information if any</li>
                            </ul>
                            <a href="#ultimate" class="card__cta cta" onClick={() => navigate("/identify")}>Search Resources</a>
                    </div>        
                </main>    
            ) 
            }
        </div>
    )
}

export default Estimate