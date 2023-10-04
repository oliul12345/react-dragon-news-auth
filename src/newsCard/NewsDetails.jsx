import { useParams } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Navbar from "../pages/Shared/Navbar/Navbar";
import RightSideNav from "../pages/Shared/RightSideNav/RightSideNav";


const NewsDetails = () => {


    const {id} = useParams();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-3 border">
                <div className="col-span-2">
                    {id}
                </div>
                <div className="col-span-1 border">
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default NewsDetails;