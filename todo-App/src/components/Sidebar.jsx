import { RxHamburgerMenu, RxWidth } from "react-icons/rx";
import "./Styles/Sidebar.css";
import categories from "./taskpage/categorySample";
import { RiAddBoxLine } from "react-icons/ri";

function Sidebar({ selectedCategory, onSelectedCategory }) {
    const RxHamburgerMenuStyle = {
        cursor: "pointer",
        fontSize: "25px"
    }

    const RiAddBoxLineStyle = {
        fontSize: "20px"
    }

    return (
        <div className="navigation">
            <RxHamburgerMenu style={RxHamburgerMenuStyle} />
            <h2>All lists</h2>
            <p> {categories.length} Categories</p>
            <div className="lists">
                {/* <div className="list today" tabIndex="0" role="button">
                    <div className="date-item-container">
                        <h4>Today</h4>
                        <p>6 items</p>
                    </div>
                    <div className="color-square"></div>
                </div> */}

                {categories.map(category => (
                    <div className={`list ${selectedCategory === category.name ? "active": ""}`} onClick={() => onSelectedCategory(category.name)} 
                     key={category.id}  >
                        <div className="date-item-container">
                            <h4> {category.name} </h4>
                            <p> {category.count} </p>
                        </div>
                        <div className={ `color-square ${category.color}`} ></div>
                    </div>
                ))}

                <div className="list">
                    <label htmlFor="">Add a new list.. </label>
                    <RiAddBoxLine style={RiAddBoxLineStyle} />
                </div>
            </div>
        </div>
    )
}


export default Sidebar;