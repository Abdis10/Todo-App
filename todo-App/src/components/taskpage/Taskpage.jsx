import Header from "./Header";
import "../Styles/Taskpage.css";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { RiAddBoxLine } from "react-icons/ri";



function Taskpage({ selectedCategory, clearSelection }) {
    const RiAddBoxLineStyle = {
        fontSize: "20px"
    }
    return (
        <div className="task-page">
            <Header title={selectedCategory || "Pick a category"}  count="1 of 6 items" clearSelection={clearSelection} />
            
            <div className="tasks">
                <div className="top">
                    <label className="left">Add a new list.. </label>
                    <RiAddBoxLine className="right" style={RiAddBoxLineStyle} />
                </div>
                <div className="left">
                        <h2>Careers advice appointment</h2>
                        <p>17/10 at 11:00-11:30</p>
                        <span>Work</span> 
                        <span>Important</span>
                </div>
                <div className="right">
                    <button></button>
                </div>
            </div>
        </div>
        
        
        
    )

}

export default Taskpage;