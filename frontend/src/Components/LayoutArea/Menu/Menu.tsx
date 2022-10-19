import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<NavLink to="/donations/list">Donations</NavLink>
            <span> | </span>
            <NavLink to="/donation/new/0">New Donation</NavLink>
        </div>
    );
}

export default Menu;

