import "./Estimate.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

// import CardDemo from "./Card/Card";

const Estimate = () =>{
    const [showEstimate, setShowEstimate] = useState(false);
    const navigate = useNavigate();

    const onSubmit = ()=> {
        if(showEstimate){
            setShowEstimate(false)
        }else{
            setShowEstimate(true)
        }
    }

    return  (
        <div className="Estimate">
            <div className="Estimate-left">
                <form>
                    <h2>Tell us about your project</h2>
                    <fieldset class="material">
                        <input type="text" placeholder="" autocomplete="off" required />
                        <hr />
                        <label>Types of Service</label>
                    </fieldset>
                    <fieldset class="material">
                        <input type="text" placeholder="" autocomplete="off" required />
                        <hr />
                        <label>Complexity</label>
                    </fieldset>
                    <fieldset class="material">
                        <input type="text" placeholder="" autocomplete="off" required />
                        <hr />
                        <label>Task type</label>
                    </fieldset>
                    <fieldset class="material">
                        <input type="text" placeholder="" autocomplete="off" required />
                        <hr />
                        <label>Tool</label>
                    </fieldset>
                    <fieldset class="material">
                        <input type="text" placeholder="" autocomplete="off" required />
                        <hr />
                        <label>Duration</label>
                    </fieldset>
                    <button href="#" class="button transparent" onClick={onSubmit}>Estimate</button>
                </form>
            </div>
            {showEstimate ? (
                <div className="Estimate-right">Click to estimate</div>
            ):(
                <main class="main flow">
                    <h1 class="main__heading">Title</h1>
                    <div class="cards__card card">
                            <h2 class="card__heading">Total Estimated time</h2>
                            <p class="card__price">10.4 Hrs</p>
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