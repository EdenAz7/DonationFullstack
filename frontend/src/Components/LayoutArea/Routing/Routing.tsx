import { Routes, Route } from "react-router-dom";
import About from "../../Pages/About/About";
import DonationList from "../../Pages/DonationList/DonationList";
import DonationNew from "../../Pages/DonationNew/DonationNew";
import Home from "../../Pages/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/donations/list" element={<DonationList/>}/>
                <Route path="/donation/new/:id" element={<DonationNew/>}/>
                
                <Route path="/about" element={<About/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </div>
    );
}

export default Routing;

//  