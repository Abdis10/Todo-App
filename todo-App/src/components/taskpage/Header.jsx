import "../Styles/Header.css";
import { RiArrowLeftDoubleFill } from "react-icons/ri";

function Header({title, count, clearSelection}) {
    const RiArrowLeftDoubleFillStyle = {
        fontSize: "25px",
        cursor: "pointer"}

    return (
        <div className="header">
            <RiArrowLeftDoubleFill style={RiArrowLeftDoubleFillStyle} onClick={() => clearSelection()}/>
            <h2> {title} </h2>
            <p> {count} </p>
        </div>
    )

}

export default Header;