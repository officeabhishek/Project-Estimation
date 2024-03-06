import QuickLinks from "../QuickLinks/QuickLinks"
import "../HomePage/HomePage.css"
import { useNavigate } from "react-router-dom"

const HomePage = () =>{
    const navigate = useNavigate();

    return (
        <div className="Homepage">
            <div className="Homepage-main">
                <div className="Homepage_optionsMain">
                    <div className="Homepage_options">
                        <div className="options" onClick={() => navigate("/estimate")}>
                            <p className="options-title">Estimate</p>
                        </div>
                        <div className="options" onClick={() => navigate("/identify")}>
                            <p className="options-title">Identify</p>
                        </div>
                        <div className="options" onClick={() => navigate("/allocate")}>
                            <p className="options-title">Allocate</p>
                        </div>
                    </div>
                    <div className="Homepage-options2">
                        <div className="options" onClick={() => navigate("/reportCenter")}>
                            <p className="options-title">Report Center</p>
                        </div>
                        <div className="options" onClick={() => navigate("/projectCenter")}>
                            <p className="options-title">Project Center</p>
                        </div>
                    </div>
                </div>
                <QuickLinks />
            </div>
        </div> 
    )
}

export default HomePage