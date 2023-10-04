import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12 bg-red-300 p-2" to="/">I can be a React component, multiple React components.....</Link>
                <Link className="mr-12 bg-orange-300 p-2" to="/">I can be a React component, multiple React components.....</Link>
                <Link className="mr-12 bg-amber-200 p-2" to="/">I can be a React component, multiple React components.....</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;